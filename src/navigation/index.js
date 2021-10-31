import React from 'react';

import { AuthenticatedUserProvider } from './AuthenticatedUserProvider';

import AppNavigator from './AppNavigator';

const Routes = () => {
 return (
  <AuthenticatedUserProvider>
   <AppNavigator />
  </AuthenticatedUserProvider>
 )
}
export default Routes