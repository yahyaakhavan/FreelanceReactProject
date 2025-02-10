import UsersTable from "../features/Admin/Users/UsersTable";

export default function Users() {
  return (
    <div>
      <h1 className="font-black text-secondary-700 text-xl mb-8">
        لیست کاربران
      </h1>
      <UsersTable />
    </div>
  );
}
