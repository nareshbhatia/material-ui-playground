import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Toolbar from 'material-ui/Toolbar';
import LightbulbOutline from 'material-ui-icons/LightbulbOutline';
import PropTypes from 'prop-types';

const styles = {
    title: {
        flex: 1,
        fontSize: 18
    }
};

class HeaderBase extends React.Component {
    static propTypes = {
        onToggleTheme: PropTypes.func.isRequired
    };

    render() {
        const { classes, onToggleTheme } = this.props;

        return (
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="title"
                        color="inherit"
                        className={classes.title}
                    >
                        Material-UI Playground
                    </Typography>

                    <IconButton color="inherit" onClick={onToggleTheme}>
                        <LightbulbOutline />
                    </IconButton>
                </Toolbar>
            </AppBar>
        );
    }
}

export const Header = withStyles(styles)(HeaderBase);
