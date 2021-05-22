/*
 * @文档描述:
 * @author: 伟烽
 * @Date: 2021-05-21 16:00:53
 * @LastEditTime: 2021-05-21 16:01:08
 * @LastEditors: 伟烽
 */
module.exports = {
    plugins: [
        'tailwindcss',
        'postcss-flexbugs-fixes',
        [
            'postcss-preset-env',
            {
                autoprefixer: {
                    flexbox: 'no-2009'
                },
                stage: 3,
                features: {
                    'custom-properties': false
                }
            }
        ]
    ]
};
