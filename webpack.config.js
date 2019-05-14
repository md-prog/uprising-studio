const path = require('path');

module.exports = {
    mode: "development", // "production" | "development" | "none"

    // Chosen mode tells webpack to use its built-in optimizations accordingly.
    entry: "./client/app/application.js", // string | object | array

    // defaults to ./src
    // Here the application starts executing
    // and webpack starts bundling
    output: {
        // options related to how webpack emits results
        path: path.resolve(__dirname, "client/js"), // string
        // the target directory for all output files
        // must be an absolute path (use the Node.js path module)
        filename: "main-build.js", // string
        // the filename template for entry chunks
        publicPath: "/js/", // string
        // the url to the output directory resolved relative to the HTML page
    },
    resolve: {
        // options for resolving module requests
        // (does not apply to resolving to loaders)
        modules: [
          "node_modules",
          path.resolve(__dirname, "src")
        ],
        // directories where to look for modules
        extensions: [".js", ".json", ".jsx", ".css"],
        // extensions that are used
    },
    module: {
        // configuration regarding modules
        rules: [
            // rules for modules (configure loaders, parser options, etc.)
            {
                test: /\.jsx?$/,
            },
            {
                test: /\.(html)$/,
                use: {
                  loader: 'html-loader',
                  options: {
                    minimize: true
                  }
                }
              }
        ]
    },
    externals: [
        'PIXI',
        'THREE',
        'TweenMax',
        'TimelineMax',
        /^(jquery|\$)$/i
    ],
    plugins: [
    ]
}