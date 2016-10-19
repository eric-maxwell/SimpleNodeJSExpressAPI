"use strict";

var should = require('should'),
	request = require('supertest'),
    agent = request.agent("http://localhost:3000");


describe('Bookmark API integration testing', function () {

    before(function (done) {
        var newBookmark = { description: "Google", url: "http://www.google.com" };
        agent
            .post('/api/v1/bookmarks/removeAll')
            .send().auth('user1', 'password1');

        agent
            .post('/api/v1/bookmarks')
            .send(newBookmark).auth('user1', 'password1')
            .end(function(){
                done();
            });
    });

    after(function(done){
        agent
            .post('/api/v1/bookmarks/removeAll')
            .send().auth('user1', 'password1')
            .end(function(){
                done();
            });
    });

	describe('Get all bookmark', function () {

		it('Should get array of bookmarks 1 item', function (done) {
			agent
			.get('/api/v1/bookmarks')
			.expect(200)
			.end(function(err, results){
				results.body.length.should.equal(1);
				done();
			});
		});

	});

    describe('Add a bookmarks', function () {
        it('Should get array of bookmarks with 2 items', function (done) {
            var newBookmark = { description: "Google", url: "http://www.google.com2" };
            agent
                .post('/api/v1/bookmarks')
                .send(newBookmark).auth('user1', 'password1')
                .expect(200)
                .end(function(err, results){
                    results.body.length.should.equal(2);
                    results.body[1].url.should.equal('http://www.google.com2');
                    done();
                });
        });

    });
});

