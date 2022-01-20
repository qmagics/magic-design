<script lang="ts">
import { TABLE_KEY } from "@magic-design/utils/src/const";
import { defineComponent, getCurrentInstance, h, inject, onBeforeUnmount, onMounted } from "vue";

export default defineComponent({
    name: "MTableColumn",
    props: {
        label: [String, Number],
        prop: [String, Number],
        width: [Number],
    },
    setup(props) {
        const table = inject(TABLE_KEY);

        const proxy = getCurrentInstance().proxy;

        // const column = {
        //     label:proxy
        // }

        console.log(55)

        onMounted(() => {
            table.addColumn(proxy as any);
        });

        onBeforeUnmount(() => {
            table.removeColumn(proxy as any);
        });

        return (proxy) => {
            return h('span')
        }
    }
})
</script>