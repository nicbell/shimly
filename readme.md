#shimly [![dependency Status](https://david-dm.org/nicbell/shimly/status.png)](https://david-dm.org/nicbell/shimly#info=dependencies) [![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

Create a JavaScript shim set using node.

###List of shims:
- **Array.every** (`Array.prototype.every()` - [MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/every))
- **Array.filter** (`Array.prototype.filter()` - [MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/filter))
- **Array.forEach** (`Array.prototype.forEach()` - [MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach))
- **Array.indexOf** (`Array.prototype.indexOf()` - [MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf))
- **Array.map** (`Array.prototype.map()` - [MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf))
- **Array.some** (`Array.prototype.some()` - [MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some))
- **Element.classList** (`Element.classList` - [Eli Grey's classList.js](https://github.com/eligrey/classList.js))
- **Function.bind** (`Function.prototype.bind()` -[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind))
- **Object.assign** (`Object.assign()` - [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign))
- **JSON** (`JSON.stringify()` and `JSON.parse()` - [Douglas Crockford's JSON 2](https://github.com/douglascrockford/JSON-js))
- **localStorage** (`Window.localStorage` and `Window.sessionStorage` polyfill via cookies - [Remy Sharp's Gist](https://gist.github.com/remy/350433))
- **requestAnimationFrame** (`Window.requestAnimationFrame()` polyfill [Paul Irish's Gist](https://gist.github.com/paulirish/1579671))
- **EventListener** (EventListener polyfill – [Jonathan Neal](https://github.com/jonathantneal/EventListener))
- **Document.getElementsByClassName** (getElementsByClassName polyfill – [SitePoint](http://www.sitepoint.com/5-useful-functions-missing-in-javascript/))

###Install:

```bash
$ npm install shimly
```

###API:
```js
shimly(shims, minify, destination);
```

###Usage:

```js
// ...
    var shimly = require('shimly')
 
	shimly(['Array.every', 'Array.forEach'], false, 'shims.js');
// ...
```