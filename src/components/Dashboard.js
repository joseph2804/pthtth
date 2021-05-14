import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Duong from "./Duong";
import InfoDuong from "./InfoDuong";
function Dashboard() {
    return (
        <Tabs defaultActiveKey="info" id="uncontrolled-tab-example">
            <Tab eventKey="info" title="Thông Tin">
                <InfoDuong />
            </Tab>
            <Tab eventKey="profile" title="Điểm">
                <Duong />
            </Tab>
        </Tabs>
        
    );
}
export default Dashboard;