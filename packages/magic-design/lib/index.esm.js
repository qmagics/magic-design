import { defineComponent, resolveComponent, openBlock, createElementBlock, normalizeClass, createCommentVNode, createBlock, createVNode, renderSlot, reactive, computed, createElementVNode, withModifiers, Fragment, isVNode, Comment, ref, watchEffect, inject, provide, toRef, Teleport, getCurrentInstance, watch, onMounted, onUpdated, resolveDirective, withCtx, withDirectives, normalizeStyle, vShow, createTextVNode, toDisplayString, renderList, onBeforeUnmount, resolveDynamicComponent, toRefs, Transition, render as render$n } from 'vue';

const withInstall = (main) => {
    main.install = (app) => {
        app.component(main.name, main);
    };
    return main;
};

var script$n = defineComponent({
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

const _hoisted_1$f = ["type", "autofocus"];
const _hoisted_2$a = {
  key: 0,
  class: "m-button-icon"
};
const _hoisted_3$8 = { key: 1 };

function render$m(_ctx, _cache, $props, $setup, $data, $options) {
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
      ? (openBlock(), createElementBlock("span", _hoisted_2$a, [
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
      ? (openBlock(), createElementBlock("span", _hoisted_3$8, [
          renderSlot(_ctx.$slots, "default")
        ]))
      : createCommentVNode("v-if", true)
  ], 10 /* CLASS, PROPS */, _hoisted_1$f))
}

script$n.render = render$m;
script$n.__file = "packages/components/button/src/button.vue";

const Button = withInstall(script$n);

var script$m = defineComponent({
    name: "MIcon",
    props: {
        name: String,
    },
    setup() { },
});

function render$l(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("i", {
    class: normalizeClass(_ctx.name)
  }, null, 2 /* CLASS */))
}

script$m.render = render$l;
script$m.__file = "packages/components/icon/src/icon.vue";

const Icon = withInstall(script$m);

const UPDATE_MODEL_EVENT = 'update:modelValue';
const RADIO_GROUP_KEY = Symbol("radioGroup");
const CHECKBOX_GROUP_KEY = Symbol("checkboxGroup");
const SELECT_KEY = Symbol("select");
const TABLE_KEY = Symbol("table");
const UPLOADER_KEY = Symbol("uploader");

var script$l = defineComponent({
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

const _hoisted_1$e = {
  key: 0,
  class: "m-input__prepend"
};
const _hoisted_2$9 = {
  key: 1,
  class: "m-input__prefix"
};
const _hoisted_3$7 = ["placeholder", "disabled", "readonly", "value", "type"];
const _hoisted_4$3 = {
  key: 2,
  class: "m-input__suffix"
};
const _hoisted_5$2 = {
  key: 3,
  class: "m-input__append"
};

function render$k(_ctx, _cache, $props, $setup, $data, $options) {
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
      ? (openBlock(), createElementBlock("span", _hoisted_1$e, [
          renderSlot(_ctx.$slots, "prepend")
        ]))
      : createCommentVNode("v-if", true),
    (_ctx.$slots.prefix)
      ? (openBlock(), createElementBlock("span", _hoisted_2$9, [
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
    }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_3$7),
    (_ctx.hasSuffix)
      ? (openBlock(), createElementBlock("span", _hoisted_4$3, [
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
      ? (openBlock(), createElementBlock("span", _hoisted_5$2, [
          renderSlot(_ctx.$slots, "append")
        ]))
      : createCommentVNode("v-if", true)
  ], 2 /* CLASS */))
}

script$l.render = render$k;
script$l.__file = "packages/components/input/src/input.vue";

const Input = withInstall(script$l);

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
const blobToDataUrl = (blob) => {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onload = (e) => {
            resolve(e.target.result);
        };
    });
};
const getUID = (prefix = '', affix = '') => {
    return `${prefix}${Date.now()}${affix}`;
};

const GUTTER_MAP = {
    mini: 5,
    small: 8,
    medium: 10,
    large: 12
};
var script$k = defineComponent({
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
                            }, {
                                default: () => [i],
                            }));
                        });
                    }
                    // 不是注释节点，不是片段，才解析
                    else if (isValidElementNode(child)) {
                        wrapedItems.push(createVNode("div", {
                            key: `MSpaceItem_${index}`,
                            class: spaceItemClass.value,
                            style: spaceItemStyle.value
                        }, {
                            default: () => [child],
                        }));
                    }
                });
                return createVNode('div', {
                    class: spaceClass.value,
                }, wrapedItems);
            }
            else {
                return children;
            }
        };
    },
});

script$k.__file = "packages/components/space/src/space.vue";

const Space = withInstall(script$k);

var script$j = defineComponent({
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

const _hoisted_1$d = ["disabled", "value", "name", "checked"];
const _hoisted_2$8 = /*#__PURE__*/createElementVNode("span", { class: "m-radio__icon" }, null, -1 /* HOISTED */);
const _hoisted_3$6 = { class: "m-radio__label" };

function render$j(_ctx, _cache, $props, $setup, $data, $options) {
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
    }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_1$d),
    _hoisted_2$8,
    createElementVNode("span", _hoisted_3$6, [
      renderSlot(_ctx.$slots, "default")
    ])
  ], 2 /* CLASS */))
}

script$j.render = render$j;
script$j.__file = "packages/components/radio/src/radio.vue";

const Radio = withInstall(script$j);

