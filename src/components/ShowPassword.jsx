export function ShowPassword({
  password,
  isPasswordShow,
  showPasswordToggleClick,
}) {
  function handleCopyClick() {
    navigator.clipboard.writeText(password);
    alert("Skopiowano do schowka!");
  }

  return (
    <div className="generatetPassword">
      <strong>Twoje hasło:</strong>
      <div className="password">
        {isPasswordShow ? password : "*".repeat(password.length)}
      </div>
      <div className="action">
        <button className="show" onClick={showPasswordToggleClick}>
          {isPasswordShow ? "Schowaj" : "Pokaż"}
        </button>
        <button className="copy" onClick={handleCopyClick}>
          Kopiuj
        </button>
      </div>
    </div>
  );
}
