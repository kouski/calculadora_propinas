import {menuItems} from './data/db';
import MenuItem from './components/MenuItem';


function App() {
  

  return (
    <>
      <header className=" bg-teal-400 py-5 ">
        <h1 className=" text-center text-2xl font-black">Calculadora de propinas</h1>
      </header>

      <main className=' max-w-7xl mx-auto px-20 py-20 grid md:grid-cols-2'>
        <div>
          <h2>Menú</h2>
          {menuItems.map(item =>(
            <MenuItem
              key={item.id}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
        
        <div>
          <h2>Consumo</h2>
        </div>
        
      </main>
      
    </>
  )
}

export default App
