exports.onCreateBabelConfig = ({ actions }) => {
    actions.setBabelPlugin({
        name: `plugin-proposal-optional-chaining`,
    });
};