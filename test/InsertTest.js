var insert = require('../Insert.js');

var insertStr = '\naddPath.push([\'/book\', \'get\',book.show$]);\n' +
'addPath.push([\'/book/:id\', \'delete\',book.del]);\n' +
'addPath.push([\'/book\', \'post\',book.create]);\n' +
'addPath.push([\'/book/:id\', \'put\',book.edit]);\n';

insert.file('../pattern.js', insertStr)
      .head()
      .show();
