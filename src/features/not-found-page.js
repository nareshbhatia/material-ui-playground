import React from 'react';
import { withStyles } from 'material-ui/styles/index';

const styles = theme => ({
    root: {
        padding: theme.spacing.unit
    }
});

function NotFoundPageBase({ classes }) {
    return (
        <div className={classes.root}>
            <h1>Page Not Found</h1>
        </div>
    );
}

export const NotFoundPage = withStyles(styles)(NotFoundPageBase);
