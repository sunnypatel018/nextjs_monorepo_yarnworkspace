module.exports = {
    reactStrictMode: true,
};
const withTM = require('next-transpile-modules')(['@monorepo-nextjs/library']);
module.exports = withTM();
