var path = require('path'),
    addPath = [],
    base = require('./base.js'),
    // rest path
    book = require('./book');

    
var routes = module.exports = {
    add : function(pathArray) {

        var path = pathArray[0];
        var method = pathArray[1];
        var route = pathArray[2];

        switch(method) {
            case 'delete':
                this.app.delete(path, route);
                break;
            case 'post':
                this.app.post(path, route);
                break;
            case 'put':
                this.app.put(path, route);
                break; 
            default:
                // get
                this.app.get(path, route);
                break; 
        } 
    },
    run : function(app) {
        this.app = app;
        // route path
        addPath.map(function(data) {
            routes.add(data);
        });
    }
};

// all of routes 
addPath.push(['/', 'get', base]);
addPath.push(['/book', 'get',book.show]);
addPath.push(['/book/:id', 'delete',book.del]);
addPath.push(['/book', 'post',book.create]);
addPath.push(['/book/:id', 'put',book.edit]);
