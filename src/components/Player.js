const Player = (props) => {
  const onClickIncrement = () => {
    props.incrementScore(props.id);
  };
  return (
    <div className="flex-row">
      <li className="Player">
        <b>{props.name}</b>
        <p>(score: {props.score})</p>
      </li>
      <button onClick={onClickIncrement}>Increment</button>
    </div>
  );
};

export default Player;
