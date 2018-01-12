import React from 'react';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import { members } from './members';

const ITEM_WIDTH = 256;
const ITEM_PADDING = 8;

const styles = theme => ({
    root: {
        margin: '0 auto',

        // Default: fit 1 item
        width: ITEM_WIDTH,

        // > 600px: fit 2 items
        [theme.breakpoints.up('sm')]: {
            width: ITEM_WIDTH * 2 + theme.spacing.unit
        },

        // > 960px: fit 3 items
        [theme.breakpoints.up('md')]: {
            width: ITEM_WIDTH * 3 + theme.spacing.unit * 2
        }
    },
    item: {
        width: ITEM_WIDTH
    },
    picture: {
        width: ITEM_WIDTH - ITEM_PADDING * 2
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
});

class GridDemoBase extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <Grid container justify="center" className={classes.root}>
                {members.map(member => (
                    <Grid key={member.name} item xs={12} sm={6} md={4}>
                        <div className={classes.item}>
                            <img
                                src={`https://github.com/${member.github}.png`}
                                alt="Member"
                                className={classes.picture}
                            />
                            <div className={classes.content}>
                                <Typography type="headline">
                                    {member.name}
                                </Typography>
                                <Typography type="subheading" color="secondary">
                                    {member.flag}
                                </Typography>
                            </div>
                        </div>
                    </Grid>
                ))}
            </Grid>
        );
    }
}

export const GridDemo = withStyles(styles)(GridDemoBase);
