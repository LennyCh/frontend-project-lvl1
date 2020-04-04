install: install-deps

run:
	npx babel-node 'src/bin/hexlet.js' 10

install-deps:
	npm ci

build:
	rm -rf dist
	npm run build

test:
	npm test

test-coverage:
	npm test -- --coverage

lint:
	npx eslint .
publish:
	npm publish --dry-run

start:
	node src/bin/brain-games.js

brain-even:
	npx babel-node src/brain-even.js

.PHONY: test