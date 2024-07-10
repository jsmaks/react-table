import { Table } from "@tanstack/react-table";

interface Props<TData> {
  table: Table<TData>;
}

function TablePageCount<TData>({ table }: Props<TData>) {
  return (
    <div>
      <div className="flex w-[100px]  items-center justify-center text-sm font-medium">
        Page {table.getState().pagination.pageIndex + 1} of{" "}
        {table.getPageCount()}
      </div>
    </div>
  );
}

export { TablePageCount };