var script$i = defineComponent({
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

const _hoisted_1$c = { class: "m-radio-group" };

function render$i(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", _hoisted_1$c, [
    renderSlot(_ctx.$slots, "default")
  ]))
}

script$i.render = render$i;
script$i.__file = "packages/components/radio/src/radio-group.vue";

const RadioGroup = withInstall(script$i);

var script$h = defineComponent({
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

const _hoisted_1$b = ["disabled", "value", "name", "checked"];
const _hoisted_2$7 = /*#__PURE__*/createElementVNode("span", { class: "m-checkbox__icon" }, null, -1 /* HOISTED */);
const _hoisted_3$5 = { class: "m-checkbox__label" };

function render$h(_ctx, _cache, $props, $setup, $data, $options) {
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
    }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_1$b),
    _hoisted_2$7,
    createElementVNode("span", _hoisted_3$5, [
      renderSlot(_ctx.$slots, "default")
    ])
  ], 2 /* CLASS */))
}

script$h.render = render$h;
script$h.__file = "packages/components/checkbox/src/checkbox.vue";

const Checkbox = withInstall(script$h);

var script$g = defineComponent({
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

const _hoisted_1$a = { class: "m-checkbox-group" };

function render$g(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", _hoisted_1$a, [
    renderSlot(_ctx.$slots, "default")
  ]))
}

script$g.render = render$g;
script$g.__file = "packages/components/checkbox/src/checkbox-group.vue";

const CheckboxGroup = withInstall(script$g);

var script$f = defineComponent({
    name: "MTeleport",
});

function render$f(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock(Teleport, { to: "body" }, [
    renderSlot(_ctx.$slots, "default")
  ]))
}

script$f.render = render$f;
script$f.__file = "packages/components/trigger/src/teleport.vue";

/* istanbul ignore next */
const on = function (element, event, handler, useCapture = false) {
    if (element && event && handler) {
        element?.addEventListener(event, handler, useCapture);
    }
};

const nodeList = new Map();
let startClick;
on(document, 'mousedown', (e) => (startClick = e));
on(document, 'mouseup', (e) => {
    for (const handlers of nodeList.values()) {
        for (const { documentHandler } of handlers) {
            documentHandler(e, startClick);
        }
    }
});
function createDocumentHandler(el, binding) {
    let excludes = [];
    if (Array.isArray(binding.arg)) {
        excludes = binding.arg;
    }
    else if (binding.arg instanceof HTMLElement) {
        // due to current implementation on binding type is wrong the type casting is necessary here
        excludes.push(binding.arg);
    }
    return function (mouseup, mousedown) {
        const popperRef = binding.instance.popperRef;
        const mouseUpTarget = mouseup.target;
        const mouseDownTarget = mousedown?.target;
        const isBound = !binding || !binding.instance;
        const isTargetExists = !mouseUpTarget || !mouseDownTarget;
        const isContainedByEl = el.contains(mouseUpTarget) || el.contains(mouseDownTarget);
        const isSelf = el === mouseUpTarget;
        const isTargetExcluded = (excludes.length &&
            excludes.some((item) => item?.contains(mouseUpTarget))) ||
            (excludes.length && excludes.includes(mouseDownTarget));
        const isContainedByPopper = popperRef &&
            (popperRef.contains(mouseUpTarget) || popperRef.contains(mouseDownTarget));
        if (isBound ||
            isTargetExists ||
            isContainedByEl ||
            isSelf ||
            isTargetExcluded ||
            isContainedByPopper) {
            return;
        }
        binding.value(mouseup, mousedown);
    };
}
const ClickOutside = {
    beforeMount(el, binding) {
        // there could be multiple handlers on the element
        if (!nodeList.has(el)) {
            nodeList.set(el, []);
        }
        nodeList.get(el).push({
            documentHandler: createDocumentHandler(el, binding),
            bindingFn: binding.value,
        });
    },
    updated(el, binding) {
        if (!nodeList.has(el)) {
            nodeList.set(el, []);
        }
        const handlers = nodeList.get(el);
        const oldHandlerIndex = handlers.findIndex((item) => item.bindingFn === binding.oldValue);
        const newHandler = {
            documentHandler: createDocumentHandler(el, binding),
            bindingFn: binding.value,
        };
        if (oldHandlerIndex >= 0) {
            // replace the old handler to the new handler
            handlers.splice(oldHandlerIndex, 1, newHandler);
        }
        else {
            handlers.push(newHandler);
        }
    },
    unmounted(el) {
        // remove all listeners when a component unmounted
        nodeList.delete(el);
    },
};

