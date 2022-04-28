import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/home/Home";

// Layout
import Layout from "./components/Layout";
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />} path='/'>
					<Route index element={<Home />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
