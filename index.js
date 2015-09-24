/*
 * Shimly
 * https://github.com/nicbell/shimly
 */

var uglify = require('uglify-js'),
	fs = require('fs'),
	path = require('path');

module.exports = {
	list: function () {
		var folder = path.normalize(__dirname + '/shims/'),
			fileNames = fs.readdirSync(folder);

		return fileNames.map(function (fileName) {
			return fileName.replace('.js', '');
		});
	},

	shim: function (shim, minify, destination) {
		var banner = '/*! \nIncluded shims: ' + shim + '\n*/\n\n',
			files = [],
			uglified;

		//Convert files into paths.
		for (var i = 0; i < shim.length; i++) {
			files[i] = path.normalize(__dirname + '/shims/' + shim[i] + '.js');
		}

		if (minify) {
			uglified = uglify.minify(files, { output: null, preserveComments: false, compress: {} });
		} else {
			uglified = uglify.minify(files, { output: { comments: true, beautify: true }, compress: null });
		}
	
		//If destination is specified write to file.
		if (destination) {
			var dest = path.resolve(destination),
				destDir = path.dirname(dest);

			if (!fs.existsSync(destDir)) {
				fs.mkdirSync(destDir);
			}
			fs.writeFileSync(dest, banner + uglified.code);
		}

		return banner + uglified.code;
	}
};