const useContentLayout = (props, triggerRef) => {
    const instance = getCurrentInstance();
    const contentVisible = ref(props.visible);
    const contentStyle = reactive({
        left: '',
        top: '',
        width: ''
    });
    const refreshContentPosition = () => {
        const containerEl = triggerRef.value;
        const { width, height } = containerEl?.getBoundingClientRect();
        const top = containerEl.offsetTop;
        const left = containerEl.offsetLeft;
        const [offsetX, offsetY] = props.popperOffset;
        contentStyle.width = width + 'px';
        contentStyle.left = left + (offsetX || 0) + 'px';
        contentStyle.top = top + (offsetY || 0) + height + 'px';
    };
    const clickoutsideOptions = {
        args: computed(() => {
            return [triggerRef.value];
        }),
        handler: () => {
            contentVisible.value = false;
            instance.emit("update:visible", false);
        }
    };
    watch(() => props.visible, (val) => {
        contentVisible.value = val;
        refreshContentPosition();
    });
    onMounted(() => {
        refreshContentPosition();
    });
    onUpdated(() => {
        if (contentVisible.value) {
            refreshContentPosition();
        }
    });
    return {
        contentVisible,
        contentStyle,
        clickoutsideOptions
    };
};
var script$e = defineComponent({
    name: "MTrigger",
    components: {
        MTeleport: script$f
    },
    directives: {
        clickoutside: ClickOutside
    },
    props: {
        popperOffset: {
            type: Array,
            default: () => []
        },
        visible: Boolean
    },
    emits: ['update:visible'],
    setup(props, { emit }) {
        const triggerRef = ref();
        const { contentVisible, contentStyle, clickoutsideOptions } = useContentLayout(props, triggerRef);
        const onTriggerClick = () => {
            contentVisible.value = !contentVisible.value;
            emit("update:visible", contentVisible.value);
        };
        return {
            contentVisible,
            triggerRef,
            onTriggerClick,
            contentStyle,
            clickoutsideOptions
        };
    }
});

function render$e(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_MTeleport = resolveComponent("MTeleport");
  const _directive_clickoutside = resolveDirective("clickoutside");

  return (openBlock(), createElementBlock(Fragment, null, [
    createElementVNode("div", {
      ref: "triggerRef",
      class: "m-trigger__trigger",
      onClick: _cache[0] || (_cache[0] = (...args) => (_ctx.onTriggerClick && _ctx.onTriggerClick(...args)))
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 512 /* NEED_PATCH */),
    createVNode(_component_MTeleport, null, {
      default: withCtx(() => [
        withDirectives(createElementVNode("div", {
          class: "m-trigger__content",
          style: normalizeStyle(_ctx.contentStyle)
        }, [
          renderSlot(_ctx.$slots, "content")
        ], 4 /* STYLE */), [
          [vShow, _ctx.contentVisible],
          [_directive_clickoutside, _ctx.clickoutsideOptions.handler, _ctx.clickoutsideOptions.args.value]
        ])
      ]),
      _: 3 /* FORWARDED */
    })
  ], 64 /* STABLE_FRAGMENT */))
}

script$e.render = render$e;
script$e.__file = "packages/components/trigger/src/trigger.vue";

const Trigger = withInstall(script$e);

var script$d = defineComponent({
    components: {
        MTrigger: Trigger,
        MInput: Input,
        MIcon: Icon
    },
    directives: {
        clickoutside: ClickOutside
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

const _hoisted_1$9 = { class: "m-select__dropdown" };

function render$d(_ctx, _cache, $props, $setup, $data, $options) {
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
        createElementVNode("ul", _hoisted_1$9, [
          renderSlot(_ctx.$slots, "default")
        ])
      ]),
      default: withCtx(() => [
        createVNode(_component_m_input, {
          "model-value": _ctx.displayLabel,
          readonly: "",
          placeholder: _ctx.placeholder,
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
        }, 8 /* PROPS */, ["model-value", "placeholder", "clearable", "onClear", "size"])
      ]),
      _: 3 /* FORWARDED */
    }, 8 /* PROPS */, ["visible"])
  ], 34 /* CLASS, HYDRATE_EVENTS */))
}

script$d.render = render$d;
script$d.__file = "packages/components/select/src/select.vue";

const Select = withInstall(script$d);

var script$c = defineComponent({
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

function render$c(_ctx, _cache, $props, $setup, $data, $options) {
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

script$c.render = render$c;
script$c.__file = "packages/components/select/src/option.vue";

const Option = withInstall(script$c);

var script$b = defineComponent({
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

function render$b(_ctx, _cache, $props, $setup, $data, $options) {
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

script$b.render = render$b;
script$b.__file = "packages/components/tag/src/tag.vue";

const Tag = withInstall(script$b);

var script$a = defineComponent({
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

const _hoisted_1$8 = ["href", "target"];
const _hoisted_2$6 = { class: "m-link__inner" };

function render$a(_ctx, _cache, $props, $setup, $data, $options) {
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
    createElementVNode("span", _hoisted_2$6, [
      renderSlot(_ctx.$slots, "default")
    ])
  ], 10 /* CLASS, PROPS */, _hoisted_1$8))
}

script$a.render = render$a;
script$a.__file = "packages/components/link/src/link.vue";

const Link = withInstall(script$a);

var script$9 = defineComponent({
    props: {
        data: {
            type: Array,
            default: () => []
        },
        columns: Array
    }
});

const _hoisted_1$7 = { class: "m-table__header" };
const _hoisted_2$5 = ["width"];
const _hoisted_3$4 = { class: "m-table-tr" };

function render$9(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("table", _hoisted_1$7, [
    createElementVNode("colgroup", null, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.columns, (column) => {
        return (openBlock(), createElementBlock("col", {
          key: column.prop,
          width: column.width
        }, null, 8 /* PROPS */, _hoisted_2$5))
      }), 128 /* KEYED_FRAGMENT */))
    ]),
    createElementVNode("thead", null, [
      createElementVNode("tr", _hoisted_3$4, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.columns, (column) => {
          return (openBlock(), createElementBlock("th", {
            class: normalizeClass([
                        'm-table-th',
                        `m-table-th--align-${column.align || 'left'}`
                    ]),
            key: column.prop
          }, [
            createElementVNode("span", null, toDisplayString(column.label), 1 /* TEXT */)
          ], 2 /* CLASS */))
        }), 128 /* KEYED_FRAGMENT */))
      ])
    ])
  ]))
}

