import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { SearchPage } from "./components";
import App from "./App";


export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App /> }/>
      <Route path="search" element={<SearchPage />} />
    </>
  )
)