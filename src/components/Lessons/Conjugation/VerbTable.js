import classes from './styles/VerbTable.module.css';

const VerbTable = (props) => {
    const { verb, table } = props;

    return (
      <div className={classes.table}>
        <div className={classes["table__title"]}>{verb}</div>
        <div className={classes["table__cell"]}>Eu {table.eu}</div>
        <div className={classes["table__cell"]}>Tu {table.tu}</div>
        <div className={classes["table__cell"]}>Ele/ela/você {table.voce}</div>
        <div className={classes["table__cell"]}>Nós {table.nos}</div>
        <div className={classes["table__cell"]}>
          Eles/elas/vocês {table.voces}
        </div>
      </div>
    );
};

export default VerbTable;