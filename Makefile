local:
	@echo "source "'"https://rubygems.org"'"\ngem "'"github-pages"'", group: :jekyll_plugins" > Gemfile
	@echo "http://127.0.0.1:4000"
	@bundle exec jekyll serve

run:
	@open http://127.0.0.1:4000
	@bundle exec jekyll serve