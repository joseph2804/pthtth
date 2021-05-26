import { useEffect, useState } from "react";
import { Redirect, useHistory } from "react-router";

function Login(props) {
    const[code, setCode] = useState('');
    const[pass, setPass] = useState('');
    const[err, setErr] = useState(false);
    const history = useHistory();
    if(props.logined == true) {
        if(props.code == 16033971) {
            history.push('/dashboard');
        }
        if(props.code == 16034681) {
            history.push('/dashboard1');
        }
    }
    function login() {
        if(code == '16033971' && pass == 'duong') {
            history.push('/dashboard');
            props.receiveCode(parseInt(code));
            props.receive(true);
        }
        else if(code == '16034681' && pass == 'occho') {
            history.push('/dashboard1');
            props.receiveCode(parseInt(code));
            props.receive(true);
        }
        else {
            setErr(true);
        }
    }
    return (
        <div className="container mt-5">
            <h1 className="text-center">
                Login
            </h1>
            <div className="row no-gutters justify-content-center">
                <div className="col-3">
                    <div className="form-group">
                      <label >Student Code</label>
                      <input type="text" name="" id="" className="form-control" placeholder="" aria-describedby="helpId" value={code} onChange = {(e) => {setCode(e.target.value); setErr(false)} } />
                      <small id="helpId" className="text-muted"></small>
                    </div>
                    <div className="form-group">
                      <label >Password</label>
                      <input type="password" name="" id="" className="form-control" placeholder="" aria-describedby="helpId" value={pass} onChange = {(e) => {setPass(e.target.value); setErr(false)}} />
                      {err? <small id="helpId" className="text-danger">Sai mssv hoặc mật khẩu</small> : ''}
                    </div>
                    <h1 className="text-center">
                    <button type="button" name="" id="" className="btn btn-primary" onClick = {login} >
                        Login
                    </button>
                    </h1>
                </div>
            </div>
        </div>
    );
}
export default Login;