script$9.render = render$9;
script$9.__file = "packages/components/table/src/header/index.vue";

var TableCell = defineComponent({
    props: {
        render: {
            type: Function,
        },
        renderContext: {
            type: Object
        }
    },
    setup(props, { slots }) {
        if (props.render) {
            return (proxy) => {
                const vnode = props.render(props.renderContext);
                return vnode;
            };
        }
        else if (slots.default) {
            return (proxy) => slots.default();
        }
    }
});

var script$8 = defineComponent({
    components: {
        TableCell
    },
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

const _hoisted_1$6 = { class: "m-table__body" };
const _hoisted_2$4 = ["width"];
const _hoisted_3$3 = { class: "m-table-tr" };

function render$8(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_table_cell = resolveComponent("table-cell");

  return (openBlock(), createElementBlock("table", _hoisted_1$6, [
    createElementVNode("colgroup", null, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.columns, (column) => {
        return (openBlock(), createElementBlock("col", {
          key: column.prop,
          width: column.width
        }, null, 8 /* PROPS */, _hoisted_2$4))
      }), 128 /* KEYED_FRAGMENT */))
    ]),
    createElementVNode("tbody", null, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.data, (i, rowIndex) => {
        return (openBlock(), createElementBlock("tr", _hoisted_3$3, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.columns, (column, columnIndex) => {
            return (openBlock(), createElementBlock("td", {
              class: normalizeClass([
                        'm-table-td',
                        `m-table-td--align-${column.align || 'left'}`
                    ]),
              key: column.prop
            }, [
              createVNode(_component_table_cell, {
                render: column.render,
                "render-context": { row: i, value: i[column.prop], column, rowIndex, columnIndex }
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(i[column.prop]), 1 /* TEXT */)
                ]),
                _: 2 /* DYNAMIC */
              }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["render", "render-context"])
            ], 2 /* CLASS */))
          }), 128 /* KEYED_FRAGMENT */))
        ]))
      }), 256 /* UNKEYED_FRAGMENT */))
    ])
  ]))
}

