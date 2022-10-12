const Player = (props) => {
  const onClickIncrement = () => {
    props.incrementScore(props.id);
  };
  return (
    <div>
      <li className="Player">
        {props.name} (score: {props.score})
        <button onClick={onClickIncrement}>Increment</button>
      </li>
    </div>
  );
};

export default Player;
