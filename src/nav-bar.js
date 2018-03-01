import React from 'react';
import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemText } from 'material-ui/List';
import { withStyles } from 'material-ui/styles';
import { inject } from 'mobx-react';
import { RouterState } from 'mobx-state-router';
import PropTypes from 'prop-types';

const gridDemoState = new RouterState('gridDemo');
const hocState = new RouterState('hoc');
const textColorsState = new RouterState('textColors');

const styles = theme => ({
    drawerPaper: {
        position: 'relative',
        height: '100%',
        width: 200
    }
});

class NavItem extends React.Component {
    static propTypes = {
        routerState: PropTypes.object.isRequired,
        onClick: PropTypes.func.isRequired
    };

    render() {
        return (
            <ListItem button onClick={this.handleClick}>
                <ListItemText primary={this.props.children} />
            </ListItem>
        );
    }

    handleClick = () => {
        const { routerState, onClick } = this.props;
        onClick(routerState);
    };
}

class NavBarBase extends React.Component {
    static propTypes = {
        dummy: PropTypes.string
    };

    render() {
        const { classes } = this.props;

        return (
            <Drawer
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper
                }}
            >
                <List>
                    <NavItem
                        routerState={gridDemoState}
                        onClick={this.onItemClick}
                    >
                        Grid Demo
                    </NavItem>
                    <NavItem routerState={hocState} onClick={this.onItemClick}>
                        HOC Concepts
                    </NavItem>
                    <NavItem
                        routerState={textColorsState}
                        onClick={this.onItemClick}
                    >
                        Text Colors
                    </NavItem>
                </List>
            </Drawer>
        );
    }

    onItemClick = routerState => {
        const { rootStore: { routerStore } } = this.props;
        routerStore.goTo(routerState);
    };
}

const NavBarWithRootStore = inject('rootStore')(NavBarBase);

export const NavBar = withStyles(styles)(NavBarWithRootStore);
