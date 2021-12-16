exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    actions.setWebpackConfig({
        node: {
            fs: "empty",
        },
    });

    if (stage === "build-html") {
        actions.setWebpackConfig({
            module: {
                rules: [
                    {
                        test: /canvas/,
                        use: loaders.null(),
                    },
                ],
            },
        });
    }
};
