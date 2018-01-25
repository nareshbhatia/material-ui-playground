import React from 'react';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Typography from 'material-ui/Typography';

const styles = theme => ({
    root: {
        width: '100%',
        padding: theme.spacing.unit
    },
    sectionTitle: {
        marginTop: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit
    }
});

class HocConceptsBase extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Typography type="headline">HOC Concepts</Typography>

                <Typography type="title" className={classes.sectionTitle}>
                    yell: transforms its input to uppercase
                </Typography>
                <AngryText>Whatever!</AngryText>

                <Typography type="title" className={classes.sectionTitle}>
                    sort: sorts its children
                </Typography>
                <SortedList>
                    {/* We use expression containers to make sure our strings
                    are passed as three children, not as one string */}
                    {'Bananas'}
                    {'Oranges'}
                    {'Apples'}
                </SortedList>

                <Typography type="title" className={classes.sectionTitle}>
                    Style tiles based on type
                </Typography>
                <Tile type="primary">Tile 1 (primary)</Tile>
                <Tile type="secondary">Tile 2 (secondary)</Tile>
            </div>
        );
    }
}

export const HocConcepts = withStyles(styles)(HocConceptsBase);

//-------------------------------------------------------------------------------
// Examples from
// https://hackernoon.com/higher-order-components-hocs-for-beginners-25cdcf1f1713
//-------------------------------------------------------------------------------

/**
 * yell: an HOC that transforms its input to uppercase
 * Accepts a Component as an argument and returns a Component.
 */
const yell = PassedComponent => ({ children, ...props }) => (
    <PassedComponent {...props}>{children.toUpperCase()}</PassedComponent>
);

// Let's define a component that renders its children in a <div>
const Text = props => <div>{props.children}</div>;

// Pass it through `yell` to create a component that renders in uppercase
const AngryText = yell(Text);

/**
 * sort: an HOC that sorts its children
 */
const sort = PassedComponent => ({ children, ...props }) => {
    const childArray = React.Children.toArray(children);
    return <PassedComponent {...props}>{childArray.sort()}</PassedComponent>;
};

// Let's define a component that renders its children in a <List>
const MyList = ({ children }) => {
    return (
        <List dense>
            {React.Children.map(children, child => (
                <ListItem button>
                    <ListItemText primary={child} />
                </ListItem>
            ))}
        </List>
    );
};

// Pass it through `sort` to create a component that renders a sorted list
const SortedList = sort(MyList);

//-------------------------------------------------------------------------------
// Tile
//-------------------------------------------------------------------------------
// TODO: Look at Render Props API for an alternate way to do this:
// https://github.com/mui-org/material-ui/blob/v1-beta/docs/src/pages/customization/css-in-js.md#render-props-api-11-lines

// StyleInjector takes `classes` as props and renames them to `injectedClasses`
const StyleInjector = Component => ({ classes, children, ...props }) => (
    <Component injectedClasses={classes} {...props}>
        {children}
    </Component>
);

// ---- TileBaseWithStyles has some fixed styles and some injected styles
const tileBaseStyles = theme => ({
    root: {
        height: 50,
        padding: theme.spacing.unit,
        marginBottom: theme.spacing.unit
    }
});

function TileBase({ classes, injectedClasses, type, children }) {
    const tileClass = classNames(
        classes.root,
        type === 'primary' ? injectedClasses.primary : injectedClasses.secondary
    );

    return <div className={tileClass}>{children}</div>;
}

const TileBaseWithStyles = withStyles(tileBaseStyles)(TileBase);

// ---- Tile injects additional classes into TileBaseWithStyles
const tileTypeStyles = theme => ({
    primary: {
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.main
    },
    secondary: {
        color: theme.palette.secondary.contrastText,
        backgroundColor: theme.palette.secondary.main
    }
});

const withTileTypeStyles = Component =>
    withStyles(tileTypeStyles)(StyleInjector(Component));

const Tile = withTileTypeStyles(TileBaseWithStyles);
