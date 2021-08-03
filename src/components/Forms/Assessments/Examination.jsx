import React from "react";
import { Grid, FormControlLabel, Radio } from "@material-ui/core";
import { Form, Field } from "react-final-form";
import BasicContainer from "../../Container/BasicContainer";
import { ButtonGroup, Button, Dialog } from "@material-ui/core";
import { addExaminationData, getExaminationData, deleteExaminationData, editExaminationData } from '../../../actions/examinationAction';
import { connect } from "react-redux";
import AppointmentTable from "../../Tables/AppointmentTable";
import EditExamination from './edit/examination';


//icons
import DeleteSweepIcon from "@material-ui/icons/DeleteSweep";
import EditIcon from '@material-ui/icons/Edit';

function Examination(props) {

  React.useEffect(() => {
    if (props.id == undefined) props.getExaminationData(props.iid);
    else props.getExaminationData(props.id);
  }, []);

  const [data, setData] = React.useState({});
  const [openEditExamination, setOpenEditExamination] = React.useState(false);

  const onSubmit = (formValues) => {
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
    props.addExaminationData(formValues);
  };

  const [examinationData, setExaminationData] = React.useState({
    c1: {},
  });

  const initialValues = { date: new Date().toISOString().substr(0, 10) };

  const handleClose = () => {
    setOpenEditExamination(false);
  }

  const examinationTableHeading = [
    { id: "date", label: "Date" },
    { id: "blood", label: "Blood Pressure" },
    { id: "actions", label: "Actions" }
  ];

  const deleteExaminationHandler = (id) => {
    props.deleteExaminationData(id);
  }
  console.log(props.examinationData)

  const exaData = [];
  props.examinationData &&
    props.examinationData.forEach((data, index) => {
      const datas = {
        date: `${data.date}`,
        blood: `${data.bloodPressure}`,
        actions: (
          <div className="ui compact menu">
            <div>
              <EditIcon
                style={{ color: 'yellow' }}
                onClick={() => {
                  setOpenEditExamination(true);
                  setData(data);
                }}
              ></EditIcon>
            </div>

            <div>
              <DeleteSweepIcon
                style={{ color: 'red' }}
                onClick={() => {
                  deleteExaminationHandler(data._id);
                }}
              />
            </div>
          </div>
        ),
      }
      exaData.push(datas);

    });


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
                    <Field name="posture">
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

      <div className="examination-table">
        <AppointmentTable
          headings={examinationTableHeading}
          rows={exaData}
        />
      </div>


      {openEditExamination && (
        <Dialog
          maxWidth="md"
          open={openEditExamination}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <EditExamination
            examinationData={data}
            handleClose={handleClose}
          />
        </Dialog>
      )}

    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    examinationData: state.examinationData
  };
};

export default connect(mapStateToProps, {
  addExaminationData,
  getExaminationData,
  deleteExaminationData,
  editExaminationData
})(Examination);