#!/usr/bin/env node
import chalk from 'chalk';
import alert from 'influxed-alerts';

import init from './utils/init.js';
import techs from './utils/techs.js';

const log = console.log;
const dim = chalk.dim;
const italic = chalk.italic;
const titleWhite = chalk.bold.whiteBright;
const linkedinClr = chalk.hex(`#0077b5`).bold.inverse;
const githubClr = chalk.hex(`#6cc644`).bold.inverse;

(async () => {
  init();

  log(`${italic(
    `Focused on building well-architected, secure, and innovative systems for all.`
  )}
  
  ${titleWhite(`Working with techs like...`)}
  
  ${techs}
  
  ${titleWhite.underline(`   SOCIALS   `)}
  
  💡 ${linkedinClr(` LinkedIn `)}: ${dim(
    `https://www.linkedin.com/in/jordon-nichols/`
  )}
  📖 ${githubClr(` Github `)}:   ${dim(`https://github.com/influxion`)}
  `);
  alert({
    type: 'info',
    msg: 'Check the socials!',
  });
})();
