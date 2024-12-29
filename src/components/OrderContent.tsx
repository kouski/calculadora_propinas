import { OrderItem } from "../types"

type OrdenContentProps = {
    order: OrderItem[]
}

export default function OrderContent({order}: OrdenContentProps) {



  return (
    <div>
        <h2 className=' text-2xl font-black mb-6'>Consumo</h2>
        <div className="space-y-3 mt-5">
            {order.length === 0? 
            <p className=" text-center">La orden está vacía</p>  
            : (order.map(item=>(
                <div key={item.id} className=" flex justify-between items-center border-t border-gray-200 py-1 last-of-type:border-b">
                    <div>
                    <p className=" text-lg">{item.name} - {item.price} €</p>
                    <p className=" font-black">Cantidad:  {item.quantity} - {item.price * item.quantity} €</p>
                </div>

                    <button className="bg-red-600 h-6 w-6 font-black text-white rounded-full">x</button>
                    
                    
                </div>
            ))) }
        </div>
    </div>
    
  )
}
