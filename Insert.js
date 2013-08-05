var grunt = require('grunt');
/*
var replaceBuf = grunt.file.read('pattern.js');

var pattern = /\/\/ rest path/i;
var patternStr = '// rest path\n';
var replaceStr = patternStr +
                 '    test = require(\'test\'),';
var pp = replaceBuf.replace(pattern, replaceStr);

var pathStr = '\naddPath.push([\'/book\', \'get\',book.show]);\n' +
'addPath.push([\'/book/:id\', \'delete\',book.del]);\n' +
'addPath.push([\'/book\', \'post\',book.create]);\n' +
'addPath.push([\'/book/:id\', \'put\',book.edit]);\n';

console.log(pp + pathStr);
*/
var Insert = module.exports = {
    file : function(filePath, newString) {
                var that = this;
                this.data = grunt.file.read(filePath);
                this.nStr = newString;
                this.replacString = '';
                return this;
           },
    show : function() {
             console.log(this.replaceString);
           }
};

Insert.find = function(pattern, cb) {
    var that = this;
    if (typeof cb == 'function' ) {
        that.replaceString = that.data.replace(pattern, this.nStr, cb);
    } else {
        that.replaceString = that.data.replace(pattern, this.nStr);
    }
    return that;
};

Insert.head = function(cb) {
    var that = this;
    that.replaceString = that.data +'\n'+ this.nStr;
    return that;
};

Insert.footer = function(newString, cb) {
    var that = this;
    that.replaceString= this.nStr +'\n'+ that.data;
    return that;
};

/*
 *  Insert.file(file_path, NStr)
 *        .find(pattern, cb)
 *        .head(cb)
 *        .footer(cb);
*/



