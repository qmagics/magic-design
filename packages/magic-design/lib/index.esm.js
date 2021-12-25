import { defineComponent, resolveComponent, openBlock, createElementBlock, normalizeClass, createCommentVNode, createBlock, createVNode, renderSlot, reactive, computed, createElementVNode, Fragment, isVNode, Comment, ref, watchEffect } from 'vue';

const withInstall = (main) => {
    main.install = (app) => {
        app.component(main.name, main);
    };
    return main;
};

var script$4 = defineComponent({
    name: "MButton",
    props: {
        loading: Boolean,
        icon: {
            type: [String, Object],
            default: "",
        },
        size: {
            type: String,
            default: "medium",
        },
        type: {
            type: String,
            default: "secondary",
        },
        nativeType: {
            type: String,
            default: "button",
        },
        state: {
            type: String,
            default: "default",
        },
        disabled: Boolean,
        autofocus: Boolean,
    },
    emits: {
        click: (e) => e instanceof MouseEvent,
    },
    setup(props, { emit }) {
        const handleClick = (e) => {
            emit("click", e);
        };
        return {
            handleClick,
        };
    },
});

const _hoisted_1$2 = ["type", "autofocus"];
const _hoisted_2$2 = {
  key: 0,
  class: "m-button-icon"
};
const _hoisted_3$2 = { key: 1 };

function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_m_icon = resolveComponent("m-icon");

  return (openBlock(), createElementBlock("button", {
    class: normalizeClass([
      'm-button',
      `m-button--size-${_ctx.size}`,
      `m-button--type-${_ctx.type}`,
      `m-button--state-${_ctx.state}`,
      {
        'is--disabled': _ctx.disabled,
        'is--loading': _ctx.loading,
        'is--icon-only': !_ctx.$slots.default
      }
    ]),
    type: _ctx.nativeType,
    autofocus: _ctx.autofocus,
    onClick: _cache[0] || (_cache[0] = (...args) => (_ctx.handleClick && _ctx.handleClick(...args)))
  }, [
    (_ctx.loading || _ctx.icon)
      ? (openBlock(), createElementBlock("span", _hoisted_2$2, [
          createCommentVNode(" <m-icon-loading v-if=\"loading\" name=\"m-icon-loading\"></m-icon-loading> "),
          createCommentVNode(" <component v-else :is=\"icon\"></component> "),
          (_ctx.loading)
            ? (openBlock(), createBlock(_component_m_icon, {
                key: 0,
                name: "m-icon-loading"
              }))
            : createCommentVNode("v-if", true),
          createVNode(_component_m_icon, { name: _ctx.icon }, null, 8 /* PROPS */, ["name"])
        ]))
      : createCommentVNode("v-if", true),
    (_ctx.$slots.default)
      ? (openBlock(), createElementBlock("span", _hoisted_3$2, [
          renderSlot(_ctx.$slots, "default")
        ]))
      : createCommentVNode("v-if", true)
  ], 10 /* CLASS, PROPS */, _hoisted_1$2))
}

script$4.render = render$3;
script$4.__file = "packages/components/button/src/button.vue";

const MButton = withInstall(script$4);

var script$3 = defineComponent({
    name: "MIcon",
    props: {
        name: String,
    },
    setup() { },
});

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("i", {
    class: normalizeClass(_ctx.name)
  }, null, 2 /* CLASS */))
}

script$3.render = render$2;
script$3.__file = "packages/components/icon/src/icon.vue";

const MIcon = withInstall(script$3);

const UPDATE_MODEL_EVENT = 'update:modelValue';

var script$2 = defineComponent({
    name: "MInput",
    props: {
        modelValue: {
            type: String,
            default: ""
        },
        size: {
            type: String,
            default: "medium"
        },
        disabled: {
            type: Boolean,
            default: false
        },
        readonly: {
            type: Boolean,
            default: false
        },
        clearable: {
            type: Boolean,
            default: false
        },
        placeholder: {
            type: String,
            default: ""
        },
        type: {
            type: String,
            default: "text"
        }
    },
    emits: [UPDATE_MODEL_EVENT, 'clear', 'change', 'focus', 'blur'],
    setup(props, { emit, slots }) {
        const UIState = reactive({
            focused: false,
        });
        const handleFocus = () => {
            UIState.focused = true;
            emit("focus");
        };
        const handleBlur = () => {
            UIState.focused = false;
            emit("blur");
        };
        const handleInput = (e) => {
            const inputEl = e.target;
            const value = inputEl.value;
            emit(UPDATE_MODEL_EVENT, value);
        };
        const handleChange = (e) => {
            const inputEl = e.target;
            const value = inputEl.value;
            emit('change', value);
        };
        const handleClear = () => {
            emit(UPDATE_MODEL_EVENT, '');
            emit('clear');
        };
        const showClearBtn = computed(() => {
            return props.clearable && props.modelValue;
        });
        const hasSuffix = computed(() => {
            return slots.suffix || showClearBtn.value;
        });
        const hasPrefix = computed(() => {
            return slots.prefix;
        });
        const hasPrepend = computed(() => slots.prepend);
        const hasAppend = computed(() => slots.append);
        return {
            handleInput,
            handleChange,
            handleClear,
            handleFocus,
            handleBlur,
            showClearBtn,
            hasPrepend,
            hasAppend,
            hasSuffix,
            hasPrefix,
            UIState
        };
    },
});

