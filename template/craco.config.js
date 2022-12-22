// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
    webpack: {
        alias: {
            '@src': path.resolve(__dirname, 'src'),
            '@tests': path.resolve(__dirname, 'tests'),
            '@assets': path.resolve(__dirname, 'src/Assets'),
            '@components': path.resolve(__dirname, 'src/Components'),
            '@layout': path.resolve(__dirname, 'src/Layout'),
            '@pages': path.resolve(__dirname, 'src/Pages'),
            '@utils': path.resolve(__dirname, 'src/Utils'),
        },
    },
};