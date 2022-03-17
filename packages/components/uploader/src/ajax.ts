export default (): Promise<any> => {
    return new Promise((resolve, reject) => {
        const xhr: XMLHttpRequest = new XMLHttpRequest();

        xhr.onload = function () {
            resolve(xhr.responseText);
        }

        xhr.onerror = function () {
            reject("请求失败");
        }

        // xhr.open()
    });
}