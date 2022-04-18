const vueDocs = require('vue-docgen-api');
const path = require('path');
const fs = require('fs');
const glob = require('glob');

const COMPONENTS_PATH = 'packages/components/**/*.vue';

glob(COMPONENTS_PATH, async (er, files) => {
    if (er) return;

    const docs_json_arr = await Promise.all(files.map(componentFilePath => vueDocs.parse(path.resolve(__dirname, `../${componentFilePath}`))));

    fs.writeFileSync("ci.json", JSON.stringify(docs_json_arr));
})