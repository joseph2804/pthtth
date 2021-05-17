import { useState, useEffect } from 'react';
import data from '../../images/competitions.json';
import axios from 'axios';
function Football() {

    const [id, setId] = useState('PL');
    const [listMatches, setMatches] = useState([]);

    let dateFrom = new Date();
    dateFrom.setDate(dateFrom.getDate() - 7);
    let dateTo = new Date();
    dateTo.setDate(dateTo.getDate() + 13);
    let dateStringFrom = dateFrom.toISOString().split('T')[0];
    let dateStringTo = dateTo.toISOString().split('T')[0];
    let dataFootball;
    
    var listResultElements;
    useEffect(() => {
        axios.get(`http://localhost:61320/api/home/resultFootball?id=${id}&dateFrom=${dateStringFrom}&dateTo=${dateStringTo}`)
            .then(res => {
                dataFootball = res.data;
                for (let x in dataFootball) {
                    if (x == 'matches') {
                        setMatches(dataFootball[x]);
                    }
                }
            })
    },[id]);

    data.sort((a, b) => {
        if (a.name > b.name)
            return 1;
        else return -1;
    })

    let listCompetitionsName = data.map((item, index) => {
        return <option key={index} value={item.code}> {item.name == 'Primera Division' ? 'Laliga' : item.name}</option>
    })

    listResultElements = listMatches.map((item, index) => {
        return <tr key={index}>
             <td>{item.homeTeam.name}</td>
             <td>{item.score.fullTime.homeTeam} - {item.score.fullTime.awayTeam}</td>
             <td>{item.awayTeam.name}</td>
             <td>{item.utcDate} </td>
             <td>{id == 'CL'?item.stage: item.season.currentMatchday}</td>
         </tr>
    })

    return (
        <div>
            <h1 className="text-center mt-3">Kết quả bóng đá và lịch thi đấu</h1>
            <div className="row justify-content-center">
                <div className="col-3">
                    <div className="form-group">
                        <h5 className="text-center mt-3">Chọn giải đấu</h5>
                        <select className="form-control" name="" id="" value={id} onChange={(event) => setId(event.target.value)}>
                            {listCompetitionsName}
                        </select>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center h-400" style={{ maxHeight: '400px' }, { overflowY: 'scroll' }}>
                <div className="col-8 " >
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Đội chủ nhà </th>
                                <th>Tỉ Số</th>
                                <th>Đội khách</th>
                                <th>Thời Gian (UTC)</th>
                                <th>{id == 'CL'?'Trận': 'Vòng' }</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listResultElements}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
export default Football;