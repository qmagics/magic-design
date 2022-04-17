<template>
    <m-vlist class="my-list" :items="state.list" :height="state.height" :size="state.size">
        <template #="{ item }">
            <div class="my-list-item">
                <m-checkbox v-model="item.checked">{{ item.name }}</m-checkbox>
            </div>
        </template>
    </m-vlist>

    <m-space wrap>
        <m-tag v-for="item in selectedItems">{{ item.name }}</m-tag>
    </m-space>
</template>

<script lang="ts" setup>
import { computed, reactive } from 'vue';

const list = [];
for (let i = 0; i < 1000; i++) {
    list.push({
        name: `第${i}条数据`,
        checked: false
    });
}

const state = reactive({
    list,
    height: 320,
    size: 40
})

const selectedItems = computed(() => {
    return state.list.filter(i => i.checked === true)
});

</script>

<style lang="scss" scoped>
.my-list {
    border: 1px solid #eee;
    box-sizing: border-box;
    margin-bottom: 10px;

    &-item {
        height: 40px;
        line-height: 40px;
        padding: 0 10px;
        border-bottom: 1px solid #eee;
        box-sizing: border-box;
    }
}
</style>

<demo-meta>
{
    "sort": 1,
    "title": "基础用法",
    "description": "虚拟列表用于展示大量数据需要通过列表展示的场景",
}
</demo-meta>