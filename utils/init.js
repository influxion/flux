import welcome from 'cli-welcome';
import checkNode from 'cli-check-node';
import unhandled from 'cli-handle-unhandled';

import pkgJSON from './../package.json' assert { type: 'json' };

export default () => {
  unhandled();

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

  checkNode('10');
};
