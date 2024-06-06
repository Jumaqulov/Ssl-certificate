import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles.scss';
import { LayoutHome, LayoutOther } from './Layout/index.jsx';
import NotFound from './Components/404Page/NotFound.jsx';
import { routes } from './Routes/Routes.js';
import 'react-lazy-load-image-component/src/effects/blur.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<LayoutHome />} />
      <Route exact element={<LayoutOther />}>
        <Route path='*' element={<NotFound />} />
        {routes.map(({ path, Component }, i) => (
          <Route key={i} path={path} element={Component} />
        ))}
      </Route>
    </Routes>
  </BrowserRouter>
);