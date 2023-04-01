import { ToastProvider } from 'react-native-toast-notifications'
import Navigation from './Navigation';

export default function App() {

  return (
    <ToastProvider>
      <Navigation />
    </ToastProvider>
  );
}

