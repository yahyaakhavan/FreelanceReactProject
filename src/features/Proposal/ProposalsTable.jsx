import Table from "../../ui/Table";
import useProposals from "./useProposals";
import ProposalRow from "./ProposalRow";
import Loader from "../../ui/Loader";
import Empty from "../../ui/Empty";
export default function ProposalsTable() {
  const { proposals, isLoading } = useProposals();

  if (isLoading) return <Loader />;
  if (!proposals) return <p>no db</p>;
  if (!proposals.length) return <Empty resourceName="درخواستی " />;
  return (
    <Table>
      <Table.header>
        <Table.row>
          <th>#</th>
          <th>توضیحات</th>
          <th>زمان تحویل</th>
          <th>هزینه</th>
          <th>وضعیت</th>
        </Table.row>
      </Table.header>
      <Table.body>
        {proposals.map((proposal, index) => {
          return (
            <ProposalRow key={proposal._id} proposal={proposal} index={index} />
          );
        })}
      </Table.body>
    </Table>
  );
}
