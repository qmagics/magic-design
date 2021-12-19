import { UsePageConfigOptions, ResolvedPageConfig } from "@/types";
import { reactive, shallowRef } from "vue";

export default (options: UsePageConfigOptions) => {
    const { name, demePageGlob, sourceCodeMap } = options;

    const rawDemos = Object.entries(demePageGlob)
        .map(([key, value]: any) => {
            const component = value.default;
            const pathArr = key.split('/');
            const { sort, title, description } = component.__meta__;
            return {
                path: key,
                id: pathArr[pathArr.length - 1].replace('.vue', ''),
                title,
                sort,
                description,
                component: shallowRef(component),
                source: sourceCodeMap[key]
            }
        }).sort((a, b) => a.sort - b.sort);

    const config = reactive<ResolvedPageConfig>({
        name,
        demos: rawDemos
    });

    return config;
}