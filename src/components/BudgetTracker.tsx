import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { useBudget } from "../hooks/useBudget";
import { AmountDisplay } from "./AmountDisplay";
import 'react-circular-progressbar/dist/styles.css';
import { useState } from 'react';

export default function BudgetTracker() {

  const {state,dispatch, totalExpense, remainingBudget} = useBudget()
  const [openQuestion, setOpenQuestion] = useState(false)

  const percentage = +((totalExpense / state.budget) * 100).toFixed(2)

  const handleReset = () => {
    dispatch({type: 'reset-app'})
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
      <div className="flex justify-center">
        {/* <img src="/grafico.jpg" alt="" /> */}
        <CircularProgressbar
          value={percentage}
          styles={buildStyles({
            pathColor: percentage === 100 ? '#DC2626' : '#3B82F6',
            trailColor: '#F5F5F5',
            textSize: 8,
            textColor: percentage === 100 ? '#DC2626' : '#3B82F6'
          })}
          text={`${percentage}% gastado`}
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-8">
        <button 
          className="bg-pink-600 w-full p-2 text-white uppercase font-bold rounded-lg"
          onClick={ () => setOpenQuestion(true) }
        >
          Reiniciar
        </button>
        {
          openQuestion && (
            <>
              <div className='absolute top-0 left-0 right-0 bottom-0 w-full bg-[#07172e] opacity-55'>
              </div>
              <div className='absolute top-[35%] left-[40%] bg-[#07172e] text-white py-14 px-24 rounded-lg text-center font-bold'>
                <p className='font-bold text-xl mb-4'>¿Estás seguro de reiniciar?</p>
                <button onClick={handleReset} className='bg-blue-800 px-10 py-2 rounded-md text-white mr-4'>Sí</button>
                <button onClick={()=> setOpenQuestion(false)} className='bg-red-400 px-6 py-2 rounded-md text-white'>Cancelar</button>
              </div>
            </>
          )
        }
        <AmountDisplay 
          label= 'Presupuesto'
          amount={state.budget}
        />
        <AmountDisplay 
          label= 'Disponible'
          amount={remainingBudget}
        />
        <AmountDisplay 
          label= 'Gastos'
          amount={totalExpense}
        />
      </div>
    </div>
  )
}