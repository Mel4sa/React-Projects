import { useContext, useState } from "react";
import UserContext from "./userContext";
import "./App.css";

function Home() {
  const { user, login, logout } = useContext(UserContext);
  const [name, setName] = useState("");

  const handleLogin = () => {
    if (name.trim() === "") {
      alert("Lütfen adınızı girin!"); 
      return;
    }
    login(name);
    setName("");
  };

  return (
    <div className="home-container">
      {user ? (
        <div className="card">
          <h1>Hoşgeldin {user.name} 🎉</h1>
          <button className="btn" onClick={logout}>Çıkış Yap</button>
        </div>
      ) : (
        <div className="card">
          <h1>Lütfen giriş yapın</h1>
          <input
            type="text"
            placeholder="Adınızı girin"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button className="btn" onClick={handleLogin}>Giriş Yap</button>
        </div>
      )}
    </div>
  );
}

export default Home;