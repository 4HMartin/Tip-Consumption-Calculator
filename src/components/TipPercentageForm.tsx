import { Dispatch } from "react"
import { OrderActions } from "../reducers/order-reducer"

const tipOptions = [
    {
        id: 'tip-10',
        value: .10,
        label: '10%'
    },
    {
        id: 'tip-20',
        value: .20,
        label: '20%'
    },
    {
        id: 'tip-50',
        value: .50,
        label: '50%'
    }
]
type TipPercentageFormProps = {
    dispatch: Dispatch<OrderActions>,
    tip: number
}
export const TipPercentageForm = ({dispatch, tip} : TipPercentageFormProps) => {
    
    
    return (
        <div>
            <h3 className="font-black text-2xl">Propina:</h3>
            <form>
                {tipOptions.map(tipOption => (
                    <div key={tipOption.id} className="flex gap-2">
                        <label htmlFor={tipOption.id}>{tipOption.label}</label>
                        <input
                            type="radio"
                            name="tip"
                            id={tipOption.id}
                            value={tipOption.value}
                            onChange={e => dispatch({ type: 'add-tip', payload: { value: Number(e.target.value) } })}
                            checked={tipOption.value === tip}
                        />
                    </div>
                ))}
            </form>
        </div>
    )
}