import { VNode } from "vue";

export type TableColumnRenderFn = (context?: any) => VNode;

export interface TableColumnRaw {
    label: string;
    prop: string | number;
    width: string | number;
    render?: TableColumnRenderFn
}

export interface TableColumn extends TableColumnRaw {

}

export interface TableProvideContext {
    addColumn(column: TableColumn): void;
    removeColumn(column: TableColumn): void;
}

export type TableSize = 'mini' | 'small' | 'medium' | 'large';