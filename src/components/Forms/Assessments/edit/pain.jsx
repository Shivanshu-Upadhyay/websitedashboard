import React from "react";
import { Grid, FormControlLabel, Radio } from "@material-ui/core";
import { Form, Field } from "react-final-form";
import { ButtonGroup, Button, Dialog } from "@material-ui/core";
import { editPainData } from '../../../../actions/painAction';
import { connect } from "react-redux";



function EditPain(props) {

    const onSubmit = (formValues) => {
        props.handleClose();
        formValues.onset = painData.c1['1'] === 1 ? 'Gradual' : 'Acute';
        if (props.id == undefined) {
            formValues.patient = props.iid;
        }
        else {
            formValues.patient = props.id;
        }
        switch (painData.c2['1']) {
            case 1:
                formValues.duration = 'Acute';
                break;
            case 2:
                formValues.duration = 'Sub-Acute';
                break;
            case 3:
                formValues.duration = 'Sub-Chronic';
                break;
            case 4:
                formValues.duration = 'Chronic';
                break;
            default:
                formValues.duration = '';

        }

        switch (painData.c3['1']) {
            case 1:
                formValues.variation = 'Morning';
                break;
            case 2:
                formValues.variation = 'Afternoon';
                break;
            case 3:
                formValues.variation = 'Evening';
                break;
            case 4:
                formValues.variation = 'Night';
                break;
            case 5:
                formValues.variation = 'No specific pattern';
                break;
            default:
                formValues.variation = '';

        }

        console.log(formValues);
        props.editPainData(formValues, props.painData._id);
    };

    const [painData, setPainData] = React.useState({
        c1: {},
        c2: {},
        c3: {},
    });


    const initialValues = {
        date: props.painData.date,
        site: props.painData.site,
        intensity: props.painData.intensity,
        nature: props.painData.nature,
        inflammatoryPain: props.painData.inflammatoryPain,
        neuropathicPain: props.painData.neuropathicPain,
        functionalPain: props.painData.functionalPain,
        triggerPoint: props.painData.triggerPoint,
        aggravatingFactor: props.painData.aggravatingFactor,
        relievingFactor: props.painData.relievingFactor,
        ADLsRestricted: props.painData.ADLsRestricted,
        variation: props.painData.variation
    };

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
                                        <label>Pain Onset</label>
                                        <div className="item">
                                            <ButtonGroup color="primary">
                                                <Button
                                                    onClick={() => {
                                                        setPainData({
                                                            ...painData,
                                                            c1: { ...painData.c1, 1: 1 },
                                                        });
                                                    }}
                                                    variant={
                                                        painData.c1["1"] === 1 ? "contained" : "outlined"
                                                    }
                                                >
                                                    Gradual
                                                </Button>
                                                <Button
                                                    onClick={() => {
                                                        setPainData({
                                                            ...painData,
                                                            c1: { ...painData.c1, 1: 2 },
                                                        });
                                                    }}
                                                    variant={
                                                        painData.c1["1"] === 2 ? "contained" : "outlined"
                                                    }
                                                >
                                                    Acute
                                                </Button>
                                            </ButtonGroup>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="item">
                                        <label>Inflammatory Pain</label>
                                        <Field name="inflammatoryPain">
                                            {({ input, meta }) => <input type="text" {...input} />}
                                        </Field>
                                    </div>
                                    <br />
                                    <div className="item">
                                        <label>Trigger Point</label>
                                        <Field name="triggerPoint">
                                            {({ input, meta }) => <input type="text" {...input} />}
                                        </Field>
                                    </div>
                                    <br />
                                    <div className="item">
                                        <label>ADLs Restricted</label>
                                        <Field name="ADLsRestricted">
                                            {({ input, meta }) => <input type="text" {...input} />}
                                        </Field>
                                    </div>
                                    <br />
                                </div>
                            </Grid>
                            <Grid item xs>
                                <div className="text-center">
                                    <div className="item">
                                        <label>Pain Site </label>
                                        <Field name="site">
                                            {({ input, meta }) => <input type="text" {...input} />}
                                        </Field>
                                    </div>
                                    <br />

                                    <div className="item">
                                        <label>Pain Duration</label>
                                        <div className="item">
                                            <ButtonGroup color="primary">
                                                <Button
                                                    onClick={() => {
                                                        setPainData({
                                                            ...painData,
                                                            c2: { ...painData.c2, 1: 1 },
                                                        });
                                                    }}
                                                    variant={
                                                        painData.c2["1"] === 1 ? "contained" : "outlined"
                                                    }
                                                >
                                                    Acute
                                                </Button>
                                                <Button
                                                    onClick={() => {
                                                        setPainData({
                                                            ...painData,
                                                            c2: { ...painData.c2, 1: 2 },
                                                        });
                                                    }}
                                                    variant={
                                                        painData.c2["1"] === 2 ? "contained" : "outlined"
                                                    }
                                                >
                                                    Sub -Acute
                                                </Button>
                                                <Button
                                                    onClick={() => {
                                                        setPainData({
                                                            ...painData,
                                                            c2: { ...painData.c2, 1: 3 },
                                                        });
                                                    }}
                                                    variant={
                                                        painData.c2["1"] === 3 ? "contained" : "outlined"
                                                    }
                                                >
                                                    Sub -Chronic
                                                </Button>
                                                <Button
                                                    onClick={() => {
                                                        setPainData({
                                                            ...painData,
                                                            c2: { ...painData.c2, 1: 4 },
                                                        });
                                                    }}
                                                    variant={
                                                        painData.c2["1"] === 4 ? "contained" : "outlined"
                                                    }
                                                >
                                                    Chronic
                                                </Button>
                                            </ButtonGroup>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="item">
                                        <label> Neuropathic Pain </label>
                                        <Field name="neuropathicPain">
                                            {({ input, meta }) => <input type="text" {...input} />}
                                        </Field>
                                    </div>
                                    <br />

                                    <div className="item">
                                        <label> Aggravating Factor </label>
                                        <Field name="aggravatingFactor">
                                            {({ input, meta }) => <input type="text" {...input} />}
                                        </Field>
                                    </div>
                                    <br />
                                    <div className="item">
                                        <label>Diurnal Variation</label>
                                        <div className="item">
                                            <ButtonGroup color="primary">
                                                <Button
                                                    onClick={() => {
                                                        setPainData({
                                                            ...painData,
                                                            c3: { ...painData.c3, 1: 1 },
                                                        });
                                                    }}
                                                    variant={
                                                        painData.c3["1"] === 1 ? "contained" : "outlined"
                                                    }
                                                >
                                                    Morning
                                                </Button>
                                                <Button
                                                    onClick={() => {
                                                        setPainData({
                                                            ...painData,
                                                            c3: { ...painData.c3, 1: 2 },
                                                        });
                                                    }}
                                                    variant={
                                                        painData.c3["1"] === 2 ? "contained" : "outlined"
                                                    }
                                                >
                                                    Afternoon
                                                </Button>
                                                <Button
                                                    onClick={() => {
                                                        setPainData({
                                                            ...painData,
                                                            c3: { ...painData.c3, 1: 3 },
                                                        });
                                                    }}
                                                    variant={
                                                        painData.c3["1"] === 3 ? "contained" : "outlined"
                                                    }
                                                >
                                                    Evening
                                                </Button>
                                                <Button
                                                    onClick={() => {
                                                        setPainData({
                                                            ...painData,
                                                            c3: { ...painData.c3, 1: 4 },
                                                        });
                                                    }}
                                                    variant={
                                                        painData.c3["1"] === 4 ? "contained" : "outlined"
                                                    }
                                                >
                                                    Night
                                                </Button>
                                                <Button
                                                    onClick={() => {
                                                        setPainData({
                                                            ...painData,
                                                            c3: { ...painData.c3, 1: 5 },
                                                        });
                                                    }}
                                                    variant={
                                                        painData.c3["1"] === 5 ? "contained" : "outlined"
                                                    }
                                                >
                                                    No Specific Pattern
                                                </Button>
                                            </ButtonGroup>
                                        </div>
                                    </div>
                                    <br />
                                </div>
                            </Grid>
                            <Grid item xs>
                                <div className="text-center">
                                    <div className="item">
                                        <label>Pain Intensity</label>
                                        <Field name="intensity">
                                            {({ input, meta }) => (
                                                <input type="text" {...input} placeholder="VAS Score" />
                                            )}
                                        </Field>
                                    </div>
                                    <br />
                                    <div className="item">
                                        <label> Nature Of Pain </label>
                                        <Field name="nature">
                                            {({ input, meta }) => (
                                                <input
                                                    type="text"
                                                    {...input}
                                                    placeholder="Nociceptive Pain"
                                                />
                                            )}
                                        </Field>
                                    </div>
                                    <br />
                                    <div className="item">
                                        <label> Functional Pain </label>
                                        <Field name="functionalPain">
                                            {({ input, meta }) => <input type="text" {...input} />}
                                        </Field>
                                    </div>
                                    <br />
                                    <div className="item">
                                        <label>Relieving Factor </label>
                                        <Field name="relievingFactor">
                                            {({ input, meta }) => <input type="text" {...input} />}
                                        </Field>
                                    </div>
                                    <br />
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
    editPainData
})(EditPain);