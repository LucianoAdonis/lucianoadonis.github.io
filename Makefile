local:
	@echo "source "'"https://rubygems.org"'"\ngem "'"github-pages"'", group: :jekyll_plugins" > Gemfile
	@echo "http://127.0.0.1:4000"
	@bundle install --path vendor/bundle
	@bundle exec jekyll serve

run:
	@open http://127.0.0.1:4000
	@bundle exec jekyll serve

# Create a new book: make new-book slug=my-book title="My Book" category=educational
new-book:
	@test -n "$(slug)" || (echo "Usage: make new-book slug=my-book title=\"My Book\" category=educational" && exit 1)
	@test -n "$(title)" || (echo "Usage: make new-book slug=my-book title=\"My Book\" category=educational" && exit 1)
	@test -n "$(category)" || (echo "Usage: make new-book slug=my-book title=\"My Book\" category=educational" && exit 1)
	@sed -e 's/BOOK_TITLE/$(title)/g' -e 's/BOOK_SLUG/$(slug)/g' -e 's/BOOK_CATEGORY/$(category)/g' -e 's/BOOK_DESCRIPTION/A new mini-book/g' -e 's/HEADER_IMAGE/placeholder/g' pages/drafts/_template-book.md > pages/$(slug).md
	@echo "Created pages/$(slug).md"

# Create a new chapter: make new-chapter slug=my-book chapter=1 title="My Book" category=educational desc="Chapter description"
new-chapter:
	@test -n "$(slug)" || (echo "Usage: make new-chapter slug=my-book chapter=1 title=\"My Book\" category=educational desc=\"Chapter desc\"" && exit 1)
	@test -n "$(chapter)" || (echo "Usage: make new-chapter slug=my-book chapter=1 title=\"My Book\" category=educational desc=\"Chapter desc\"" && exit 1)
	@test -n "$(title)" || (echo "Usage: make new-chapter slug=my-book chapter=1 title=\"My Book\" category=educational desc=\"Chapter desc\"" && exit 1)
	@test -n "$(category)" || (echo "Usage: make new-chapter slug=my-book chapter=1 title=\"My Book\" category=educational desc=\"Chapter desc\"" && exit 1)
	@sed -e 's/BOOK_TITLE/$(title)/g' -e 's/BOOK_SLUG/$(slug)/g' -e 's/CHAPTER_NUMBER/$(chapter)/g' -e 's/BOOK_CATEGORY/$(category)/g' -e 's/CHAPTER_DESCRIPTION/$(or $(desc),New chapter)/g' pages/drafts/_template-chapter.md > pages/$(slug)-chapter-$(chapter).md
	@echo "Created pages/$(slug)-chapter-$(chapter).md"