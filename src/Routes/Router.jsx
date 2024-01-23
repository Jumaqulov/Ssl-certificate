import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from './Routes';


export default function Router() {
  return (
    <Routes>
      {routes.map(({ path, Component }, i) => (
        <Fragment key={i}>
          <Route>
            <Route path={path} element={Component} />
          </Route>
        </Fragment>
      ))}
    </Routes>
  )
}