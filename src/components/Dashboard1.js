import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Hiep from "./Hiep";
import InfoHiep from "./InfoHiep";
function Dashboard1() {
    return (
        <Tabs defaultActiveKey="info" id="uncontrolled-tab-example">
            <Tab eventKey="info" title="Thông Tin">
                <InfoHiep />
            </Tab>
            <Tab eventKey="profile" title="Điểm">
                <Hiep />
            </Tab>
        </Tabs>
    );
}
export default Dashboard1;