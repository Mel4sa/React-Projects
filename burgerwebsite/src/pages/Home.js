import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <img
        src="https://images.unsplash.com/photo-1550547660-d9450f859349?w=1200"
        alt="Burger"
        className="home-img"
      />
      <h1>Hoşgeldiniz BurgerHouse’a 🍔</h1>
      <p>Lezzetli burgerlerimiz sizi bekliyor! Hemen sipariş verin.</p>
      <button className="order-btn" onClick={() => navigate("/menu")}>
        Şimdi Sipariş Ver
      </button>
    </div>
  );
}

export default Home;