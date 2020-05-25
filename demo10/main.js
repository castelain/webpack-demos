require.ensure(['./a'], function (require) {
  const content = require('./a');
  document.open();
  document.write(`<h1>${content}</h1>`);
  document.close();
});

document.write('<p>Hello molly!</p>')