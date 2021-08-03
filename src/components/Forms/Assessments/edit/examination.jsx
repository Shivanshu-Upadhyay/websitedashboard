import React from "react";
import { Grid, FormControlLabel, Radio } from "@material-ui/core";
import { Form, Field } from "react-final-form";

import { ButtonGroup, Button } from "@material-ui/core";
import { editExaminationData } from '../../../../actions/examinationAction';
import { connect } from "react-redux";

function EditExamination(props) {

    const onSubmit = (formValues) => {
        props.handleClose();
        if (props.id == undefined) {
            formValues.patient = props.iid;
        }
        else {
            formValues.patient = props.id;
        }
        switch (examinationData.c1['1']) {
            case 1:
                formValues.patientBuilt = 'ectomorph';
                break;
            case 2:
                formValues.patientBuilt = 'mesomorph';
                break;
            case 3:
                formValues.patientBuilt = 'endomorph';
                break
            default:
                formValues.patientBuilt = '';

        }
        console.log(formValues);
        props.editExaminationData(formValues, props.examinationData._id);
    };

    const [examinationData, setExaminationData] = React.useState({
        c1: {},
    });

    const initialValues = {
        date: props.examinationData.date,
        heartRate: props.examinationData.heartRate,
        description: props.examinationData.description,
        bloodPressure: props.examinationData.bloodPressure,
        respiratoryRate: props.examinationData.respiratoryRate,
        posture: props.examinationData.posture,
        temperature: props.examinationData.temperature,
        gait: props.examinationData.gait,
        scarType: props.examinationData.scarType
    };
    console.log(props.examinationData.posture);

    return (
        <div>
            <Form onSubmit={onSubmit} initialValues={initialValues}>
                {({ handleSubmit, form }) => (
                    <form onSubmit={handleSubmit} className="ui form">
                        <Grid container spacing={1}>
                            <Grid item xs>
                                <div className="text-center">
                                    <div className="item">
                                        <label>Date</label>
                                        <Field name="date">
                                            {({ input, meta }) => <input type="date" {...input} />}
                                        </Field>
                                    </div>
                                    <br />
                                    <div className="item">
                                        <label>Heart Rate</label>
                                        <Field name="heartRate">
                                            {({ input, meta }) => <input type="text" {...input} />}
                                        </Field>
                                    </div>
                                    <br />
                                    <div className="item">
                                        <label>Built of the patient</label>
                                        <div className="item">
                                            <ButtonGroup color="primary">
                                                <Button
                                                    onClick={() => {
                                                        setExaminationData({
                                                            ...examinationData,
                                                            c1: { ...examinationData.c1, 1: 1 },
                                                        });
                                                    }}
                                                    variant={
                                                        examinationData.c1["1"] === 1
                                                            ? "contained"
                                                            : "outlined"
                                                    }
                                                >
                                                    Ectomorph
                                                </Button>
                                                <Button
                                                    onClick={() => {
                                                        setExaminationData({
                                                            ...examinationData,
                                                            c1: { ...examinationData.c1, 1: 2 },
                                                        });
                                                    }}
                                                    variant={
                                                        examinationData.c1["1"] === 2
                                                            ? "contained"
                                                            : "outlined"
                                                    }
                                                >
                                                    Mesomorph
                                                </Button>
                                                <Button
                                                    onClick={() => {
                                                        setExaminationData({
                                                            ...examinationData,
                                                            c1: { ...examinationData.c1, 1: 3 },
                                                        });
                                                    }}
                                                    variant={
                                                        examinationData.c1["1"] === 3
                                                            ? "contained"
                                                            : "outlined"
                                                    }
                                                >
                                                    Endomorph
                                                </Button>
                                            </ButtonGroup>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="item">
                                        <label>Description</label>
                                        <Field name="description">
                                            {({ input, meta }) => <textarea type="text" {...input} />}
                                        </Field>
                                    </div>
                                    <br />
                                </div>
                            </Grid>
                            <Grid item xs>
                                <div className="text-center">
                                    <div className="item">
                                        <label>Blood Pressure</label>
                                        <Field name="bloodPressure">
                                            {({ input, meta }) => <input type="text" {...input} />}
                                        </Field>
                                    </div>
                                    <br />
                                    <div className="item">
                                        <label>Respiratory Rate </label>
                                        <Field name="respiratoryRate">
                                            {({ input, meta }) => <input type="text" {...input} />}
                                        </Field>
                                    </div>
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <div className="item">
                                        <label> Posture </label>
                                        <Field name='posture'>
                                            {({ input, meta }) => <textArea type="text" {...input} />}
                                        </Field>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs>
                                <div className="text-center">
                                    <div className="item">
                                        <label> Temperature </label>
                                        <Field name="temperature">
                                            {({ input, meta }) => <input type="text" {...input} />}
                                        </Field>
                                    </div>
                                    <br />
                                    <div className="item">
                                        <label> Gait </label>
                                        <Field name="gait">
                                            {({ input, meta }) => <input type="text" {...input} />}
                                        </Field>
                                    </div>
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <div className="item">
                                        <label> Scar Type </label>
                                        <Field name="scarType">
                                            {({ input, meta }) => <textArea type="text" {...input} />}
                                        </Field>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
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
                            // onClick={form.reset}
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
    editExaminationData
})(EditExamination);