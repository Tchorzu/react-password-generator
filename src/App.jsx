import { useState } from "react";
import { ShowPassword } from "./components/ShowPassword.jsx";
import { generatePassword } from "./utils/generatePassword.js";
import "./App.css";

const defaultPasswordOptions = {
  passLength: 12,
  special: false,
  number: false,
  bigLetters: false,
};

function App() {
  const [password, setPassword] = useState("");
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const [isGeneratedPassword, setIsGeneratedPassword] = useState(false);
  const [passwordOptions, setPasswordOptions] = useState(
    defaultPasswordOptions,
  );

  function handlePassLengthChange(e) {
    const num = e.target.value;

    setPasswordOptions({ ...passwordOptions, passLength: num });
  }

  function handleCheckboxChange(e) {
    switch (e.target.name) {
      case "special":
        setPasswordOptions({
          ...passwordOptions,
          special: !passwordOptions.special,
        });
        break;
      case "number":
        setPasswordOptions({
          ...passwordOptions,
          number: !passwordOptions.number,
        });
        break;
      case "bigLetters":
        setPasswordOptions({
          ...passwordOptions,
          bigLetters: !passwordOptions.bigLetters,
        });
        break;
    }
  }

  function handleGeneratedPasswordClick() {
    setPassword(generatePassword(passwordOptions));
    setIsGeneratedPassword(true);
  }

  return (
    <div className="container">
      <label>
        Długość hasła:{" "}
        <input
          type="number"
          value={passwordOptions.passLength}
          onChange={handlePassLengthChange}
        />
      </label>
      <div className="option">
        <label>
          <input
            type="checkbox"
            name="special"
            id="special"
            checked={passwordOptions.special}
            onChange={handleCheckboxChange}
          />{" "}
          Znaki specjalne
        </label>
        <label>
          <input
            type="checkbox"
            name="number"
            id="number"
            checked={passwordOptions.number}
            onChange={handleCheckboxChange}
          />{" "}
          Numery
        </label>
        <label>
          <input
            type="checkbox"
            name="bigLetters"
            id="bigLetters"
            checked={passwordOptions.bigLetters}
            onChange={handleCheckboxChange}
          />{" "}
          Wielkie litery
        </label>
      </div>
      <button className="generateButton" onClick={handleGeneratedPasswordClick}>
        Generuj hasło
      </button>
      {isGeneratedPassword && (
        <ShowPassword
          password={password}
          isPasswordShow={isPasswordShow}
          showPasswordToggleClick={() =>
            setIsPasswordShow((prevState) => !prevState)
          }
        />
      )}
    </div>
  );
}

export default App;
