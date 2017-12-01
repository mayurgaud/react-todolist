import React from 'react'
import Button from 'material-ui/Button';
import MuiDialog, {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from 'material-ui/Dialog';

export class Dialog extends React.Component {
    state = {
        open: true,
    };

    handleClose = () => {
        this.props.handleClose();
    };

    render() {
        const { title, handleSuccess, handleReject } = this.props;

        return (
            <MuiDialog open={this.state.open} onRequestClose={this.handleRequestClose}>
                <DialogTitle>Warning</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {title}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleReject} color="primary">
                        Disagree
                    </Button>
                    <Button onClick={handleSuccess} color="primary">
                        Agree
                    </Button>
                </DialogActions>
            </MuiDialog>
        );
    }
}

export default Dialog