const SortPanel = (props) => {
  return (
    <div className="sort-panel flex-row flex-column flex-align-reset">
      <p className="flex-row">
        Sort order:{" "}
        <select onChange={props.change_sorting} value={props.sort_by}>
          <option value="score">Sort by score</option>
          <option value="name">Sort by name</option>
        </select>
      </p>
      <button onClick={props.resetScore}>Reset scores</button>
    </div>
  );
};

export default SortPanel;
