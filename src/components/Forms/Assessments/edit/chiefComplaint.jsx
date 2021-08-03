import React from "react";
import { Grid } from "@material-ui/core";
import { Form, Field } from "react-final-form";
import PointingError from "../../../LandingPage/ErrorComponent/PointingError";
import { ButtonGroup, Button } from "@material-ui/core";
import { editComplaintData } from '../../../../actions/chiefComplaintAction';
import { connect } from "react-redux";


function EditChiefComplaint(props) {


    const onSubmit = (formValues) => {
        props.handleClose();
        formValues.pain = chiefComplaintData.t1['1'] === 1 ? 'Yes' : 'No';
        formValues.swelling = chiefComplaintData.t1['2'] === 1 ? 'Yes' : 'No';
        formValues.stiffness = chiefComplaintData.t1['3'] === 1 ? 'Yes' : 'No';

        formValues.lossOfMotion = chiefComplaintData.t2['1'] === 1 ? 'Yes' : 'No';
        formValues.abnormalSensation = chiefComplaintData.t2['2'] === 1 ? 'Yes' : 'No';
        formValues.instability = chiefComplaintData.t2['3'] === 1 ? 'Yes' : 'No';

        console.log(formValues);
        props.editComplaintData(formValues, props.complaintData._id);
    };
    const [chiefComplaintData, setChiefComplaintData] = React.useState({
        t1: {},
        t2: {}
    });
    // React.useEffect(() => {



    // }, []);



    const initialValues = {
        date: props.complaintData.date,
        duration: props.complaintData.duration,
        symptoms: props.complaintData.symptoms
    };

    if (props.complaintData.pain === 'Yes')
        chiefComplaintData.t1['1'] = 1;

    else
        chiefComplaintData.t1['1'] = 2;

    if (props.complaintData.swelling === 'Yes')
        chiefComplaintData.t1['2'] = 1;

    else
        chiefComplaintData.t1['2'] = 2;

    if (props.complaintData.stiffness === 'Yes')
        chiefComplaintData.t1['3'] = 1;

    else
        chiefComplaintData.t1['3'] = 2;

    if (props.complaintData.lossOfMotion === 'Yes')
        chiefComplaintData.t2['1'] = 1;
    else
        chiefComplaintData.t2['1'] = 2;
    if (props.complaintData.abnormalSensation === 'Yes')
        chiefComplaintData.t2['2'] = 1;
    else
        chiefComplaintData.t2['2'] = 2;
    if (props.complaintData.instability === 'Yes')
        chiefComplaintData.t2['3'] = 1;
    else
        chiefComplaintData.t2['3'] = 2;







    const validate = (formValues) => {
        const errors = {};

        if (!formValues.symptoms) errors.symptoms = "This field is required";
        if (!formValues.duration) errors.duration = "This field is required";

        return errors;
    };


    return (
        <div style={{ width: '900px' }}>
            <h4 style={{ textAlign: 'center' }}>Chief Complaints</h4>
            <br></br>
            <br></br>
            <Form
                onSubmit={onSubmit}
                validate={validate}
                initialValues={initialValues}
            >
                {({ handleSubmit, form }) => (
                    <form onSubmit={handleSubmit} className="ui form">
                        <Grid container spacing={0}>
                            <Grid item xs={4}>
                                <div className="text-center">
                                    <div className="item">
                                        <Field name="date" type="date" >
                                            {({ input, meta }) => (
                                                <div className="field">
                                                    <label className="dateField">Date</label>
                                                    <input type="date" {...input} className="dateField" />
                                                </div>
                                            )}
                                        </Field>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={4}>
                                <div className="text-center">
                                    <div className="item">
                                        <Field name="symptoms">
                                            {({ input, meta }) => (
                                                <div className="field">
                                                    <label>
                                                        How long have you had aggravated symptoms
                                                    </label>
                                                    <textarea rows="1" {...input}></textarea>
                                                    <PointingError input={input} meta={meta} />
                                                </div>
                                            )}
                                        </Field>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={4}>
                                <div className="text-center">
                                    <div className="item">
                                        <Field name="duration">
                                            {({ input, meta }) => (
                                                <div className="field">
                                                    <label>How long you had this problem</label>
                                                    <textarea rows="1" {...input}></textarea>
                                                    <PointingError input={input} meta={meta} />
                                                </div>
                                            )}
                                        </Field>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                        <br />
                        <br />
                        <br />
                        <div>
                            <table className="ui very basic table">
                                <thead></thead>
                                <tbody>
                                    <tr >
                                        <td >

                                            Pain

                                            <br />
                                            <br />
                                            <ButtonGroup color="primary" style={{ marginLeft: '50px' }}>
                                                <Button
                                                    onClick={() => {
                                                        setChiefComplaintData({
                                                            ...chiefComplaintData,
                                                            t1: { ...chiefComplaintData.t1, 1: 1 },
                                                        });
                                                    }}

                                                    variant={
                                                        chiefComplaintData.t1["1"] === 1
                                                            ? "contained"
                                                            : "outlined"
                                                    }
                                                >
                                                    Yes
                                                </Button>
                                                <Button
                                                    onClick={() => {
                                                        setChiefComplaintData({
                                                            ...chiefComplaintData,
                                                            t1: { ...chiefComplaintData.t1, 1: 2 },
                                                        });
                                                    }}
                                                    variant={
                                                        chiefComplaintData.t1["1"] === 2
                                                            ? "contained"
                                                            : "outlined"
                                                    }
                                                >
                                                    No
                                                </Button>
                                            </ButtonGroup>
                                        </td>
                                        <td>
                                            Swelling
                                            <br />
                                            <br />
                                            <ButtonGroup color="primary">
                                                <Button
                                                    onClick={() => {
                                                        setChiefComplaintData({
                                                            ...chiefComplaintData,
                                                            t1: { ...chiefComplaintData.t1, 2: 1 },
                                                        });
                                                    }}
                                                    variant={
                                                        chiefComplaintData.t1["2"] === 1
                                                            ? "contained"
                                                            : "outlined"
                                                    }
                                                >
                                                    Yes
                                                </Button>
                                                <Button
                                                    onClick={() => {
                                                        setChiefComplaintData({
                                                            ...chiefComplaintData,
                                                            t1: { ...chiefComplaintData.t1, 2: 2 },
                                                        });
                                                    }}
                                                    variant={
                                                        chiefComplaintData.t1["2"] === 2
                                                            ? "contained"
                                                            : "outlined"
                                                    }
                                                >
                                                    No
                                                </Button>
                                            </ButtonGroup>
                                        </td>
                                        <td>
                                            Stiffness
                                            <br />
                                            <br />
                                            <ButtonGroup color="primary">
                                                <Button
                                                    onClick={() => {
                                                        setChiefComplaintData({
                                                            ...chiefComplaintData,
                                                            t1: { ...chiefComplaintData.t1, 3: 1 },
                                                        });
                                                    }}
                                                    variant={
                                                        chiefComplaintData.t1["3"] === 1
                                                            ? "contained"
                                                            : "outlined"
                                                    }
                                                >
                                                    Yes
                                                </Button>
                                                <Button
                                                    onClick={() => {
                                                        setChiefComplaintData({
                                                            ...chiefComplaintData,
                                                            t1: { ...chiefComplaintData.t1, 3: 2 },
                                                        });
                                                    }}
                                                    variant={
                                                        chiefComplaintData.t1["3"] === 2
                                                            ? "contained"
                                                            : "outlined"
                                                    }
                                                >
                                                    No
                                                </Button>
                                            </ButtonGroup>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Loss Of Motion
                                            <br />
                                            <br />
                                            <ButtonGroup color="primary" style={{ marginLeft: '50px' }}>
                                                <Button
                                                    onClick={() => {
                                                        setChiefComplaintData({
                                                            ...chiefComplaintData,
                                                            t2: { ...chiefComplaintData.t2, 1: 1 },
                                                        });
                                                    }}
                                                    variant={
                                                        chiefComplaintData.t2["1"] === 1
                                                            ? "contained"
                                                            : "outlined"
                                                    }
                                                >
                                                    Yes
                                                </Button>
                                                <Button
                                                    onClick={() => {
                                                        setChiefComplaintData({
                                                            ...chiefComplaintData,
                                                            t2: { ...chiefComplaintData.t2, 1: 2 },
                                                        });
                                                    }}
                                                    variant={
                                                        chiefComplaintData.t2["1"] === 2
                                                            ? "contained"
                                                            : "outlined"
                                                    }
                                                >
                                                    No
                                                </Button>
                                            </ButtonGroup>
                                        </td>
                                        <td>
                                            Abnormal Sensation
                                            <br />
                                            <br />
                                            <ButtonGroup color="primary">
                                                <Button
                                                    onClick={() => {
                                                        setChiefComplaintData({
                                                            ...chiefComplaintData,
                                                            t2: { ...chiefComplaintData.t2, 2: 1 },
                                                        });
                                                    }}
                                                    variant={
                                                        chiefComplaintData.t2["2"] === 1
                                                            ? "contained"
                                                            : "outlined"
                                                    }
                                                >
                                                    Yes
                                                </Button>
                                                <Button
                                                    onClick={() => {
                                                        setChiefComplaintData({
                                                            ...chiefComplaintData,
                                                            t2: { ...chiefComplaintData.t2, 2: 2 },
                                                        });
                                                    }}
                                                    variant={
                                                        chiefComplaintData.t2["2"] === 2
                                                            ? "contained"
                                                            : "outlined"
                                                    }
                                                >
                                                    No
                                                </Button>
                                            </ButtonGroup>
                                        </td>
                                        <td>
                                            Instability
                                            <br />
                                            <br />
                                            <ButtonGroup color="primary">
                                                <Button
                                                    onClick={() => {
                                                        setChiefComplaintData({
                                                            ...chiefComplaintData,
                                                            t2: { ...chiefComplaintData.t2, 3: 1 },
                                                        });
                                                    }}
                                                    variant={
                                                        chiefComplaintData.t2["3"] === 1
                                                            ? "contained"
                                                            : "outlined"
                                                    }
                                                >
                                                    Yes
                                                </Button>
                                                <Button
                                                    onClick={() => {
                                                        setChiefComplaintData({
                                                            ...chiefComplaintData,
                                                            t2: { ...chiefComplaintData.t2, 3: 2 },
                                                        });
                                                    }}
                                                    variant={
                                                        chiefComplaintData.t2["3"] === 2
                                                            ? "contained"
                                                            : "outlined"
                                                    }
                                                >
                                                    No
                                                </Button>
                                            </ButtonGroup>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <br />
                        <br />

                        <div style={{ textAlign: "center" }}>
                            <button
                                // disabled={!_.isEmpty(errors) || submitting}
                                className="ui primary button"
                            >
                                Save
                            </button>
                            <button
                                // disabled={!_.isEmpty(errors) || submitting}
                                className="ui button"
                                type="reset"
                                onClick={props.handleClose}
                            >
                                Discard
                            </button>
                        </div>
                    </form>
                )}
            </Form>
        </div>
    );
}


export default connect(null, {
    editComplaintData
})(EditChiefComplaint);