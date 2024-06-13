export const TableHead = () => {
  return (
    <thead>
      <tr>
        <th></th>
        <th className="uk-table-expand">
          <span uk-icon="icon: user"></span> Employee
        </th>
        <th>
          <span uk-icon="icon: phone"></span> Phone
        </th>
        <th>
          <span uk-icon="icon: mail"></span> Email
        </th>
        <th>
          <span uk-icon="icon: list"></span> Positions
        </th>
        <th>
          <span uk-icon="icon: location"></span> Work Place
        </th>
        <th></th>
      </tr>
    </thead>
  );
};
