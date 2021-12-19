import { defineComponent, openBlock, createElementBlock, normalizeClass } from 'vue';

const withInstall = (main) => {
    main.install = (app) => {
        app.component(main.name, main);
    };
    return main;
};

var script = defineComponent({
    name: "MIcon",
    props: {
        name: String,
    },
    setup() { },
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("i", {
    class: normalizeClass(_ctx.name)
  }, null, 2 /* CLASS */))
}

script.render = render;
script.__file = "packages/components/icon/src/icon.vue";

const MIcon = withInstall(script);

export { MIcon as default };
