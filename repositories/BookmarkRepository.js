
function BookmarkRepository() {
    this.bookmarks = [];
}

BookmarkRepository.prototype.find = function (url) {
    var bookmark = this.bookmarks.filter(function(item) {
        return item.url == url;
    })[0];
    if (null === bookmark) {
        throw new Error('bookmark not found');
    }
    return bookmark;
}

BookmarkRepository.prototype.findIndex = function (url) {
    var index = null;
    this.bookmarks.forEach(function(item, key) {
        if (item.url === url) {
            index = key;
        }
    });
    if (null == index) {
        return -1;
    }
    return index;
}

BookmarkRepository.prototype.findAll = function () {
    return this.bookmarks;
}

BookmarkRepository.prototype.save = function (bookmark) {
    if(bookmark.hasOwnProperty('description') && bookmark.hasOwnProperty('url') && Object.keys(bookmark).length === 2 ) {
        var index = this.findIndex(bookmark.url);
        if (index !== -1) {
            this.bookmarks[index] = bookmark;
        } else {
            this.bookmarks.push(bookmark);
        }
    }else{
        throw new Error('Invalid bookmark, a bookmark should only contain a description and url.');
    }
}

BookmarkRepository.prototype.remove = function (url) {
    var index = this.findIndex(url);
    this.bookmarks.splice(index, 1);
}

BookmarkRepository.prototype.removeAll = function () {
    this.bookmarks = [];
}

module.exports = BookmarkRepository;