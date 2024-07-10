import { Table } from "@tanstack/react-table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Props<TData> {
  table: Table<TData>;
}

function TableSelectPagination<TData>({ table }: Props<TData>) {
  const { pageSize } = table.getState().pagination;
  const totalRows = table.getRowCount();

  return (
    <div>
      <Select
        onValueChange={(value) => {
          table.setPageSize(Number(value));
        }}
      >
        <SelectTrigger className="w-[100px]" defaultValue={10}>
          <SelectValue defaultValue={String(pageSize)} placeholder={pageSize} />
        </SelectTrigger>
        <SelectContent>
          {[10, 20, 30, 40, 50, totalRows].map((size) => (
            <SelectItem value={String(size)}>
              {totalRows === size ? "All rows" : size}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export { TableSelectPagination };
