import useUser from "../features/Authentication/useUser";

export default function Header() {
  const { data } = useUser();
  console.log(data);
  return (
    <div className="bg-secondary-0 py-4 px-8 border border-slate-300">
      PageHeader
    </div>
  );
}
