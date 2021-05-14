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
            <h1 className="text-center mt-5">Thông tin thời tiết</h1>
            <div className="row justify-content-center mt-3">
                <div className="col-3 ">
                    <div className="form-group">
                    <h5 className="text-center">Chọn khu vực</h5>
                      <select className="form-control" name="" id="" value={id} onChange={(event) => setId(event.target.value)}>
                        {listCityName}
                      </select>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center mt-5">
                <div className="col-3">
                    <div className="form-group text-center">
                      <label >Nhiệt độ:</label>
                      <span> {temp}℃</span>
                    </div>
                    <div className="form-group text-center">
                      <label >Độ ẩm:</label>
                      <span> {humidity}%</span>
                    </div>
                    <div className="form-group text-center">
                      <label >Nhiệt độ thấp nhất:</label>
                      <span> {min}℃</span>
                    </div>
                    <div className="form-group text-center">
                      <label >Gió giật:</label>
                      <span> {gust} m/s</span>
                    </div>
                </div>
                <div className="col-3">
                    <div className="form-group text-center">
                      <label >Tốc độ gió:</label>
                      <span> {speed} m/s</span>
                    </div>
                    <div className="form-group text-center">
                      <label >Tầm nhìn:</label>
                      <span> {visible} km</span>
                    </div>
                    <div className="form-group text-center">
                      <label >Nhiệt độ cao nhất:</label>
                      <span> {max}℃</span>
                    </div>
                    <div className="form-group text-center">
                      <label >Nhìn chung:</label>
                      <span> {description}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Weather;