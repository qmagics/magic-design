import { defineComponent, resolveComponent, openBlock, createElementBlock, normalizeClass, createCommentVNode, createBlock, createVNode, renderSlot, reactive, computed, createElementVNode, withModifiers, Fragment, isVNode, Comment, ref, watchEffect, inject, provide, toRef, Teleport, watch, onMounted, onUpdated, cloneVNode, h, Transition, withDirectives, vShow, withCtx, getCurrentInstance, createTextVNode, toDisplayString, renderList, normalizeStyle, onBeforeUnmount } from 'vue';

const withInstall = (main) => {
    main.install = (app) => {
        app.component(main.name, main);
    };
    return main;
};

var script$h = defineComponent({
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

const _hoisted_1$a = ["type", "autofocus"];
const _hoisted_2$6 = {
  key: 0,
  class: "m-button-icon"
};
const _hoisted_3$5 = { key: 1 };

function render$e(_ctx, _cache, $props, $setup, $data, $options) {
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
      ? (openBlock(), createElementBlock("span", _hoisted_2$6, [
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
      ? (openBlock(), createElementBlock("span", _hoisted_3$5, [
          renderSlot(_ctx.$slots, "default")
        ]))
      : createCommentVNode("v-if", true)
  ], 10 /* CLASS, PROPS */, _hoisted_1$a))
}

script$h.render = render$e;
script$h.__file = "packages/components/button/src/button.vue";

const MButton = withInstall(script$h);

var script$g = defineComponent({
    name: "MIcon",
    props: {
        name: String,
    },
    setup() { },
});

function render$d(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("i", {
    class: normalizeClass(_ctx.name)
  }, null, 2 /* CLASS */))
}

script$g.render = render$d;
script$g.__file = "packages/components/icon/src/icon.vue";

const MIcon = withInstall(script$g);

const UPDATE_MODEL_EVENT = 'update:modelValue';
const RADIO_GROUP_KEY = Symbol("radioGroup");
const CHECKBOX_GROUP_KEY = Symbol("checkboxGroup");
const SELECT_KEY = Symbol("select");
const TABLE_KEY = Symbol("table");

var script$f = defineComponent({
    name: "MInput",
    props: {
        modelValue: {
            type: [String, Number, Boolean],
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

const _hoisted_1$9 = {
  key: 0,
  class: "m-input__prepend"
};
const _hoisted_2$5 = {
  key: 1,
  class: "m-input__prefix"
};
const _hoisted_3$4 = ["placeholder", "disabled", "readonly", "value", "type"];
const _hoisted_4$1 = {
  key: 2,
  class: "m-input__suffix"
};
const _hoisted_5 = {
  key: 3,
  class: "m-input__append"
};

function render$c(_ctx, _cache, $props, $setup, $data, $options) {
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
      ? (openBlock(), createElementBlock("span", _hoisted_1$9, [
          renderSlot(_ctx.$slots, "prepend")
        ]))
      : createCommentVNode("v-if", true),
    (_ctx.$slots.prefix)
      ? (openBlock(), createElementBlock("span", _hoisted_2$5, [
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
    }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_3$4),
    (_ctx.hasSuffix)
      ? (openBlock(), createElementBlock("span", _hoisted_4$1, [
          renderSlot(_ctx.$slots, "suffix"),
          (_ctx.showClearBtn)
            ? (openBlock(), createBlock(_component_m_icon, {
                key: 0,
                class: "m-input__clear-btn",
                onClick: withModifiers(_ctx.handleClear, ["stop"]),
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

script$f.render = render$c;
script$f.__file = "packages/components/input/src/input.vue";

const MInput = withInstall(script$f);

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
var script$e = defineComponent({
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

script$e.__file = "packages/components/space/src/space.vue";

const MSpace = withInstall(script$e);

var script$d = defineComponent({
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
        const radioGroup = inject(RADIO_GROUP_KEY, undefined);
        const isInGroup = computed(() => !!radioGroup);
        const isChecked = computed(() => {
            let v = isInGroup.value ? radioGroup.modelValue : props.modelValue;
            return v === props.value;
        });
        const isDisabled = computed(() => {
            return isInGroup.value ? radioGroup.disabled : props.disabled;
        });
        const onChange = (e) => {
            const checked = e.target.checked;
            if (isInGroup.value) {
                radioGroup.emitChange(props.value);
            }
            else {
                if (checked) {
                    emit(UPDATE_MODEL_EVENT, props.value);
                }
            }
        };
        return {
            isChecked,
            isDisabled,
            onChange
        };
    },
});

const _hoisted_1$8 = ["disabled", "value", "name", "checked"];
const _hoisted_2$4 = /*#__PURE__*/createElementVNode("span", { class: "m-radio__icon" }, null, -1 /* HOISTED */);
const _hoisted_3$3 = { class: "m-radio__label" };

function render$b(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("label", {
    class: normalizeClass([
            'm-radio',
            {
                'is--checked': _ctx.isChecked,
                'is--disabled': _ctx.isDisabled
            }
        ])
  }, [
    createElementVNode("input", {
      class: "m-radio__input",
      type: "radio",
      disabled: _ctx.isDisabled,
      value: _ctx.value,
      name: _ctx.name,
      checked: _ctx.isChecked,
      onChange: _cache[0] || (_cache[0] = (...args) => (_ctx.onChange && _ctx.onChange(...args)))
    }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_1$8),
    _hoisted_2$4,
    createElementVNode("span", _hoisted_3$3, [
      renderSlot(_ctx.$slots, "default")
    ])
  ], 2 /* CLASS */))
}

script$d.render = render$b;
script$d.__file = "packages/components/radio/src/radio.vue";

const MRadio = withInstall(script$d);

var script$c = defineComponent({
    name: "MRadioGroup",
    props: {
        modelValue: {
            type: [String, Number, Boolean]
        },
        disabled: Boolean
    },
    emits: [UPDATE_MODEL_EVENT, 'change'],
    setup(props, { emit }) {
        const emitChange = (val) => {
            emit(UPDATE_MODEL_EVENT, val);
        };
        provide(RADIO_GROUP_KEY, reactive({
            emitChange,
            disabled: toRef(props, "disabled"),
            modelValue: toRef(props, "modelValue")
        }));
    }
});

const _hoisted_1$7 = { class: "m-radio-group" };

function render$a(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", _hoisted_1$7, [
    renderSlot(_ctx.$slots, "default")
  ]))
}

script$c.render = render$a;
script$c.__file = "packages/components/radio/src/radio-group.vue";

const MRadioGroup = withInstall(script$c);

var script$b = defineComponent({
    name: "MCheckbox",
    props: {
        modelValue: {
            type: [String, Number, Boolean, Array],
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
        const checkboxGroup = inject(CHECKBOX_GROUP_KEY, undefined);
        const isInGroup = computed(() => !!checkboxGroup);
        const isChecked = computed(() => {
            if (isInGroup.value) {
                return (checkboxGroup.modelValue || []).includes(props.value);
            }
            else {
                if (isArrayValue.value) {
                    return props.modelValue.includes(props.value);
                }
                else {
                    return !!props.modelValue;
                }
            }
        });
        const isDisabled = computed(() => {
            return isInGroup.value ? checkboxGroup.disabled : props.disabled;
        });
        const isArrayValue = computed(() => {
            return isArray(props.modelValue);
        });
        const onChange = (e) => {
            const checked = e.target.checked;
            if (isInGroup.value) {
                checkboxGroup.emitChange(props.value, checked, e);
            }
            else {
                if (isArrayValue.value) {
                    let arr = [...props.modelValue];
                    if (!!checked) {
                        if (!arr.includes(props.value)) {
                            arr.push(props.value);
                        }
                    }
                    else {
                        if (arr.includes(props.value)) {
                            arr = arr.filter(i => i !== props.value);
                        }
                    }
                    emit(UPDATE_MODEL_EVENT, arr);
                }
                else {
                    emit(UPDATE_MODEL_EVENT, !!checked ? true : false);
                }
            }
        };
        return {
            isChecked,
            isDisabled,
            onChange
        };
    },
});

const _hoisted_1$6 = ["disabled", "value", "name", "checked"];
const _hoisted_2$3 = /*#__PURE__*/createElementVNode("span", { class: "m-checkbox__icon" }, null, -1 /* HOISTED */);
const _hoisted_3$2 = { class: "m-checkbox__label" };

function render$9(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("label", {
    class: normalizeClass([
            'm-checkbox',
            {
                'is--checked': _ctx.isChecked,
                'is--disabled': _ctx.isDisabled
            }
        ])
  }, [
    createElementVNode("input", {
      class: "m-checkbox__input",
      type: "checkbox",
      disabled: _ctx.isDisabled,
      value: _ctx.value,
      name: _ctx.name,
      checked: _ctx.isChecked,
      onChange: _cache[0] || (_cache[0] = (...args) => (_ctx.onChange && _ctx.onChange(...args)))
    }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_1$6),
    _hoisted_2$3,
    createElementVNode("span", _hoisted_3$2, [
      renderSlot(_ctx.$slots, "default")
    ])
  ], 2 /* CLASS */))
}

script$b.render = render$9;
script$b.__file = "packages/components/checkbox/src/checkbox.vue";

const MCheckbox = withInstall(script$b);

var script$a = defineComponent({
    name: "MCheckboxGroup",
    props: {
        modelValue: {
            type: Array
        },
        disabled: Boolean
    },
    emits: [UPDATE_MODEL_EVENT, 'change'],
    setup(props, { emit }) {
        const emitChange = (val, checked, e) => {
            let newModelValue = [...props.modelValue];
            if (!!checked) {
                if (!newModelValue.includes(val)) {
                    newModelValue.push(val);
                }
            }
            else {
                newModelValue = newModelValue.filter(i => i !== val);
            }
            emit(UPDATE_MODEL_EVENT, newModelValue);
        };
        provide(CHECKBOX_GROUP_KEY, reactive({
            emitChange,
            disabled: toRef(props, "disabled"),
            modelValue: toRef(props, "modelValue")
        }));
    }
});

const _hoisted_1$5 = { class: "m-checkbox-group" };

function render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", _hoisted_1$5, [
    renderSlot(_ctx.$slots, "default")
  ]))
}

script$a.render = render$8;
script$a.__file = "packages/components/checkbox/src/checkbox-group.vue";

const MCheckboxGroup = withInstall(script$a);

var script$9 = defineComponent({
    name: "MTeleport",
    props: {}
});

function render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock(Teleport, { to: "body" }, [
    renderSlot(_ctx.$slots, "default")
  ]))
}

script$9.render = render$7;
script$9.__file = "packages/components/trigger/src/teleport.vue";

var script$8 = defineComponent({
    name: "MTrigger",
    props: {
        popperOffset: {
            type: Array,
            default: () => []
        },
        visible: Boolean
    },
    emits: ['update:visible'],
    setup(props, { slots, emit }) {
        const onClick = () => {
            emit("update:visible", !props.visible);
        };
        const contentStyle = reactive({
            left: '',
            top: '',
            width: ''
        });
        const triggerRef = ref();
        const refreshContentPosition = () => {
            const containerEl = triggerRef.value?.$el;
            const { width, height } = containerEl?.getBoundingClientRect();
            const top = containerEl.offsetTop;
            const left = containerEl.offsetLeft;
            const [offsetX, offsetY] = props.popperOffset;
            contentStyle.width = width + 'px';
            contentStyle.left = left + (offsetX || 0) + 'px';
            contentStyle.top = top + (offsetY || 0) + height + 'px';
        };
        watch(() => props.visible, () => {
            refreshContentPosition();
        });
        onMounted(() => {
            refreshContentPosition();
        });
        onUpdated(() => {
            if (props.visible) {
                refreshContentPosition();
            }
        });
        return () => {
            const trigger = slots.default?.();
            const wrappedTrigger = cloneVNode(trigger[0], {
                onClick,
                ref: triggerRef
            });
            const content = slots.content?.();
            const wrappedContent = h(script$9, h(Transition, {
                name: "m-zoom-in-top"
            }, withDirectives(h('div', {
                class: 'm-trigger__content',
                style: contentStyle
            }, content), [[vShow, props.visible]])));
            return h(Fragment, [
                wrappedTrigger,
                wrappedContent
            ]);
        };
    }
});

script$8.__file = "packages/components/trigger/src/trigger.vue";

const MTrigger = withInstall(script$8);

var script$7 = defineComponent({
    components: {
        MTrigger,
        MInput,
        MIcon
    },
    name: "MSelect",
    props: {
        placeholder: {
            type: String,
            default: "请选择"
        },
        modelValue: {
            type: [String, Number, Boolean]
        },
        multiple: Boolean,
        disabled: Boolean,
        size: {
            type: String,
            default: "medium"
        }
    },
    emits: [UPDATE_MODEL_EVENT, 'change'],
    setup(props, { emit, slots }) {
        const State = reactive({
            dropdownVisible: false,
            optionsMap: new Map(),
            hovered: false,
        });
        const displayLabel = computed(() => {
            const option = getOptionByValue(props.modelValue);
            if (option) {
                return option.cLabel;
            }
            else {
                return '';
            }
        });
        const showClearBtn = computed(() => {
            // return true;
            return State.hovered && (!!props.modelValue);
        });
        const getOptionByValue = (value) => {
            return State.optionsMap.get(value);
        };
        const toggleDropdownVisible = () => {
            State.dropdownVisible = !State.dropdownVisible;
        };
        const triggerChange = (val) => {
            if (val !== props.modelValue) {
                emit("change", val);
            }
        };
        const onOptionSelect = (optionProxy, bl) => {
            if (!props.multiple) {
                emit(UPDATE_MODEL_EVENT, optionProxy.value);
                triggerChange(optionProxy.value);
                State.dropdownVisible = false;
            }
        };
        const onOptionCreate = (optionProxy) => {
            State.optionsMap.set(optionProxy.value, optionProxy);
        };
        const onClear = () => {
            emit(UPDATE_MODEL_EVENT, '');
            triggerChange('');
        };
        provide(SELECT_KEY, reactive({
            props,
            onOptionSelect,
            onOptionCreate
        }));
        return {
            State,
            toggleDropdownVisible,
            displayLabel,
            showClearBtn,
            onClear
        };
        // const optionsSlots = slots.default?.();
        // const options = optionsSlots.map(i => cloneVNode(i));
        // return () => {
        //     return h('div',
        //         {
        //             class: [
        //                 'm-select',
        //                 {
        //                     'is--dropdown-open': State.dropdownVisible,
        //                     'is--disabled': props.disabled,
        //                     'is--multiple': props.multiple,
        //                 }
        //             ]
        //         },
        //         h(MTrigger,
        //             {
        //                 visible: State.dropdownVisible,
        //                 on: {
        //                     'update:visible': (val) => { State.dropdownVisible = val; }
        //                 },
        //                 popperOffset: [0, 5]
        //             },
        //             {
        //                 default: () => h(MInput,
        //                     {
        //                         modelValue: displayLabel.value,
        //                         readonly: true,
        //                         placeholder: props.placeholder,
        //                         onClick: toggleDropdownVisible
        //                     },
        //                     {
        //                         suffix: () => h(MIcon, {
        //                             class: 'm-select-arroww',
        //                             name: 'm-icon-arrow-down'
        //                         })
        //                     }
        //                 ),
        //                 content: () => h('ul',
        //                     {
        //                         class: 'm-select__dropdown',
        //                     },
        //                     optionsSlots
        //                 )
        //             }
        //         )
        //     )
        // }
    }
});

const _hoisted_1$4 = { class: "m-select__dropdown" };

function render$6(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_m_icon = resolveComponent("m-icon");
  const _component_m_input = resolveComponent("m-input");
  const _component_m_trigger = resolveComponent("m-trigger");

  return (openBlock(), createElementBlock("div", {
    class: normalizeClass([
            'm-select',
            {
                'is--dropdown-open': _ctx.State.dropdownVisible,
                'is--disabled': _ctx.disabled,
                'is--multiple': _ctx.multiple,
            }
        ]),
    onMouseenter: _cache[1] || (_cache[1] = () => _ctx.State.hovered = true),
    onMouseleave: _cache[2] || (_cache[2] = () => _ctx.State.hovered = false)
  }, [
    createVNode(_component_m_trigger, {
      visible: _ctx.State.dropdownVisible,
      "onUpdate:visible": _cache[0] || (_cache[0] = $event => ((_ctx.State.dropdownVisible) = $event)),
      "popper-offset": [0, 5]
    }, {
      content: withCtx(() => [
        createElementVNode("ul", _hoisted_1$4, [
          renderSlot(_ctx.$slots, "default")
        ])
      ]),
      default: withCtx(() => [
        createVNode(_component_m_input, {
          "model-value": _ctx.displayLabel,
          readonly: "",
          placeholder: _ctx.placeholder,
          onClick: _ctx.toggleDropdownVisible,
          clearable: _ctx.showClearBtn,
          onClear: _ctx.onClear,
          size: _ctx.size
        }, {
          suffix: withCtx(() => [
            withDirectives(createVNode(_component_m_icon, {
              class: "m-select-arrow",
              name: "m-icon-arrow-down"
            }, null, 512 /* NEED_PATCH */), [
              [vShow, !_ctx.showClearBtn]
            ])
          ]),
          _: 1 /* STABLE */
        }, 8 /* PROPS */, ["model-value", "placeholder", "onClick", "clearable", "onClear", "size"])
      ]),
      _: 3 /* FORWARDED */
    }, 8 /* PROPS */, ["visible"])
  ], 34 /* CLASS, HYDRATE_EVENTS */))
}

script$7.render = render$6;
script$7.__file = "packages/components/select/src/select.vue";

const MSelect = withInstall(script$7);

var script$6 = defineComponent({
    name: "MOption",
    props: {
        value: {
            type: [String, Number, Boolean]
        },
        label: [String, Number]
    },
    setup(props, { emit, slots }) {
        const proxy = getCurrentInstance().proxy;
        const select = inject(SELECT_KEY);
        const isActive = computed(() => {
            if (!select.props.multiple) {
                return isEqual(props.value, select.props.modelValue);
            }
        });
        select.onOptionCreate(proxy);
        const isEqual = (a, b) => {
            return a === b;
        };
        const cLabel = computed(() => {
            return props.label;
        });
        const handleClick = () => {
            select.onOptionSelect(proxy, true);
        };
        return {
            isActive,
            handleClick,
            cLabel
        };
    }
});

function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("li", {
    class: normalizeClass([
            'm-option',
            {
                'is--active': _ctx.isActive
            }
        ]),
    onClick: _cache[0] || (_cache[0] = withModifiers((...args) => (_ctx.handleClick && _ctx.handleClick(...args)), ["stop"]))
  }, [
    renderSlot(_ctx.$slots, "default", {}, () => [
      createTextVNode(toDisplayString(_ctx.label), 1 /* TEXT */)
    ])
  ], 2 /* CLASS */))
}

script$6.render = render$5;
script$6.__file = "packages/components/select/src/option.vue";

const MOption = withInstall(script$6);

var script$5 = defineComponent({
    name: "MTag",
    props: {
        size: {
            type: String,
            default: "medium"
        },
        state: {
            type: String,
            default: "secondary"
        },
        checked: {
            type: Boolean,
            default: false
        },
        checkable: Boolean
    },
    emits: ['update:checked', 'checked'],
    setup(props, { emit }) {
        const onClick = () => {
            if (!props.checkable)
                return;
            emit("update:checked", !props.checked);
        };
        return {
            onClick
        };
    }
});

function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("span", {
    class: normalizeClass([
            'm-tag',
            `m-tag--state-${_ctx.state}`,
            `m-tag--size-${_ctx.size}`,
            {
                'is--checked': _ctx.checked,
                'is--checkable': _ctx.checkable
            }
        ]),
    onClick: _cache[0] || (_cache[0] = (...args) => (_ctx.onClick && _ctx.onClick(...args)))
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2 /* CLASS */))
}

script$5.render = render$4;
script$5.__file = "packages/components/tag/src/tag.vue";

const MTag = withInstall(script$5);

var script$4 = defineComponent({
    name: "MLink",
    props: {
        underline: {
            type: [Boolean, String],
            default: 'hover'
        },
        state: {
            type: String,
            default: "primary"
        },
        disabled: Boolean,
        href: String,
        target: String
    }
});

const _hoisted_1$3 = ["href", "target"];
const _hoisted_2$2 = { class: "m-link__inner" };

function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("a", {
    class: normalizeClass([
            'm-link',
            `m-link--state-${_ctx.state}`,
            `${_ctx.underline === 'hover' ? 'm-link--underline-hover' : (_ctx.underline ? 'm-link--underline' : '')}`,
            {
                'is--disabled': _ctx.disabled
            }
        ]),
    href: _ctx.href,
    target: _ctx.target
  }, [
    createElementVNode("span", _hoisted_2$2, [
      renderSlot(_ctx.$slots, "default")
    ])
  ], 10 /* CLASS, PROPS */, _hoisted_1$3))
}

