import classes from './styles/VerbTable.module.css';

const VerbTable = ({ verb, table }) => {
  return (
    <table className={classes.table}>
      <thead>
        <tr>
          <th className={classes["table__title"]} colSpan={2}>
            {verb}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className={classes["table__cell"]} rowSpan={2}>
            Eu <span>{table.eu}</span>
          </td>
          <td className={classes["table__cell"]} rowSpan={3}>
            Nós <span>{table.nos}</span>
          </td>
        </tr>
        <tr />
        <tr>
          <td className={classes["table__cell"]} rowSpan={2}>
            Tu <span>{table.tu}</span>
          </td>
        </tr>
        <tr>
          <td className={classes["table__cell"]} rowSpan={3}>
            Eles/elas/vocês <span>{table.voces}</span>
          </td>
        </tr>
        <tr>
          <td className={classes["table__cell"]} rowSpan={2}>
            Ele/ela/você <span>{table.voce}</span>
          </td>
        </tr>
        <tr />
      </tbody>
    </table>
  );
};

export default VerbTable;