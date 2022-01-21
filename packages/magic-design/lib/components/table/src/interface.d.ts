export interface TableColumnRaw {
    label: string;
    prop: string | number;
    width: string | number;
}
export interface TableColumn extends TableColumnRaw {
    label: string;
    prop: string | number;
    width: string | number;
}
export interface TableProvideContext {
    addColumn(column: TableColumn): void;
    removeColumn(column: TableColumn): void;
}
export declare type TableSize = 'mini' | 'small' | 'medium' | 'large';
