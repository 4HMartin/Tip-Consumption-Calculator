import './index.css'
import { menuItems } from './data/db'
import { Menuitem } from './components/Menuitem'
import useOrder from './hooks/useOrder'

function App() {

  const { addItem } = useOrder()

  return (
    <>
      <header className='bg-teal-400 py-5'>
        <h1 className="text-center text-4xl font-bold">Calculadora de Propinas y Consumo</h1>
      </header>

      <main className='max-w-7xl mx-auto py-20 grid md:grid-cols-2 bg-slate-400'> 
        <div className='p-5'>
          <h2 className='text-4xl font-bold'>Menú</h2>

          <div className='space-y-3 mt-10'>
            {menuItems.map(item => (
              <Menuitem
                key={item.id}
                item={item}
                addItem={addItem}
              />
            ))}
          </div>
        </div>
        <div>
          <h2>Consumo</h2>
        </div>
      </main>
    </>
  )
}

export default App
