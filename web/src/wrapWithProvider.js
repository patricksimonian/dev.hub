import {ThemeProvider} from 'styled-components';
import theme from './theme';


const RootProvider = ({element}) => <ThemeProvider theme={theme}>{element}</ThemeProvider>

RootProvider.displayName = 'GatsbyBrowserSsrProvider';

export default RootProvider;