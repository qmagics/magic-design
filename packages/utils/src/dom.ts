
/* istanbul ignore next */
export const on = function (
    element: HTMLElement | Document | Window,
    event: string,
    handler: EventListenerOrEventListenerObject,
    useCapture = false
): void {
    if (element && event && handler) {
        element?.addEventListener(event, handler, useCapture)
    }
}

/* istanbul ignore next */
export const off = function (
    element: HTMLElement | Document | Window,
    event: string,
    handler: EventListenerOrEventListenerObject,
    useCapture = false
): void {
    if (element && event && handler) {
        element?.removeEventListener(event, handler, useCapture)
    }
}

/* istanbul ignore next */
export const once = function (
    el: HTMLElement,
    event: string,
    fn: EventListener
): void {
    const listener = function (this: any, ...args: any) {
        if (fn) {
            fn.apply(this, args)
        }
        off(el, event, listener)
    }
    on(el, event, listener)
}

/* istanbul ignore next */
export function hasClass(el: HTMLElement | Element, cls: string): boolean {
    if (!el || !cls) return false
    if (cls.indexOf(' ') !== -1)
        throw new Error('className should not contain space.')
    if (el.classList) {
        return el.classList.contains(cls)
    } else {
        const className = el.getAttribute('class') || ''
        return className.split(' ').includes(cls)
    }
}