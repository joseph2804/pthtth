
import {Component} from 'react';
import Exrate from "./services-components/Exrate";
import axios from 'axios';
import Weather from './services-components/Weather';

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
            <div className="container pt-5">
                <div className="row no-gutter">
                    <div className="col-6 text-center">
                        <Exrate bankData = {this.state.bankData}/>
                    </div>
                    <div className="col-6 text-center">
                        <Weather/>
                </div>
                    <div className="col-6 text-center">
                        Football
                </div>
                    <div className="col-6 text-center">
                        Chat box
                </div>
                </div>

            </div>

        );
    }

}
export default Home;