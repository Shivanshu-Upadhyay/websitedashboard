import React from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "./Header";
import { useLocation } from "react-router-dom";

import Intervention from "../Container/Intervention";
import Consent from "./consent/ConsentForm";
import DailyRegister from "./dailyRegister/DailyRegister";
import BasicContainer from "../Container/BasicContainer";
import OPD from './opd/OPD';
import { connect } from "react-redux";
import FixedSideBar from "./FixedSideBar";

function PatientDetails(props) {
    console.log(props)
    const [active, setActive] = React.useState(0);
    const setActiveValue = (value) => {
        setActive(value);
    };

    const isActive = (index) => {
        return index === active;
    };

    const renderSegment = () => (
        <div>
            <Consent open={isActive(1)} id={props.selectedPatient._id} />
            <DailyRegister open={isActive(2)} id={props.selectedPatient._id} />
            <OPD open={isActive(3)} id={props.selectedPatient._id}></OPD>
            {/* <InvoiceForm open={isActive(3)} />
      <MasterForm open={isActive(4)} />
      <SMSForm open={isActive(5)} />
      <CaseReportForm open={isActive(6)} />
      <ConsentForm open={isActive(7)} />
      <ProductForm open={isActive(8)} /> */}
        </div>
    );

    const renderSettings = () => (
        <div className="ui grid">
            <div className="four wide column">
                <div className="ui vertical fluid tabular menu">
                    <FixedSideBar
                        active={active}
                        setActive={setActiveValue}
                        isActive={isActive}
                    />
                </div>
            </div>
            <div class="twelve wide stretched column">
                <div
                    className="ui segment"
                >
                    {renderSegment()}
                </div>
            </div>
        </div>
    );


    return (
        <BasicContainer>
            <Header />
            <div className="ehr-container">{renderSettings()}</div>
        </BasicContainer>
    );
}

const mapStateToProps = (state) => {
    return {
        selectedPatient: state.selectedPatient,
    };
};

export default connect(mapStateToProps)(PatientDetails);