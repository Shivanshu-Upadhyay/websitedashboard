import React from 'react';
import { editIncomeData } from "../../../../actions/incomeAction";
import { Form, Field } from "react-final-form";
import SaveIcon from "@material-ui/icons/Save";
import { Paper, Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import DialogActions from "@material-ui/core/DialogActions";

function EditIncome(props) {

    const handleIncomeSubmit = (formValues) => {
        props.handleClose();
        props.editIncomeData(props.iden, formValues);

    };

    console.log(props)

    const initialValues = {
        itemName: props.incomeData.itemName,
        amount: props.incomeData.amount,
        description: props.incomeData.description
    }

    return (
        <Form onSubmit={handleIncomeSubmit} initialValues={initialValues} >
            {({ handleSubmit }) => (
                <form onSubmit={handleSubmit} noValidate>
                    <div className="mb-3">
                        <Field name="itemName">
                            {({ input }) => (
                                <div>
                                    <Grid container spacing={1} alignItems="flex-end">
                                        <Grid item></Grid>
                                        <Grid item>
                                            <TextField
                                                id="input-with-icon-grid"
                                                {...input}
                                                label="Item Name"
                                            />
                                        </Grid>
                                    </Grid>
                                </div>
                            )}
                        </Field>
                    </div>

                    <div className="mb-1">
                        <Field name="description">
                            {({ input }) => (
                                <div>
                                    <Grid container spacing={1} alignItems="flex-start">
                                        <Grid item></Grid>
                                        <Grid item>
                                            <TextField
                                                id="outlined-basic"
                                                label="Description"
                                                {...input}
                                                variant="outlined"
                                            />
                                        </Grid>
                                    </Grid>
                                </div>
                            )}
                        </Field>
                    </div>

                    <div>
                        <Field name="amount">
                            {({ input }) => (
                                <div>
                                    <Grid container spacing={1} alignItems="flex-end">
                                        <Grid item></Grid>
                                        <Grid item>
                                            <TextField
                                                id="input-with-icon-grid"
                                                {...input}
                                                label="Amount(Rs)"
                                                placeholder="(₹)"
                                            />
                                        </Grid>
                                    </Grid>
                                </div>
                            )}
                        </Field>
                    </div>

                    <br />

                    <DialogActions>
                        <Button
                            autoFocus
                            onClick={props.handleClose}
                            variant="contained"
                            color="primary"
                            size="small"
                        >
                            Cancel
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            type="submit"
                            autoFocus
                            startIcon={<SaveIcon />}
                            autoFocus
                        >
                            Save
                        </Button>
                    </DialogActions>
                </form>
            )}
        </Form>
    );
}


export default connect(null, {

    editIncomeData,
})(EditIncome);