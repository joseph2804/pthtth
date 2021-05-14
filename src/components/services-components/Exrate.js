import { useState } from 'react';
function Exrate(props) {
    const [exIn, setExIn] = useState(0);
    const [exOut, setExOut] = useState(0);

    let { bankData } = props;
    let listExrate = [];
    let sourceName = '';
    let time = '';
    let listExrateElements = '';
    for (let x in bankData) {
        if (x == 'ExrateList') {
            listExrate = bankData[x]['Exrate'];
            sourceName = bankData[x]['Source'];
            time = bankData[x]['DateTime'];
        }
    }
    listExrateElements = listExrate.map((item, index) => {
        return <tr key={index}>
            <td>{item['CurrencyCode']}</td>
            <td>{item['CurrencyName']}</td>
            <td>{item['Buy']}</td>
            <td>{item['Transfer']}</td>
            <td>{item['Sell']}</td>
        </tr>
    });

    return (
        <div className="row justify-content-center">
            <div className="col-12">
                <h1 className="text-center mt-5 mb-3">Thông tin tỉ giá</h1>
            </div>
            <div className="col-8">
                <div className="row justify-content-center h-400" style={{ maxHeight: '300px' }, { overflowY: 'scroll' }}>
                    <div className="col-8 " >
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Mã</th>
                                    <th>Tên Đồng Tiền</th>
                                    <th>Mua Vào</th>
                                    <th>Chuyển Khoản</th>
                                    <th>Bán Ra</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listExrateElements}
                            </tbody>
                        </table>
                    </div>

                </div>

            </div>
            <div className="col-12 mt-5">
                <h5 className="text-center">
                    Nguồn: {sourceName}
                </h5>
                <h5 className="text-center">
                    Thời Điểm: {time}
                </h5>
            </div>
        </div>
    );
}
export default Exrate;