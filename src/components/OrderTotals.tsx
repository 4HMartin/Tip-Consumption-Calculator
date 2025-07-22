import { Dispatch, useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"
import { OrderActions } from "../reducers/order-reducer"

type OrderTotalsProps = {
    order: OrderItem[],
    tip: number,
    dispatch: Dispatch<OrderActions>
}

export const OrderTotals = ({order, tip, dispatch} : OrderTotalsProps) => {
    
    const subtotalAmount = useMemo(() => order.reduce((subTotal, item) => subTotal + (item.price * item.quantity) , 0 ) ,[order])

    const tipAmount = useMemo(() => {return subtotalAmount * tip}, [tip, order])

    const totalAmount = useMemo(() => {return subtotalAmount + tipAmount}, [tip, order])
    
    return (
        <>
            <div className="space-y-3">
                <h2 className="font-black text-2xl">Totales y Propinas:</h2>
                <p>
                    Subtotal a pagar: {''}
                    <span className="font-bold">{formatCurrency(subtotalAmount)}</span>
                </p>
                <p>
                    Propina: {''}
                    <span className="font-bold">{formatCurrency(tipAmount)}</span>
                </p>
                <p>
                    Total a pagar: {''}
                    <span className="font-bold">{formatCurrency(totalAmount)}</span>
                </p>
            </div>
            <button
                className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10"
                disabled={totalAmount === 0}
                onClick={() => dispatch({ type: 'place-order' })}
            >
                Guardar orden
            </button>
        </>
    )
}