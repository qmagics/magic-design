const fs = require("fs");

/** 移动文件插件 */
export default (options) => {
    const listToMove = Array.isArray(options) ? options : [options];

    return {
        name: 'moveIndexDtsPlugin',
        closeBundle(err) {
            if (!err) {
                listToMove.forEach(({ fromFile, toFile }) => {
                    fs.copyFileSync(fromFile, toFile);
                })
            }
        }
    };
}