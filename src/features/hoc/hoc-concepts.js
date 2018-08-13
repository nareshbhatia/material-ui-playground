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

const decorate = withStyles(styles);

export const HocConcepts = decorate(
    class extends React.Component {
        render() {
            const { classes } = this.props;

            return (
                <div className={classes.root}>
                    <Headline>HOC Concepts</Headline>

                    <Section>yell: transforms its input to uppercase</Section>
                    <AngryText>Whatever!</AngryText>

                    <Section>sort: sorts its children</Section>
                    <SortedList>
                        {/* We use expression containers to make sure our strings
                    are passed as three children, not as one string */}
                        {'Bananas'}
                        {'Oranges'}
                        {'Apples'}
                    </SortedList>

                    <Section>Style tiles based on type</Section>
                    <TypedTile type="primary">Tile 1 (primary)</TypedTile>
                    <TypedTile type="secondary">Tile 2 (secondary)</TypedTile>
                </div>
            );
        }
    }
);

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
// StyleInjector takes `classes` as props and renames them to `injectedClasses`
const StyleInjector = Component => ({ classes, children, ...props }) => (
    <Component injectedClasses={classes} {...props}>
        {children}
    </Component>
);

// ---- Tile has some fixed styles and some injected styles
const tileStyles = theme => ({
    root: {
        height: 50,
        padding: theme.spacing.unit,
        marginBottom: theme.spacing.unit
    }
});

const decorateTile = withStyles(tileStyles);

const Tile = decorateTile(({ classes, injectedClasses, type, children }) => {
    const tileClass = classNames(
        classes.root,
        type === 'primary' ? injectedClasses.primary : injectedClasses.secondary
    );

    return <div className={tileClass}>{children}</div>;
});

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

const TypedTile = withTileTypeStyles(Tile);

//-------------------------------------------------------------------------------
// Headline
//-------------------------------------------------------------------------------
const Headline = ({ children }) => (
    <Typography variant="headline">{children}</Typography>
);

//-------------------------------------------------------------------------------
// Section
//-------------------------------------------------------------------------------
const Section = decorate(({ classes, children }) => (
    <Typography variant="title" className={classes.sectionTitle}>
        {children}
    </Typography>
));
