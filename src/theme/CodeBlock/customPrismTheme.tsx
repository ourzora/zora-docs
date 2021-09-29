import type { PrismTheme } from 'prism-react-renderer';

var customPrismTheme: PrismTheme = {
  plain: {
    color: '#F2F2F2',
    backgroundColor: '#1F1F1F4D',
  },
  styles: [
    {
      types: ['comment'],
      style: {
        color: '#666666',
        fontStyle: 'italic',
      },
    },
    {
      types: ['string'],
      style: {
        color: '#5DEAEA',
      },
    },
    {
      types: ['number', 'boolean'],
      style: {
        color: '#F1AB21',
      },
    },
    {
      types: ['variable'],
      style: {
        color: '#4387D8',
      },
    },
    {
      types: ['class-name', 'attr-name'],
      style: {
        color: '#F1AB21',
      },
    },
    {
      types: ['tag'],
      style: {
        color: '#B95822',
      },
    },
    {
      types: ['operator', 'punctuation'],
      style: {
        color: '#999999',
      },
    },
    {
      types: ['keyword', 'function', 'object', 'property-query'],
      style: {
        color: '#3574EF'
      },
    },
    {
      types: ['url'],
      style: {
        color: 'rgb(221, 221, 221)',
      },
    },
  ],
};

export default customPrismTheme;
