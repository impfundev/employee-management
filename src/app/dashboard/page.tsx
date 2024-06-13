import { Table } from "@/components/ui/Table";

const DashboardPage = () => {
  return (
    <div style={{ width: "80vw" }}>
      <div
        style={{ height: "100vh" }}
        className="uk-container uk-margin-top uk-margin-bottom"
      >
        <Table type="employee" />
      </div>
    </div>
  );
};

export default DashboardPage;
