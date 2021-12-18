import { defineComponent, openBlock, createElementBlock, normalizeClass } from 'vue';

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

script.install = (app) => {
    app.component(script.name, script);
};

export { script as default };
