/** @format */
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Err404 from '../pages/Err404';
import Homepage from '../pages/Homepage';
import { CreateActivity } from '../pages/CreateActivity';

const RouteApp = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Homepage />} />
				<Route path='/create-activity/:id' element={<CreateActivity />} />
				<Route path='*' element={<Err404 />} />
			</Routes>
		</BrowserRouter>
	);
};

export default RouteApp;
