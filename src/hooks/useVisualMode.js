import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = (newMode, replace = false) => {
    if (replace === true) {
      setMode(newMode)
      let repHistory = [...history];
      repHistory[repHistory.length - 1] = mode;
      setHistory(repHistory);
    } else {
      setMode(newMode);
      let newHistory = [...history];
      newHistory.push(newMode);
      setHistory(newHistory);
    }
  };

  const back = () => {
    let temp = [...history];
    temp.pop(mode);
    setHistory(temp);
    if (history.length > 1) {
      setMode(temp[(temp.length - 1)]);
    }
  };

  return { mode, transition, back }
}


