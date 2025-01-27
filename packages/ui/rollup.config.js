const config = require('@haleybox/rollup')

module.exports = config.generateRollupConfig({
    packageDir: __dirname,
    entrypoint: './src/index.ts',
    minify: false,
    scss: true,
    react: {
        runtime: 'automatic',
    },
})
