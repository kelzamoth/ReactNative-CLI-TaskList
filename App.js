import React from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './store/store';
import MainContainer from './src/containers/MainContainer';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <MainContainer />
      </PersistGate>
    </Provider>
  );
}

export default App;
