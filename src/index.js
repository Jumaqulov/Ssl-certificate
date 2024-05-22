import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './styles.scss'
import { LayoutHome, LayoutOther } from './Layout/index.jsx';
import { routes } from './Routes/Routes.js';
import 'react-lazy-load-image-component/src/effects/blur.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path={'/'} element={<LayoutHome />} />
      <Route exact element={<LayoutOther />}>
        <Route path='*' element={<Navigate to="/404" replace />} />
        {routes.map(({ path, Component }, i) => (
          <Route key={i} path={path} element={Component} />
        ))}
      </Route>
    </Routes>
  </BrowserRouter>
);