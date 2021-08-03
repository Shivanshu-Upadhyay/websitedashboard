import React from "react";
import { Grid, FormControlLabel, Radio } from "@material-ui/core";
import { Form, Field } from "react-final-form";
import BasicContainer from "../../Container/BasicContainer";
import { ButtonGroup, Button, Dialog } from "@material-ui/core";
import { addPainData, getPainData, deletePainData, editPainData } from '../../../actions/painAction';
import { connect } from "react-redux";
import AppointmentTable from "../../Tables/AppointmentTable";
import EditPain from './edit/pain';

//icons
import DeleteSweepIcon from "@material-ui/icons/DeleteSweep";
import EditIcon from '@material-ui/icons/Edit';


function Pain(props) {

  React.useEffect(() => {
    if (props.id == undefined) props.getPainData(props.iid);
    else props.getPainData(props.id);
  }, []);

  const [data, setData] = React.useState({});
  const [openEditPain, setOpenEditPain] = React.useState(false);


  const onSubmit = (formValues) => {
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
    props.addPainData(formValues);
  };

  const [painData, setPainData] = React.useState({
    c1: {},
    c2: {},
    c3: {},
  });

  const handleClose = () => {
    setOpenEditPain(false);
  }

  const painTableHeading = [
    { id: "date", label: "Date" },
    { id: "painSite", label: "Pain Site" },
    { id: "painIntensity", label: "Pain Intensity" },
    { id: 'actions', label: 'Actions' }
  ];

  const deletePainHandler = (id) => {
    props.deletePainData(id);
  }

  const painDataArray = [];
  props.painData &&
    props.painData.forEach((data, index) => {
      const datas = {
        date: `${data.date}`,
        painSite: `${data.site}`,
        painIntensity: `${data.intensity}`,
        actions: (
          <div className="ui compact menu">
            <div>
              <EditIcon
                style={{ color: 'yellow' }}
                onClick={() => {
                  setOpenEditPain(true);
                  setData(data);
                }}
              ></EditIcon>
            </div>

            <div>
              <DeleteSweepIcon
                style={{ color: 'red' }}
                onClick={() => {
                  deletePainHandler(data._id);
                }}
              />
            </div>
          </div>
        ),
      }
      painDataArray.push(datas);

    });

  const initialValues = { date: new Date().toISOString().substr(0, 10) };

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
      <div className="pain-table">
        <AppointmentTable
          headings={painTableHeading}
          rows={painDataArray}
        />
      </div>


      {openEditPain && (
        <Dialog
          maxWidth="md"
          open={openEditPain}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <EditPain
            painData={data}
            handleClose={handleClose}
          />
        </Dialog>
      )}

    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    painData: state.painData
  };
};

export default connect(mapStateToProps, {
  addPainData,
  getPainData,
  deletePainData,
  editPainData
})(Pain);