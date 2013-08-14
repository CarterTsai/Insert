var grunt = require('grunt');

var Insert = module.exports = {
    file : function(filePath, newString) {
                var that = this;
                this.data = grunt.file.read(filePath);
                this.nStr = newString;
                this.replacString = '';
                return this;
           },
    get : function() {
                return this.replaceString;
           },
    getRaw: function() {
                return this.data;
            }
};

Insert.find = function(pattern, replaceStr,cb) {
    var that = this;
    if(typeof replaceStr !== 'string') {
        if (typeof cb == 'function' ) {
            that.replaceString = that.data.replace(pattern, this.nStr, cb);
        } else {
            that.replaceString = that.data.replace(pattern, this.nStr);
        }    
    } else {
        if (typeof cb == 'function' ) {
            that.replaceString = that.data.replace(pattern, replaceStr, cb);
        } else {
            that.replaceString = that.data.replace(pattern, replaceStr);
        }
    }
    return that;
};

Insert.footer = function(cb) {
    var that = this;
    that.replaceString = that.data + this.nStr;
    return that;
};

Insert.head = function(newString, cb) {
    var that = this;
    that.replaceString= this.nStr +'\n'+ that.data;
    return that;
};
