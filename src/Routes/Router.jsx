import React, { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routes } from './Routes';
import Layout from '../Layout';


export default function Router() {
  return (
    <Routes>
      {routes.map(({ path, Component }, i) => (
        <Fragment key={i}>
          <Route element={<Layout />} key={i}>
            <Route path={path} element={Component} />
          </Route>
        </Fragment>
      ))}
    </Routes>
  )
}