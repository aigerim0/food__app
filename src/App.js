import {BrowserRouter,Route} from 'react-router-dom'
import Meals from "./Meals";
import MealDetails from "./MealDetails";


function App() {
  return (

<BrowserRouter>
   <Route exact path='/'> <Meals/></Route>
<Route path='/meal/:id'><MealDetails/></Route>
</BrowserRouter>

  );
}

export default App;
