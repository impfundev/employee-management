"use client";

import { TableHead } from "../TableHead";
import { TableRow } from "../TableRow";
import { getEmployee } from "@/lib/getEmployee";
import { TablePagination } from "../TablePagination";
import { Modal } from "../../Modal";
import { Button } from "../../Button";
import { EmployeeData } from "@/lib/types";

export const TableEmployee = () => {
  const { employees, isLoading, error } = getEmployee();

  if (error) return <p>Error fetching data</p>;
  if (isLoading)
    return (
      <div className="uk-flex uk-flex-middle uk-flex-center">
        <span uk-spinner="" className="uk-margin-small-right" />{" "}
        <p>Loading Data...</p>
      </div>
    );

  return (
    <>
      <table className="uk-table uk-table-hover uk-table-small uk-table-striped uk-text-small">
        <TableHead />
        <tbody>
          {employees.data.length === 0 ? (
            <tr>
              <td colSpan={6} className="uk-text-center">
                No Data
              </td>
            </tr>
          ) : (
            employees.data.map((item: EmployeeData) => (
              <TableRow key={item.id} item={item} />
            ))
          )}
        </tbody>
      </table>
      <TablePagination result={employees.result} />
      <Modal id="delete-employee">
        <div className="uk-modal-header">
          <h2 className="uk-modal-title">Peringatan:</h2>
        </div>
        <div className="uk-modal-body">
          <p>Data yang dihapus tidak dapat dikembalikan.</p>
          <p>Apakah Kamu yakin ingin menghapus data ini?</p>
        </div>
        <div className="uk-modal-footer uk-flex">
          <Button
            className="uk-margin-small-right uk-modal-close"
            variant="danger"
            type="button"
          >
            Cancel
          </Button>
          <Button variant="primary" type="button">
            Continue
          </Button>
        </div>
      </Modal>
    </>
  );
};