script$8.render = render$8;
script$8.__file = "packages/components/table/src/body/index.vue";

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
const useColumns = (props) => {
    const isUseColumnSlots = computed(() => !props.columns?.length);
    const dataColumns = ref(props.columns || []);
    watch(isUseColumnSlots, (value, oldValue) => {
        if (value === false) {
            dataColumns.value = props.columns;
        }
    });
    const addColumn = (column) => {
        if (isUseColumnSlots.value === false)
            return;
        dataColumns.value.push(column);
    };
    const removeColumn = (column) => {
        if (isUseColumnSlots.value === false)
            return;
        dataColumns.value.splice(dataColumns.value.indexOf(column), 1);
    };
    provide(TABLE_KEY, {
        addColumn,
        removeColumn
    });
    return {
        dataColumns
    };
};
const useScroll = () => {
    const headerWrapperRef = ref();
    const onBodyWrapperScroll = (e) => {
        const scrollLeft = e.target.scrollLeft;
        headerWrapperRef.value.scrollLeft = scrollLeft;
    };
    return {
        headerWrapperRef,
        onBodyWrapperScroll
    };
};
var script$7 = defineComponent({
    name: "MTable",
    components: {
        TableHeader: script$9,
        TableBody: script$8,
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
    setup(props) {
        const { dataColumns } = useColumns(props);
        const { style, headerWrapperStyle, bodyWrapperStyle } = useStyle(props);
        const { headerWrapperRef, onBodyWrapperScroll } = useScroll();
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

const _hoisted_1$5 = { class: "m-table__container" };

function render$7(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_table_header = resolveComponent("table-header");
  const _component_table_body = resolveComponent("table-body");

  return (openBlock(), createElementBlock("div", {
    class: normalizeClass([
        'm-table',
        `m-table--size-${_ctx.size}`
    ]),
    style: normalizeStyle(_ctx.style)
  }, [
    createElementVNode("div", _hoisted_1$5, [
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

script$7.render = render$7;
script$7.__file = "packages/components/table/src/table.vue";

const Table = withInstall(script$7);

var script$6 = defineComponent({
    name: "MTableColumn",
    props: {
        label: [String, Number],
        prop: [String, Number],
        width: [Number],
    },
    setup(props, { slots }) {
        const table = inject(TABLE_KEY);
        const proxy = getCurrentInstance().proxy;
        const render = slots.default ? (context) => {
            return slots.default(context);
        } : undefined;
        onMounted(() => {
            table.addColumn(proxy);
        });
        onBeforeUnmount(() => {
            table.removeColumn(proxy);
        });
        return {
            render
        };
    }
});

function render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("span"))
}

script$6.render = render$6;
script$6.__file = "packages/components/table/src/column.vue";

const TableColumn = withInstall(script$6);

const ajax = (options) => {
    return new Promise((resolve, reject) => {
        const { fileItem, method, url, name, onSuccess, onError } = options;
        const xhr = new XMLHttpRequest();
        xhr.onload = function () {
            const data = JSON.parse(xhr.responseText);
            onSuccess && onSuccess(data);
            resolve(data);
        };
        xhr.onerror = function (e) {
            onError && onError(e);
            reject("请求失败");
        };
        xhr.open(method, url, true);
        const data = new FormData();
        const key = typeof name === 'string' ? name : name(fileItem);
        data.append(key, fileItem.file, fileItem.name);
        xhr.send();
    });
};

const isImage = (file) => {
    return file.type?.includes('image');
};

const STATUS_ICON_MAP = {
    'pending': 'm-icon-loading',
    'done': 'm-icon-check-o',
    'error': 'm-icon-error-o',
    'init': ''
};
var useItem = (props) => {
    const uploader = inject(UPLOADER_KEY);
    const removeFile = () => {
        uploader.removeFileById(props.fileItem.id);
    };
    const stateIconClass = computed(() => {
        return STATUS_ICON_MAP[props.fileItem.status];
    });
    const fileIconClass = computed(() => {
        if (!props.fileItem?.file) {
            return 'm-icon-file';
        }
        return isImage(props.fileItem.file) ? 'm-icon-image' : 'm-icon-file';
    });
    return {
        removeFile,
        stateIconClass,
        fileIconClass
    };
};

var script$5 = defineComponent({
    props: {
        fileItem: {
            type: Object,
        },
        listType: {
            type: String,
            default: 'img-card'
        }
    },
    setup(props) {
        const { removeFile, stateIconClass, fileIconClass } = useItem(props);
        return {
            removeFile,
            stateIconClass,
            fileIconClass
        };
    }
});

const _hoisted_1$4 = ["src"];
const _hoisted_2$3 = ["title"];
const _hoisted_3$2 = { class: "m-uploader-item__title-text" };
const _hoisted_4$2 = { class: "m-uploader-item__toolbox" };
const _hoisted_5$1 = {
  key: 2,
  class: "m-uploader-item__loading"
};
const _hoisted_6$1 = /*#__PURE__*/createElementVNode("i", { class: "m-icon-loading" }, null, -1 /* HOISTED */);
const _hoisted_7 = [
  _hoisted_6$1
];

function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", {
    class: normalizeClass([
            `m-uploader-item`,
            `m-uploader-item--status-${_ctx.fileItem.status}`
        ])
  }, [
    (_ctx.listType === 'img-card')
      ? (openBlock(), createElementBlock("img", {
          key: 0,
          class: "m-uploader-item__img",
          src: _ctx.fileItem.url
        }, null, 8 /* PROPS */, _hoisted_1$4))
      : (_ctx.listType === 'text-card')
        ? (openBlock(), createElementBlock("div", {
            key: 1,
            class: "m-uploader-item__title",
            title: _ctx.fileItem.name
          }, [
            createElementVNode("i", {
              class: normalizeClass([_ctx.fileIconClass, 'm-uploader-item__title-icon'])
            }, null, 2 /* CLASS */),
            createElementVNode("span", _hoisted_3$2, toDisplayString(_ctx.fileItem.name), 1 /* TEXT */)
          ], 8 /* PROPS */, _hoisted_2$3))
        : createCommentVNode("v-if", true),
    createElementVNode("div", _hoisted_4$2, [
      createElementVNode("i", {
        class: "m-icon-delete",
        onClick: _cache[0] || (_cache[0] = (...args) => (_ctx.removeFile && _ctx.removeFile(...args)))
      })
    ]),
    (_ctx.fileItem.status==='pending')
      ? (openBlock(), createElementBlock("div", _hoisted_5$1, _hoisted_7))
      : createCommentVNode("v-if", true)
  ], 2 /* CLASS */))
}

script$5.render = render$5;
script$5.__file = "packages/components/uploader/src/item-card.vue";

var script$4 = defineComponent({
    props: {
        fileItem: {
            type: Object,
            required: true
        },
        listType: {
            type: String,
            default: 'text'
        }
    },
    setup(props) {
        const { removeFile, stateIconClass, fileIconClass } = useItem(props);
        return {
            removeFile,
            stateIconClass,
            fileIconClass
        };
    }
});

const _hoisted_1$3 = { class: "m-uploader-item__info" };
const _hoisted_2$2 = ["src"];
const _hoisted_3$1 = { class: "info-text" };
const _hoisted_4$1 = { class: "m-uploader-item__toolbar" };
const _hoisted_5 = /*#__PURE__*/createElementVNode("i", { class: "m-icon-delete" }, null, -1 /* HOISTED */);
const _hoisted_6 = [
  _hoisted_5
];

function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", {
    class: normalizeClass([
        `m-uploader-item`,
        `m-uploader-item--status-${_ctx.fileItem.status}`
    ])
  }, [
    createElementVNode("div", _hoisted_1$3, [
      (_ctx.listType === 'text')
        ? (openBlock(), createElementBlock("i", {
            key: 0,
            class: normalizeClass([_ctx.fileIconClass, 'info-icon'])
          }, null, 2 /* CLASS */))
        : (_ctx.listType === 'img')
          ? (openBlock(), createElementBlock("img", {
              key: 1,
              class: "m-uploader-item__img",
              src: _ctx.fileItem.url
            }, null, 8 /* PROPS */, _hoisted_2$2))
          : createCommentVNode("v-if", true),
      createElementVNode("span", _hoisted_3$1, toDisplayString(_ctx.fileItem.name), 1 /* TEXT */)
    ]),
    createElementVNode("div", _hoisted_4$1, [
      createElementVNode("i", {
        class: normalizeClass([_ctx.stateIconClass, 'm-uploader-status-icon'])
      }, null, 2 /* CLASS */),
      createElementVNode("span", {
        class: "m-uploader-icon-btn btn-remove",
        onClick: _cache[0] || (_cache[0] = (...args) => (_ctx.removeFile && _ctx.removeFile(...args)))
      }, _hoisted_6)
    ])
  ], 2 /* CLASS */))
}

