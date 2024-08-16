import { MenuItem } from "../types"

type MenuItemProps = {
    item: MenuItem
    addItem: (item: MenuItem) => void
}

export const Menuitem = ({item, addItem} : MenuItemProps) => {
  return (
    <button 
        className="border-2 border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between rounded-md"
        onClick={() => addItem(item)}
    >
        <p>{item.name}</p>
        <p className="font-bold">$ {item.price}</p>
    </button>
  )
}
