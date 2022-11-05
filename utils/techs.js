import chalk from 'chalk';

const TECHS = [
  {
    name: 'JavaScript',
    color: '#f7df1e',
  },
  {
    name: 'TypeScript',
    color: '#3178c6',
  },
  {
    name: 'GoLang',
    color: '#007d9c',
  },
  {
    name: 'Node.js',
    color: '#6cc24a',
  },
  {
    name: 'React',
    color: '#00d8ff',
  },
  {
    name: 'Angular',
    color: '#b52e31',
  },
  {
    name: 'MySQL',
    color: '#00758f',
  },
  {
    name: 'MongoDB',
    color: '#589636',
  },
  {
    name: 'Java',
    color: '#3a75b0',
  },
  {
    name: 'C#',
    color: '#49176d',
  },
  {
    name: 'PHP',
    color: '#8892be',
  },
];

export default TECHS.map((tech, i) => {
  return `${i === 0 ? '' : ' '}${chalk
    .hex(tech.color)
    .inverse.bold(` ${tech.name} `)}`;
}).join('');