const _hoisted_1$1 = {
  key: 0,
  class: "m-input__prepend"
};
const _hoisted_2$1 = {
  key: 1,
  class: "m-input__prefix"
};
const _hoisted_3$1 = ["placeholder", "disabled", "readonly", "value", "type"];
const _hoisted_4 = {
  key: 2,
  class: "m-input__suffix"
};
const _hoisted_5 = {
  key: 3,
  class: "m-input__append"
};

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_m_icon = resolveComponent("m-icon");

  return (openBlock(), createElementBlock("div", {
    class: normalizeClass([
            'm-input',
            `m-input--size-${_ctx.size}`,
            {
                'is--disabled': _ctx.disabled,
                'is--readonly': _ctx.readonly,
                'is--clearable': _ctx.clearable,
                'is--focused': _ctx.UIState.focused,
                'is--has-suffix': _ctx.hasSuffix,
                'is--has-prefix': _ctx.hasPrefix,
                'is--has-prepend': _ctx.hasPrepend,
                'is--has-append': _ctx.hasAppend
            }
        ])
  }, [
    (_ctx.hasPrepend)
      ? (openBlock(), createElementBlock("span", _hoisted_1$1, [
          renderSlot(_ctx.$slots, "prepend")
        ]))
      : createCommentVNode("v-if", true),
    (_ctx.$slots.prefix)
      ? (openBlock(), createElementBlock("span", _hoisted_2$1, [
          renderSlot(_ctx.$slots, "prefix")
        ]))
      : createCommentVNode("v-if", true),
    createElementVNode("input", {
      class: "m-input__inner",
      placeholder: _ctx.placeholder,
      disabled: _ctx.disabled,
      readonly: _ctx.readonly,
      value: _ctx.modelValue,
      type: _ctx.type,
      onInput: _cache[0] || (_cache[0] = (...args) => (_ctx.handleInput && _ctx.handleInput(...args))),
      onChange: _cache[1] || (_cache[1] = (...args) => (_ctx.handleChange && _ctx.handleChange(...args))),
      onFocus: _cache[2] || (_cache[2] = (...args) => (_ctx.handleFocus && _ctx.handleFocus(...args))),
      onBlur: _cache[3] || (_cache[3] = (...args) => (_ctx.handleBlur && _ctx.handleBlur(...args)))
    }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_3$1),
    (_ctx.hasSuffix)
      ? (openBlock(), createElementBlock("span", _hoisted_4, [
          renderSlot(_ctx.$slots, "suffix"),
          (_ctx.showClearBtn)
            ? (openBlock(), createBlock(_component_m_icon, {
                key: 0,
                class: "m-input__clear-btn",
                onClick: _ctx.handleClear,
                name: "m-icon-close"
              }, null, 8 /* PROPS */, ["onClick"]))
            : createCommentVNode("v-if", true)
        ]))
      : createCommentVNode("v-if", true),
    (_ctx.hasAppend)
      ? (openBlock(), createElementBlock("span", _hoisted_5, [
          renderSlot(_ctx.$slots, "append")
        ]))
      : createCommentVNode("v-if", true)
  ], 2 /* CLASS */))
}

script$2.render = render$1;
script$2.__file = "packages/components/input/src/input.vue";

const MInput = withInstall(script$2);

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 * IMPORTANT: all calls of this function must be prefixed with
 * \/\*#\_\_PURE\_\_\*\/
 * So that rollup can tree-shake them if necessary.
 */

(process.env.NODE_ENV !== 'production')
    ? Object.freeze({})
    : {};
(process.env.NODE_ENV !== 'production') ? Object.freeze([]) : [];
const isArray = Array.isArray;
const isString = (val) => typeof val === 'string';

const isFragment = (node) => node?.type === Fragment;
const isComment = (node) => node.type === Comment;
const isValidElementNode = (node) => isVNode(node) && !isFragment(node) && !isComment(node);

