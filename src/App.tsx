import React, { useEffect, useState } from "react";
import './App.scss';
import Layout from './components/organisms/layout/layout';
import AppRouter from './router/AppRouter';

function App() {

  return (
    <Layout >
      <AppRouter />
    </Layout>
  );
}

export default App;
