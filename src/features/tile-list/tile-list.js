import React from 'react';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import { Tile } from './tile';

const styles = theme => ({
    root: {
        width: '100%',
        padding: theme.spacing.unit
    },
    tileList: {
        display: 'flex',
        flexDirection: 'row',
        height: theme.spacing.unit * 8,
        marginBottom: 4
    },
    buttonBar: {
        marginTop: 20
    }
});

class TileListBase extends React.Component {
    constructor(props) {
        super(props);
        this.state = { tileIds: [1, 2] };
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <div className={classes.tileList}>
                    {this.state.tileIds.map(tileId => (
                        <Tile key={tileId}>Tile {tileId}</Tile>
                    ))}
                </div>

                <div className={classes.buttonBar}>
                    <Button raised onClick={this.handleToggle}>
                        Toggle
                    </Button>
                </div>
            </div>
        );
    }

    handleToggle = () => {
        if (this.state.tileIds.length === 1) {
            this.setState({ tileIds: [1, 2] });
        } else {
            this.setState({ tileIds: [1] });
        }
    };
}

export const TileList = withStyles(styles)(TileListBase);
