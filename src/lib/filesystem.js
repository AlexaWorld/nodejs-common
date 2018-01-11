var fs = require('fs');
var path = require('path');

const readFile = function (file, filePath) {
	var full = path.join(filePath, file);
	return fs.readFileSync(full, 'utf8');
}
module.exports.readFile = readFile;

module.exports.readJsonFile = function (file, folder) {
	var content = JSON.parse(readFile(file, folder));
	return content;
}

const pathExists = function (...args) {
	var folder = path.join.apply(null, args);
	try {
		return fs.statSync(folder).isDirectory();
	} catch (error) {
		return false;
	}
}
module.exports.pathExists = pathExists;

module.exports.getFirstExistingPath = function (...args) {
	let result = null;
	for (let folderIndex = 0; folderIndex < folders.length; folderIndex++) {
		const folder = folders[folderIndex];
		if (pathExists(folder))
			result = folder;
		if (result) break;
	}
	return result;
}

module.exports.getFirstExistingFile = function (files, folders) {
	let result = null;

	for (let folderIndex = 0; folderIndex < folders.length; folderIndex++) {
		const folder = folders[folderIndex];

		for (let fileIndex = 0; fileIndex < files.length; fileIndex++) {
			const file = files[fileIndex];

			if (fileExists(file, folder)) {
				result = {
					file: file,
					folder: folder
				};
			}
			if (result) break;
		}
		if (result) break;
	}

	return result;
}

module.exports.join = function (...args) {
	return path.join.apply(null, args);
}

const fileExists = function (file, folder) {
	if (folder)
		file = path.join(folder, file);
	try {
		return fs.statSync(file).isFile();
	} catch (error) {
		return false;
	}
}

module.exports.fileExists = fileExists;