script$4.render = render$4;
script$4.__file = "packages/components/uploader/src/item-text.vue";

var script$3 = defineComponent({
    props: {
        fileItems: {
            type: Array,
            default: () => []
        },
        listType: {
            type: String,
            default: 'text'
        }
    },
    setup(props) {
        const uploader = inject(UPLOADER_KEY);
        const ItemComp = computed(() => {
            return props.listType.includes('card') ? script$5 : script$4;
        });
        const chooseFile = uploader.chooseFile;
        const hasUploadBtn = computed(() => {
            return props.listType.includes('card') && !uploader.disabled;
        });
        return {
            ItemComp,
            chooseFile,
            hasUploadBtn
        };
    }
});

const _hoisted_1$2 = /*#__PURE__*/createElementVNode("i", { class: "m-icon-plus" }, null, -1 /* HOISTED */);
const _hoisted_2$1 = [
  _hoisted_1$2
];

function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", {
    class: normalizeClass([
        'm-uploader-list',
        `m-uploader-list--${_ctx.listType}`
    ])
  }, [
    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.fileItems, (fileItem, index) => {
      return (openBlock(), createBlock(resolveDynamicComponent(_ctx.ItemComp), {
        key: index,
        fileItem: fileItem,
        listType: _ctx.listType
      }, null, 8 /* PROPS */, ["fileItem", "listType"]))
    }), 128 /* KEYED_FRAGMENT */)),
    (_ctx.hasUploadBtn)
      ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "m-uploader-item-trigger",
          onClick: _cache[0] || (_cache[0] = (...args) => (_ctx.chooseFile && _ctx.chooseFile(...args)))
        }, _hoisted_2$1))
      : createCommentVNode("v-if", true)
  ], 2 /* CLASS */))
}

script$3.render = render$3;
script$3.__file = "packages/components/uploader/src/file-list.vue";

var script$2 = defineComponent({
    name: "MUploader",
    components: {
        FileList: script$3
    },
    props: {
        action: {
            required: true,
            type: String
        },
        fileList: {
            type: Array,
            default: () => []
        },
        listType: {
            type: String,
            default: 'text'
        },
        disabled: {
            type: Boolean,
            default: false
        },
        multiple: {
            type: Boolean,
            default: true
        },
        accept: {
            type: String,
            default: "*"
        },
        autoUpload: {
            type: Boolean,
            default: true
        },
        request: {
            type: Function,
            default: ajax
        },
        tip: String
    },
    emits: ['update:file-list', 'change'],
    setup(props, { emit }) {
        const inputRef = ref(null);
        const fileItems = ref();
        const normalizeFileItems = (items) => {
            const list = items.map((item, index) => {
                const status = item.status || 'done';
                return {
                    ...item,
                    id: item.id || getUID(index),
                    status,
                    percent: item.percent ?? (['error', 'init'].indexOf(status) > -1 ? 0 : 1)
                };
            });
            fileItems.value = list;
        };
        normalizeFileItems(props.fileList);
        watch(() => props.fileList, newList => {
            if (newList) {
                normalizeFileItems(newList);
            }
        }, { deep: true, immediate: true });
        // 是否显示上传按钮
        const showButtonTrigger = computed(() => {
            return !props.listType.includes('card');
        });
        // 选择文件
        const chooseFile = () => {
            if (!props.disabled) {
                inputRef.value.value = null;
                inputRef.value.click();
            }
        };
        // file-input文件变更
        const handleInputChange = async (e) => {
            const files = e.target.files;
            [...files].forEach((file, index) => {
                initFile(file, index);
            });
        };
        // 初始化文件
        const initFile = async (file, index) => {
            const item = await createFileItem(file, index);
            fileItems.value.push(item);
            emitUpdate(item);
            if (props.autoUpload) {
                uploadFile(item);
            }
        };
        // 根据file对象创建FileItem
        const createFileItem = async (file, index) => {
            return reactive({
                id: getUID(index),
                file,
                name: file.name,
                url: isImage(file) ? await blobToDataUrl(file) : undefined,
                response: '',
                percent: 0,
                status: 'init'
            });
        };
        // 触发更新
        const emitUpdate = (fileItem) => {
            const newValue = fileItems.value;
            emit("update:file-list", newValue, fileItem);
            emit("change", newValue);
        };
        // 上传单个文件
        const uploadFile = (fileItem, index) => {
            fileItem.status = 'pending';
            props.request({
                method: 'post',
                url: props.action,
                fileItem: fileItem,
                name: "file"
            })
                .then((res) => {
                fileItem = getFileItemById(fileItem.id);
                fileItem.status = 'done';
                fileItem.response = res;
            })
                .catch(err => {
                fileItem.status = 'error';
                fileItem.response = err;
            });
        };
        const getFileItemById = (id) => {
            return fileItems.value.find(i => i.id === id);
        };
        // 删除文件
        const removeFileById = (id) => {
            const fileItem = getFileItemById(id);
            if (fileItem) {
                const index = fileItems.value.indexOf(fileItem);
                fileItems.value.splice(index, 1);
            }
        };
        // provide
        provide(UPLOADER_KEY, reactive({
            ...toRefs(props),
            removeFileById,
            chooseFile,
        }));
        return {
            inputRef,
            fileItems,
            chooseFile,
            handleInputChange,
            showButtonTrigger
        };
    },
});

