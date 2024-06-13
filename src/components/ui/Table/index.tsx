import { TableType } from "@/lib/types";
import { TableTools } from "./TableTools";
import { TableEmployee } from "./TableView/TableEmployee";

export const Table = ({ type }: TableType) => {
  return (
    <section
      className="uk-card uk-card-default uk-card-body uk-box-shadow-medium uk-overflow-auto"
      style={{ borderRadius: 20 }}
    >
      <p>Tabel Karyawan</p>
      <TableTools />
      {type === "employee" && <TableEmployee />}
    </section>
  );
};
