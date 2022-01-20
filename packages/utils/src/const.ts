import { SelectProvideContext } from "@magic-design/components/select/src/interface";
import { TableProvideContext } from "@magic-design/components/table/src/interface";
import { InjectionKey } from "vue";

export const UPDATE_MODEL_EVENT = 'update:modelValue';

export const RADIO_GROUP_KEY = Symbol("radioGroup");

export const CHECKBOX_GROUP_KEY = Symbol("checkboxGroup");

export const SELECT_KEY = Symbol("select") as InjectionKey<SelectProvideContext>;

export const TABLE_KEY = Symbol("table") as InjectionKey<TableProvideContext>;