const _hoisted_1$1 = {
  class: /*#__PURE__*/normalizeClass([
    'm-uploader'
  ])
};
const _hoisted_2 = /*#__PURE__*/createTextVNode("点击上传");
const _hoisted_3 = ["multiple", "accept"];
const _hoisted_4 = {
  key: 0,
  class: "m-uploader__tip"
};

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_m_button = resolveComponent("m-button");
  const _component_FileList = resolveComponent("FileList");

  return (openBlock(), createElementBlock("div", _hoisted_1$1, [
    withDirectives(createElementVNode("div", {
      class: "m-uploader__trigger",
      onClick: _cache[1] || (_cache[1] = (...args) => (_ctx.chooseFile && _ctx.chooseFile(...args)))
    }, [
      renderSlot(_ctx.$slots, "trigger", {}, () => [
        createVNode(_component_m_button, {
          type: "primary",
          disabled: _ctx.disabled
        }, {
          default: withCtx(() => [
            _hoisted_2
          ]),
          _: 1 /* STABLE */
        }, 8 /* PROPS */, ["disabled"])
      ]),
      createElementVNode("input", {
        class: "m-uploader-input",
        type: "file",
        multiple: _ctx.multiple,
        accept: _ctx.accept,
        ref: "inputRef",
        onChange: _cache[0] || (_cache[0] = (...args) => (_ctx.handleInputChange && _ctx.handleInputChange(...args)))
      }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_3)
    ], 512 /* NEED_PATCH */), [
      [vShow, _ctx.showButtonTrigger]
    ]),
    (_ctx.tip)
      ? (openBlock(), createElementBlock("div", _hoisted_4, toDisplayString(_ctx.tip), 1 /* TEXT */))
      : createCommentVNode("v-if", true),
    createVNode(_component_FileList, {
      "file-items": _ctx.fileItems,
      listType: _ctx.listType
    }, null, 8 /* PROPS */, ["file-items", "listType"])
  ]))
}

script$2.render = render$2;
script$2.__file = "packages/components/uploader/src/uploader.vue";

const Uploader = withInstall(script$2);

var throttle = (fn, wait) => {
    let timer = null;
    let pending = false;
    return function () {
        if (pending === true)
            return;
        pending = true;
        timer = setTimeout(() => {
            fn.apply(this, arguments);
            pending = false;
            clearTimeout(timer);
            timer = null;
        }, wait);
    };
};
// export default (fn: Function, wait: number) => {
//     let preTime = 0;
//     return function () {
//         let now = Date.now();
//         if (now - preTime > wait) {
//             fn.apply(this, arguments);
//             preTime = now;
//         }
//     }
// }

var script$1 = defineComponent({
    name: "MVlist",
    props: {
        /**
         * 显示的项
         */
        items: {
            type: Array,
            default: () => []
        },
        height: {
            type: Number,
            required: true
        },
        size: {
            type: Number,
            required: true,
            default: 40
        },
        preloadCount: {
            type: Number,
            default: 5
        }
    },
    setup(props) {
        const listRef = ref();
        const scrollbarRef = ref();
        const contentRef = ref();
        // 可视区能展示的数量
        const visibleCount = computed(() => {
            return Math.floor(props.height / props.size);
        });
        // 可见数据开始的索引
        const start = ref(0);
        // 可见数据结束的索引
        const end = computed(() => {
            return start.value + visibleCount.value;
        });
        // 前面预留的数量
        const prevCount = computed(() => Math.min(props.preloadCount, start.value));
        // 后面预留的数量
        const nextCount = computed(() => Math.min(props.preloadCount, props.items.length - end.value));
        // 可见的项
        const visibleItems = computed(() => {
            const _start = start.value - prevCount.value;
            const _end = end.value + nextCount.value;
            return props.items.slice(_start, _end);
        });
        const styles = computed(() => {
            return {
                height: props.height + 'px'
            };
        });
        const scrollbarStyle = computed(() => {
            return {
                height: props.size * props.items.length + 'px'
            };
        });
        const contentStyle = computed(() => {
            return {
                transform: `translate3d(0,${(start.value - prevCount.value) * props.size + 'px'},0)`
            };
        });
        const onScroll = throttle(() => {
            const scrollTop = listRef.value.scrollTop;
            start.value = Math.ceil(scrollTop / props.size);
        }, 200);
        return {
            visibleItems,
            styles,
            scrollbarStyle,
            contentStyle,
            onScroll,
            listRef,
            scrollbarRef,
            contentRef,
        };
    }
});

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", {
    class: "m-vlist",
    style: normalizeStyle(_ctx.styles),
    onScroll: _cache[0] || (_cache[0] = (...args) => (_ctx.onScroll && _ctx.onScroll(...args))),
    ref: "listRef"
  }, [
    createElementVNode("div", {
      class: "m-vlist__scrollbar",
      style: normalizeStyle(_ctx.scrollbarStyle),
      ref: "scrollbarRef"
    }, null, 4 /* STYLE */),
    createElementVNode("div", {
      class: "m-vlist__content",
      ref: "contentRef",
      style: normalizeStyle(_ctx.contentStyle)
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.visibleItems, (item) => {
        return (openBlock(), createElementBlock("div", {
          class: "m-vlist__item",
          key: item
        }, [
          renderSlot(_ctx.$slots, "default", { item: item })
        ]))
      }), 128 /* KEYED_FRAGMENT */))
    ], 4 /* STYLE */)
  ], 36 /* STYLE, HYDRATE_EVENTS */))
}

