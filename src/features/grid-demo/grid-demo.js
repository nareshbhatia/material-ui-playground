import React from 'react';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import { members } from './members';

const styles = theme => ({
    root: {
        margin: '0 auto',
        width: (256 * 3) + (theme.spacing.unit * 2),
        '@media (max-width: 960px)': {
            width: (256 * 2) + (theme.spacing.unit),
        },
        '@media (max-width: 600px)': {
            width: 256
        }
    },
    card: {
        width: 256
    },
    media: {
        height: 256
    }
});

class GridDemoBase extends React.Component {
    render() {
        const { classes } = this.props;

        return (
                <Grid container justify="center" className={classes.root}>
                    {members.map(member => (
                        <Grid key={member.name} item xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.media}
                                    image={`https://github.com/${member.github}.png`}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography type="headline">
                                        {member.name}
                                    </Typography>
                                    <Typography type="subheading" color="secondary">
                                        {member.flag}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
        );
    }
}

export const GridDemo = withStyles(styles)(GridDemoBase);
