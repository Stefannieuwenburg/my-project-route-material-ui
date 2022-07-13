import "./App.css";

import AppBarExample from "./components/AppBar";
import { Route, Routes } from "react-router-dom";
import HomeExample from "./components/Home";
import CardExample from "./components/Card";
import CarouselExample from "./components/Carousel";
import TableExample from "./components/Table";
import ChipsExample from "./components/Chips";

const App = () => {
    return (
        <div className="App">
            <AppBarExample />
            <Routes>
                <Route path="/" element={<HomeExample />} />
                <Route path="/Cards" element={<CardExample />} />
                <Route path="/Carousel" element={<CarouselExample />} />
                <Route path="/Table" element={<TableExample />} />
                <Route path="/Chips" element={<ChipsExample />} />
            </Routes>
        </div>
    );
}

export default App;