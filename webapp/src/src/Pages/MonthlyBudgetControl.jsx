
import BudgetControl from "../components/BudgetControl";
import { useParams } from 'react-router-dom';


export default function MonthlyBudgetControl() {

  const GetYearAndMonth = () => {
    const location = useParams();
    return location;
  }

  return (
    <BudgetControl yearAndMonth={GetYearAndMonth()} />
  );
}
