import React from "react";
import { Grid } from "@material-ui/core";
import { Form, Field } from "react-final-form";
import PointingError from "../../LandingPage/ErrorComponent/PointingError";
import { ButtonGroup, Button, Dialog } from "@material-ui/core";
import { addComplaintData, getComplaintData, deleteComplaintData, editComplaintData } from '../../../actions/chiefComplaintAction';
import { connect } from "react-redux";
import AppointmentTable from "../../Tables/AppointmentTable";
import EditChiefComplaint from './edit/chiefComplaint';

import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

//icons
import DeleteSweepIcon from "@material-ui/icons/DeleteSweep";
import EditIcon from '@material-ui/icons/Edit';


function ChiefComplaint(props) {

  const [data, setData] = React.useState({});
  const [openEditComplaint, setOpenEditComplaint] = React.useState(false);

  React.useEffect(() => {
    if (props.id == undefined) props.getComplaintData(props.iid);
    else props.getComplaintData(props.id);
  }, []);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const onSubmit = (formValues) => {
    formValues.pain = chiefComplaintData.t1['1'] === 1 ? 'Yes' : 'No';
    formValues.swelling = chiefComplaintData.t1['2'] === 1 ? 'Yes' : 'No';
    formValues.stiffness = chiefComplaintData.t1['3'] === 1 ? 'Yes' : 'No';
    if (props.id == undefined) {
      formValues.patient = props.iid;
    }
    else {
      formValues.patient = props.id;
    }
    // formValues.patient = id;
    formValues.lossOfMotion = chiefComplaintData.t2['1'] === 1 ? 'Yes' : 'No';
    formValues.abnormalSensation = chiefComplaintData.t2['2'] === 1 ? 'Yes' : 'No';
    formValues.instability = chiefComplaintData.t2['3'] === 1 ? 'Yes' : 'No';

    console.log(formValues);
    props.addComplaintData(formValues)
  };
  console.log(props);
  const [chiefComplaintData, setChiefComplaintData] = React.useState({
    t1: {},
    t2: {},
    t3: {},
  });

  const initialValues = { date: new Date().toISOString().substr(0, 10) };

  const validate = (formValues) => {
    const errors = {};

    if (!formValues.symptoms) errors.symptoms = "This field is required";
    if (!formValues.duration) errors.duration = "This field is required";

    return errors;
  };

  const handleClose = () => {
    setOpenEditComplaint(false);
  }

  const complaintTableHeading = [
    { id: "date", label: "Date" },
    { id: "duration", label: "Duration" },
    { id: "actions", label: "Actions" }
  ];

  const deleteComplaintHandler = (id) => {
    props.deleteComplaintData(id);
  }

  console.log(props.complaintData);

  const complaintData = [];
  props.complaintData &&
    props.complaintData.forEach((data, index) => {
      const datas = {
        date: `${data.date}`,
        duration: `${data.symptoms}`,
        actions: (
          <div className="ui compact menu">
            <div>
              <EditIcon
                style={{ color: 'yellow' }}
                onClick={() => {
                  setOpenEditComplaint(true);
                  setData(data);
                }}
              ></EditIcon>
            </div>

            <div>
              <DeleteSweepIcon
                style={{ color: 'red' }}
                onClick={() => {
                  deleteComplaintHandler(data._id);
                }}
              />
            </div>
          </div>
        ),
      }
      complaintData.push(datas);

    });

  return (
    <div>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        initialValues={initialValues}
      >
        {({ handleSubmit, form }) => (
          <form onSubmit={handleSubmit} className="ui form">
            <Grid container spacing={3}>
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
                          <textarea rows="2" {...input}></textarea>
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
                          <textarea rows="2" {...input}></textarea>
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
                  <tr>
                    <td>
                      Pain
                      <br />
                      <br />
                      <ButtonGroup color="primary">
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
                      <ButtonGroup color="primary">
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
                onClick={form.reset}
              >
                Discard
              </button>
            </div>
          </form>
        )}
      </Form>
      <div className="complaint-table">
        <AppointmentTable
          headings={complaintTableHeading}
          rows={complaintData}
        />
      </div>

      {openEditComplaint && (
        <Dialog
          maxWidth="lg"
          fullScreen={fullScreen}
          open={openEditComplaint}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <EditChiefComplaint
            complaintData={data}
            handleClose={handleClose}
          />
        </Dialog>
      )}

    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    complaintData: state.complaintData
  };
};

export default connect(mapStateToProps, {
  addComplaintData,
  getComplaintData,
  deleteComplaintData,
  editComplaintData
})(ChiefComplaint);