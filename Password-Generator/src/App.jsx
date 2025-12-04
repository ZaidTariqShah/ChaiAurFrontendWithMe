import { useCallback, useEffect, useState, useRef } from "react";

const App = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()-_+={}[]~";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]); //Developers include state setter functions in the dependency array because they believe that any setter used inside the effect should also be listed in the dependencies.

  useEffect(() => {
    passwordGenerator();
  }, [passwordGenerator]);

  return (
    <div className="w-full max-w-md mx-auto bg-gray-900 text-orange-400 shadow-xl rounded-2xl p-8 mt-20 border border-gray-700">
      <h1 className="text-center text-2xl font-semibold mb-6 text-orange-300">
        Password Generator
      </h1>

      {/* Input + Copy Button */}
      <div className="flex bg-gray-800 rounded-xl overflow-hidden shadow-md mb-6 border border-gray-700">
        <input
          type="text"
          value={password}
          ref={passwordRef}
          className="w-full bg-gray-800 text-orange-300 outline-none py-3 px-4 text-lg"
          placeholder="password"
          readOnly
        />
        <button
          onClick={copyPasswordToClipboard}
          className="bg-orange-500 hover:bg-orange-600 transition-all px-5 text-white font-semibold tracking-wide"
        >
          COPY
        </button>
      </div>

      {/* Controls */}
      <div className="space-y-6">
        {/* Length Slider */}
        <div className="flex items-center gap-4">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-full accent-orange-500 cursor-pointer"
          />
          <label className="text-lg font-medium">Length: {length}</label>
        </div>

        {/* Checkboxes */}
        <div className="flex flex-col gap-3">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              id="numberInput"
              type="checkbox"
              defaultChecked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
              className="h-5 w-5 accent-orange-500"
            />
            <span className="text-lg">Characters</span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer">
            <input
              id="charInput"
              type="checkbox"
              defaultChecked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
              className="h-5 w-5 accent-orange-500"
            />
            <span className="text-lg">Numbers</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default App;
