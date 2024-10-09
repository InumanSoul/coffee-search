import { Coffee } from "../types";

export default function CoffeeDetails({
  coffee,
  open,
  setSelectedCoffee,
}: { 
  coffee: Coffee
  open: boolean
  setSelectedCoffee: (coffee: Coffee | null) => void
}) {
  return (
    <dialog open={open}>
      <div>
        <h2>{coffee.title}</h2>
        <img src={coffee.image} alt={coffee.title} className="photo" />
        <p>
          {coffee.description}
        </p>
        <p>Ingredients</p>
        <ul>
          {
            coffee.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))
          }
        </ul>
      </div>
      <button onClick={() => {
        setSelectedCoffee(null)
      }}>Close</button>
    </dialog>
  )
}