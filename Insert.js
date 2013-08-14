var grunt = require('grunt');

var Insert = module.exports = {
    file : function(filePath, newString) {
                var that = this;
                this.data = grunt.file.read(filePath);
                this._data = this.data;
                this.nStr = newString;
                this.replacString = '';
                return this;
           },
    new: function(){
             this._data = this.data;
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
            that._data = that._data.replace(pattern, this.nStr, cb);
        } else {
            that._data = that._data.replace(pattern, this.nStr);
        }    
    } else {
        if (typeof cb == 'function' ) {
            that._data = that._data.replace(pattern, replaceStr, cb);
        } else {
            that._data = that._data.replace(pattern, replaceStr);
        }
    }
    
    that.replaceString = that._data;
    return that;
};

Insert.footer = function(cb) {
    var that = this;
    that._data = that._data + this.nStr;
    that.replaceString = that._data;
    return that;
};

Insert.head = function(newString, cb) {
    var that = this;
    that._data= this.nStr +'\n'+ that._data;
    that.replaceString = that._data;
    return that;
};
