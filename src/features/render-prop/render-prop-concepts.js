import React from 'react';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Typography from 'material-ui/Typography';
import PropTypes from 'prop-types';

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

export const RenderPropConcepts = decorate(
    class extends React.Component {
        render() {
            const { classes } = this.props;

            return (
                <div className={classes.root}>
                    <Headline>Render Prop Concepts</Headline>

                    <Section>
                        Mouse: uses the renderPosition() to render itself
                    </Section>
                    <Mouse render={renderPosition} />

                    <Section>
                        TextRenderer: uses yell() to render itself
                    </Section>
                    <TextRenderer render={yell}>Whatever!</TextRenderer>

                    <Section>
                        ListRenderer: uses renderSortedList() to render itself
                    </Section>
                    <ListRenderer
                        render={renderSortedList}
                        list={['Bananas', 'Oranges', 'Apples']}
                    />
                </div>
            );
        }
    }
);

//-------------------------------------------------------------------------------
// A render prop is a prop that is a function. A component can use a render prop
// to render itself.
// Reference: https://cdb.reacttraining.com/use-a-render-prop-50de598f11ce.
//
// In general, the render prop does not have to be called "render", it could be
// anything that is used for rendering.
//-------------------------------------------------------------------------------
/**
 * Mouse - a component that uses a render prop to render itself
 */
class Mouse extends React.Component {
    static propTypes = {
        render: PropTypes.func.isRequired
    };

    state = { x: 0, y: 0 };

    handleMouseMove = event => {
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
    };

    render() {
        return (
            <div
                style={{ height: '200px', border: '1px solid #aaa' }}
                onMouseMove={this.handleMouseMove}
            >
                {this.props.render(this.state)}
            </div>
        );
    }
}

// renderPosition - a function that can be used as a render prop
const renderPosition = ({ x, y }) => (
    <div>
        ({x}, {y})
    </div>
);

//-------------------------------------------------------------------------------
// Examples from the following URL, converted to render props:
// https://hackernoon.com/higher-order-components-hocs-for-beginners-25cdcf1f1713
//-------------------------------------------------------------------------------

/**
 * TextRenderer - a component that uses a render prop to render itself
 */
const TextRenderer = ({ render, children }) => render(children);

// yell - a function that can be used as a render prop
const yell = text => <div>{text.toUpperCase()}</div>;

//----------

/**
 * ListRenderer - a component that uses a render prop to render itself
 */
const ListRenderer = ({ render, list }) => render(list);

// renderSortedList - a function that can be used as a render prop
const renderSortedList = list => {
    const sortedList = list.sort();
    return (
        <List dense>
            {sortedList.map(item => (
                <ListItem key={item} button>
                    <ListItemText primary={item} />
                </ListItem>
            ))}
        </List>
    );
};

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
