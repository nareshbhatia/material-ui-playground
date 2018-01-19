import React from 'react';
import { withStyles } from 'material-ui/styles';
import { inject } from 'mobx-react';
import { RouterView } from 'mobx-state-router';
import { GridDemo } from './features/grid-demo/grid-demo';
import { TileList } from './features/tile-list/tile-list';
import { NavBar } from './nav-bar';

const styles = theme => ({
    '@global': {
        html: {
            height: '100%',
            boxSizing: 'border-box'
        },
        '*, *:before, *:after': {
            boxSizing: 'inherit'
        },
        body: {
            height: '100%',
            margin: 0,
            background: theme.palette.background.default,
            fontFamily: theme.typography.fontFamily,
            fontSize: theme.typography.fontSize,
            color: theme.palette.text.primary,

            // Helps fonts on OSX look more consistent with other systems
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale',

            // Use momentum-based scrolling on iOS devices
            WebkitOverflowScrolling: 'touch'
        },
        '#root': {
            height: '100%',
            display: 'flex',
            flexDirection: 'column'
        }
    },
    root: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row'
    }
});

const viewMap = {
    gridDemo: <GridDemo />,
    tileList: <TileList />
};

class ShellBase extends React.Component {
    render() {
        const { classes, rootStore: { routerStore } } = this.props;

        return (
            <div className={classes.root}>
                <NavBar />
                <RouterView routerStore={routerStore} viewMap={viewMap} />
            </div>
        );
    }
}

const ShellWithRootStore = inject('rootStore')(ShellBase);

export const Shell = withStyles(styles)(ShellWithRootStore);
