import React from 'react';
import { StoreContainer } from './containers/store-containers/StoreContainer';
import './App.css';
import { STORE_MOCK_DATA } from './extras/MockData';

function App() {
  return (
    <StoreContainer storeItems={STORE_MOCK_DATA} />
  );
}

export default App;
