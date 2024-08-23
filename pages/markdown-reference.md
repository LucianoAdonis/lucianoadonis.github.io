# Title

Making this section to have a reference for tricks.

## Section 1

1. [Link to Another Markdown Section](#section-2)
2. <a href="https://youtu.be/dQw4w9WgXcQ?si=PhZ3KjgImSJVEXaL" target="_blank">Open a New Tab</a>

Code:
```
1. [Link to Another Markdown Section](#section-2)
2. <a href="https://youtu.be/dQw4w9WgXcQ?si=PhZ3KjgImSJVEXaL" target="_blank">Open a New Tab</a>
```

## Section 2

## Expandable Blocks

Markdown itself does not natively support expandable or collapsible sections. However, you can use HTML `<details>` and `<summary>` tags to create expandable sections in environments that support HTML within Markdown (e.g., GitHub, GitLab). Note that not all Markdown renderers support this.

**Example:**
- <details>
  <summary>Click to expand</summary>
  <p>This is the content that will be hidden until clicked.</p>
</details>


**Code:**

```markdown
<details>
  <summary>Click to expand</summary>
  <p>This is the content that will be hidden until clicked.</p>
</details>
```

## Import Images

**Examples:**

- **No Format:**
  ![alt image](../images/neptunia-please-wait.png "Title")

- **With Format:**
  <a href="page.html">
    <img src="../images/neptunia-please-wait.png" alt="Example Image" style="border: 2px solid #000; border-radius: 4px; padding: 5px;" />
</a>

**Code:**

```
# No Format:

![alt image](../images/neptunia-please-wait.png "Title")

# With Format:

<a href="page.html">
  <img src="../images/neptunia-please-wait.png" alt="Example Image" style="border: 2px solid #000; border-radius: 4px; padding: 5px;" />
</a>
```



