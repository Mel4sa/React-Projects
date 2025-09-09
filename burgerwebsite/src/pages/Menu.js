import { useState } from "react";

function Menu() {
  const [search, setSearch] = useState("");

  const burgers = [
    {
      id: 1,
      name: "Cheeseburger",
      price: "80₺",
      img: "https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706_1280.jpg",
    },
       {
      id: 2,
      name: "Double Burger",
      price: "110₺",
      img: "https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_640.jpg",
    },
    {
      id: 3,
      name: "Chicken Burger",
      price: "90₺",
      img: "https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238247_640.jpg",
    },
    {
      id: 4,
      name: "Veggie Burger",
      price: "75₺",
      img: "https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_1280.jpg",
    },
    {
      id: 5,
      name: "Bacon Burger",
      price: "120₺",
      img: "https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706_1280.jpg",
    },
    {
      id: 6,
      name: "Spicy Burger",
      price: "95₺",
      img: "https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706_1280.jpg",
    },
  ];

  const filteredBurgers = burgers.filter((burger) =>
    burger.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>🍔 Menü</h1>
      <input
        type="text"
        placeholder="Burger ara..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      <div className="menu-grid">
        {filteredBurgers.map((burger) => (
          <div key={burger.id} className="menu-card">
            <img src={burger.img} alt={burger.name} className="burger-img" />
            <h3>{burger.name}</h3>
            <p>{burger.price}</p>
            <button>Sipariş Ver</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;