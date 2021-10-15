var customPrismTheme = {
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
        color: '#88e7e7',
      },
    },
    {
      types: ['number', 'boolean'],
      style: {
        color: '#e7b16e',
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
        color: '#e7b16e',
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
      types: ['keyword'],
      style: {
        color: '#5188f5',
      },
    },
    {
      types: ['function', 'object', 'property-query'],
      style: {
        color: '#86d7ff',
      },
    },
    {
      types: ['url'],
      style: {
        color: 'rgb(221, 221, 221)',
      },
    },
  ],
}

export default customPrismTheme
