const { generateTemplateFiles } = require('generate-template-files');

// run 'npm run gen' to start use

generateTemplateFiles([
  {
    option: 'c',
    defaultCase: '(pascalCase)',
    entry: {
      folderPath: './templates/component' ,
    },
    stringReplacers: ['Name'],
    dynamicReplacers: [{slot:'__class__', slotValue: 'className'}],
    output: {
      path: './src/components/Name',
      pathAndFileNameDefaultCase: '(pascalCase)',
    },
  },
  {
    option: 'p',
    defaultCase: '(pascalCase)',
    entry: {
      folderPath: './templates/component' ,
    },
    stringReplacers: ['Name'],
    dynamicReplacers: [{slot:'__class__', slotValue: 'className'}],
    output: {
      path: './src/pages/Name',
      pathAndFileNameDefaultCase: '(pascalCase)',
    },
  },
  {
    option: 'ctx',
    defaultCase: '(noCase)',
    entry: {
      folderPath: './templates/nameContext.jsx',
    },
    stringReplacers: ['Name', 'name'],
    output: {
      path: './src/context/NameContext.jsx',
      pathAndFileNameDefaultCase: '(noCase)',
    },
  }
]);