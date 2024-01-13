import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles.scss'
import Router from './Routes/Router';
import Layout from './Layout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename={'/'}>
    <Routes>
      <Route path={'/'} element={<Layout/>}>
        <Route path={`/*`} element={<Router />} />
      </Route>
    </Routes>
  </BrowserRouter>
);