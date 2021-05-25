import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Hiep from "./Hiep";
import InfoHiep from "./InfoHiep";
import { useHistory } from 'react-router';
function Dashboard1(props) {
    const history = useHistory();
    if(!props.logined || props.code != 16034681){
        history.push('/login');
    }
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