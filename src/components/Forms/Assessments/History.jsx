import React from "react";
import { Grid, FormControlLabel, Radio } from "@material-ui/core";
import { Form, Field } from "react-final-form";
import { TextareaAutosize } from "@material-ui/core";
import { ButtonGroup, Button, Dialog } from "@material-ui/core";

import { connect } from "react-redux";
import AppointmentTable from "../../Tables/AppointmentTable";
import { addHistoryData, getHistoryData, deleteHistoryData, editHistoryData } from '../../../actions/historyAction';
import EditHistory from './edit/history';


//icons
import DeleteSweepIcon from "@material-ui/icons/DeleteSweep";
import EditIcon from '@material-ui/icons/Edit';

function History(props) {

  React.useEffect(() => {
    if (props.id == undefined) props.getHistoryData(props.iid);
    else props.getHistoryData(props.id);
  }, []);

  const [data, setData] = React.useState({});
  const [openEditHistory, setOpenEditHistory] = React.useState(false);


  const onSubmit = (formValues) => {

    formValues.diabetes = historyData.t1['1'] === 1 ? 'Yes' : 'No';
    formValues.smoking = historyData.t1['2'] === 1 ? 'Yes' : 'No';
    formValues.tuberculosis = historyData.t1['3'] === 1 ? 'Yes' : 'No';
    formValues.bloodPressure = historyData.t2['1'] === 1 ? 'Yes' : 'No';
    formValues.alcohol = historyData.t2['2'] === 1 ? 'Yes' : 'No';
    formValues.cancer = historyData.t2['3'] === 1 ? 'Yes' : 'No';
    formValues.hypertension = historyData.t3['1'] === 1 ? 'Yes' : 'No';
    formValues.heartDisease = historyData.t3['2'] === 1 ? 'Yes' : 'No';
    formValues.pregnancy = historyData.t3['3'] === 1 ? 'Yes' : 'No';
    if (props.id == undefined) {
      formValues.patient = props.iid;
    }
    else {
      formValues.patient = props.id;
    }
    console.log(formValues);
    props.addHistoryData(formValues);
  };


  const handleClose = () => {
    setOpenEditHistory(false);
  }

  const [historyData, setHistoryData] = React.useState({
    t1: {},
    t2: {},
    t3: {},
  });

  const initialValues = { date: new Date().toISOString().substr(0, 10) };

  const historyTableHeading = [
    { id: "date", label: "Date" },
    { id: "medical", label: "Present Medical History" },
    { id: "actions", label: "Actions" }
  ];

  const deleteHistoryHandler = (id) => {
    props.deleteHistoryData(id);
  }
  console.log(props)

  const histData = [];
  props.historyData &&
    props.historyData.forEach((data, index) => {
      const datas = {
        date: `${data.date}`,
        medical: `${data.presentMedicalHistory}`,
        actions: (
          <div className="ui compact menu">
            <div>
              <EditIcon
                style={{ color: 'yellow' }}
                onClick={() => {
                  setOpenEditHistory(true);
                  setData(data);
                }}
              ></EditIcon>
            </div>

            <div>
              <DeleteSweepIcon
                style={{ color: 'red' }}
                onClick={() => {
                  deleteHistoryHandler(data._id);
                }}
              />
            </div>
          </div>
        ),
      }
      histData.push(datas);

    });

  const validate = (formValues) => {
    const errors = {};
    // email

    // if (formValues.name && formValues.name.length < 5)
    //   errors.name = "Name should be 5 characters long";
    // if (!formValues.name) errors.name = "Patient Name is required";
    // if (formValues.firstName && formValues.firstName.length < 5)
    //   errors.firstName = "First Name should be 5 characters long";
    // if (!formValues.firstName) errors.firstName = "First Name is required";
    // if (formValues.lastName && formValues.lastName.length < 5)
    //   errors.lastName = "Last Name should be 5 characters long";
    // if (!formValues.lastName) errors.lastName = "Last Name is required";
    // if (!formValues.height) errors.height = "Height is required";
    // if (!formValues.weight) errors.weight = "weight is required";

    // if (!formValues.mobileNumber)
    //   errors.mobileNumber = "Mobile number is required";
    // if (
    //   formValues.mobileNumber &&
    //   !Validator.isDecimal(formValues.mobileNumber)
    // )
    //   errors.mobileNumber = "Only numerical values are allowed";

    // return errors;
  };

  return (
    <div>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        initialValues={initialValues}
      >
        {({ handleSubmit }, form) => (
          <form onSubmit={handleSubmit} className="ui form">
            <Grid container spacing={10}>
              <Grid item xs={6}>
                <div className="text-center">
                  <div className="item">
                    <label>Date</label>
                    <Field name="date">
                      {({ input, meta }) => <input type="date" {...input} />}
                    </Field>
                  </div>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <div className="item">
                    <label> Present Medical History </label>
                    <Field name="presentMedicalHistory">
                      {({ input, meta }) => (
                        <TextareaAutosize
                          type="text"
                          placeholder="Present Medical History"
                          {...input}
                        />
                      )}
                    </Field>
                  </div>
                </div>
              </Grid>
              <Grid item xs="6">
                <div className="text-center">
                  <div className="item">
                    <label> Past Medical History </label>
                    <Field name="pastMedicalHistory">
                      {({ input, meta }) => (
                        <TextareaAutosize
                          type="text"
                          {...input}
                          placeholder="Surgical History"
                        />
                      )}
                    </Field>
                  </div>

                  <br />

                  <div className="item">
                    <label> Other Disease </label>
                    <Field name="otherDisease">
                      {({ input, meta }) => (
                        <TextareaAutosize
                          type="text"
                          {...input}
                          placeholder="Other Disease"
                        />
                      )}
                    </Field>
                  </div>

                  <br />
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
                      Diabetes
                      <br />
                      <br />
                      <ButtonGroup color="primary">
                        <Button
                          onClick={() => {
                            setHistoryData({
                              ...historyData,
                              t1: { ...historyData.t1, 1: 1 },
                            });
                          }}
                          variant={
                            historyData.t1["1"] === 1 ? "contained" : "outlined"
                          }
                        >
                          Yes
                        </Button>
                        <Button
                          onClick={() => {
                            setHistoryData({
                              ...historyData,
                              t1: { ...historyData.t1, 1: 2 },
                            });
                          }}
                          variant={
                            historyData.t1["1"] === 2 ? "contained" : "outlined"
                          }
                        >
                          No
                        </Button>
                      </ButtonGroup>
                    </td>
                    <td>
                      Smoking
                      <br />
                      <br />
                      <ButtonGroup color="primary">
                        <Button
                          onClick={() => {
                            setHistoryData({
                              ...historyData,
                              t1: { ...historyData.t1, 2: 1 },
                            });
                          }}
                          variant={
                            historyData.t1["2"] === 1 ? "contained" : "outlined"
                          }
                        >
                          Yes
                        </Button>
                        <Button
                          onClick={() => {
                            setHistoryData({
                              ...historyData,
                              t1: { ...historyData.t1, 2: 2 },
                            });
                          }}
                          variant={
                            historyData.t1["2"] === 2 ? "contained" : "outlined"
                          }
                        >
                          No
                        </Button>
                      </ButtonGroup>
                    </td>
                    <td>
                      Tuberculosis
                      <br />
                      <br />
                      <ButtonGroup color="primary">
                        <Button
                          onClick={() => {
                            setHistoryData({
                              ...historyData,
                              t1: { ...historyData.t1, 3: 1 },
                            });
                          }}
                          variant={
                            historyData.t1["3"] === 1 ? "contained" : "outlined"
                          }
                        >
                          Yes
                        </Button>
                        <Button
                          onClick={() => {
                            setHistoryData({
                              ...historyData,
                              t1: { ...historyData.t1, 3: 2 },
                            });
                          }}
                          variant={
                            historyData.t1["3"] === 2 ? "contained" : "outlined"
                          }
                        >
                          No
                        </Button>
                      </ButtonGroup>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Blood Pressure
                      <br />
                      <br />
                      <ButtonGroup color="primary">
                        <Button
                          onClick={() => {
                            setHistoryData({
                              ...historyData,
                              t2: { ...historyData.t2, 1: 1 },
                            });
                          }}
                          variant={
                            historyData.t2["1"] === 1 ? "contained" : "outlined"
                          }
                        >
                          Yes
                        </Button>
                        <Button
                          onClick={() => {
                            setHistoryData({
                              ...historyData,
                              t2: { ...historyData.t2, 1: 2 },
                            });
                          }}
                          variant={
                            historyData.t2["1"] === 2 ? "contained" : "outlined"
                          }
                        >
                          No
                        </Button>
                      </ButtonGroup>
                    </td>
                    <td>
                      Alcohol
                      <br />
                      <br />
                      <ButtonGroup color="primary">
                        <Button
                          onClick={() => {
                            setHistoryData({
                              ...historyData,
                              t2: { ...historyData.t2, 2: 1 },
                            });
                          }}
                          variant={
                            historyData.t2["2"] === 1 ? "contained" : "outlined"
                          }
                        >
                          Yes
                        </Button>
                        <Button
                          onClick={() => {
                            setHistoryData({
                              ...historyData,
                              t2: { ...historyData.t2, 2: 2 },
                            });
                          }}
                          variant={
                            historyData.t2["2"] === 2 ? "contained" : "outlined"
                          }
                        >
                          No
                        </Button>
                      </ButtonGroup>
                    </td>
                    <td>
                      Cancer
                      <br />
                      <br />
                      <ButtonGroup color="primary">
                        <Button
                          onClick={() => {
                            setHistoryData({
                              ...historyData,
                              t2: { ...historyData.t2, 3: 1 },
                            });
                          }}
                          variant={
                            historyData.t2["3"] === 1 ? "contained" : "outlined"
                          }
                        >
                          Yes
                        </Button>
                        <Button
                          onClick={() => {
                            setHistoryData({
                              ...historyData,
                              t2: { ...historyData.t2, 3: 2 },
                            });
                          }}
                          variant={
                            historyData.t2["3"] === 2 ? "contained" : "outlined"
                          }
                        >
                          No
                        </Button>
                      </ButtonGroup>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Hypertension
                      <br />
                      <br />
                      <ButtonGroup color="primary">
                        <Button
                          onClick={() => {
                            setHistoryData({
                              ...historyData,
                              t3: { ...historyData.t3, 1: 1 },
                            });
                          }}
                          variant={
                            historyData.t3["1"] === 1 ? "contained" : "outlined"
                          }
                        >
                          Yes
                        </Button>
                        <Button
                          onClick={() => {
                            setHistoryData({
                              ...historyData,
                              t3: { ...historyData.t3, 1: 2 },
                            });
                          }}
                          variant={
                            historyData.t3["1"] === 2 ? "contained" : "outlined"
                          }
                        >
                          No
                        </Button>
                      </ButtonGroup>
                    </td>
                    <td>
                      Heart Disease
                      <br />
                      <br />
                      <ButtonGroup color="primary">
                        <Button
                          onClick={() => {
                            setHistoryData({
                              ...historyData,
                              t3: { ...historyData.t3, 2: 1 },
                            });
                          }}
                          variant={
                            historyData.t3["2"] === 1 ? "contained" : "outlined"
                          }
                        >
                          Yes
                        </Button>
                        <Button
                          onClick={() => {
                            setHistoryData({
                              ...historyData,
                              t3: { ...historyData.t3, 2: 2 },
                            });
                          }}
                          variant={
                            historyData.t3["2"] === 2 ? "contained" : "outlined"
                          }
                        >
                          No
                        </Button>
                      </ButtonGroup>
                    </td>
                    <td>
                      Pregnancy
                      <br />
                      <br />
                      <ButtonGroup color="primary">
                        <Button
                          onClick={() => {
                            setHistoryData({
                              ...historyData,
                              t3: { ...historyData.t3, 3: 1 },
                            });
                          }}
                          variant={
                            historyData.t3["3"] === 1 ? "contained" : "outlined"
                          }
                        >
                          Yes
                        </Button>
                        <Button
                          onClick={() => {
                            setHistoryData({
                              ...historyData,
                              t3: { ...historyData.t3, 3: 2 },
                            });
                          }}
                          variant={
                            historyData.t3["3"] === 2 ? "contained" : "outlined"
                          }
                        >
                          No
                        </Button>
                      </ButtonGroup>
                    </td>
                  </tr>
                </tbody>
              </table>
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
            </div>
          </form>
        )}
      </Form>

      <div className="history-table">
        <AppointmentTable
          headings={historyTableHeading}
          rows={histData}
        />
      </div>


      {openEditHistory && (
        <Dialog
          maxWidth="md"
          open={openEditHistory}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <EditHistory
            historyData={data}
            handleClose={handleClose}
          />
        </Dialog>
      )}


    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    historyData: state.historyData
  };
};

export default connect(mapStateToProps, {
  addHistoryData,
  getHistoryData,
  deleteHistoryData,
  editHistoryData
})(History);