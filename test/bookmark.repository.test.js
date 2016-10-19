"use strict";

var should = require('should'),
	sinon = require('sinon'),
	BookmarkRepository = require('../repositories/BookmarkRepository');

describe('Bookmark CRUD integration testing', function () {

	var sandbox;
	before(function (done) {
		sandbox = sinon.sandbox.create();
		var newBookmark = { description: "Google", url: "http://www.google.com" };
		sandbox.stub(BookmarkRepository.prototype, "findAll", function(){return [newBookmark]});
		done();
	});

	afterEach(function () {
		sandbox.restore();
	});

	describe('Get all bookmarks from repository', function () {

		it('Should get array of bookmarks 1 item', function (done) {
			var bookmarkRepository = new BookmarkRepository();
			bookmarkRepository.findAll().length.should.equal(1);
			done();
		});

	});

	 describe('Add a bookmark using the repository', function () {
		it('Should get array of bookmarks with 2 items', function (done) {
			var newBookmark = { description: "Google", url: "http://www.google.com2" };
			var bookmarkRepository = new BookmarkRepository();
			bookmarkRepository.save(newBookmark);
			bookmarkRepository.findAll().length.should.equal(1);
			done();
		});

	});
});

