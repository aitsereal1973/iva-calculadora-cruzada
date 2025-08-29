// Importar AppRegistry de react-native para registrar la aplicación
import { AppRegistry } from 'react-native';
// Importar el componente principal de la aplicación
import App from './src/App';
// Importar el nombre de la aplicación desde app.json
import { name as appName } from './app.json';

// Registrar el componente principal con AppRegistry
AppRegistry.registerComponent(appName, () => App);