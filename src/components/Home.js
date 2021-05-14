
import { Component } from 'react';
import Exrate from "./services-components/Exrate";
import axios from 'axios';
import Weather from './services-components/Weather';
import Football from './services-components/Football';
import { Tab } from 'bootstrap';
import { Tabs } from 'react-bootstrap';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNetwork: true,
            bankData: null
        }
    }
    componentDidMount = () => {
        if (navigator.onLine) {
            this.setState({
                isNetwork: true
            })
            this.fetchData();
        } else {
            this.setState({
                isNetwork: false
            })
        }

    }

    fetchData = () => {
        let config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        axios.get(`https://api.factmaven.com/xml-to-json?xml=https://portal.vietcombank.com.vn/Usercontrols/TVPortal.TyGia/pXML.aspx?b=1`, config)
            .then(res => {
                localStorage.setItem('bank', JSON.stringify(res.data));
                this.setState({
                    bankData: res.data
                })
            })
    }

    render() {
        return (

            <div className="container">
                <Tabs defaultActiveKey="exchange" id="uncontrolled-tab-example">
                    <Tab eventKey="exchange" title="Tỉ giá">
                        <Exrate bankData = {this.state.bankData}/>
                    </Tab>
                    <Tab eventKey="weather" title="Thời tiết">
                        <Weather />
                    </Tab>
                    <Tab eventKey="football" title="Bóng đá">
                        <Football />
                    </Tab>
                </Tabs>

            </div>
        );
    }

}
export default Home;