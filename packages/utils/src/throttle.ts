export default (fn: Function, wait: number) => {
    let timer = null;
    let pending = false;

    return function () {
        if (pending === true) return;
        pending = true;
        timer = setTimeout(() => {
            fn.apply(this, arguments);
            pending = false;
            clearTimeout(timer);
            timer = null;
        }, wait);
    }
}


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