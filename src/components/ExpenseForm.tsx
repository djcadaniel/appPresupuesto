import { categories } from "../data/categories";
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import { DraftExpense } from "../types";
import { useState } from "react";


export default function ExpenseForm() {
  const [expense, setExpense] = useState<DraftExpense>({
    amount: 0,
    expenseName: '',
    category: '',
    date: new Date()
  })

  return (
    <form action="" className="space-y-5">
      <legend
        className="uppercase text-center text-2xl font-black border-b-4 border-blue-500 py-2 "
      >
        Nuevo gasto
      </legend>
      <div className="flex flex-col gap-2">
        <label 
          htmlFor="expenseName"
          className="text-xl"
        >
          Nombre de gasto:
        </label>
        <input 
          type="text"
          id='expenseName'
          placeholder="Añade el nombre del gasto"
          className="bg-slate-100 p-2"
          name="expenseName" 
          value={expense.expenseName}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label 
          htmlFor="amount"
          className="text-xl"
        >
          Cantidad:
        </label>
        <input 
          type="number"
          id='amount'
          placeholder="Añade la cantidad del gasto: ej. 300"
          className="bg-slate-100 p-2"
          name="amount"
          value={expense.amount} 
        />
      </div>
      <div className="flex flex-col gap-2">
        <label 
          htmlFor="category"
          className="text-xl"
        >
          Categoría:
        </label>
        <select 
          id="category"
          className="bg-slate-100 p-2"
          name="category" 
          value={expense.category}
        >
          <option value="">--Seleccione😉--</option>
          {categories.map(category => (
            <option 
              key={category.id}
              value={category.id}
            >
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col gap-2">
        <label 
          htmlFor="amount"
          className="text-xl"
        >
          Fecha del gasto:
        </label>
        <DatePicker 
          className="bg-slate-100 p-2 border-0"
          value={expense.date}
        />
      </div>
      <input 
        type="submit" 
        className="bg-blue-600 cursor-pointer w-full p-2 text-white uppercase font-bold rounded-lg"
        value='Registrar gasto'
      />
    </form>
  )
}