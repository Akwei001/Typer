import { KeyboardEvent, useCallback, useEffect, useState } from "react";

const isKeyboardCodeAllowed = (code: string) => {

  return (
    code.startsWith("Key") ||
    code.startsWith("Digit") ||
    code === "Backspace" ||
    code === "Space"
  );
};

const useTypings = (enabled: boolean) => {
    const[cursor, setCursor] = useState(0);
    const[typred, setTyped] = useState<string>("");
    const totalTyped = useRef(0);

    const keydownHandler = useCallback(
        ({ key, code }: KeyboardEvent) => {
          if (!enabled || !isKeyboardCodeAllowed(code)) {
            return;
          }
    
          switch (key) {
            case "Backspace":
              setTyped((prev) => prev.slice(0, -1));
              setCursor((cursor) => cursor - 1);
              totalTyped.current -= 1;
              break;
            default:
              setTyped((prev) => prev.concat(key));
              setCursor((cursor) => cursor + 1);
              totalTyped.current += 1;
          }
        },
        [enabled]
      );
    

// attach the keydown event listener to record keystrokes
useEffect( () => {
    window.addEventListener("keydown", keydownHandler);

    // Remove event listener on cleanup
    return ( ) => {
        window.removeEventListener("keydown", keydownHandler);
    }

},[keydownHandler])



};

export default useTypings;

function useRef(arg0: number) {
    throw new Error("Function not implemented.");
}


function isKeyboardCodeallowed(code: string) {
    throw new Error("Function not implemented.");
}


function keydownHandler(this: Window, ev: KeyboardEvent) {
    throw new Error("Function not implemented.");
}
