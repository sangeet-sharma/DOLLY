import { BrowserRouter, Routes, Route } from "react-router-dom";
import Adminlogin from "./Page/Adminlogin";
import AddRoom from "./Page/AddRoom";
// import Update from "./Admin/Page/Update";
// import Add from "./Admin/Page/Add";
import TotalRoom from "./Page/TotalRoom";
import UpdateRoom from "./Page/UpdateRoom";

function Main()
{
    return(
        <>
        <BrowserRouter>
        <Routes>
        <Route path="/Adminlogin" element={<Adminlogin />} />
        <Route path="/AddRoom" exact element={<AddRoom />}></Route>
          <Route path="/updateRoom/:id" exact element={<UpdateRoom />}></Route>
          <Route path="/TotalRoom" exact element={<TotalRoom />}></Route>
        </Routes>
        </BrowserRouter>
        </>

    );
}
export default Main;