module.exports = {
    plugins: [
        require('postcss-nesting'),
        require('postcss-simple-vars')(),
        require('autoprefixer')({
            browsers: [
                '>1%',
                'last 4 versions',
                'Firefox ESR',
                'not ie < 9', // React doesn't support IE8 anyway
            ],
        }),
    ],
};
