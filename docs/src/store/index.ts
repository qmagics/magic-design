import { InjectionKey } from 'vue';
import { createStore, Store, useStore as baseUseStore } from 'vuex';
import { State } from './index.types';
import { MutationType } from './mutationType';

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
    state: {
        activeAnchor: ""
    },

    mutations: {
        [MutationType.SET_ACTIVE_ANCHOR]: (state, payload: string) => {
            state.activeAnchor = payload;
        }
    }
})

export function useStore() {
    return baseUseStore(key);
}