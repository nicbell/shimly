/*
   Array map patch
   ========================================================================== */

if (!('map' in Array.prototype)) {
	Array.prototype.map = function (fn, scope) {
		var length = this.length >>> 0, results = Array(length);
		for (var i = 0; i < length; i++) {
			if (i in this) {
				results[i] = fn.call(scope, this[i], i, this);
			}
		}
		return results;
	};
}