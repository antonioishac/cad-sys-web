export interface TreeNodeModel {
    data?: any;
    children?: TreeNodeModel[];
    leaf?: boolean;
    expanded?: boolean;
}