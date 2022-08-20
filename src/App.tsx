import { CharacterCreation } from 'features/character-creation';
import { Provider } from 'react-redux';
import { store } from 'store';
import { Layout } from './components/Layout';

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <CharacterCreation />
      </Layout>
    </Provider>
  );
}

export default App;
