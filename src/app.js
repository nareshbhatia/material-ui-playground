import React from 'react';
import blue from 'material-ui/colors/blue';
import pink from 'material-ui/colors/pink';
import red from 'material-ui/colors/red';
import createMuiTheme from 'material-ui/styles/createMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { observer, Provider } from 'mobx-react';
import { HistoryAdapter } from 'mobx-state-router';
import { RootStore } from './shared/stores/root.store';
import { history } from './shared/utils/history';
import { Shell } from './shell';

// Create the rootStore
const rootStore = new RootStore();

// Observe history changes
const historyAdapter = new HistoryAdapter(rootStore.routerStore, history);
historyAdapter.observeRouterStateChanges();

const App = observer(
    class App extends React.Component {
        render() {
            const { paletteType } = rootStore.appStore;
            const palette = {
                primary: {
                    main: blue[500]
                },
                secondary: {
                    main: pink.A400
                },
                error: {
                    main: red.A400
                },
                type: paletteType
            };
            const theme = createMuiTheme({ palette });

            return (
                <MuiThemeProvider theme={theme}>
                    <Provider rootStore={rootStore}>
                        <Shell />
                    </Provider>
                </MuiThemeProvider>
            );
        }
    }
);

export default App;
