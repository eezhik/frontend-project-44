
install: install-deps
	npx simple-git-hooks

install-deps:
	npm ci

publish:	
	npm publish --dry-run

lint:
	npx eslint .

brain-even:
	node bin/games/brain-even.js

brain-calc:
	node bin/games/brain-calc.js

brain-gcd:
	node bin/games/brain-gcd.js

brain-progression:
	node bin/games/brain-progression.js

brain-prime:
	node bin/games/brain-prime.js

brain-games:
	node bin/games/brain-games.js