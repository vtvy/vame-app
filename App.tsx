import React, { useState } from 'react';
import { Button, ScrollView } from 'react-native';

import { Header, Layout } from '@/components';

function App(): React.JSX.Element {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <Layout>
      <ScrollView>
        <Header title={counter.toString()} />
        <Button onPress={increment} title="Click me onie-chan" />
      </ScrollView>
    </Layout>
  );
}

export default App;