script$1.render = render$1;
script$1.__file = "packages/components/vlist/src/vlist.vue";

const Vlist = withInstall(script$1);

const components = [
    Button,
    Icon,
    Input,
    Space,
    Radio,
    RadioGroup,
    Checkbox,
    CheckboxGroup,
    Trigger,
    Select,
    Option,
    Tag,
    Link,
    Table,
    TableColumn,
    Uploader,
    Vlist
];

var script = defineComponent({
    name: "MMessage",
    props: {
        id: {
            type: String,
            default: ""
        },
        content: {
            type: String,
            required: true
        },
        type: {
            type: String,
            default: ""
        },
        duration: {
            type: Number,
            default: 3000
        },
        closable: Boolean,
        onClose: {
            type: Function
        },
        offset: {
            type: Number,
            default: 50
        }
    },
    setup(props) {
        let timer = null;
        const state = reactive({
            visible: false
        });
        const classes = computed(() => {
            return [
                'm-message',
                `m-message--${props.type}`
            ];
        });
        const styles = computed(() => {
            return {
                top: `${props.offset}px`
            };
        });
        const startTimer = () => {
            timer = setTimeout(() => {
                state.visible = false;
            }, props.duration);
        };
        const clearTimer = () => {
            clearTimeout(timer);
            timer = null;
        };
        const close = () => {
            state.visible = false;
        };
        onMounted(() => {
            state.visible = true;
            startTimer();
        });
        onBeforeUnmount(() => {
            clearTimer();
        });
        return {
            state,
            classes,
            styles,
            close
        };
    }
});

const _hoisted_1 = { class: "m-message__content" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock(Transition, {
    name: "m-message-fade",
    onBeforeLeave: _ctx.onClose,
    onAfterLeave: _cache[0] || (_cache[0] = $event => (_ctx.$emit('destroy')))
  }, {
    default: withCtx(() => [
      withDirectives(createElementVNode("div", {
        class: normalizeClass(_ctx.classes),
        style: normalizeStyle(_ctx.styles)
      }, [
        createElementVNode("div", _hoisted_1, toDisplayString(_ctx.content), 1 /* TEXT */)
      ], 6 /* CLASS, STYLE */), [
        [vShow, _ctx.state.visible]
      ])
    ]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["onBeforeLeave"]))
}

script.render = render;
script.__file = "packages/components/message/src/message.vue";

const DEFAULT_OPTIONS = {
    content: "",
    icon: "",
    type: 'info',
    closable: false,
    duration: 3000,
    offset: 40
};
const OFFSET_GUTTER = 16;
let seed = 0;
const instances = [];
const Message = (options) => {
    if (typeof options === 'string') {
        options = { ...DEFAULT_OPTIONS, content: options };
    }
    else {
        options = { ...DEFAULT_OPTIONS, ...options };
    }
    const userOnClose = options.onClose;
    let offset = instances.reduce((pre, cur) => pre + cur.el.offsetHeight + OFFSET_GUTTER, options.offset);
    const id = `el-message${seed++}`;
    const vnode = createVNode(script, {
        id,
        ...options,
        offset,
        onClose: () => {
            handleClose(id, userOnClose);
        }
    });
    // 创建容器元素
    const containerEl = document.createElement('div');
    vnode.props.onDestroy = () => {
        render$n(null, containerEl);
    };
    render$n(vnode, containerEl);
    document.body.appendChild(containerEl.firstElementChild);
    instances.push(vnode);
    return {
        close: () => {
            vnode.component.proxy.close();
        }
    };
};
const handleClose = (id, userOnClose) => {
    const index = instances.findIndex(i => i.props.id === id);
    if (index === -1)
        return;
    const vm = instances[index];
    if (!vm)
        return;
    userOnClose?.(vm);
    const deltaHeight = vm.el.offsetHeight || 0;
    instances.splice(index, 1);
    const len = instances.length;
    if (!len)
        return;
    for (let i = index; i < len; i++) {
        let pos = parseFloat(instances[i].el.style.top) - deltaHeight - OFFSET_GUTTER;
        instances[i].component.props.offset = pos;
    }
};
const closeAll = () => {
    const len = instances.length;
    for (let i = len - 1; i >= 0; i--) {
        const vm = instances[i].component?.proxy;
        vm?.close();
    }
};
const buildStateFn = (type) => {
    return (options) => {
        if (typeof options === 'string') {
            options = {
                content: options,
                type
            };
        }
        else {
            options.type = type;
        }
        return Message(options);
    };
};
Message.info = buildStateFn('info');
Message.warning = buildStateFn('warning');
Message.success = buildStateFn('success');
Message.danger = buildStateFn('danger');
Message.closeAll = closeAll;
Message.install = (app) => {
    app.config.globalProperties.$message = Message;
};

const install = (app) => {
    components.forEach(plugin => {
        app.use(plugin);
    });
};
var index = {
    install
};

export { Button, Checkbox, CheckboxGroup, Icon, Input, Link, Message, Option, Radio, RadioGroup, Select, Space, Table, TableColumn, Tag, Trigger, Uploader, Vlist, index as default };
