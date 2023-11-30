

import MyDataTable from "../components/MyDataTable";
import Totals from "../components/Totals";
import { useState } from "react";

export default function Home() {
    const [budget, setBudget] = useState(0);
    const [expenses, setExpenses] = useState(0);
  
    const totalAmountToParent = (totalAmount) => {
      if (totalAmount.model === 'budget') {
        setBudget(totalAmount.amount);
      }
      if (totalAmount.model === 'expenses') {
        setExpenses(totalAmount.amount);
      }
    }
  
    return (
        <div>
            <MyDataTable data={{'name': 'budget', 'label': 'Entradas'}} totalAmountToParent={totalAmountToParent}/>
            <MyDataTable data={{'name': 'expenses', 'label': 'Saídas'}}  totalAmountToParent={totalAmountToParent}/>
            <Totals budget={budget} expenses={expenses} />
        </div>
    );
}