module.exports = {
  // https://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy
  // This option interrupts the configuration hierarchy at this file
  // Remove this if you have a higher level ESLint config file (it usually happens into a monorepos)
  root: true,

  // https://eslint.vuejs.org/user-guide/#how-to-use-a-custom-parser
  // Must use parserOptions instead of "parser" to allow vue-eslint-parser to keep working
  // `parser: 'vue-eslint-parser'` is already included with any 'plugin:vue/**' config and should be omitted
  parserOptions: {
    parser: '@typescript-eslint/parser',
    extraFileExtensions: ['.vue'],

    // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser#configuration
    // https://github.com/TypeStrong/fork-ts-checker-webpack-plugin#eslint
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    ecmaVersion: 2021, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },

  env: {
    browser: true,
    es2021: true,
    node: true,
  },

  // Rules order is important, please avoid shuffling them
  extends: [
    // Base ESLint recommended rules
    // 'eslint:recommended',

    // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#usage
    // ESLint typescript rules
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',

    // See https://eslint.vuejs.org/rules/#available-rules
    // 'plugin:vue/vue3-essential', // Priority A: Essential (Error Prevention)
    // 'plugin:vue/vue3-strongly-recommended', // Priority B: Strongly Recommended (Improving Readability)
    'plugin:vue/vue3-recommended', // Priority C: Recommended (Minimizing Arbitrary Choices and Cognitive Overhead)

    'airbnb-base',
  ],

  plugins: [
    // required to apply rules which need type information
    '@typescript-eslint',
    '@stylistic/ts',

    // https://eslint.vuejs.org/user-guide/#why-doesn-t-it-work-on-vue-files
    // required to lint *.vue files
    'vue',
  ],

  globals: {
    process: 'readonly',
    Capacitor: 'readonly',
    chrome: 'readonly',
  },

  // add your custom rules here
  rules: {
    "indent": [2, "tab"],
    "no-tabs": 0,
    'no-plusplus': 'off',
    'no-param-reassign': 'off',
    'no-void': 'off',
    'no-nested-ternary': 'off',
    'max-classes-per-file': 'off',

    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',

    'import/first': 'off',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/default': 'error',
    'import/export': 'error',
    // Override of:
    // https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/imports.js#L139
    // Reason for this rule: https://vitejs.dev/guide/performance#reduce-resolve-operations
    'import/extensions': ['error', 'always', {
      js: 'ignorePackages',
      ts: 'ignorePackages',
      mjs: 'ignorePackages',
    }],
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',

    'prefer-promise-reject-errors': 'off',

    quotes: ['warn', 'single', { avoidEscape: true }],

    // this rule, if on, would require explicit return type on the `render` function
    '@typescript-eslint/explicit-function-return-type': 'off',

    // in plain CommonJS modules, you can't use `import foo = require('foo')` to pass this rule, so it has to be disabled
    '@typescript-eslint/no-var-requires': 'off',

    // The core 'no-unused-vars' rules (in the eslint:recommended ruleset)
    // does not work with type definitions
    'no-unused-vars': 'off',

    // allow debugger during development only
    'no-debugger': process.env.NODE_ENV === 'production'
      ? 'error'
      : 'off',

    // Custom
    'brace-style': ['error', '1tbs', { allowSingleLine: false }],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'multiline-block-like' },
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: 'if', next: '*' },
      // Sequence of variable declarations
      { blankLine: 'always', prev: '*', next: ['const', 'let'] },
      { blankLine: 'always', prev: ['const', 'let'], next: '*' },
      { blankLine: 'any', prev: ['const', 'let'], next: ['const', 'let'] },
    ],
    curly: ['error', 'all'],
    'max-lines': ['error', {
      max: 1000,
      skipComments: true,
      skipBlankLines: true,
    }],

    // To have alphabetical order on named imports
    // import { a, b, c } from 'foo';
    'sort-imports': ['error', {
      ignoreDeclarationSort: true,
      ignoreCase: true,
    }],
    'no-mixed-spaces-and-tabs': 'off',
    'multiline-ternary': ['error', 'always'],
    'func-style': ['error', 'expression'],
    'no-restricted-imports': ['error', {
      paths: [
        {
          name: 'lodash',
          message: 'Use `import { module } from lodash-es` instead.',
        },
      ],
      patterns: [
        // {
        //   group: ['.*'],
        //   message: 'Use absolute imports instead.',
        // },
        {
          group: ['src/components/*'],
          message: 'Use `components/*` instead.',
        },
      ],
    }],

    // Vue
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'vue/html-comment-indent': 'error',
    'vue/no-v-html': 'warn',
    'vue/html-comment-content-spacing': 'error',
    'vue/custom-event-name-casing': ['error', 'kebab-case'],
    'vue/padding-line-between-blocks': ['error', 'always'],
    'vue/new-line-between-multi-line-property': 'error',
    'vue/no-empty-component-block': 'error',
    'vue/no-useless-mustaches': 'error',
    'vue/dot-notation': 'error',
    'vue/key-spacing': 'error',
    'vue/arrow-spacing': 'error',
    'vue/define-macros-order': ['error', {
      order: ['defineOptions', 'defineSlots', 'defineModel', 'defineProps', 'defineEmits'],
      defineExposeLast: true,
    }],
    'vue/block-order': ['error', {
      order: [['script', 'template'], 'style'],
    }],
    'vue/object-shorthand': 'error',
    'vue/component-api-style': ['error', ['script-setup']],
    'vue/define-props-declaration': ['error', 'type-based'],
    'vue/define-emits-declaration': ['error', 'type-literal'],
    'vue/padding-line-between-tags': ['error', [
      { blankLine: 'always', prev: '*', next: '*' },
      { blankLine: 'never', prev: 'li', next: 'li' },
    ]],
    'vue/block-tag-newline': ['error', {
      singleline: 'always',
    }],
    'vue/no-static-inline-styles': 'error',
    'vue/no-required-prop-with-default': 'error',
    'vue/multiline-ternary': ['error', 'always'],
    'vue/no-root-v-if': 'error',
    'vue/prefer-define-options': 'error',
    'vue/valid-define-options': 'error',
    'vue/no-duplicate-attr-inheritance': 'error',
    'vue/require-macro-variable-name': 'error',
    'vue/require-typed-ref': 'error',
    'vue/no-unused-properties': 'off',
    'vue/no-unused-emit-declarations': 'error',
    // As of eslint-plugin-vue v9.21.0, kebab-case named slots are not supported
    // 'vue/require-explicit-slots': 'error',

    // Typescript
    // Override of basic ESLint rules
    // https://github.com/typescript-eslint/typescript-eslint/issues/2483
    '@typescript-eslint/no-unused-vars': ['error', {
      caughtErrors: 'none',
    }],
    semi: 'off',
    '@stylistic/ts/semi': 'error',
    camelcase: 'off',
    'no-redeclare': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/no-redeclare': 'error',
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],
    // https://typescript-eslint.io/blog/consistent-type-imports-and-exports-why-and-how
    '@typescript-eslint/consistent-type-imports': ['error', {
      prefer: 'type-imports',
      fixStyle: 'inline-type-imports',
      disallowTypeAnnotations: false,
    }],
    '@stylistic/ts/member-delimiter-style': 'error',
    '@typescript-eslint/prefer-as-const': 'error',
    '@typescript-eslint/array-type': ['error', {
      default: 'array',
    }],
    '@typescript-eslint/prefer-for-of': 'off',

    // CSS
    'vue-scoped-css/no-unused-selector': 'off',
    'vue-scoped-css/require-v-deep-argument': 'off',
  },

  overrides: [
    // Limit the rule to Vue components,
    // applying it to the whole `src` would require much work on composables
    {
      files: ['**/*.vue'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'error',
      },
    },
  ],

  reportUnusedDisableDirectives: true,
};