script$4.render = render$3;
script$4.__file = "packages/components/link/src/link.vue";

const MLink = withInstall(script$4);

var script$3 = defineComponent({
    props: {
        data: {
            type: Array,
            default: () => []
        },
        columns: Array
    }
});

const _hoisted_1$2 = { class: "m-table__header" };
const _hoisted_2$1 = ["width"];
const _hoisted_3$1 = { class: "m-tr" };

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("table", _hoisted_1$2, [
    createElementVNode("colgroup", null, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.columns, (column) => {
        return (openBlock(), createElementBlock("col", {
          key: column.prop,
          width: column.width
        }, null, 8 /* PROPS */, _hoisted_2$1))
      }), 128 /* KEYED_FRAGMENT */))
    ]),
    createElementVNode("thead", null, [
      createElementVNode("tr", _hoisted_3$1, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.columns, (column) => {
          return (openBlock(), createElementBlock("th", {
            class: "m-th",
            key: column.prop
          }, [
            createElementVNode("span", null, toDisplayString(column.label), 1 /* TEXT */)
          ]))
        }), 128 /* KEYED_FRAGMENT */))
      ])
    ])
  ]))
}

script$3.render = render$2;
script$3.__file = "packages/components/table/src/header/index.vue";

var script$2 = defineComponent({
    props: {
        data: {
            type: Array,
            default: () => []
        },
        columns: Array
    },
    setup(props) {
    }
});

