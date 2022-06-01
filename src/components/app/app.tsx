import { Route, Routes, Navigate } from 'react-router-dom';

import { AppRoute } from '../../const';
import HistoryRoute from '../history-route/history-route';
import browserHistory from '../../browser-history';
import CatalogPage from '../catalog-page/catalog-page';
import ProductPage from '../product-page/product-page';
import NotFoundPage from '../not-found-page/not-found-page';

function App(): JSX.Element {
  return (
    <HistoryRoute history={browserHistory}>
      <Routes>
        <Route index element={<Navigate to={AppRoute.Catalog} />} />
        <Route path={AppRoute.Catalog} >
          <Route index element={<Navigate to={AppRoute.CatalogPage1} />} />
          <Route path="page/:id" element={<CatalogPage />} />
          <Route path="guitar/:id" element={<ProductPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </HistoryRoute>
  );
}

export default App;
