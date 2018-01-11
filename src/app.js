import React from 'react';
import blue from 'material-ui/colors/blue';
import pink from 'material-ui/colors/pink';
import red from 'material-ui/colors/red';
import createMuiTheme from 'material-ui/styles/createMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Shell } from './shell';

const palette = {
    primary: blue,
    secondary: pink,
    error: red
};

class App extends React.Component {
    render() {
        const theme = createMuiTheme({ palette });

        return (
            <MuiThemeProvider theme={theme}>
                <Shell />
            </MuiThemeProvider>
        );
    }
}

export default App;