const _hoisted_1$1 = { class: "m-table__body" };
const _hoisted_2 = ["width"];
const _hoisted_3 = { class: "m-tr" };
const _hoisted_4 = { class: "m-cell" };

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("table", _hoisted_1$1, [
    createElementVNode("colgroup", null, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.columns, (column) => {
        return (openBlock(), createElementBlock("col", {
          key: column.prop,
          width: column.width
        }, null, 8 /* PROPS */, _hoisted_2))
      }), 128 /* KEYED_FRAGMENT */))
    ]),
    createElementVNode("tbody", null, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.data, (i) => {
        return (openBlock(), createElementBlock("tr", _hoisted_3, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.columns, (column) => {
            return (openBlock(), createElementBlock("td", {
              class: "m-td",
              key: column.prop
            }, [
              createElementVNode("span", _hoisted_4, toDisplayString(i[column.prop]), 1 /* TEXT */)
            ]))
          }), 128 /* KEYED_FRAGMENT */))
        ]))
      }), 256 /* UNKEYED_FRAGMENT */))
    ])
  ]))
}

script$2.render = render$1;
script$2.__file = "packages/components/table/src/body/index.vue";

const useStyle = (props) => {
    const isFixedHeight = computed(() => !!props.height || props.height === 0);
    const height = ref(props.height);
    const style = reactive({
        height: isFixedHeight.value ? height.value + 'px' : ''
    });
    const headerHeight = ref(40);
    const headerWrapperStyle = reactive({
        height: isFixedHeight.value ? headerHeight.value + 'px' : ''
    });
    const bodyHeight = height.value - headerHeight.value;
    const bodyWrapperStyle = reactive({
        height: isFixedHeight.value ? bodyHeight + 'px' : ''
    });
    return {
        style,
        headerWrapperStyle,
        bodyWrapperStyle
    };
};
var script$1 = defineComponent({
    name: "MTable",
    components: {
        TableHeader: script$3,
        TableBody: script$2
    },
    props: {
        data: {
            type: Array,
            default: () => []
        },
        columns: Array,
        size: {
            type: String,
            default: "medium"
        },
        height: {
            type: Number,
        }
    },
    emits: [],
    setup(props, { emit }) {
        const headerWrapperRef = ref();
        const dataColumns = ref([]);
        const addColumn = (column) => {
            dataColumns.value.push(column);
        };
        const removeColumn = (column) => {
            dataColumns.value.splice(dataColumns.value.indexOf(column), 1);
        };
        provide(TABLE_KEY, {
            addColumn,
            removeColumn
        });
        const onBodyWrapperScroll = (e) => {
            const scrollLeft = e.target.scrollLeft;
            headerWrapperRef.value.scrollLeft = scrollLeft;
        };
        const { style, headerWrapperStyle, bodyWrapperStyle } = useStyle(props);
        return {
            headerWrapperRef,
            onBodyWrapperScroll,
            style,
            headerWrapperStyle,
            bodyWrapperStyle,
            dataColumns
        };
    }
});

