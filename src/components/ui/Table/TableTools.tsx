"use client";

import { useAtom } from "jotai";
import { Button } from "../Button";
import { FormEmployee } from "../Form/FormEmployee";
import { Input } from "../Input";
import { Modal } from "../Modal";
import { queryAtom } from "@/stores/queryAtom";
import { ChangeEvent } from "react";

export const TableTools = () => {
  const [query, setQuery] = useAtom(queryAtom);
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery({ ...query, search: e.target.value });
  };

  return (
    <div className="uk-flex uk-flex-middle uk-margin-bottom">
      <Button
        style={{ maxWidth: "fit-content" }}
        className="uk-margin-small-right"
        type="button"
        variant="primary"
        icon={<span uk-icon="icon: plus-circle"></span>}
        uk-toggle="target: #create-employee"
      >
        Tambah Karyawan
      </Button>
      <Modal id="create-employee">
        <p>Data Karyawan</p>
        <FormEmployee />
      </Modal>
      <Input
        icon={<span className="uk-form-icon" uk-icon="icon: search"></span>}
        role="textbox"
        type="text"
        placeholder="Search by Name, Phone Number, Position or Work Place"
        aria-label="Search"
        onChange={handleSearch}
      />
    </div>
  );
};
