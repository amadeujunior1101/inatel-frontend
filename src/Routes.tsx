import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Dashboard, History, Login, Register, Setting } from './pages'
import { PrivateRoute } from './privateRoute';
import { LoginRoute } from './loginRoute';

const RouteComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
        <Route
          path="/login"
          element={
            <LoginRoute>
              <Layout>
                <Login />
              </Layout>
            </LoginRoute>
          }
        />
        <Route
          path="/register"
          element={
            <Layout>
              <Register />
            </Layout>
          }
        />
        <Route 
          path="/setting" 
          element={
            <PrivateRoute> 
              <Layout><Setting /></Layout>
            </PrivateRoute>
          } 
        />
        <Route
          path="/history"
          element={
            <Layout>
              <History />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteComponent;