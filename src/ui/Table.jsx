/* eslint-disable react/prop-types */
export default function Table({ children }) {
  return (
    <div className="bg-secondary-0 overflow-x-auto">
      <table>{children}</table>
    </div>
  );
}

function TableHeader({ children }) {
  return <thead className="title-row">{children}</thead>;
}

function TableBody({ children }) {
  return <tbody>{children}</tbody>;
}
function TableRow({ children }) {
  return <tr>{children}</tr>;
}

Table.header = TableHeader;
Table.body = TableBody;
Table.row = TableRow;
