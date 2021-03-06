import React from 'react';
import { configure, addParameters, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from "@storybook/addon-actions"
import storybookTheme from '../stories/theme';
import { ThemeProvider } from 'styled-components';
import theme from '../config/theme'

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);


// auto wrap everything with theme provider so emotion components work
addDecorator(storyFn => (
  <ThemeProvider theme={theme}>

      <div style={{fontFamily: 'sans-serif'}}>
        {/* STORY CODE START */}
        {storyFn()}
        {/* STORY CODE END */}
      </div>

  </ThemeProvider>
));

// gatsby specific configs https://www.gatsbyjs.org/docs/visual-testing-with-storybook/
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
}
  
global.__PATH_PREFIX__ = ""


// This is to utilized to override the window.___navigate method Gatsby defines and uses to report what path a Link would be taking us to if it wasn't inside a storybook
window.___navigate = pathname => {
  action("NavigateTo:")(pathname)
}

addDecorator(withInfo); 
addParameters({ options: { theme: storybookTheme } });

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

