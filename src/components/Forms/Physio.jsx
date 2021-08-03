import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { Button, Dialog } from "@material-ui/core";
import DeleteSweepIcon from "@material-ui/icons/DeleteSweep";
// import CreateIcon from "@material-ui/icons/Create";
import EditIcon from '@material-ui/icons/Edit';
import AppointmentTable from "../Tables/AppointmentTable";
import { connect } from "react-redux";
import { addPhysioData, deletePhysioData, editPhysio, getPhysioData } from "../../actions/physioAction";
import DialogTitle from '@material-ui/core/DialogTitle';

import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import SaveIcon from "@material-ui/icons/Save";

import { makeStyles } from "@material-ui/core/styles";

import { Form, Field } from "react-final-form";
const useStyles = makeStyles((theme) => ({
  btns: {
    color: 'white',
    background:'#2185d0'
  },
  addd: {
    width: "260px",
    height: "30px",
    fontSize: "15px",
    textAlign: "center",
    backgroundColor: "orange",


  },
  outline: {
    color: "black"
  }



}));

function Physio(props) {
  const classes = useStyles();

  const onSubmit = (formValues) => {
    console.log(formValues);
    props.addPhysioData(formValues);
    window.location.reload();
  };


 
const required = value => (value ? undefined : 'Required')
const mustBeNumber = value => (isNaN(value) ? 'Must be a number' : undefined)
const minValue = min => value =>
  isNaN(value) || value >= min ? undefined : `Should be greater than ${min}`
const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined)






  const [open, setOpen] = React.useState(false);
  const [iden, setIden] = React.useState();
  const [openPhysio, setOpenPhysio] = React.useState(false);

  const initialValues = { date: new Date().toISOString().substr(0, 10) };

  const handleClose = () => {
    setOpen(false);
    setOpenPhysio(false);

  };

  const handleOpen = () => {
    setOpen(true);
  };

  const editOnSubmit = (formValues) => {
    setOpenPhysio(false);
    console.log(formValues);
    props.editPhysio(iden, formValues);
    window.location.reload();
  };

  const deletePhysioHandler = (id) => {
    console.log(id);
    props.deletePhysioData(id);
    window.location.reload();
  }
  const physioTableHeading = [
    { id: "name", label: "Name" },
    { id: "designation", label: "Designation" },
    { id: "mobile", label: "Mobile" },
    { id: "email", label: "Email" },
    { id: "address", label: "Address" },
    { id: "joiningDate", label: "Joining Date" },
    { id: "actions", label: "Actions" },

  ];
  const physioData = [];


  props.physioData &&
    props.physioData.forEach((physio, index) => {
      physio.forEach((p) => {
        const data = {
          name: `${p.name}`,
          designation: `${p.designation}`,
          mobile: `${p.mobile}`,
          email: `${p.email}`,
          address: `${p.address}`,
          joiningDate: `${p.date}`,
          actions: (
            <div className="ui compact menu">
              <div className="item">
                <EditIcon
                  color="secondary"
                  onClick={() => {
                    setOpenPhysio(true);
                    setIden(p._id);
                  }}
                ></EditIcon>
              </div>
              <div className="item">
                <DeleteSweepIcon
                  color="primary"

                  onClick={() => {
                    deletePhysioHandler(p._id);
                  }}
                />
              </div>

            </div>
          )
        };
        physioData.push(data);
      })

    });

  return (
    <div>
      <Button className='btn3' variant="contained" onClick={handleOpen} style={{ float: 'right', marginTop: '-2.8rem', }}><div style={{ color: 'white', fontWeight: 'bold', marginRight: '0.2rem', fontSize: '15px', padding: '20px', }}>Add New Physio</div>  </Button>
      <br />
      <br />
      <br />



      <div>
        <Dialog maxWidth="sm" open={open} onClose={handleClose}>
          <DialogTitle style={{ fontSize: "bold" }} id="responsive-dialog-title" className="text-center">
            {"Add New Physio"}
          </DialogTitle >
          <div className="container my-3">
            <Form onSubmit={onSubmit} initialValues={initialValues}>
              {({ handleSubmit, form, submitting, pristine, values}) => (
                <form onSubmit={handleSubmit} className="ui form">
                  <Grid container alignItems="flex-start" spacing={4}>
                    <Grid item xs={12}>
                      <div>
                        <Field name="name" validate={required}>
                          {({ input, meta }) => (
                            <div>
                              <label  >Name </label>

                              <input type="text" {...input} placeholder="" pattern="[a-zA-Z][a-zA-Z\s]*"   required  />
                            </div>
                          )}
                        </Field>
                      </div>
                    </Grid>

                    <Grid item xs={12}>
                      <div>
                        <Field name="address">
                          {({ input }) => (
                            <div>
                              <label  className="age">Address</label>

                              <textarea
                                {...input}
                                placeholder=""
                                rows="3"
                                minlength="4"
                              required></textarea>
                            </div>
                          )}
                        </Field>
                      </div>
                    </Grid>

                    <Grid item xs={6}>
                      <div>
                        <Field name="mobile">
                          {({ input }) => (
                            <div>
                              <label  className="name">Mobile No:</label>
                              <input type="tel" {...input} placeholder="" pattern="[0-9][0-9]{9}"  required/>
                            </div>
                          )}
                        </Field>
                      </div>
                      <br />
                      <div>
                        <Field name="designation">
                          {({ input }) => (
                            <div>
                              <label  className="name">Designation:</label>
                              <input type="text" {...input} placeholder="" required/>
                            </div>
                          )}
                        </Field>
                      </div>
                      <br />
                    </Grid>
                    <Grid item xs={6}>
                      <div>
                        <Field name="email">
                          {({ input }) => (
                            <div>
                              <label  className="name">Email:</label>
                              <input type="text" {...input} placeholder="" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"  required/>
                            </div>
                          )}
                        </Field>
                      </div>

                      <br />
                      <div>
                        <Field name="date">
                          {({ input }) => (
                            <div>
                              <label  className="name">Date Of joining</label>
                              <input type="date" {...input} placeholder="" required/>
                            </div>
                          )}
                        </Field>
                      </div>
                      <br />
                    </Grid>
                  </Grid>
                  <br />

                  <div className="mb-3" style={{ textAlign: "center" }}>
                    <Button
                      className="ui primary button mr-3"
                      variant="contained"
                      // color="primary"
                      size="large"
                      type="submit"
                      
                      
                      
                      
                    >
                      Save
                    </Button>
                    <button type="reset"   onClick={handleClose} className="ui button">
                Discard
              </button>
                    
                  </div>
                </form>
              )}
            </Form>
          </div>
        </Dialog>
      </div>

      <div className="table-component">
        <AppointmentTable
          headings={physioTableHeading}
          rows={physioData}
        />
      </div>


      {openPhysio && (
        <Dialog
          maxWidth="sm"
          open={openPhysio}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >

        <DialogTitle style={{ fontSize: "bold" }} id="responsive-dialog-title" className="text-center">
            {"Add New Physio"}
          </DialogTitle >
          <div className="container my-3">


            <Form onSubmit={editOnSubmit} initialValues={initialValues}>
              {({ handleSubmit, form }) => (
                <form onSubmit={handleSubmit} className="ui form">
                  <Grid container alignItems="flex-start" spacing={4}>
                    <Grid item xs={12}>
                      <div>
                        <Field name="name">
                          {({ input }) => (
                            <div>
                              <label  className="age">Name </label>

                              <input type="text" {...input} placeholder="" pattern="[a-zA-Z][a-zA-Z\s]*" required />
                            </div>
                          )}
                        </Field>
                      </div>
                    </Grid>

                    <Grid item xs={12}>
                      <div>
                        <Field name="address">
                          {({ input }) => (
                            <div>
                              <label  className="age">Address</label>

                              <textarea
                                {...input}
                                placeholder=""
                                rows="3"
                              required></textarea>
                            </div>
                          )}
                        </Field>
                      </div>
                    </Grid>

                    <Grid item xs={6}>
                      <div>
                        <Field name="mobile">
                          {({ input }) => (
                            <div>
                              <label  className="name">Mobile No:</label>
                              <input type="text" {...input} placeholder="" pattern="[0-9][0-9]{9}" required/>
                            </div>
                          )}
                        </Field>
                      </div>
                      <br />
                      <div>
                        <Field name="designation">
                          {({ input }) => (
                            <div>
                              <label  className="name">Designation:</label>
                              <input type="text" {...input} placeholder="" required/>
                            </div>
                          )}
                        </Field>
                      </div>
                      <br />
                      
                    </Grid>
                    <Grid item xs={6}>
                      <div>
                        <Field name="email">
                          {({ input }) => (
                            <div>
                              <label  className="name">Email:</label>
                              <input type="email" {...input} placeholder="" required/>
                            </div>
                          )}
                        </Field>
                      </div>

                      <br />
                      <div>
                        <Field name="date">
                          {({ input }) => (
                            <div>
                              <label  className="name">Date Of joining</label>
                              <input type="date" {...input} placeholder="" required/>
                            </div>
                          )}
                        </Field>
                      </div>
                      <br />
                      
                    </Grid>
                  </Grid>
                  <br />

                  <div className="mb-3" style={{ textAlign: "center" }}>
                    <Button variant="outlined" color="secondary" type="submit" className="ui primary button ">
                      Submit
                    </Button>
                  </div>
                </form>
              )}
            </Form>
          </div>

        </Dialog>
      )}

    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    physioData: state.physioData,


  };
};

export default connect(mapStateToProps, {

  addPhysioData,
  getPhysioData,
  deletePhysioData,
  editPhysio

})(Physio);