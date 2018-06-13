'use strict';

var fs = require('fs')
,	fsExtensions = require('./fs-extensions')
,	path = require('path')
,	_ = require('underscore')
,	archiver = require('archiver');

function pad(num, size, padding) {
	var s = num + '';
	while (s.length < size)
	{
		s = padding + s;
	}
	return s;
}

function getVolumeName(options, target)
{
	var name = target.baseName + target.extension;
	if (options.isMultiVolume)
	{
		name = name + '.' + pad(options.currentVolumeIndex, 3, '0');
	}

	return path.join(target.folder, name);
}


function generateArchive(options, cb)
{
	//defaults
	options.sources = options.sources || [];
	options.target = options.target || 'archive.zip';
	options.archiveType = options.archiveType || 'zip';
	options.isMultiVolume = options.isMultiVolume || false;
	options.currentVolumeIndex = options.currentVolumeIndex || 1;

	var target = fsExtensions.parsePath(options.target);
	fsExtensions.createFolder(target.folder);
	
	var output = fs.createWriteStream(getVolumeName(options, target));
	
	var	archive = archiver(options.archiveType).on('error', function(error) 
	{
		cb(error);
	});
	
	archive.pipe(output);
	
	_.each(options.sources, function(source)
	{
		_.each(source.src, function(src)
		{
			src && archive.glob(src, source);
		});
	});
	
	archive.finalize()
	.then(
		function()
		{
			cb(null);
		}
	,	function(error)
		{
			cb(error);
		}
	);
}

/*
 * Example usage

	generateArchive({
			target: '../folder/me.tar'
		,	isMultiVolume: true
		,	archiveType: 'tar'
		,	maxVolumeLength: 1024 * 1024 * 5
		,	sources: [{expand: true, src: ['C:\\next-gen\\Modules\\**\\*']}]
	}, function(){
		console.log('end callback');
	});

*/
module.exports = generateArchive;
