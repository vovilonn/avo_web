const React = require("react");
const { default: Layout } = require("./src/components/layout");

// Wraps every page in a component
module.exports.wrapPageElement = ({ element, props }) => {
    return <Layout {...props}>{element}</Layout>;
};
