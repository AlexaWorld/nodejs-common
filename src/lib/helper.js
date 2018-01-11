const mergeProperties = function (target, source) {
	for (var p in source) {
		try {
			if (source[p].constructor == Object)
				target[p] = mergeProperties(target[p], source[p]);
			else
				target[p] = source[p];
		} catch (e) {
			target[p] = source[p];
		}
	}
	return target;
}

module.exports.MergeProperties = mergeProperties; 