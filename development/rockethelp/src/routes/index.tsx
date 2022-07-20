import { NavigationContainer } from '@react-navigation/native';

import {SignIn} from '../screen/SignIns';
import { AppRoutes } from './app.routes';

export function Routes() {
  return (
    <NavigationContainer>
      <AppRoutes/>
    </NavigationContainer>
  );
}