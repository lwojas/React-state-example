import { useState } from "react";
import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm";

const sortMethods = {
  score(player_a, player_b) {
    return player_b.score - player_a.score;
  },
  name(player_a, player_b) {
    let order = player_a.name.localeCompare(player_b.name);
    return order;
  },
};

const Scoreboard = () => {
  const [players, set_players] = useState([
    { id: 1, name: "Violeta", score: 11 },
    { id: 2, name: "Eszter", score: 14 },
    { id: 3, name: "Jeroen v2", score: 4 },
    { id: 4, name: "Lisa", score: 42 },
  ]);

  let lastID = 0;

  const resetScore = () => {
    const newArray = players.map((player) => {
      player.score = 0;
      return player;
    });
    set_players(newArray);
  };

  const incrementScore = (id) => {
    const newArray = players.map((player, index) => {
      if (player.id === id) {
        player.score++;
        return player;
        // console.log(player);
      } else {
        return player;
      }
    });
    // console.log(newArray);
    set_players(newArray);
  };

  const [sort_by, set_sort_by] = useState("score"); // either "score" or "name"
  // first "copy" the array
  // then sort it with the `compare_score` callback function
  const players_sorted = [...players].sort(sortMethods[sort_by]);

  const change_sorting = (event) => {
    console.log("new sort order:", event.target.value);
    set_sort_by(event.target.value);
  };

  const setNewPlayer = (name) => {
    lastID++;
    const newPlayer = { name: name, score: 0, id: lastID };
    // Something
    const newArray = [...players, newPlayer];
    set_players(newArray);
  };

  return (
    <div className="Scoreboard">
      <p>Player's scores:</p>
      <p>
        Sort order:{" "}
        <select onChange={change_sorting} value={sort_by}>
          <option value="score">Sort by score</option>
          <option value="name">Sort by name</option>
        </select>
      </p>
      <button onClick={resetScore}>Reset scores</button>
      <ul>
        {players_sorted.map((player, index) => {
          lastID = player.id;
          return (
            <Player
              name={player.name}
              score={player.score}
              key={player.id}
              incrementScore={incrementScore}
              id={player.id}
            />
          );
        })}
      </ul>
      <div>
        <AddPlayerForm addPlayer={setNewPlayer} />
      </div>
    </div>
  );
};

export default Scoreboard;
