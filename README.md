# React state example

A simple app to shawcase state function components

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
