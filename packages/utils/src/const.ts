import { SelectProvideContext } from "@magic-design/components/select/src/interface";
import { InjectionKey } from "vue";

export const UPDATE_MODEL_EVENT = 'update:modelValue';

export const RADIO_GROUP_KEY = Symbol("radioGroup");

export const CHECKBOX_GROUP_KEY = Symbol("checkboxGroup");

export const SELECT_KEY = Symbol("select") as InjectionKey<SelectProvideContext>;
