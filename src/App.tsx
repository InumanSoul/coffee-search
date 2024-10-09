import { useEffect, useMemo, useState } from 'react'
import './App.css'
import { Coffee } from './types';
import CoffeesList from './components/CoffeesList';
import CoffeeDetails from './components/CoffeeDetails';

function App() {
  const [coffees, setCoffees] = useState<Coffee[]>([]);
  const [search, setSearch] = useState<string>('');
  const [sort, setSort] = useState<boolean>(false);
  const [selectedCoffee, setSelectedCoffee] = useState<Coffee | null>(null);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }

  const handleSort = () => {
    setSort(!sort);
  }

  const filterCoffees = useMemo(() => {
    return search.length > 0 ?
    coffees.filter(coffee => coffee.title.toLowerCase().includes(search.toLowerCase())) : coffees
  }, [coffees, search])

  const sortedCoffees = useMemo(() => {
    return sort ?
    [...filterCoffees].sort(
      (a, b) => a.title.localeCompare(b.title)
    ) : filterCoffees
  }, [filterCoffees, sort])

  useEffect(() => {
    fetch('https://api.sampleapis.com/coffee/hot')
    .then(res => res.json())
    .then(res => {
      setCoffees(res)
    })
  }, []);

  return (
    <section className='page'>
      <header>
        <h1>Coffee types</h1>
        <div className='actions'>
          <input type="text" placeholder="Search your coffee..." onChange={handleSearch} />
          <button type='button' onClick={handleSort}>Sort A-Z</button>
        </div>
      </header>
      <main>
        <CoffeesList coffees={sortedCoffees} setSelectedCoffee={setSelectedCoffee}/>
      </main>
      <section>
        <p>Showing {sortedCoffees.length} coffee types</p>
      </section>
      {
        selectedCoffee && <CoffeeDetails coffee={selectedCoffee} open={true} setSelectedCoffee={setSelectedCoffee} />
      }
    </section>
  )
}

export default App
