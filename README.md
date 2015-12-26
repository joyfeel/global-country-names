global-country-names
===

Usage:
```
	jspm init -y
	jspm i global-country-names=github:joyfeel/global-country-names
```

Create a `test.js` file in `public/js` folder and edit it.

```javascript
	import * as country from 'global-country-names';

	console.log(country.all());
	console.log(country.random());
```
Create a `public/dest` folder and build it out!

```
jspm bundle-sfx public/js/test.js public/dest/build.js --minify
```

### License

MIT
