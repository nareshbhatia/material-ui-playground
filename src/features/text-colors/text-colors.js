import React from 'react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

const plt2Primary = '#06ffb1';
const plt1HighlightText = '#143652';
const plt2HighlightText = '#14523e';

const styles = theme => ({
    root: {
        width: '100%',
        padding: theme.spacing.unit
    },
    sectionTitle: {
        marginTop: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit
    },
    tile: {
        height: 50,
        padding: theme.spacing.unit,
        marginBottom: theme.spacing.unit,
        fontSize: 18,
        fontWeight: theme.typography.fontWeightMedium
    },
    plt1Tile1: {
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        border: `2px solid ${theme.palette.primary.main}`
    },
    plt1Tile2: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText
    },
    plt1Tile3: {
        backgroundColor: theme.palette.background.default,
        color: theme.palette.primary.main,
        border: `2px solid ${theme.palette.primary.main}`
    },
    plt1Tile4: {
        backgroundColor: theme.palette.background.default,
        color:
            theme.palette.type === 'light'
                ? plt1HighlightText
                : theme.palette.primary.main,
        border: `2px solid ${theme.palette.primary.main}`
    },
    plt1Tile5: {
        backgroundColor: theme.palette.primary.main,
        color: plt1HighlightText
    },
    plt2Tile1: {
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        border: `2px solid ${plt2Primary}`
    },
    plt2Tile2: {
        backgroundColor: plt2Primary,
        color: theme.palette.getContrastText(plt2Primary)
    },
    plt2Tile3: {
        backgroundColor: theme.palette.background.default,
        color: plt2Primary,
        border: `2px solid ${plt2Primary}`
    },
    plt2Tile4: {
        backgroundColor: theme.palette.background.default,
        color: theme.palette.type === 'light' ? plt2HighlightText : plt2Primary,
        border: `2px solid ${plt2Primary}`
    },
    plt2Tile5: {
        backgroundColor: plt2Primary,
        color: plt2HighlightText
    }
});

class TextColorsBase extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Typography variant="headline">Text Colors</Typography>

                <Typography variant="title" className={classes.sectionTitle}>
                    Palette 1
                </Typography>
                <div className={`${classes.tile} ${classes.plt1Tile1}`}>
                    Primary Text
                </div>
                <div className={`${classes.tile} ${classes.plt1Tile2}`}>
                    Contrast Text
                </div>
                <div className={`${classes.tile} ${classes.plt1Tile3}`}>
                    Primary Main
                </div>
                <div className={`${classes.tile} ${classes.plt1Tile4}`}>
                    Highlight Text / Primary Main
                </div>
                <div className={`${classes.tile} ${classes.plt1Tile5}`}>
                    Highlight Text
                </div>

                <Typography variant="title" className={classes.sectionTitle}>
                    Palette 2
                </Typography>
                <div className={`${classes.tile} ${classes.plt2Tile1}`}>
                    Primary Text
                </div>
                <div className={`${classes.tile} ${classes.plt2Tile2}`}>
                    Contrast Text
                </div>
                <div className={`${classes.tile} ${classes.plt2Tile3}`}>
                    Primary Main
                </div>
                <div className={`${classes.tile} ${classes.plt2Tile4}`}>
                    Highlight Text / Primary Main
                </div>
                <div className={`${classes.tile} ${classes.plt2Tile5}`}>
                    Highlight Text
                </div>
            </div>
        );
    }
}

export const TextColors = withStyles(styles)(TextColorsBase);
