install: install-deps

brain-even:
	npx node bin/brain-even.js

brain-prime:
	npx node bin/brain-prime.js

brain-gcd:
	npx node bin/brain-gcd.js

brain-calc:
	npx node bin/brain-calc.js

brain-progression:
	npx node bin/brain-progression.js

install-deps:
	npm ci

test:
	npm test

test-coverage:
	npm test -- --coverage

lint:
	npx eslint .

publish:
	npm publish --dry-run

.PHONY: test
