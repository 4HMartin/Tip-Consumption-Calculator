import { MenuItem, OrderItem } from "../types"

export type OrderActions =
    { type: 'add-item', payload: { item: MenuItem } } |
    { type: 'remove-item', payload: { id: MenuItem['id'] } } |
    { type: 'place-order' } |
    { type: 'add-tip', payload: { value: number } }


export type OrderState = {
    order: OrderItem[],
    tip: number
}

export const initialOrderState: OrderState = {
    order: [],
    tip: 0
}

export const orderReducer = (
        state: OrderState,
        action: OrderActions
    ) => {

    if (action.type === 'add-item') {

        /** Evitar duplicados al añadir el mismo item incrementando su cantidad */
        const itemExists = state.order.find(orderItem => orderItem.id === action.payload.item.id)
        let order : OrderItem[] = [];
        if(itemExists){
            order = state.order.map(orderItem =>
                orderItem.id === action.payload.item.id ? {...orderItem, quantity: orderItem.quantity + 1} : orderItem
            )

        } else {
            /**
             * Casting de parámetro recibido MenuItem a OrderItem
             * Creamos una nueva variable con la copia del objeto recibido por parámetro y le añadimos la propiedad 'quantity'
             * para que el nuevo objeto 'newItem' pueda ser del type OrderItem
             */
            const newItem = {...action.payload.item, quantity: 1}
            /**
             * Spread operator para copiar los valores del state actual y añadimos el nuevo objeto
             */
            order = [...state.order, newItem]
        }

        return {
            ...state,
            order
        }
    }
    if (action.type === 'remove-item') {

        const order = state.order.filter(orderItem => orderItem.id !== action.payload.id)

        return {
            ...state,
            order
        }
    }
    if (action.type === 'place-order') {


        return {
            ...state
        }
    }
    if (action.type === 'add-tip') {


        return {
            ...state
        }
    }

    return state
}