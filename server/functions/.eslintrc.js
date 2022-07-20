module.exports = {
    root: true,
    env: {
        es6: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'google',
        'plugin:@typescript-eslint/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: ['tsconfig.json', 'tsconfig.dev.json'],
        sourceType: 'module',
        tsconfigRootDir: __dirname,
    },
    ignorePatterns: [
        '/lib/**/*', // Ignore built files.
        '/packages/**/*', // Ignore built files.
    ],
    plugins: ['@typescript-eslint', 'import'],
    rules: {
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        'space-before-function-paren': 'off',
        'import/extensions': [
            'error',
            {
                ts: 'never',
                tsx: 'never',
                js: 'never',
                jsx: 'never',
            },
        ],
        'no-shadow': 'off',
        'valid-jsdoc': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['warn'],
        'semi': 'off',
        'no-empty-function': 'off',
        'require-jsdoc': 'off',
        'object-curly-spacing': ['warn', 'always'],
        'indent': ['warn', 4, { SwitchCase: 1 }],
        'import/prefer-default-export': 'off',
        'no-console': 'off',
        'max-len': ['warn', { ignoreTemplateLiterals: true, code: 120 }],
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.ts'],
                moduleDirectory: ['node_modules', 'src/'],
            },
        },
    },
};
