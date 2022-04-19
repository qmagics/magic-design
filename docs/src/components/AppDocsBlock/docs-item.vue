<template>
    <div class="app-docs-block__item">
        <h2>{{ docs.displayName }} {{ title }}</h2>
        <m-table :data="docs[type]" :columns="columns"></m-table>
    </div>
</template>

<script lang="tsx">
import { defineComponent, ref } from 'vue';

const configMap: any = {
    props: {
        title: "属性",
        columns: [
            {
                label: "属性",
                prop: "name",
            },
            {
                label: "说明",
                prop: "description",
            },
            {
                label: "类型",
                prop: "type",
                render({ row }) {
                    return <span>{row?.defaultValue?.name}</span>
                }
            },
            {
                label: "默认值",
                prop: "defaultValue",
                render({ row }) {
                    return <span>{row?.defaultValue?.value}</span>
                }
            }
        ]
    },
    events: {
        title: "事件",
        columns: []
    },
    slots: {
        title: "插槽",
        columns: [
            {
                label: "名称",
                prop: "name",
            },
            {
                label: "说明",
                prop: "description",
            },
        ]
    },
    methods: {
        title: "方法",
        columns: []
    }
}

export default defineComponent({
    name: "AppDocsBlock",
    props: {
        docs: {
            type: Object,
            required: true
        },
        type: {
            type: String,
            required: true
        }
    },
    setup(props) {

        const columns = ref(configMap[props.type].columns);

        return {
            columns,
            title: configMap[props.type].title
        }
    }
});
</script>

<style lang="scss">
.app-docs-block__item {
    margin-bottom: 60px;
}
</style>