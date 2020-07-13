install: install-deps

brain-even:
	npx node src/bin/brain-even.js

brain-prime:
	npx node src/bin/brain-prime.js

brain-gcd:
	npx node src/bin/brain-gcd.js

brain-calc:
	npx node src/bin/brain-calc.js

brain-progression:
	npx node src/bin/brain-progression.js

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
