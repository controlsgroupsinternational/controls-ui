import { IStatus } from '../lib/types/status';
import { IGetEntityColumnsParams } from '../lib/types/tables';
import { ColumnDef } from '@tanstack/react-table';

export declare const statusColumns: ColumnDef<IStatus>[];
export declare const getStatusColumns: ({ selection, actions, id }: IGetEntityColumnsParams) => ColumnDef<IStatus>[];
