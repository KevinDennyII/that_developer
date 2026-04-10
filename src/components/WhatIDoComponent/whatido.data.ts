import awsCert from '../../documents/AWS_Certified_Developer-Associate_Certificate.pdf';
import mcpCert from '../../documents/MCP_ProgrammingInHTML_JavaScript_CSS.pdf';

export type ExpertiseColorVariant = 'primary' | 'gold' | 'teal';

export interface WhatidoItem {
  icon: string;
  title: string;
  colorVariant: ExpertiseColorVariant;
  html: string;
}

const whatidoData: WhatidoItem[] = [
  {
    icon: 'icon-bulb',
    title: 'Web Development',
    colorVariant: 'primary',
    html:
      'I have experience building websites using Content Management Systems like Wordpress. I have professional experience coding with object-oriented languages and I am ' +
      `<a href="${String(mcpCert)}" target="_blank" rel="noopener noreferrer">Microsoft Certified in JavaScript, HTML, and CSS</a>.`,
  },
  {
    icon: 'icon-phone3',
    title: 'Data Structures & Algorithms',
    colorVariant: 'gold',
    html:
      'My Computer Science background laid a solid foundation on the fundamental concepts of Data Structures & Algorithms.',
  },
  {
    icon: 'icon-data',
    title: 'Dev Ops',
    colorVariant: 'teal',
    html:
      'I have been previously certified as an ' +
      `<a href="${String(awsCert)}" target="_blank" rel="noopener noreferrer">Amazon Web Services (AWS) Developer Associate</a>. ` +
      'I have 4 years of experience in configuring and managing data solutions with AWS.',
  },
];

export default whatidoData;
