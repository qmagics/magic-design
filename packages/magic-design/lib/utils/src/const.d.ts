import { SelectProvideContext } from "@magic-design/components/select/src/interface";
import { TableProvideContext } from "@magic-design/components/table/src/interface";
import { InjectionKey } from "vue";
export declare const UPDATE_MODEL_EVENT = "update:modelValue";
export declare const RADIO_GROUP_KEY: unique symbol;
export declare const CHECKBOX_GROUP_KEY: unique symbol;
export declare const SELECT_KEY: InjectionKey<SelectProvideContext>;
export declare const TABLE_KEY: InjectionKey<TableProvideContext>;
