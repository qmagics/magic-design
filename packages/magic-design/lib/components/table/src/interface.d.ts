import { VNode } from "vue";
export interface ColumnRenderContext {
    row: any;
    value: any;
    column: TableColumn;
    rowIndex: number;
    columnIndex: number;
}
export declare type TableColumnRenderFn = (context: ColumnRenderContext) => VNode;
export interface TableColumnRaw {
    label: string;
    prop: string | number;
    width: string | number;
    render?: TableColumnRenderFn;
}
export interface TableColumn extends TableColumnRaw {
}
export interface TableProvideContext {
    addColumn(column: TableColumn): void;
    removeColumn(column: TableColumn): void;
}
export declare type TableSize = 'mini' | 'small' | 'medium' | 'large';
