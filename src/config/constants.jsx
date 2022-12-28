import { DefaultTheme as DefaultPaperTheme } from 'react-native-paper';
import { DefaultTheme as DefaultNavigationTheme } from '@react-navigation/native';

export const PaperTheme = {
  ...DefaultPaperTheme,
  roundness: 2,
  colors: {
    ...DefaultPaperTheme.colors,
    primary: '#1de9b6',
    accent: '#E9F7E9',
  },
};

export const NavigationTheme = {
  ...DefaultNavigationTheme,
  colors: {
    ...DefaultNavigationTheme.colors,
    primary: '#1de9b6',
    accent: '#E9F7E9',
  },
};
