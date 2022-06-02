import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Dashboard from "./pages/Dashboard";
import TicketPage from "./pages/TicketPage";

const App = () => {
  return (
    <div className="App">
     <BrowserRouter>
     <Nav/>
      <Routes>
        <Route path='/' element={<Dashboard />}/>
        <Route path='/ticket' element={<TicketPage />}/>
        <Route path='/ticket/:id' element={<TicketPage editMode={true}/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App;
