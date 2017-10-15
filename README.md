# SystemJS Require

Add function require like nodejs for SystemJS


## Install
```
npm install systemjs-require
```

## Use

```javascript
const MyClass = require('my-class-path');

if (require.exist('my-class-path')) {
	// instruction
}

```
