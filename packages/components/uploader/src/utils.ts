export const isImage = (file: File) => {
    return file.type?.includes('image');
}