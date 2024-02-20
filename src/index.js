import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles.scss'
import Router from './Routes/Router';
import { LayoutHome, LayoutOther } from './Layout';
import NotFound from './Components/404Page/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path={'/'} element={<LayoutHome />} />
      <Route path='/*' element={<LayoutOther />}>
        <Route path='/*' element={<Router />} />
      </Route>
    </Routes>
  </BrowserRouter>
);