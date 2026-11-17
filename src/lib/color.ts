/**
 * Book colors, computed rather than picked: each book has one hue in its front
 * matter, and everything else (spine, cover, link accent, both themes) is derived
 * here so every text-on-color pair clears WCAG AA at build time.
 *
 * OKLCH -> linear sRGB uses Björn Ottosson's OKLab matrices.
 */

export type Oklch = { l: number; c: number; h: number };

const toLinearSrgb = ({ l, c, h }: Oklch): [number, number, number] => {
  const a = c * Math.cos((h * Math.PI) / 180);
  const b = c * Math.sin((h * Math.PI) / 180);
  const l_ = (l + 0.3963377774 * a + 0.2158037573 * b) ** 3;
  const m_ = (l - 0.1055613458 * a - 0.0638541728 * b) ** 3;
  const s_ = (l - 0.0894841775 * a - 1.291485548 * b) ** 3;
  return [
    4.0767416621 * l_ - 3.3077115913 * m_ + 0.2309699292 * s_,
    -1.2684380046 * l_ + 2.6097574011 * m_ - 0.3413193965 * s_,
    -0.0041960863 * l_ - 0.7034186147 * m_ + 1.707614701 * s_,
  ];
};

const inGamut = (c: Oklch) => toLinearSrgb(c).every((v) => v >= -1e-4 && v <= 1 + 1e-4);

/** Largest chroma (up to `c`) that stays inside sRGB at this lightness and hue. */
export function fitGamut(color: Oklch): Oklch {
  let { c } = color;
  while (c > 0 && !inGamut({ ...color, c })) c -= 0.002;
  return { ...color, c: Math.max(0, c) };
}

export function luminance(color: Oklch): number {
  const [r, g, b] = toLinearSrgb(fitGamut(color)).map((v) => Math.min(1, Math.max(0, v)));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

export function contrast(a: Oklch, b: Oklch): number {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}

export const css = ({ l, c, h }: Oklch) => `oklch(${(l * 100).toFixed(1)}% ${c.toFixed(3)} ${h.toFixed(0)})`;

// The page itself: cream paperback stock and printing ink, both theme ends.
export const PAPER: Oklch = { l: 0.972, c: 0.013, h: 92 };
export const INK: Oklch = { l: 0.255, c: 0.018, h: 70 };
export const PAPER_DARK: Oklch = { l: 0.205, c: 0.012, h: 70 };
export const INK_DARK: Oklch = { l: 0.925, c: 0.012, h: 90 };

const TARGET = 4.6; // AA for body-size text is 4.5; keep a hair of margin for rounding.
const CHROMA = 0.135;

type Spine = { bg: Oklch; fg: Oklch; mode: 'dark' | 'light' };

function bestSpine(h: number, mode: 'dark' | 'light'): Spine | null {
  const fg = mode === 'dark' ? { l: 0.975, c: 0.012, h } : { l: 0.235, c: 0.035, h };
  // Walk from the most vivid lightness toward the safe end; the first lightness
  // that clears the target is the most colorful spine that still reads.
  const start = mode === 'dark' ? 0.6 : 0.74;
  const step = mode === 'dark' ? -0.005 : 0.005;
  for (let l = start; mode === 'dark' ? l >= 0.28 : l <= 0.93; l += step) {
    const bg = fitGamut({ l, c: CHROMA, h });
    // Spine.astro paints a highlight band (+0.025 lightness) under the title, so
    // light lettering is checked against that brightest stop, not the flat face.
    const under = mode === 'dark' ? fitGamut({ l: l + 0.025, c: CHROMA, h }) : bg;
    if (contrast(bg, fg) >= TARGET && contrast(under, fg) >= TARGET) return { bg, fg, mode };
  }
  return null;
}

export type BookColors = {
  spineBg: string; spineFg: string; spineMode: 'dark' | 'light';
  spineBgDark: string; // a touch deeper on a dark page so spines do not glow
  accent: string; // book color as text on paper
  accentDark: string; // book color as text on the dark page
  tint: string; tintDark: string; // quiet surfaces (callouts) in the book's hue
};

/** Pick dark or light spine per hue by which keeps more chroma (yellows go light). */
export function bookColors(h: number): BookColors {
  const dark = bestSpine(h, 'dark');
  const light = bestSpine(h, 'light');
  const pick = !light || (dark && dark.bg.c >= light.bg.c * 0.92) ? dark! : light;

  const deeper = fitGamut({ ...pick.bg, l: pick.mode === 'dark' ? pick.bg.l - 0.04 : pick.bg.l - 0.1 });

  let accent = fitGamut({ l: 0.5, c: CHROMA, h });
  while (contrast(accent, PAPER) < TARGET && accent.l > 0.2) accent = fitGamut({ ...accent, l: accent.l - 0.01 });
  let accentDark = fitGamut({ l: 0.72, c: 0.11, h });
  while (contrast(accentDark, PAPER_DARK) < TARGET && accentDark.l < 0.95) accentDark = fitGamut({ ...accentDark, l: accentDark.l + 0.01 });

  return {
    spineBg: css(pick.bg), spineFg: css(pick.fg), spineMode: pick.mode,
    spineBgDark: css(deeper),
    accent: css(accent), accentDark: css(accentDark),
    tint: css(fitGamut({ l: 0.94, c: 0.03, h })), tintDark: css(fitGamut({ l: 0.27, c: 0.03, h })),
  };
}

/** Inline custom properties for an element that should take a book's colors. */
export const bookStyle = (h: number) => {
  const k = bookColors(h);
  return [
    `--spine-bg:${k.spineBg}`, `--spine-fg:${k.spineFg}`, `--spine-bg-dark:${k.spineBgDark}`,
    `--accent-light:${k.accent}`, `--accent-dark:${k.accentDark}`,
    `--tint-light:${k.tint}`, `--tint-dark:${k.tintDark}`,
  ].join(';');
};
