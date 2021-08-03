import React from 'react';
import ChiefComplaint from '../../Forms/Assessments/ChiefComplaint';
import Examination from '../../Forms/Assessments/Examination';
import History from '../../Forms/Assessments/History';
import Motor from '../../Forms/Assessments/Motor';
import Neuro from '../../Forms/Assessments/Neuro';
import Pain from '../../Forms/Assessments/Pain';
import Pediatric from '../../Forms/Assessments/Pediatric';
import Sensory from '../../Forms/Assessments/Sensory';
import CenteredTabs from "../../Tabs/CenteredTab";
import { useLocation } from 'react-router-dom';
import PaeditricExamination from '../../Forms/Assessments/PaeditricExamination';

function OPD({ open, id }) {
    const location = useLocation();

    console.log(location);
    console.log(id);
    const [activeTab, setActiveTab] = React.useState(0);

    const headingsOPD = [
        "Chief Complaints",
        "History",
        "Pain",
        "Examination",
        "Motor Examination",
        "Sensory Examination",
        "Neuro Examination",
        "Paediatric Examination"
    ];

    const renderSegment = () => {
        if (activeTab === 0) return <ChiefComplaint id={location.state} iid={id} />;
        if (activeTab === 1) return <History id={location.state} iid={id} />;
        if (activeTab === 2) return <Pain id={location.state} iid={id} />;
        if (activeTab === 3) return <Examination id={location.state} iid={id} />;
        if (activeTab === 4) return <Motor id={location.state} iid={id} />;
        if (activeTab === 5) return <Sensory id={location.state} iid={id} />;
        if (activeTab === 6) return <Neuro />;
        if (activeTab === 7) return <PaeditricExamination />;
    }

    const render = () => {
        return (
            <div>
                <CenteredTabs
                    headings={headingsOPD}
                    changeActiveTab={setActiveTab}
                    scrollable
                />

                {renderSegment()}
            </div>
        );
    }
    return (
        open ? render() : null
    );
}


export default OPD;