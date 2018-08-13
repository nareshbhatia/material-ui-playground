import React from 'react';
import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemText } from 'material-ui/List';
import { withStyles } from 'material-ui/styles';
import { inject } from 'mobx-react';
import PropTypes from 'prop-types';

const styles = theme => ({
    drawerPaper: {
        position: 'relative',
        height: '100%',
        width: 200
    }
});

class NavItem extends React.Component {
    static propTypes = {
        routeName: PropTypes.string.isRequired,
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
        const { routeName, onClick } = this.props;
        onClick(routeName);
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
                    <NavItem routeName="gridDemo" onClick={this.onItemClick}>
                        Grid Demo
                    </NavItem>
                    <NavItem routeName="hoc" onClick={this.onItemClick}>
                        HOCs
                    </NavItem>
                    <NavItem routeName="renderProp" onClick={this.onItemClick}>
                        Render Props
                    </NavItem>
                    <NavItem routeName="textColors" onClick={this.onItemClick}>
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
