import { useState } from "react";

import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm";
import SortPanel from "./SortPanel";
import ResetScores from "./ResetScores";

const getRandomNumber = () => {
  return Math.floor(Math.random() * 10000);
};

// Component declaration

// Set up scoreboard
const Scoreboard = () => {
  const [players, set_players] = useState([
    { id: 1, name: "Violeta", score: 11 },
    { id: 2, name: "Eszter", score: 14 },
    { id: 3, name: "Jeroen v2", score: 4 },
    { id: 4, name: "Lisa", score: 42 },
  ]);

  //   Reset all scores
  const resetScore = () => {
    const newArray = players.map((player) => {
      player.score = 0;
      return player;
    });
    set_players(newArray);
  };

  //   Increment the score on button press
  const incrementScore = (id) => {
    const newArray = players.map((player, index) => {
      if (player.id === id) {
        player.score++;
        return player;
      } else {
        return player;
      }
    });
    set_players(newArray);
  };

  //   Add a new player by duplicating and overwriting the original 'players' array
  const setNewPlayer = (name) => {
    const newPlayer = { name: name, score: 0, id: getRandomNumber() };
    const newArray = [...players, newPlayer];
    set_players(newArray);
  };

  //   Sorting functions see the 'sort_by useState' hook below
  const sortMethods = {
    score(player_a, player_b) {
      return player_b.score - player_a.score;
    },
    name(player_a, player_b) {
      let order = player_a.name.localeCompare(player_b.name);
      return order;
    },
  };

  const [sort_by, set_sort_by] = useState("score"); // either "score" or "name"
  const players_sorted = [...players].sort(sortMethods[sort_by]);

  const change_sorting = (event) => {
    console.log("new sort order:", event.target.value);
    set_sort_by(event.target.value);
  };

  //   Render the HTML
  return (
    <>
      <div className="Scoreboard">
        <div>
          <AddPlayerForm addPlayer={setNewPlayer} />
        </div>
        <div className="score-table">
          <SortPanel change_sorting={change_sorting} sort_by={sort_by} />
          <ul className="flex-col gap-xs margin-bottom-small">
            {players_sorted.map((player, index) => {
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
        </div>
      </div>
      <ResetScores resetScore={resetScore} />
    </>
  );
};

export default Scoreboard;
