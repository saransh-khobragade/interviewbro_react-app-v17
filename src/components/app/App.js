import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from '../home/home'
import First from '../first/first'
import Second from '../second/second'
import Third from '../third/third'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="first" element={<First />} />
          <Route path="second" element={<Second />} />
          <Route path="third" element={<Third />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
