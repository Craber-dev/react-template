import React, { Suspense } from 'react';
import { RouteItem, ROUTE_CONFIG } from './route';
import { Routes, Route, Navigate } from 'react-router-dom';

import styles from './App.module.less';

function renderRoute(route: RouteItem) {
  return (
    <Route
      key={route.path}
      path={route.children ? route.path + '/*' : route.path}
      element={route.redirect ? (<Navigate to={route.redirect} />) : (
        <>
          <div className={styles.body}>
            {
              route.layout ? (
                <route.layout>
                  {route.children ? (<Routes>{route.children.map(renderRoute)}</Routes>) : (route.component && (<route.component />))}
                </route.layout>
              ) : (
                route.children ? (<Routes>{route.children.map(renderRoute)}</Routes>) : (route.component && (<route.component />))
              )
            }
          </div>
        </>
      )}
    >
      {/* {route.children && route.children.map(renderRoute)} */}
    </Route>
  );
}

function RouterController() {
  const RouterDom = [];
  // eslint-disable-next-line prefer-const
  for (let key in ROUTE_CONFIG) {
    RouterDom.push(renderRoute(ROUTE_CONFIG[key]));
  }
  return (
    <Suspense fallback={(<h2>Loading...</h2>)}>
      <Routes>
        { RouterDom }
      </Routes>
    </Suspense>
  );
}

export default React.memo(RouterController);
