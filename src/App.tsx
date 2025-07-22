import './index.css'
import { useReducer } from 'react'
import { menuItems } from './data/db'
import { Menuitem } from './components/Menuitem'
import useOrder from './hooks/useOrder'
import { OrderContents } from './components/OrderContents'
import { OrderTotals } from './components/OrderTotals'
import { TipPercentageForm } from './components/TipPercentageForm'
import { initialOrderState, orderReducer } from './reducers/order-reducer'

function App() {

  const { order, removeItem, tip, setTip, placeOrder } = useOrder()

  const [ state, dispatch ] = useReducer(orderReducer, initialOrderState)

  return (
    <>
      <header className='bg-teal-400 py-5'>
        <h1 className="text-center text-4xl font-bold">Calculadora de Propinas y Consumo</h1>
      </header>

      <main className='max-w-7xl mx-auto py-20 grid md:grid-cols-2'>
        <div className='p-5'>
          <h2 className='text-4xl font-bold'>Menú</h2>

          <div className='space-y-3 mt-10'>
            {menuItems.map(item => (
              <Menuitem
                key={item.id}
                item={item}
                dispatch={dispatch}
              />
            ))}
          </div>
        </div>

        <div className='border border-dashed border-slate-300 p-5 rounded-lg space-y-10'>
          {state.order.length ? (
            <>
              <OrderContents
                order={state.order}
                removeItem={removeItem}
              />

              <TipPercentageForm
                setTip={setTip}
                tip={tip}
              />

              <OrderTotals
                order={state.order}
                tip={tip}
                placeOrder={placeOrder}
              />
            </>
          ): (
            <p className='text-center text-2xl font-bold'>No hay items en el pedido</p>
          )}
          
        </div>
      </main>
    </>
  )
}

export default App
