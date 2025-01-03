import type { MenuItem } from "../types"

type MenuItemProps = {
  item: MenuItem
  addItem: (item: MenuItem)=> void
}

export default function MenuItem({item,addItem}: MenuItemProps) {
  return (
    <button 
    className=" border-2 border-teal-400 bg-gray-100 hover:bg-teal-200 p-3 my-3 w-full flex justify-between rounded"
    onClick={()=>addItem(item)}
    >
    <p className=" text-teal-900">{item.name}</p>
    <p className=" font-black">{item.price} €</p>
    
    </button>
  )
}
