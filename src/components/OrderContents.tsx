import { formatCurrency } from "../helpers"
import { OrderItem } from "../types"

type OrderContentsProps = {
    order: OrderItem[]
}

export const OrderContents = ({order} : OrderContentsProps) => {
  return (
    <div>
        <h2 className="text-bold text-4xl">Consumo</h2>

        <div className="space-y-3 mt-10">
            {order.length === 0 ?
                <p className="text-center">Orden vacía</p>
            : (
                order.map(orderItem => (
                    <div
                        key={orderItem.id}
                        className="flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b"
                    >
                        <div>
                            <p className="text-lg">
                                {orderItem.name} - {formatCurrency(orderItem.price)}
                            </p>
                            <p className="font-black">
                                Cantidad: {orderItem.quantity} - {formatCurrency(orderItem.quantity * orderItem.price)}
                            </p>
                        </div>

                        <button className="bg-red-600 h-8 w-8 rounded-full text-white">
                            X
                        </button>
                    </div>
                ))
            )}
        </div>
    </div>
  )
}
