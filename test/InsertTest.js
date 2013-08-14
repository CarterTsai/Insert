// References : http://chaijs.com/api/assert/
var chai = require('chai');
var assert = chai.assert;

describe('Test mocha  ',function() {
    var insert = require('../Insert.js'); 
    var insertStr = "";
    var patternText = "// [hack]\n";
    before(function(done) {
        // Create something before testing
        // then using done() to finish
        insertStr = "test"; 
        insert.file('test/pattern.txt', insertStr);
        done();
    });
    
    it('should content same as pattern.txt',function() {
        assert.equal( insert.getRaw() , patternText); 
    });

    it('should add \"test\" string at footer of pattern.txt',function() {
        assert.equal( insert.footer().get() , patternText + insertStr ); 
    });
    
    it('should add \"test\" string at head of pattern.txt',function() {
        assert.equal( insert.head().get() , insertStr + '\n' + patternText ); 
    });
    
    it('should find \"\/\/ hack \" replace with \"test\" string in pattern.txt',function() {
        assert.equal( insert.find("// [hack]").get() , insertStr+'\n'); 
    });

    it('should find \"\/\/ hack \" replace with \"test1\" string in pattern.txt',function() {
        assert.equal( insert.find("// [hack]",'test1').get() , insertStr+'1\n'); 
    });
});
