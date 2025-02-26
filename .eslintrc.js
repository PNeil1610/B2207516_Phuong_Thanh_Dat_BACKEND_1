module.exports = {
    env: {
        node: true,
        commonjs: true,
        es2021: true,
    },
    extends: ['eslint:recommended', 'prettier'],
};
// In the above configuration, we have defined the environment as node, commonjs, and es2021. We have also extended the recommended rules from ESLint and Prettier. This configuration will help us to identify the errors and warnings in our code.