import { useStore } from "@/store";
import { MutationType } from "@/store/mutationType";
import { some } from "@/utils";
import { onBeforeUnmount, onMounted, ref } from "vue";
import throttle from 'lodash/throttle';
import router from "@/routes";

export default () => {
    let documentHeight = document.documentElement.clientHeight;
    const store = useStore();
    const els = ref<any[]>([]);

    const elementInView = (el: any): boolean => {
        const { top } = el.getBoundingClientRect();
        return top >= 0 && top <= (documentHeight / 2);
    };

    const handleScroll = throttle(() => {
        els.value = document.querySelectorAll('.app-demo-block__title') as any;

        some.call(els.value, el => {
            const id = el.id;
            const isInView = elementInView(el);
            if (isInView) {
                store.commit(MutationType.SET_ACTIVE_ANCHOR, id);
                // 同步修改地址栏hash
                // router.replace({ hash: `#${id}` })
                return true;
            }
        })
    }, 30);

    const handleResize = () => {
        documentHeight = document.documentElement.clientHeight;
    };

    onMounted(() => {
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);
    });

    onBeforeUnmount(() => {
        window.removeEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);
    });
}