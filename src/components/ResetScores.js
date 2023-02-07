const ResetScores = (props) => {
  return (
    <button className="button-outline" onClick={props.resetScore}>
      Reset scores
    </button>
  );
};

export default ResetScores;
