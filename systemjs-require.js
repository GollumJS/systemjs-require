(function(window, System, SystemJS) {
	var modules = {};
	
	window.require = function(key) {
		if (!modules[key]) {
			throw new Error('Module '+key+' not found.');
		}
		return modules[key];
	};
	
	window.require.exist = (key) => {
		return !!modules[key];
	};
	
	var origin   = System.register;
	var originJS = SystemJS.register;
	
	System.register = function(key) {
		origin.apply(System, arguments);
		setTimeout(function() {
			System
				.import(key)
				.then(function(module) {
					modules[key] = module;
				}, console.error.bind(console))
			;
		});
	};
	
	SystemJS.register = function(key) {
		originJS.apply(SystemJS, arguments);
		setTimeout(function() {
			System
				.import(key)
				.then(function (module) {
					modules[key] = module;
				}, console.error.bind(console))
			;
		});
	};
	
})(window, System, SystemJS);
