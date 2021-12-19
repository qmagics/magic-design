import { defineComponent, openBlock, createElementBlock } from 'vue';

const withInstall = (main) => {
    main.install = (app) => {
        app.component(main.name, main);
    };
    return main;
};

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

const MInput = withInstall(script);

export { MInput as default };
