# Luciano's Library. Node 22.23 or newer; CI uses Node 24.
TODAY := $(shell date +%F)
GLYPHS := pages ticket table hash gem scroll spark message sprout crown target siren bonfire pen wrench knight brick dice cart lock book

.PHONY: install dev build preview check local run new-book new-chapter

install: ## Install dependencies
	npm ci

dev: ## Dev server at http://localhost:4321, new passages highlighted (search needs a build)
	npx astro dev

build: ## Production build, then the search index
	npx astro build
	npx pagefind --site dist

preview: build ## Serve the production build, search included
	npx astro preview

check: ## Everything CI runs: typecheck, voice lint, build, structural checks
	npx astro check
	node scripts/voice-lint.mjs
	$(MAKE) build
	node scripts/check-site.mjs

local: install dev ## The old `make local`: install, then serve

run: dev ## The old `make run`

new-book: ## make new-book slug=my-book title="My Book" shelf=tools hue=200 glyph=book
	@test -n "$(slug)" -a -n "$(title)" -a -n "$(shelf)" -a -n "$(hue)" -a -n "$(glyph)" || { echo 'usage: make new-book slug=my-book title="My Book" shelf=tools|people|career|theories|life|odds hue=0-360 glyph=one of: $(GLYPHS)'; exit 1; }
	@test ! -e src/content/pages/$(slug).md || { echo "src/content/pages/$(slug).md already exists"; exit 1; }
	@sed -e 's|BOOK_TITLE|$(title)|' -e 's|SHELF|$(shelf)|' -e 's|HUE|$(hue)|' -e 's|GLYPH|$(glyph)|' -e 's|TODAY|$(TODAY)|g' templates/book.md > src/content/pages/$(slug).md
	@echo "created src/content/pages/$(slug).md"

new-chapter: ## make new-chapter book=my-book chapter=1 title="Chapter Title"
	@test -n "$(book)" -a -n "$(chapter)" -a -n "$(title)" || { echo 'usage: make new-chapter book=my-book chapter=1 title="Chapter Title"'; exit 1; }
	@test -e src/content/pages/$(book).md || { echo "no book src/content/pages/$(book).md"; exit 1; }
	@test ! -e src/content/pages/$(book)-chapter-$(chapter).md || { echo "src/content/pages/$(book)-chapter-$(chapter).md already exists"; exit 1; }
	@sed -e 's|CHAPTER_TITLE|$(title)|' -e 's|BOOK_SLUG|$(book)|' -e 's|CHAPTER_NUMBER|$(chapter)|' -e 's|TODAY|$(TODAY)|g' templates/chapter.md > src/content/pages/$(book)-chapter-$(chapter).md
	@echo "created src/content/pages/$(book)-chapter-$(chapter).md"
