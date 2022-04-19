const vueDocs = require('vue-docgen-api');
const path = require('path');
const fs = require('fs');
const glob = require('glob');

const COMPONENTS_PATH = 'packages/components/**/*.vue';

glob(COMPONENTS_PATH, async (er, files) => {
    if (er) return;

    const docs_json_arr = await Promise.all(files.map(componentFilePath => vueDocs.parse(path.resolve(__dirname, `../${componentFilePath}`))));

    const docs_json_map = docs_json_arr.filter(i => i.displayName.startsWith('M')).reduce((pre, cur) => {
        pre[cur.displayName] = cur;
        return pre;
    }, {});

    fs.writeFileSync(path.resolve(__dirname, '../docs/src/docs_map.json'), JSON.stringify(docs_json_map));
})