const _hoisted_1 = { class: "m-table__container" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_table_header = resolveComponent("table-header");
  const _component_table_body = resolveComponent("table-body");

  return (openBlock(), createElementBlock("div", {
    class: normalizeClass([
        'm-table',
        `m-table--size-${_ctx.size}`
    ]),
    style: normalizeStyle(_ctx.style)
  }, [
    createElementVNode("div", _hoisted_1, [
      createElementVNode("div", {
        class: "m-table__header-wrapper",
        style: normalizeStyle(_ctx.headerWrapperStyle),
        ref: "headerWrapperRef"
      }, [
        createVNode(_component_table_header, {
          columns: _ctx.dataColumns,
          data: _ctx.data
        }, null, 8 /* PROPS */, ["columns", "data"])
      ], 4 /* STYLE */),
      createElementVNode("div", {
        class: "m-table__body-wrapper",
        style: normalizeStyle(_ctx.bodyWrapperStyle),
        onScroll: _cache[0] || (_cache[0] = (...args) => (_ctx.onBodyWrapperScroll && _ctx.onBodyWrapperScroll(...args)))
      }, [
        renderSlot(_ctx.$slots, "default"),
        createVNode(_component_table_body, {
          columns: _ctx.dataColumns,
          data: _ctx.data
        }, null, 8 /* PROPS */, ["columns", "data"])
      ], 36 /* STYLE, HYDRATE_EVENTS */)
    ])
  ], 6 /* CLASS, STYLE */))
}

script$1.render = render;
script$1.__file = "packages/components/table/src/table.vue";

const MTable = withInstall(script$1);

var script = defineComponent({
    name: "MTableColumn",
    props: {
        label: [String, Number],
        prop: [String, Number],
        width: [Number],
    },
    setup(props) {
        const table = inject(TABLE_KEY);
        const proxy = getCurrentInstance().proxy;
        onMounted(() => {
            table.addColumn(proxy);
        });
        onBeforeUnmount(() => {
            table.removeColumn(proxy);
        });
        return (proxy) => {
            return h('span');
        };
    }
});

script.__file = "packages/components/table/src/column.vue";

const MTableColumn = withInstall(script);

const components = [
    MButton,
    MIcon,
    MInput,
    MSpace,
    MRadio,
    MRadioGroup,
    MCheckbox,
    MCheckboxGroup,
    MTrigger,
    MSelect,
    MOption,
    MTag,
    MLink,
    MTable,
    MTableColumn
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
