# React Scoreboard app

A simple app to showcase React hooks

## Cheat sheet

### useState

```js
// Import the hooks into the component
import { useState, useEffect } from "react";

// useState declared inside component
    // Create the useState variable
    const [numLikes, set_numLikes] = useState(initial_numLikes); // <- using state!

    // Component will re-render everytime the 'setter' function is called
    const increment = () => {
        set_numLikes(numLikes + 1);
    };
  ```
  
### useEffect

useEffect fires after the component is mounted, use the array to only listen to defined state variable changes

```js
  useEffect(() => {
    console.log("I will fire only when numLikes changes after a re-render ");
  }, [numLikes]);
```

Leaving the array empty will fire useEffect automatically once the component has been mounted, good for loading async data

```js
  useEffect(() => {
    console.log("I will fire once after the component is first mounted, bye!");
  }, []);
```
