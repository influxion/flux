#!/usr/bin/env node
const pkgJSON = require('./package.json');
const welcome = require('cli-welcome');

welcome({
  title: pkgJSON.name,
  tagLine: `Howdy, nice to meet ya!`,
  description: pkgJSON.description,
  version: pkgJSON.version,
  bgColor: `#FADC00`,
  color: `#000000`,
  bold: true,
  clear: true,
});

console.log(`
Jordon Nichols

Full-Stack Engineer focused on web based applications built with cutting edge security and the newest tech. Also working on cryptography and blockchain solutions on the web.

Working with: TypeScript, Go, PHP, React, Angular, Node.js, GraphQL, Firebase, MySQL, MongoDB and many more!

💡 LinkedIn: https://www.linkedin.com/in/jordon-nichols/
📖 Github:   https://github.com/influxion

`);
