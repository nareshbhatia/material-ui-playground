import React from 'react';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
    root: {
        width: '100%',
        padding: theme.spacing.unit
    }
});

class HocConceptsBase extends React.Component {
    render() {
        const { classes } = this.props;

        return <div className={classes.root}>HOC Concepts</div>;
    }
}

export const HocConcepts = withStyles(styles)(HocConceptsBase);
