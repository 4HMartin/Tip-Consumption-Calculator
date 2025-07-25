import { MenuItem } from "../types"
import { Dispatch } from "react"
import { OrderActions } from "../reducers/order-reducer"

type MenuItemProps = {
    item: MenuItem
    dispatch: Dispatch<OrderActions>
}

export const Menuitem = ({item, dispatch} : MenuItemProps) => {
  return (
    <button 
        className="border-2 border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between rounded-md"
        onClick={() => dispatch({ type: 'add-item', payload: { item } })}
    >
        <p>{item.name}</p>
        <p className="font-bold">$ {item.price}</p>
    </button>
  )
}
