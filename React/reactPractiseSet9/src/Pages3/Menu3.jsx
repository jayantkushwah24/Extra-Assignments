import { useContext, useState, useEffect } from "react";
import { FoodAppContext } from "../Context/FoodAppContext3";

export function Menu() {
  const { menu, handleAddToCart } = useContext(FoodAppContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [isVeg, setIsVeg] = useState(false);
  const [isSpicy, setIsSpicy] = useState(false);
  const [sortOrder, setSortOrder] = useState(""); // 'low-to-high' or 'high-to-low'
  const [filteredMenu, setFilteredMenu] = useState(menu);

  useEffect(() => {
    let updatedMenu = [...menu]; // Create a copy of the menu array

    // Apply search filter
    if (searchTerm) {
      updatedMenu = updatedMenu.filter((food) =>
        food.name.toLowerCase().includes(searchTerm)
      );
    }

    // Apply vegetarian filter
    if (isVeg) {
      updatedMenu = updatedMenu.filter((food) => food.is_vegetarian);
    }

    // Apply spicy filter
    if (isSpicy) {
      updatedMenu = updatedMenu.filter((food) => food.is_spicy);
    }

    // Apply sorting
    if (sortOrder === "low-to-high") {
      updatedMenu.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "high-to-low") {
      updatedMenu.sort((a, b) => b.price - a.price);
    }

    setFilteredMenu(updatedMenu);
  }, [menu, searchTerm, isVeg, isSpicy, sortOrder]);

  const handleSearchFood = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const handleFilterVeg = () => {
    setIsVeg(!isVeg);
  };

  const handleFilterSpicy = () => {
    setIsSpicy(!isSpicy);
  };

  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value);
  };

  return (
    <>
      <h2>Menu</h2>
      <input
        type="text"
        placeholder="Search food here"
        onChange={handleSearchFood}
        value={searchTerm}
      />
      <span>
        <input type="checkbox" onChange={handleFilterVeg} checked={isVeg} /> Veg
      </span>
      <span>
        <input type="checkbox" onChange={handleFilterSpicy} checked={isSpicy} />{" "}
        Spicy
      </span>

      <form style={{ display: "inline" }}>
        <input
          type="radio"
          id="low-to-high"
          name="sortOrder"
          value="low-to-high"
          onChange={handleSortOrderChange}
          checked={sortOrder === "low-to-high"}
        />
        <label htmlFor="low-to-high">Sort Price (Low to High)</label>
        <input
          type="radio"
          id="high-to-low"
          name="sortOrder"
          value="high-to-low"
          onChange={handleSortOrderChange}
          checked={sortOrder === "high-to-low"}
        />
        <label htmlFor="high-to-low">Sort Price (High to Low)</label>
      </form>

      <span style={{ display: "flex", flexWrap: "wrap" }}>
        {filteredMenu.map(
          ({ id, name, description, price, image, delivery_time }) => (
            <span
              key={id}
              style={{
                height: "420px",
                width: "320px",
                margin: "10px",
                border: "2px solid black",
              }}
            >
              <img
                src={image}
                alt="img"
                style={{ height: "200px", width: "250px" }}
              />
              <h3>Name: {name}</h3>
              <p>Description: {description}</p>
              <p>Price: ${price}</p>
              <p>Delivery Time: {delivery_time} min</p>
              <button
                onClick={() =>
                  handleAddToCart({
                    id,
                    name,
                    description,
                    price,
                    image,
                    delivery_time,
                    quantity: 1,
                  })
                }
              >
                Add to Cart
              </button>
            </span>
          )
        )}
      </span>
    </>
  );
}
