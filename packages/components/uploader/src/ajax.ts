import { UploadRequest } from "./interface";

const ajax: UploadRequest = (options) => {
    return new Promise((resolve, reject) => {
        const { fileItem, method, url, name } = options;
        const xhr: XMLHttpRequest = new XMLHttpRequest();

        xhr.onload = function () {
            resolve(JSON.parse(xhr.responseText));
        }

        xhr.onerror = function () {
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