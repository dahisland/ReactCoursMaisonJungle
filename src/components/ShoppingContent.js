import { plantList } from "../data/plantList.js";
import "../css/shoppingPlants.css";
import PlantItem from "./PlantItem.js";

function ShoppingContent({ cart, updateCart }) {
  const arrayCategories = [];
  plantList.forEach((plant) => {
    if (!arrayCategories.includes(plant.category)) {
      arrayCategories.push(plant.category);
    }
  });
  const addToCart = (price, name) => {
    const currentPlantAdded = cart.find((plant) => plant.name === name);
    const indexCurrentPlant = cart.indexOf(currentPlantAdded);
    if (currentPlantAdded) {
      // const cartFilteredCurrentPlant = cart.filter(
      //   (plant) => plant.name !== name
      // );
      // updateCart([
      //   ...cartFilteredCurrentPlant,
      //   { name, price, amount: currentPlantAdded.amount + 1 },
      // ]);
      cart.splice(indexCurrentPlant, 1, {
        name,
        price,
        amount: currentPlantAdded.amount + 1,
      });
      updateCart([...cart]);
    } else {
      updateCart([...cart, { name, price, amount: 1 }]);
    }
  };
  return (
    <div className="shopping_Content">
      <ul className="shopping_Categories">
        {arrayCategories.map((cat) => (
          <li key={cat} className="categories_item">
            {cat}
          </li>
        ))}
      </ul>
      <ul className="shopping_Plants">
        {plantList.map(
          ({
            id,
            name,
            img,
            sunlight,
            water,
            specialOffer,
            bestSale,
            price,
          }) => (
            <li key={id}>
              {specialOffer && <span className="specialOffer">En solde !</span>}
              {bestSale && <span className="bestSale">Top vente</span>}
              <PlantItem
                name={name}
                sunlight={sunlight}
                img={img}
                water={water}
              />
              <button
                className="addToCart"
                onClick={() => addToCart(price, name)}
              >
                Ajouter au panier
              </button>
            </li>
          )
        )}
      </ul>
    </div>
  );
}

export default ShoppingContent;
