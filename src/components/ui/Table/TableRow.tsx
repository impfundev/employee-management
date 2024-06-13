import { EmployeeData } from "@/app/lib/types";
import { FormEmployee } from "../Form/FormEmployee";
import { Modal } from "../Modal";

export const TableRow = ({ item }: { item: EmployeeData }) => {
  return (
    <tr key={item.user?.id}>
      <td className="uk-table-middle">
        <input className="uk-checkbox" type="checkbox" aria-label="Checkbox" />
      </td>
      <td className="uk-table-middle">
        <img
          loading="lazy"
          className="uk-preserve-width uk-border-circle"
          src="https://getuikit.com/docs/images/avatar.jpg"
          width="40"
          height="40"
          alt=""
        />
        <span>{item.user?.name}</span>
      </td>
      <td className="uk-table-middle">{item.user?.phone}</td>
      <td className="uk-table-middle">{item.user?.email}</td>
      <td className="uk-table-middle">{item.position?.title}</td>
      <td className="uk-table-middle">{item.workPlace?.place}</td>
      <td className="uk-table-middle">
        <button
          style={{
            backgroundColor: "transparent",
            border: "none",
          }}
          type="button"
          uk-toggle={`target: #update-employee-${item.user?.id}`}
        >
          <span uk-icon="icon: file-edit"></span>
        </button>
        <Modal id={`update-employee-${item.user?.id}`}>
          <p>Data Karyawan</p>
          <FormEmployee
            key={item.user?.id}
            data={{
              name: item.user?.name || "",
              email: item.user?.email || "",
              phone: item.user?.phone || "",
              position: item.position?.title || "",
              workPlace: item.workPlace?.place || "",
            }}
          />
        </Modal>
        <button
          style={{
            backgroundColor: "transparent",
            border: "none",
          }}
          type="button"
          uk-toggle="target: #delete-employee"
        >
          <span uk-icon="icon: trash"></span>
        </button>
      </td>
    </tr>
  );
};
