import { defineComponent, openBlock, createElementBlock } from 'vue';

var script = defineComponent({
    name: "MInput",
    props: {},
    setup() { },
});

const _hoisted_1 = { class: "m-input" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", _hoisted_1))
}

script.render = render;
script.__file = "packages/components/input/src/input.vue";

script.install = (app) => {
    app.component(script.name, script);
};

export { script as default };
