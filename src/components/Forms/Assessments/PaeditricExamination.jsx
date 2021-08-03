import React from "react";
import { Form, Field } from "react-final-form";
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";
import AppointmentTable from "../../Tables/AppointmentTable";
import { addPediatricData } from "../../../actions/pediatricAction";
import { v4 as uuidv4 } from "uuid";

function Pediatric(props) {
    const onSubmit = (formValues) => {
        console.log(formValues);
        props.addPediatricData(formValues);
    };

    const initialValues = { date: new Date().toISOString().substr(0, 10) };

    let tableData = [];

    if (props.pediatricData.length > 0) {
        for (let i = 0; i < props.pediatricData.length; i++) {
            const data = { ...props.pediatricData[i] };

            tableData.push({
                ...data,
                consultant: props.consultant,
                action: "actions",
            });
        }
    }
    tableData = tableData.map((row) => {
        return {
            ...row,
            date: new Date(row.date).toDateString(),
        };
    });
    const pediatricTableHeading = [
        { id: "date", label: "Date" },
        { id: "milestone", label: "Milestone" },
        { id: "consultant", label: "Consultant" },
        { id: "actions", label: "Actions" },
    ];

    const renderTable = () => {
        return (
            <AppointmentTable headings={pediatricTableHeading} rows={tableData} />
        );
    };

    return (
        <div>
            <Form onSubmit={onSubmit} initialValues={initialValues}>
                {({ handleSubmit, form }) => (
                    <form onSubmit={handleSubmit} className="ui form">
                        <div className="text-center">
                            <Grid container spacing={1}>
                                <Grid item xs={4}>
                                    <div className="text-center">
                                        <div className="item">
                                            <Field name="date" type="date">
                                                {({ input, meta }) => (
                                                    <div className="field">
                                                        <label>Date</label>
                                                        <input type="date" {...input} />
                                                    </div>
                                                )}
                                            </Field>
                                        </div>
                                        <br />
                                        <br />
                                        <br />
                                        <div className="item">
                                            <Field name="social">
                                                {({ input, meta }) => (
                                                    <div className="field">
                                                        <label>Social</label>
                                                        <input
                                                            type="text"
                                                            {...input}
                                                            placeholder="Social"
                                                        />
                                                        {/* <PointingError input={input} meta={meta} /> */}
                                                    </div>
                                                )}
                                            </Field>
                                        </div>
                                        <br />
                                        <br />
                                        <br />
                                        <div className="item">
                                            <Field name="reflexes">
                                                {({ input, meta }) => (
                                                    <div className="field">
                                                        <label>Reflexes</label>
                                                        <input
                                                            type="text"
                                                            {...input}
                                                            placeholder="Reflexes"
                                                        />
                                                        {/* <PointingError input={input} meta={meta} /> */}
                                                    </div>
                                                )}
                                            </Field>
                                        </div>
                                    </div>
                                    <br />
                                    <br />
                                    <br />
                                </Grid>
                                <Grid item xs={4}>
                                    <div className="text-center">
                                        <div className="item">
                                            <Field name="language">
                                                {({ input, meta }) => (
                                                    <div className="field">
                                                        <label>Language</label>
                                                        <input
                                                            type="text"
                                                            {...input}
                                                            placeholder="Language"
                                                        />
                                                        {/* <PointingError input={input} meta={meta} /> */}
                                                    </div>
                                                )}
                                            </Field>
                                        </div>
                                        <br />
                                        <br />
                                        <br />
                                        <div className="item">
                                            <Field name="fineMotor">
                                                {({ input, meta }) => (
                                                    <div className="field">
                                                        <label>Fine Motor</label>
                                                        <input
                                                            type="text"
                                                            {...input}
                                                            placeholder="Fine Motor"
                                                        />
                                                        {/* <PointingError input={input} meta={meta} /> */}
                                                    </div>
                                                )}
                                            </Field>
                                        </div>
                                    </div>
                                    <br />
                                    <br />
                                    <br />
                                </Grid>
                                <Grid item xs={4}>
                                    <div className="text-center">
                                        <div className="item">
                                            <Field name="milestone">
                                                {({ input, meta }) => (
                                                    <div className="field">
                                                        <label>Milestone</label>
                                                        <textarea
                                                            rows="2"
                                                            {...input}
                                                            placeholder="Milestone"
                                                        />
                                                        {/* <PointingError input={input} meta={meta} /> */}
                                                    </div>
                                                )}
                                            </Field>
                                        </div>
                                        <br />
                                        <br />

                                        <div className="item">
                                            <Field name="grossMotor">
                                                {({ input, meta }) => (
                                                    <div className="field">
                                                        <label>Gross Motor</label>
                                                        <input
                                                            type="text"
                                                            {...input}
                                                            placeholder="Gross Motor"
                                                        />
                                                        {/* <PointingError input={input} meta={meta} /> */}
                                                    </div>
                                                )}
                                            </Field>
                                        </div>
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <div className="item">
                                            <div style={{ textAlign: "center" }}>
                                                <button type="submit" className="ui primary button">
                                                    Submit
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                        <br />
                        <br />
                        <br />
                    </form>
                )}
            </Form>
            <div>{renderTable()}</div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        consultant: state.auth.user.name,
        pediatricData: state.pediatricData,
    };
};

export default connect(mapStateToProps, { addPediatricData })(Pediatric);