

import MyDataTable from "../components/MyDataTable";
import Totals from "../components/Totals";
import { useState } from "react";

export default function Home() {
    const [budget, setBudget] = useState(0);
    const [expenses, setExpenses] = useState(0);
  
    const childToParent = (childdata) => {
      //setData(childdata);
      console.log(childdata);
      if (childdata.model === 'budget') {
        setBudget(childdata);
      }
      if (childdata.model === 'expenses') {
        setExpenses(childdata);
      }
    }
  
    return (
        <div>
            <MyDataTable data={{'name': 'budget', 'label': 'Entradas'}} childToParent={childToParent}/>
            <MyDataTable data={{'name': 'expenses', 'label': 'Saídas'}}  childToParent={childToParent}/>

            <Totals budget={budget} expenses={expenses} />
        </div>
    );
}