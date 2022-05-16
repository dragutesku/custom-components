/* eslint-disable */
const pkg = require('./package.json');

module.exports = function (plop) {
  // Webcomponent: Custom Autonomous Element
  plop.setGenerator('webcomponent custom autonomous', {
    description: 'simple custom autonomous webcomponent',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'the name of the component'
    }, 
    {
      type: 'input',
      name: 'namespace',
      message: 'the namespace under which the component lives',
      default: pkg.name.split('/')[0]
    }],
    actions: [{
      type: 'addMany',
      templateFiles: [
        '.templates/js-custom-autonomous/**',
        '.templates/litelement/.*',
        '!.templates/js-custom-autonomous/src/my-component.js', 
        '!.templates/js-custom-autonomous/stories/my-component.stories.js'],
      destination: 'packages/{{name}}',
      base: '.templates/js-custom-autonomous',
    },
    {
      type: 'add',
      templateFile: '.templates/js-custom-autonomous/stories/my-component.stories.js',
      path: 'packages/{{name}}/stories/{{ properCase name }}.stories.js',
    }
  ]
  });

  // Webcomponent: Custom Built In Element
  plop.setGenerator('webcomponent custom-built-in', {
    description: 'simple custom built in webcomponent',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'The name of the component'
    },
    {
      type: 'rawlist',
      choices: [
        'HTMLDivElement',
        'HTMLAnchorElement',
        'HTMLUListElement',
        'HTMLLIElement',
        'HTMLButtonElement',
        'HTMLFormElement',
        'HTMLInputElement',
        'HTMLSelectElement',
        'HTMLTextAreaElement',
        'HTMLFieldSetElement',
        'HTMLTableElement',
        'HTMLTableRowElement',
        'HTMLAreaElement',
        'HTMLVideoElement',
        'HTMLAudioElement',
        'HTMLBRElement',
        'HTMLBodyElement',
        'HTMLCanvasElement',
        'HTMLDataElement',
        'HTMLDataListElement',
      ],
      name: 'htmlinterface',
      messsage: 'HTML Element Interface'
    },
    {
      type: 'rawlist',
      choices: [
        'div',
        'a',
        'ul',
        'li',
        'button',
        'form',
        'input',
        'select',
        'textarea',
        'fieldset',
        'table',
        'tr',
        'area',
        'video',
        'audio',
        'br',
        'body',
        'canvas',
        'data',
        'datalist'
      ],
      name: 'extends',
      messsage: 'Extended HTML Element'
    },
    {
      type: 'input',
      name: 'namespace',
      message: 'the namespace under which the component lives',
      default: pkg.name.split('/')[0]
    }],
    actions: [{
      type: 'addMany',
      templateFiles: [
        '.templates/js-custom-built-in/**', 
        '.templates/litelement/.*',
        '!.templates/js-custom-built-in/src/my-component.js', 
        '!.templates/js-custom-built-in/stories/my-component.stories.js'],
      destination: 'packages/{{name}}',
      base: '.templates/js-custom-built-in',
    },
    {
      type: 'add',
      templateFile: '.templates/js-custom-built-in/stories/my-component.stories.js',
      path: 'packages/{{name}}/stories/{{ properCase name }}.stories.js',
    }
  ]
  });
  // Webcomponent: Lit Element
  plop.setGenerator('webcomponent litelement', {
    description: 'simple lit + ts element',
      prompts: [{
        type: 'input',
        name: 'name',
        message: 'the name of the component'
      }, {
        type: 'input',
        name: 'namespace',
        message: 'the namespace under which the component lives',
        default: pkg.name.split('/')[0]
      }],
      actions: [{
        type: 'addMany',
        templateFiles: [
          '.templates/litelement/**', 
          '.templates/litelement/.*', 
          '!.templates/litelement/src/my-element.ts', 
          '!.templates/litelement/stories/my-element.stories.js'],
        destination: 'packages/{{name}}',
        base: '.templates/litelement',
      }, {
        type: 'add',
        templateFile: '.templates/litelement/src/my-element.ts',
        path: 'packages/{{name}}/src/{{ dashCase name }}.ts',
      }, {
        type: 'add',
        templateFile: '.templates/litelement/stories/my-element.stories.js',
        path: 'packages/{{name}}/stories/{{ dashCase name }}.stories.js',
      }
    ]
  });
  // Webcomponent: Svelte
  plop.setGenerator('webcomponent svelte', {
    description: 'simple svelte component',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'the name of the component'
    }, 
    {
      type: 'input',
      name: 'namespace',
      message: 'the namespace under which the component lives',
      default: pkg.name.split('/')[0]
    }],
    actions: [{
      type: 'addMany',
      templateFiles: [
        '.templates/svelte/**', 
        '.templates/litelement/.*',
        '!.templates/svelte/src/my-component.svelte', 
        '!.templates/svelte/stories/my-component.stories.js'],
      destination: 'packages/{{name}}',
      base: '.templates/svelte',
    }, 
    {
      type: 'add',
      templateFile: '.templates/svelte/src/my-component.svelte',
      path: 'packages/{{name}}/src/{{ properCase name }}.svelte',
    },
    {
      type: 'add',
      templateFile: '.templates/svelte/stories/my-component.stories.js',
      path: 'packages/{{name}}/stories/{{ properCase name }}.stories.js',
    }
  ]
  });
};
