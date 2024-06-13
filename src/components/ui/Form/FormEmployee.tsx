import { FormEmployeeProps } from "@/lib/types";
import { Button } from "../Button";
import { Input } from "../Input";

export const FormEmployee = ({ data }: FormEmployeeProps) => {
  return (
    <form className="uk-form-stacked">
      <div className="uk-margin">
        <Input
          defaultValue={data?.name}
          icon={<span className="uk-form-icon" uk-icon="icon: user"></span>}
          placeholder="Nama Karyawan"
        />
      </div>
      <div className="uk-margin">
        <Input
          defaultValue={data?.phone}
          icon={<span className="uk-form-icon" uk-icon="icon: phone"></span>}
          placeholder="Phone"
        />
      </div>
      <div className="uk-margin">
        <Input
          defaultValue={data?.email}
          icon={<span className="uk-form-icon" uk-icon="icon: mail"></span>}
          placeholder="Email"
        />
      </div>
      <div className="uk-margin">
        <Input
          defaultValue={data?.position}
          icon={<span className="uk-form-icon" uk-icon="icon: list"></span>}
          placeholder="Positions"
        />
      </div>
      <div className="uk-margin">
        <Input
          defaultValue={data?.workPlace}
          icon={<span className="uk-form-icon" uk-icon="icon: location"></span>}
          placeholder="Work Place"
        />
      </div>
      <div className="uk-margin">
        <Button type="submit" variant="primary">
          Submit
        </Button>
      </div>
    </form>
  );
};
