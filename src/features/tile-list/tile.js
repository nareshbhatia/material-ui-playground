import React from 'react';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
    root: {
        flex: 1,
        minWidth: 0,
        marginRight: 4,
        padding: 4,
        height: theme.spacing.unit * 8,
        color: 'white',
        backgroundColor: theme.palette.primary.main
    }
});

function TileBase({ classes, children }) {
    return <div className={classes.root}>{children}</div>;
}

export const Tile = withStyles(styles)(TileBase);
