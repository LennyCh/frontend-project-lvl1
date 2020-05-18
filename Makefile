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

brain-even:
	npx node src/bin/brain-even.js

brain-calc:
	npx node src/bin/brain-calc.js

brain-gcd:
	npx node src/bin/brain-gcd.js

brain-progression:
	npx node src/bin/brain-progression.js

brain-prime:
	npx node src/bin/brain-prime.js

.PHONY: test
