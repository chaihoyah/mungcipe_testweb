import React, {Component} from 'react';
import { Navbar, Nav, Form, FormControl, Button, Dropdown, Table, Tabs, Tab, Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function LoginMain({history, match, location}) {

  const [id, setId] = React.useState("");
  const [addr, setAddr] = React.useState("");
  const [phoneNum, setPhoneNum] = React.useState("");

  const handleTextChangeID = (event) => {
    setId(event.target.value);
  };

  const handleTextChangePhoneNum = (event) => {
    setPhoneNum(event.target.value);
  };

  const handleTextChangeAddr = (event) => {
    setAddr(event.target.value);
  };


  return (
    <div className="Login">
        <div className="TopNav" style={{ width:'100%'}}>
            <Navbar fixed='top' style={{display:'flex', flexDirection: 'column', width:'100%',backgroundColor: 'silver',justifyContent:'space-between', alignItemns: 'center'}}>
                <div style={{fontWeight: 'bold', fontSize: '6vw', alignItemns: 'center'}}>
                멍뭉시피
                </div>
            </Navbar>
        </div>
        <div>
           <div style={{display:'flex', flexDirection:'column', fontWeight: 'bold', fontSize: '6vw', alignItemns: 'center', marginTop: '15%'}}>
                이름:
           </div>
            <form>
                <label>
                    <textarea value={id} onChange = {handleTextChangeID} style ={{height: '2rem', width:'22rem'}} />
                </label>
            </form>
        </div>
        <br></br>
        <div>
           <div style={{display:'flex', flexDirection:'column', fontWeight: 'bold', fontSize: '6vw', alignItemns: 'center'}}>
                전화번호:
           </div>
            <form>
                <label>
                    <textarea value={phoneNum} onChange = {handleTextChangePhoneNum} style ={{height: '2rem', width:'22rem'}} />
                </label>
            </form>
        </div>
        <br></br>
        <div>
           <div style={{display:'flex', flexDirection:'column', fontWeight: 'bold', fontSize: '6vw', alignItemns: 'center'}}>
                주소:
           </div>
            <form>
                <label>
                    <textarea value={addr} onChange = {handleTextChangeAddr} style ={{height: '4rem', width:'22rem'}} />
                </label>
            </form>
        </div>
        <div style={{display:'flex', flexDirection:'column', fontWeight: 'bold', fontSize: '6vw', alignItemns: 'center'}}>
            <Button href= '/' style={{backgroundColor: 'red', borderColor: 'red', borderRadius: 5, marginLeft: '5px'}}>로그인</Button>{' '}
        </div>
    </div>
  );
}

export default LoginMain;
