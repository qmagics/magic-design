import { UploadRequest } from "./interface";

const ajax: UploadRequest = (options) => {
    return new Promise((resolve, reject) => {
        const { fileItem, method, url, name, onSuccess, onError } = options;
        const xhr: XMLHttpRequest = new XMLHttpRequest();

        xhr.onload = function () {
            const data = JSON.parse(xhr.responseText);
            onSuccess && onSuccess(data);
            resolve(data);
        }

        xhr.onerror = function (e) {
            onError && onError(e);
            reject("请求失败");
        }

        xhr.open(method, url, true);

        const data = new FormData();

        const key = typeof name === 'string' ? name : name(fileItem);
        data.append(key, fileItem.file, fileItem.name);

        xhr.send();
    });
}

export default ajax;