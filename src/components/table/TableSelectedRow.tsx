import { Table } from '@tanstack/react-table';

interface Props<TData> {
  table: Table<TData>;
}

function TableSelectedRow<TData>({ table }: Props<TData>) {
  return (
    <div className="text-sm">
      {table.getFilteredSelectedRowModel().rows.length} of{' '}
      {table.getFilteredRowModel().rows.length} row(s) selected.
    </div>
  );
}

export { TableSelectedRow };
