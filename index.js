#!/usr/bin/env node
import welcome from 'cli-welcome';
import chalk from 'chalk';

import pkgJSON from './package.json' assert { type: 'json' };
import techStr from './techs.js';

const log = console.log;
const dim = chalk.dim;
const italic = chalk.italic;
const titleWhite = chalk.bold.whiteBright;
const linkedinClr = chalk.hex(`#0077b5`).bold.inverse;
const githubClr = chalk.hex(`#6cc644`).bold.inverse;

welcome({
  title: `Jordon Nichols`,
  tagLine: `Howdy, nice to meet ya!`,
  description: pkgJSON.description,
  version: pkgJSON.version,
  bgColor: `#6937FF`,
  color: `#000000`,
  bold: true,
  clear: true,
});

log(`
${italic(
  `Focused on building well-architected, secure, and innovative systems for all.`
)}


${titleWhite(`Working with techs like...`)}

${techStr}


${titleWhite.underline(`   SOCIALS   `)}

💡 ${linkedinClr(` LinkedIn `)}: ${dim(
  `https://www.linkedin.com/in/jordon-nichols/`
)}
📖 ${githubClr(` Github `)}:   ${dim(`https://github.com/influxion`)}
`);
