import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Details } from '../pages/DetailsPage';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/event/:id' element={<Details />} />
        </Routes>
    )
}
