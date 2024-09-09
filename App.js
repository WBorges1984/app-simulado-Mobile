import Routes from './routes';
import { AuthProvider } from './src/context/AuthProvider';

export default function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

