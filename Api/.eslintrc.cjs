module.exports = {
    env: {
        es2021: true,
        node: true,
    },
    extends: 'airbnb-base',
    overrides: [
        {
            env: {
                node: true,
            },
            files: [
                '.eslintrc.{js,cjs}',
            ],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'import',
    ],
    rules: {
        indent: [
            'error',
            4,
        ],
        'linebreak-style': 0,
        quotes: [
            'error',
            'single',
        ],
        semi: [
            'error',
            'always',
        ],
        'keyword-spacing': 'error',
        'no-trailing-spaces': 'error',
        'space-before-blocks': 'error',
        'arrow-body-style': 'error',
        'no-multi-spaces': 'error',
        'eol-last': 'error',
        'no-use-before-define': 'error',
        'no-tabs': 'error',
        'key-spacing': 'error',
        eqeqeq: 'error',
        '@typescript-eslint/no-unused-vars': 'off',
        'spaced-comment': [
            'error',
            'always',
        ],
        'comma-dangle': [
            'error',
            'always-multiline',
        ],
        'quote-props': [
            'error',
            'as-needed',
        ],
        'comma-spacing': [
            'error',
            { after: true },
        ],
        'no-multiple-empty-lines': [
            'error',
            {
                maxBOF: 0,
                max: 1,
                maxEOF: 0,
            },
        ],
        'space-infix-ops': [
            'error',
            { int32Hint: true },
        ],
        'object-curly-spacing': [
            'error',
            'always',
        ],
        'space-in-parens': [
            'error',
            'never',
        ],
        'import/extensions': [
            'warn',
            'ignorePackages',
            {
                js: 'always',
            },
        ],
    },
};
