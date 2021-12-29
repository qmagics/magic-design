<script lang="tsx">
import { defineComponent, Teleport, Fragment, h, renderSlot, cloneVNode, ref, onMounted, reactive } from "vue";


export default defineComponent({
    name: "MTrigger",
    props: {

    },
    setup(props, { emit, slots }) {
        const triggerRef = ref();
        const contentStyle = reactive({
            left: '',
            top: ''
        });
        const contentVisible = ref(false);
        const handleClick = () => {
            contentVisible.value = !contentVisible.value;
        };

        onMounted(() => {
            const rect = triggerRef.value.$el.getBoundingClientRect();
            contentStyle.left = rect.left + 'px';
            contentStyle.top = rect.top + 'px';
        });

        return () => {
            const trigger = slots?.default?.();

            const content = h('div', { class: 'm-trigger__content', style: contentStyle }, [renderSlot(slots, 'content')]);

            return h(Fragment, [
                cloneVNode(trigger[0], { ref: triggerRef, onClick: () => { handleClick() } }),
                h(Teleport, { to: 'body' }, contentVisible.value ? [content] : null)
            ])
        }
    }
});
</script>