const GUTTER_MAP = {
    mini: 5,
    small: 8,
    medium: 10,
    large: 12
};
var script$1 = defineComponent({
    name: "MSpace",
    props: {
        direction: {
            type: String,
            default: 'horizontal'
        },
        align: {
            type: String,
            default: ''
        },
        size: {
            type: [String, Number, Array],
            default: 'medium'
        },
        wrap: {
            type: Boolean,
            default: false
        }
    },
    setup(props, { emit, slots }) {
        const spaceClass = computed(() => {
            return [
                'm-space',
                `m-space--align-${props.align}`,
                `m-space--direction-${props.direction}`,
                `m-space--size-${props.size}`,
                {
                    'is--wrap': props.wrap
                }
            ];
        });
        const spaceItemClass = computed(() => {
            return [
                'm-space__item'
            ];
        });
        const gutterH = ref(0);
        const gutterV = ref(0);
        const spaceItemStyle = computed(() => {
            return {
                marginRight: gutterH.value ? `${gutterH.value}px` : undefined,
                marginBottom: gutterV.value ? `${gutterV.value}px` : undefined,
            };
        });
        watchEffect(() => {
            const { size, direction, wrap } = props;
            if (isString(size)) {
                gutterH.value = gutterV.value = GUTTER_MAP[size];
            }
            else if (isArray(props.size)) {
                gutterH.value = props.size[0];
                gutterV.value = props.size[1];
            }
            else if (typeof size === 'number') {
                gutterH.value = gutterV.value = size;
            }
            if (wrap === false) {
                if (direction === "horizontal") {
                    gutterV.value = 0;
                }
                else {
                    gutterH.value = 0;
                }
            }
        });
        return () => {
            const vnode = renderSlot(slots, 'default', { key: 0 }, () => []);
            const children = vnode.children;
            if (isArray(children)) {
                const wrapedItems = [];
                children.forEach((child, index) => {
                    if (isFragment(child) && isArray(child.children)) {
                        child.children.forEach((i, index2) => {
                            wrapedItems.push(createVNode('div', {
                                key: `MSpaceItem_${index2}`,
                                class: spaceItemClass.value,
                                style: spaceItemStyle.value
                            }, [i], 8 /* PROPS */ | 4 /* STYLE */));
                        });
                    }
                    // 不是注释节点，不是片段，才解析
                    else if (isValidElementNode(child)) {
                        wrapedItems.push(createVNode("div", {
                            key: `MSpaceItem_${index}`,
                            class: spaceItemClass.value,
                            style: spaceItemStyle.value
                        }, [child]));
                    }
                });
                return createVNode('div', {
                    class: spaceClass.value,
                }, wrapedItems, 4 /* STYLE */ | 2 /* CLASS */);
            }
            else {
                return children;
            }
        };
    },
});

script$1.__file = "packages/components/space/src/space.vue";

const MSpace = withInstall(script$1);

var script = defineComponent({
    name: "MRadio",
    props: {
        modelValue: {
            type: [String, Number, Boolean],
        },
        value: {
            type: [String, Number, Boolean],
            default: true
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        name: String
    },
    emits: [UPDATE_MODEL_EVENT, 'change'],
    setup(props, { emit }) {
        const isChecked = computed(() => {
            return props.modelValue === props.value;
        });
        const onChange = (e) => {
            const checked = e.target.checked;
            if (checked) {
                emit(UPDATE_MODEL_EVENT, props.value);
            }
        };
        return {
            isChecked,
            onChange
        };
    },
});

const _hoisted_1 = ["disabled", "value", "name", "checked"];
const _hoisted_2 = /*#__PURE__*/createElementVNode("span", { class: "m-radio__icon" }, [
  /*#__PURE__*/createCommentVNode(" <span lass=\"m-radio__icon\"></span> ")
], -1 /* HOISTED */);
const _hoisted_3 = { class: "m-radio__label" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("label", {
    class: normalizeClass([
            'm-radio',
            {
                'is--checked': _ctx.isChecked
            }
        ])
  }, [
    createElementVNode("input", {
      class: "m-radio__input",
      type: "radio",
      disabled: _ctx.disabled,
      value: _ctx.value,
      name: _ctx.name,
      checked: _ctx.isChecked,
      onChange: _cache[0] || (_cache[0] = (...args) => (_ctx.onChange && _ctx.onChange(...args)))
    }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_1),
    _hoisted_2,
    createElementVNode("span", _hoisted_3, [
      renderSlot(_ctx.$slots, "default")
    ])
  ], 2 /* CLASS */))
}

script.render = render;
script.__file = "packages/components/radio/src/radio.vue";

const MRadio = withInstall(script);

const components = [
    MButton,
    MIcon,
    MInput,
    MSpace,
    MRadio
];

const install = (app) => {
    components.forEach(component => {
        app.component(component.name, component);
    });
};
var index = {
    install
};

export { index as default };
