import React, { useState } from "react";
import "./App.css";
const quotes = [
  "Spread love everywhere you go. Let no one ever come to you without leaving happier - Mother Teresa",
  "When you reach the end of your rope, tie a knot in it and hang on. - Franklin D. Roosevelt",
  "Always remember that you are absolutely unique. Just like everyone else. - Margaret Mead",
  "It is during our darkest moments that we must focus to see the light. - Aristotle",
  "Whoever is happy will make others happy too. - Anne Frank",
  "Many of life's failures are people who did not realize how close they were to success when they gave up. - Thomas A. Edison",
  "Nothing is impossible, the word itself says, ‘I'm possible!' - Audrey Hepburn",
  "Life is 10% what happens to me and 90% of how I react to it. - Charles Swindoll",
  "We need to do a better job of putting ourselves higher on our own 'to do' list - Michelle Obama",
  "Do what you can, with what you have, where you are. – Theodore Roosevelt",
  "The soul is healed by being with children. ― Fyodor Dostoevsky",
  "If you want to live a happy life, tie it to a goal, not to people or things.– Albert Einstein",
  "Being happy never goes out of style. - Lilly Pulitzer",
  "I don't go by the rule book…I lead from the heart, not the head.- Princess Diana",
  "The time is always right to do what is right. - Martin Luther King Jr.",
  "All serious daring starts from within. - Eudora Welty",
];

function App() {
  const [counter, setCounter] = useState(2);

  return (
    <div onClick={(event) => setCounter(counter + 1)} className="App">
      {quotes[counter % quotes.length]}
    </div>
  );
}

export default App;
