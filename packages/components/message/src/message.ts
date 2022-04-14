import { App, createVNode, render } from 'vue';
import { MessageMethod, MessageOptions } from './interface';
import MessageVue from './message.vue';

const DEFAULT_OPTIONS: MessageOptions = {
    content: "",
    icon: "",
    type: 'warning',
    closable: false,
    duration: 2000
}

const Message: MessageMethod = (options: MessageOptions | string) => {
    if (typeof options === 'string') {
        options = { ...DEFAULT_OPTIONS, content: options }
    }
    else {
        options = { ...DEFAULT_OPTIONS, ...options };
    }

    const containerEl = document.createElement('div');

    const userOnClose = options.onClose;

    options.onClose = () => {
        userOnClose?.();
    }

    const vnode = createVNode(MessageVue, {
        ...options
    });
    
    vnode.props.onDestroy = () => {
        render(null, containerEl);
    }

    render(vnode, containerEl);

    document.body.appendChild(containerEl.firstElementChild);
}

Message.install = (app: App) => {
    app.config.globalProperties.$message = Message;
}

export default Message;