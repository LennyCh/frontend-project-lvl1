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
	npx babel-node src/games/brain-even.js

brain-calc:
	npx babel-node src/games/brain-calc.js

brain-gcd:
	npx babel-node src/games/brain-gcd.js

brain-progression:
	npx babel-node src/games/brain-progression.js

brain-prime:
	npx babel-node src/games/brain-prime.js

.PHONY: test
