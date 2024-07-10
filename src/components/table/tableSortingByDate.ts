import { ColumnDef, Row } from "@tanstack/react-table";
import { UserType } from "../columns";

const tableSortingByDate = <D extends object>(
  rowA: Row<UserType>,
  rowB: Row<UserType>,
  desc: string | boolean,
  columnName: string
) => {
  const dateA = +new Date(rowA.getValue(columnName));
  const dateB = +new Date(rowB.getValue(columnName));
  if (dateA < dateB) {
    return desc ? 1 : -1;
  }
  if (dateA > dateB) {
    return desc ? -1 : 1;
  }
  return 0;
};

export default tableSortingByDate;
