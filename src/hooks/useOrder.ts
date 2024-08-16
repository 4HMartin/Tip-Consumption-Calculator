import { useState } from "react"
import type { MenuItem, OrderItem } from "../types"

export default function useOrder(){

    // Se define el type utilizando los 'generics' para indicar el tipo de dato inicial
    const [order, setOrder] = useState<OrderItem[]>([])

    const addItem = (item: MenuItem) => {
        console.log(item)
    }

    return {
        addItem
    }
}