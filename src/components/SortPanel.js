const SortPanel = (props) => {
  return (
    <div className="sort-panel flex-row flex-column space-between margin-bottom-xs">
      <h2>Scoreboard</h2>
      <p className="flex-row gap-xs">
        <select
          className="button-outline"
          onChange={props.change_sorting}
          value={props.sort_by}
        >
          <option value="score">Sort by score</option>
          <option value="name">Sort by name</option>
        </select>
      </p>
    </div>
  );
};

export default SortPanel;
