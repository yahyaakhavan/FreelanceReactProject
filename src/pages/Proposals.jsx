import ProposalsTable from "../features/Proposal/ProposalsTable";

export default function Proposals() {
  return (
    <div>
      <h1 className="font-black text-secondary-700 text-xl mb-8">
        پروپوزال های شما
      </h1>
      <ProposalsTable />
    </div>
  );
}
