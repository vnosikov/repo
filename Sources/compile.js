var fs   = require('fs');
var jade = require('jade');

// Parameters
var templatesFolder = './views';
var outputFile = '../Scripts/templates.js';
var templateExpr = new RegExp('^' + templatesFolder + '\/(.*)\.jade$');
var outputVariable = 'window.templates';

var tplName;
var files;
var result;
var functionName = 'anonymizeThisTemplateName';
var output = outputVariable + ' = {};';
var newLine = '\n';

// Function used to explore the folder
var walk = function(dir) {
  'use strict';
  var stat;
  var path;
  var files = fs.readdirSync(dir);
  var results = [];

  for (var i = 0; i < files.length; ++i) {
    // Ignore hidden folders
    if (/^\./.test(files[i])) { continue; }

    // Solve the full path
    path = [dir, files[i]].join('/');

    stat = fs.statSync(path);
    if (stat.isDirectory()) {
      // Recursion
      results = results.concat(walk(path));
    } else {
      results.push(path);
    }
  }

  return results;
};

// Initialize dictionary (and the output file)
fs.writeFileSync(outputFile, output);
fs.appendFileSync(outputFile, newLine);

files = walk(templatesFolder);

// Scan folder
for (var i = 0; i < files.length; ++i) {
  result = templateExpr.exec(files[i]);
  if (result === null) {
    continue; // compile only valid templates
  }

  tplName = result[1];

  // Compile the template to a function string
  output = jade.compileFileClient(files[i], {name: functionName});

  // Anonymize the generated function
  output = output.replace('function ' + functionName, 'function');

  output = [outputVariable, '[\'', tplName, '\'] = ', output, ';'].join('');

  // Write compiled template
  fs.appendFileSync(outputFile, output);
  fs.appendFileSync(outputFile, newLine);
}
