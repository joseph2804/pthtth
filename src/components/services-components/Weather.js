import { useState, useEffect  } from 'react';
import data from '../../images/cityVN.json';
import axios from 'axios';
function Weather() {
    const [id, setId] = useState(1566083);

    useEffect(() => {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?id=${id}&appid=849fc7b6275977172b4ef324e594f067`)
            .then(res => {
                console.log(res.data);
            })
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
                <div className="col-12">

                </div>
            </div>
        </div>
    );
}
export default Weather;