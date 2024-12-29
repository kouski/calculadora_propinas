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
                <div key={item.id} className=" flex justify-between">
                    <p className=" text-lg">{item.name} - {item.price} €</p>
                    <p className=" font-black">Cantidad: {item.quantity}</p>
                </div>
            ))) }
        </div>
    </div>
    
  )
}
