module.exports = {
    siteMetadata: {
        siteUrl: "https://www.avonft.io",
        title: "avo_web",
    },
    plugins: [
        "gatsby-plugin-sass",
        "gatsby-plugin-image",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-typescript",
        "gatsby-plugin-anchor-links",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                icon: "src/images/avo.svg",
            },
        },
        "gatsby-plugin-mdx",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/",
            },
            __key: "images",
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "pages",
                path: "./src/pages/",
            },
            __key: "pages",
        },
        {
            resolve: "gatsby-plugin-anchor-links",
            options: {
                offset: -100,
            },
        },
    ],
};
