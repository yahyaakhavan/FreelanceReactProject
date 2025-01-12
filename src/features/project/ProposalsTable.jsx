import Table from "../../ui/Table";
import { ProposalRow } from "./ProposalRow";
import Empty from "../../ui/Empty";
/* eslint-disable react/prop-types */
export default function ProposalsTable({ proposals }) {
  if (!proposals.length) {
    return <Empty resourceName={"درخواستی"} />;
  }
  return (
    <Table>
      <Table.header>
        <Table.row>
          <th>#</th>
          <th>فریلنسر</th>
          <th>توضیحات</th>
          <th>زمان تحویل</th>
          <th>هزینه</th>
          <th>وضعیت</th>
          <th>عملیات</th>
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
