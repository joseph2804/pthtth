import { useState, useEffect  } from 'react';
import data from '../../images/cityVN.json';
import axios from 'axios';
function Weather() {
    const [id, setId] = useState(1566083);
    const [temp, setTemp] = useState(0);
    const [humidity, setHumidity] = useState(0);
    const [speed, setSpeed] = useState(0);
    const [visible, setVisible] = useState(0);
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(0);
    const [gust, setGust] = useState(0);
     const [description, setDescription] = useState('');
    var dataWeather;
    useEffect(() => {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?id=${id}&appid=849fc7b6275977172b4ef324e594f067`)
            .then(res => {
                dataWeather = res.data;
                for (let x in dataWeather) {
                    if ( x == 'weather') {
                        setDescription(dataWeather[x][0]['description']);
                    }
                    if( x == 'main') {
                        setTemp((dataWeather[x]['temp'] - 273.15).toFixed(2));
                        setHumidity(dataWeather[x]['humidity']);
                        setMin((dataWeather[x]['temp_min'] - 273.15).toFixed(2));
                        setMax((dataWeather[x]['temp_max'] - 273.15).toFixed(2));
                    }
                    if( x == 'visibility'){
                        setVisible(dataWeather[x]/1000);
                    }
                    if( x == 'wind'){
                        setSpeed(dataWeather[x]['speed']);
                        setGust(dataWeather[x]['gust']);
                    }
                }
            })
    });
    data.sort((x,y) => {
        if(x.name > y.name)
            return 1;
        else return -1;
    });
    let listCityName = data.map((item, index) => {
        return <option key={index} value={item.id}>{item.name}</option>
    })

    return (
        <div>
            <h1>Thông tin thời tiết</h1>
            <div className="row justify-content-center">
                <div className="col-6">
                    <div className="form-group">
                      <label for="">Chọn khu vực</label>
                      <select className="form-control" name="" id="" value={id} onChange={(event) => setId(event.target.value)}>
                        {listCityName}
                      </select>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <div className="form-group">
                      <label for="">Nhiệt độ:</label>
                      <span> {temp}℃</span>
                    </div>
                    <div className="form-group">
                      <label for="">Độ ẩm:</label>
                      <sapn> {humidity}%</sapn>
                    </div>
                    <div className="form-group">
                      <label for="">Nhiệt độ thấp nhất:</label>
                      <sapn> {min}℃</sapn>
                    </div>
                    <div className="form-group">
                      <label for="">Gió giật:</label>
                      <span> {gust} m/s</span>
                    </div>
                </div>
                <div className="col-6">
                    <div className="form-group">
                      <label for="">Tốc độ gió:</label>
                      <span> {speed} m/s</span>
                    </div>
                    <div className="form-group">
                      <label for="">Tầm nhìn:</label>
                      <sapn> {visible} km</sapn>
                    </div>
                    <div className="form-group">
                      <label for="">Nhiệt độ cao nhất:</label>
                      <sapn> {max}℃</sapn>
                    </div>
                    <div className="form-group">
                      <label for="">Nhìn chung:</label>
                      <sapn> {description}</sapn>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Weather;