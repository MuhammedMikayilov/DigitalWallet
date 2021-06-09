import React from 'react';
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: '25ch',
            },
        },
    }),
);

export default function AddCard() {
    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <div>
                <TextField
                    id="outlined-number"
                    label="Card number(16 digits)"
                    type='number'

                    variant="outlined"
                />
                <TextField
                    id="outlined-date"
                    label="Expire Date"
                    type="date"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                />
                <TextField
                    id="outlined-cvv"
                    label="CVV"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                />
                <Button variant="contained" color="primary" style={{display:'block',marginLeft:10}}>
                    Add
                </Button>
            </div>
        </form>
    );
}

