import { columns } from "@/components/columns";
import { DataTable } from "@/components/data-table";
import { generateUsers } from "@/utils/generateUsers";

export default function Home() {
  const data = generateUsers(155);
  return (
    <main className="">
      <div className="container">
        <DataTable columns={columns} data={data} />
      </div>
    </main>
  );
}
