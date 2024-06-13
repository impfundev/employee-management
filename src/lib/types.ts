import { Employee, Position, User, WorkPlace } from "@prisma/client";

export type TableType = {
  type: "employee" | "work-place" | "position" | "rbac";
};

export type Pagination = {
  result: {
    currentPage: string;
    nextPage: string | null;
    previousPage: string | null;
    range: string;
    totalPages: string;
    totalRecords: string;
  };
};

export interface EmployeeData extends Employee {
  position?: Position;
  user?: User;
  workPlace?: WorkPlace;
}

export type FormEmployeeProps = {
  data?: {
    name: string;
    phone: string;
    email: string;
    position: string;
    workPlace: string;
  };
};
