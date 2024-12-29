import {menuItems} from './data/db';
import MenuItem from './components/MenuItem';
import useOrder from './hooks/useOrder';


function App() {
  
  const { addItem} = useOrder()

  return (
    <>
      <header className=" bg-teal-400 py-5 ">
        <h1 className=" text-center text-2xl font-black">Calculadora de propinas</h1>
      </header>

      <main className=' max-w-7xl mx-auto px-20 py-20 grid md:grid-cols-2'>
        <div>
          <h2 className=' text-2xl font-black mb-6'>Menú</h2>
          {menuItems.map(item =>(
            <MenuItem
              key={item.id}
              item={item}
              addItem={addItem}
              
            />
          ))}
        </div>
        
        <div>
          <h2 className=' text-2xl font-black mb-6'>Consumo</h2>
          
        </div>
        
      </main>
      
    </>
  )
}

export default App
