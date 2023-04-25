import Landingpage from "./Components/Landingpage";
import { Routes, Route } from "react-router";
import Homepage from "./Components/Homepage";
import CoinsPage from "./Components/CoinsPage"

function App() {
    return (
        <>
            <Routes>
            <Route path="/" element={<Landingpage />}></Route>
                <Route path="/homepage" element={<Homepage />}></Route>
                <Route path="/coins/:id" element={<CoinsPage />}></Route>
            </Routes>
        </>
    )
}

export default App;