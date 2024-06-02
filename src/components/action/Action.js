import "./Action.css";

const Action = ({ sortBy, sortHandler }) => {
  return (
    <div className="sort-container">
      <select className="sort" value={sortBy} onChange={sortHandler}>
        <option value="input">Sort by input order</option>
        <option value="description">Sort by description</option>
        <option value="packed">Sort by packed status</option>
      </select>
    </div>
  );
};

export default Action;
