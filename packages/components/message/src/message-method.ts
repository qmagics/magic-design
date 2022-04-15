import { App, ComponentPublicInstance, createVNode, render, VNode } from 'vue';
import { MessageMethod, MessageOptions } from './interface';
import MessageVue from './message.vue';

const DEFAULT_OPTIONS: MessageOptions = {
    content: "",
    icon: "",
    type: 'info',
    closable: false,
    duration: 3000,
    offset: 40
}

const OFFSET_GUTTER = 16;

let seed: number = 0;

const instances: VNode[] = [];

const Message: MessageMethod = (options: MessageOptions | string) => {
    if (typeof options === 'string') {
        options = { ...DEFAULT_OPTIONS, content: options }
    }
    else {
        options = { ...DEFAULT_OPTIONS, ...options };
    }

    const userOnClose = options.onClose;
    let offset = instances.reduce((pre, cur) => pre + cur.el.offsetHeight + OFFSET_GUTTER, options.offset);
    const id = `el-message${seed++}`;

    const vnode = createVNode(MessageVue, {
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
        render(null, containerEl);
    }

    render(vnode, containerEl);

    document.body.appendChild(containerEl.firstElementChild);

    instances.push(vnode);

    return {
        close: () => {
            (vnode.component!.proxy as ComponentPublicInstance<{ close: () => void }>).close();
        }
    }
}

const handleClose = (id: string, userOnClose: (vm: VNode) => void) => {
    const index = instances.findIndex(i => i.props.id === id);
    if (index === -1) return;

    const vm = instances[index];
    if (!vm) return;
    userOnClose?.(vm);

    const deltaHeight = vm.el.offsetHeight || 0;
    instances.splice(index, 1);

    const len = instances.length;

    if (!len) return;

    for (let i = index; i < len; i++) {
        let pos = parseFloat(instances[i].el.style.top) - deltaHeight - OFFSET_GUTTER;
        instances[i].component.props.offset = pos;
    }
}

const closeAll = () => {
    const len = instances.length;

    for (let i = len - 1; i >= 0; i--) {
        const vm = instances[i].component?.proxy;
        (vm as ComponentPublicInstance<{ close: () => void }>)?.close();
    }
}

const buildStateFn = (type) => {
    return (options: MessageOptions | string) => {
        if (typeof options === 'string') {
            options = {
                content: options,
                type
            }
        }
        else {
            options.type = type;
        }
        return Message(options);
    }
}

Message.info = buildStateFn('info');
Message.warning = buildStateFn('warning');
Message.success = buildStateFn('success');
Message.danger = buildStateFn('danger');
Message.closeAll = closeAll;
Message.install = (app: App) => {
    app.config.globalProperties.$message = Message;
}

export default Message;