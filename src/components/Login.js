import { useEffect, useState } from "react";
import { Redirect, useHistory } from "react-router";

function Login() {
    const[code, setCode] = useState('');
    const[pass, setPass] = useState('');
    const history = useHistory();
    function login() {
        if(code == '16033971' && pass == 'duong') {
             history.push('/dashboard');
        }
    }
    return (
        <div className="container">
            <h1 className="text-center">
                Login
            </h1>
            <div className="row no-gutters justify-content-center">
                <div className="col-3">
                    <div className="form-group">
                      <label >Student Code</label>
                      <input type="text" name="" id="" className="form-control" placeholder="" aria-describedby="helpId" value={code} onChange = {(e) => {setCode(e.target.value)}}/>
                      <small id="helpId" className="text-muted"></small>
                    </div>
                    <div className="form-group">
                      <label >Password</label>
                      <input type="password" name="" id="" className="form-control" placeholder="" aria-describedby="helpId" value={pass} onChange = {(e) => {setPass(e.target.value)}}/>
                      <small id="helpId" className="text-muted"></small>
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