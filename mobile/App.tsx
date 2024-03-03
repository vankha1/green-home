import { SafeAreaProvider } from 'react-native-safe-area-context';

import Main from './src';

export default function App() {
  return (
    <SafeAreaProvider>
      <Main />
    </SafeAreaProvider>
  );
} 
