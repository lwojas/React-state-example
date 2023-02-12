import { useSpring, animated } from "@react-spring/web";

const Player = (props) => {
  const onClickIncrement = () => {
    props.incrementScore(props.id);
  };
  const onClickRemove = () => {
    props.removePlayer(props.id);
  };

  const springs = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  return (
    <animated.div
      className="flex-row shadow-default"
      style={{
        ...springs,
      }}
    >
      <li className="Player">
        <b>{props.name}</b>
      </li>

      <p>{props.score}</p>
      <li className="Player"></li>
      <button onClick={onClickIncrement}>Increment</button>
      <div className="button-close" onClick={onClickRemove}>
        ✖
      </div>
    </animated.div>
  );
};

export default Player;
