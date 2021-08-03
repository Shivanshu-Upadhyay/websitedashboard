import React from 'react';
import Upcoming from './Upcoming';
import Previous from './Previous';
import CenteredTabs from "../../Tabs/CenteredTab";

function DailyRegister({ open, id }) {

    const [activeTab, setActiveTab] = React.useState(0);

    const headingsIntervention = [
        "Upcoming Appointments",
        "Previous Appointments",
    ];

    const renderSegment = () => {
        if (activeTab === 0) return <Upcoming id={id} />;
        if (activeTab === 1) return <Previous id={id} />;
    }

    const render = () => (
        <div>
            <CenteredTabs
                headings={headingsIntervention}
                changeActiveTab={setActiveTab}
            />
            {renderSegment()}

        </div>
    );

    return (
        open ? render() : null
    );
}

export default DailyRegister;