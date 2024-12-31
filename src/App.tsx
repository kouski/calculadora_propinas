import {menuItems} from './data/db';
import MenuItem from './components/MenuItem';
import OrderContent from './components/OrderContent';
import OrderTotals from './components/OrderTotals';
import TipPercentaje from './components/TipPercentaje';
import useOrder from './hooks/useOrder';


function App() {
  
  const { order, addItem, removeItem,tip, setTip,placeOrder } = useOrder()

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
        
        <div className=' border border-dashed border-slate-500 p-5 ml-10 rounded-lg space-y-10'>
          
          <OrderContent 
          order={order}
          removeItem={removeItem}
          />

          <TipPercentaje
          setTip= {setTip}
          tip= {tip}
          
          />

          <OrderTotals 
          order= {order}
          tip={tip}
          placeOrder={placeOrder}
          />
          
        </div>
        
      </main>
      
    </>
  )
}

export default App
