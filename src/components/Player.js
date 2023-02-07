const Player = (props) => {
  const onClickIncrement = () => {
    props.incrementScore(props.id);
  };
  return (
    <div className="flex-row shadow-default">
      <li className="Player">
        <b>{props.name}</b>
      </li>

      <p>{props.score}</p>
      <li className="Player"></li>
      <button onClick={onClickIncrement}>Increment</button>
      <div className="button-close">✖</div>
    </div>
  );
};

export default Player;
