const express = require('express');
const app = express();
const portNumber = 3000;
const sourceDir = 'dist';

app.use(express.static(sourceDir));

app.listen(portNumber, () => {
  (`Express web server started: http://localhost:${portNumber}`);
  (`Serving content from /${sourceDir}/`);
});
