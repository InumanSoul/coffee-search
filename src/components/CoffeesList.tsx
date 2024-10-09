import { Coffee } from "../types";

export default function CoffeesList({
  coffees,
  setSelectedCoffee,
}: {
  coffees: Coffee[];
  setSelectedCoffee: (coffee: Coffee) => void;
}) {
	return (
		<ul className='coffee-list'>
			{coffees.map((coffee) => (
				<li key={coffee.id}>
					<img src={coffee.image} alt={coffee.title} className='photo' />
					<h2>{coffee.title}</h2>
					<p>{coffee.description}</p>
					<button type="button" onClick={() => setSelectedCoffee(coffee)}>See details</button>
				</li>
			))}
		</ul>
	);
}
