import React, {Component, useEffect} from 'react';
import axios from 'axios';
import {Button, Navbar, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import '../../../App.css';

const url = "http://ec2-18-224-7-85.us-east-2.compute.amazonaws.com:8080/mungApi";

function OrderSurveyMain({history, match, location}) {

  const id = location.state.id;
  const addr = location.state.addr;
  const phoneNum = location.state.phoneNum;

  const [surveyOneKey, setSurveyOneKey] = React.useState(0);
  const [surveyTwoKey, setSurveyTwoKey] = React.useState(0);
  const [surveyTwoGuitar, setSurveyTwoGuitar] = React.useState("입력해 주세요");

  const [surveyFinish, setSurveyFinish] = React.useState(false);
  const [connectingFinish, setConnectingFinish] = React.useState(false);

  function toCost(num){
      let standard_iphone = 2.164;
      let inner_const = (window.innerWidth/window.innerHeight - 0.462)/0.02;
      let margin = num + inner_const;
      let str = String(margin) + 'vh';
      return str;
  };

  const marginCheck = (num) => {
    return toCost(num);
  };

  function toVW(num){
    let vw = num*2.164;
    let str = String(vw) + 'vw';
    return str;
  };

  const vhTovw = (num) => {
    return toVW(num);
  };

//설문 관련
  //Q1

  function clickSurveyOne(num){
    setSurveyOneKey(num);
  };

  function clickSurveyTwo(num){
    setSurveyTwoKey(num);
  };

  const handleTextSurveyTwoGuitar = (event) => {
    if(event.target.value.length <= 30)
    {
        let val = event.target.value.replace(/\n/g, "");
        setSurveyTwoGuitar(val);
    }
  };


  function clickSurveyTwoGuitar(){
    if (surveyTwoGuitar === "입력해 주세요"){
        setSurveyTwoGuitar("");
    }
  };

  function clickSurveyTwoGuitarBlur(){
    if (surveyTwoGuitar === ""){
        setSurveyTwoGuitar("입력해 주세요");
    }
  };

  //End
  function submitSurvey(){
    if(surveyOneKey === 0){
        alert("설문 1번을 선택해주세요.");
    }
    else if (surveyTwoKey === 0){
        alert("설문 2번을 선택해주세요.");
    }
    else{

        let data = {username: id, q1:surveyOneKey};

        if (surveyTwoKey !== 4) {
            data.q2 = String(surveyTwoKey);
        } else {
            data.q2 = surveyTwoGuitar;
        }


        axios.post(url+"/user/survey2/", {
            params: data
        }).then((response) => {
            console.log(response);
            alert('완료!');
        });
        setSurveyFinish(true);
        setTimeout(() => {
            setConnectingFinish(true);
        }, 2000);
    }
  };

   useEffect(() => {
       window.scrollTo(0, 0);
   }, []);

  return (
        <div>
        { !surveyFinish ? (
            <div style = {{width: '100vw', backgroundColor: '#FFB53F', overflowX: 'hidden', paddingTop: '7vw'}}>
                <div style = {{display:'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <img style = {{width: vhTovw(12.32)}} src= {require('../../../image/OrderSurvey/Asset 128.png').default}/>
                </div>
                <div className = "Q1" style = {{display:'flex', flexDirection: 'column', marginTop: vhTovw(9), alignItems: 'center'}}>
                    <img style = {{width: vhTovw(32.19)}} src= {require('../../../image/OrderSurvey/Asset 85.png').default}/>
                    <div style = {{display: 'flex', flexDirection: 'column', marginTop: vhTovw(3.5), alignItems: 'center', justifyContent: 'center'}}>
                        <Button onClick = {() => {setSurveyOneKey(1)}} style = {{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0)', border: 'none', outline: 'none'}}>
                            <img style = {{width: vhTovw(32)}} src= {(surveyOneKey===1) ? (require('../../../image/OrderSurvey/Asset 96.png').default) : (require('../../../image/OrderSurvey/Asset 86.png').default)}/>
                        </Button>
                    </div>
                    <div style = {{display: 'flex', flexDirection: 'column',marginTop: vhTovw(1), alignItems: 'center', justifyContent: 'center'}}>
                        <Button onClick = {() => {setSurveyOneKey(2)}} style = {{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0)', border: 'none', outline: 'none'}}>
                            <img style = {{width: vhTovw(32)}} src= {(surveyOneKey===2) ? (require('../../../image/OrderSurvey/Asset 97.png').default) : (require('../../../image/OrderSurvey/Asset 87.png').default)}/>
                        </Button>
                    </div>
                    <div style = {{display: 'flex', flexDirection: 'column',marginTop: vhTovw(1), alignItems: 'center', justifyContent: 'center'}}>
                        <Button onClick = {() => {setSurveyOneKey(3)}} style = {{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0)', border: 'none', outline: 'none'}}>
                            <img style = {{width: vhTovw(32)}} src= {(surveyOneKey===3) ? (require('../../../image/OrderSurvey/Asset 98.png').default) : (require('../../../image/OrderSurvey/Asset 88.png').default)}/>
                        </Button>
                    </div>
                    <div style = {{display: 'flex', flexDirection: 'column',marginTop: vhTovw(1), alignItems: 'center', justifyContent: 'center'}}>
                        <Button onClick = {() => {setSurveyOneKey(4)}} style = {{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0)', border: 'none', outline: 'none'}}>
                            <img style = {{width: vhTovw(32)}} src= {(surveyOneKey===4) ? (require('../../../image/OrderSurvey/Asset 89.png').default) : (require('../../../image/OrderSurvey/Asset 99.png').default)}/>
                        </Button>
                    </div>
                </div>
                <div className = "Q2" style = {{display:'flex', flexDirection: 'column',marginTop: '6vh'}}>
                    <div style = {{display:'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <img style = {{width: vhTovw(31.4)}} src= {require('../../../image/OrderSurvey/Asset 90.png').default}/>
                    </div>
                    <div style = {{display: 'flex', flexDirection: 'column', marginTop: vhTovw(3.5), alignItems: 'center', justifyContent: 'center'}}>
                        <Button onClick = {() => {setSurveyTwoKey(1)}} style = {{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0)', border: 'none', outline: 'none'}}>
                            <img style = {{width: vhTovw(32)}} src= {(surveyTwoKey===1) ? (require('../../../image/OrderSurvey/Asset 100.png').default) : (require('../../../image/OrderSurvey/Asset 91.png').default)}/>
                        </Button>
                    </div>
                    <div style = {{display: 'flex', flexDirection: 'column',marginTop: vhTovw(1), alignItems: 'center', justifyContent: 'center'}}>
                        <Button onClick = {() => {setSurveyTwoKey(2)}} style = {{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0)', border: 'none', outline: 'none'}}>
                            <img style = {{width: vhTovw(32)}} src= {(surveyTwoKey===2) ? (require('../../../image/OrderSurvey/Asset 101.png').default) : (require('../../../image/OrderSurvey/Asset 92.png').default)}/>
                        </Button>
                    </div>
                    <div style = {{display: 'flex', flexDirection: 'column',marginTop: vhTovw(1), alignItems: 'center', justifyContent: 'center'}}>
                        <Button onClick = {() => {setSurveyTwoKey(3)}} style = {{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0)', border: 'none', outline: 'none'}}>
                            <img style = {{width: vhTovw(32)}} src= {(surveyTwoKey===3) ? (require('../../../image/OrderSurvey/Asset 102.png').default) : (require('../../../image/OrderSurvey/Asset 93.png').default)}/>
                        </Button>
                    </div>
                    <div style = {{display: 'flex', flexDirection: 'column',marginTop: vhTovw(1), alignItems: 'center', justifyContent: 'center'}}>
                        <Button onClick = {() => {setSurveyTwoKey(4)}} style = {{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0)', border: 'none', outline: 'none'}}>
                            <img style = {{width: vhTovw(32)}} src= {(surveyTwoKey===4) ? (require('../../../image/OrderSurvey/Asset 94.png').default) : (require('../../../image/OrderSurvey/Asset 103.png').default)}/>
                        </Button>
                    </div>
                    { (surveyTwoKey===4) &&
                        <form style = {{position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: vhTovw(1)}}>
                            <div style = {{display: 'flex', flexDirection: 'column', height: vhTovw(5), width: vhTovw(32), backgroundColor: '#FF5C4D', fontSize: vhTovw(2.72), borderRadius: vhTovw(1.26), alignItems: 'center', justifyContent: 'center'}}>
                                <textarea value={surveyTwoGuitar} onChange = {handleTextSurveyTwoGuitar} onClick = {() => {clickSurveyTwoGuitar()}} onBlur = {() => {clickSurveyTwoGuitarBlur()}} style ={{height: vhTovw(3), width: vhTovw(28), backgroundColor: 'rgba(0,0,0,0)', color: 'white', fontSize: vhTovw(1.85), border: 'none', outline: 'none'}} />
                            </div>
                        </form>
                    }
                    <div style= {{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: vhTovw(10)}}>
                        <Button onClick = {() => submitSurvey()} style= {{backgroundColor: 'rgba(0,0,0,0)', border: 'none'}}>
                            <img style= {{width: vhTovw(38.98)}}src= {require('../../../image/BeforeLogin3/Asset 128.png').default}/>
                        </Button>
                        <div style= {{display: 'flex', flexDirection: 'column', height: '3.08vh', backgroundColor: '#FFB53F'}}>
                        </div>
                    </div>
                </div>
            </div>): (!connectingFinish ?
                (
                    <div style= {{width: '100vw', height: '100vh', backgroundColor: '#F7F7F7'}}>
                        <img style= {{width: '100vw'}}src= {require('../../../image/OrderSurvey/Connecting.jpg').default}/>
                    </div>
                ):(
                    <div style= {{width: '100vw', height: '100vh', backgroundColor: '#F7F7F7', display: 'flex', flexDirection: 'column'}}>
                        <div style ={{display: 'flex', flexDirection: 'column', marginTop: '100vw', zIndex: '2', alignItems: 'center', fontSize: '5vw', position: 'absolute', alignSelf: 'center', width: '75vw'}}>
                            주문자 확인을 위해 문자가
                        </div>
                        <div style ={{display: 'flex', flexDirection: 'column', marginTop: '108vw', zIndex: '2', alignItems: 'center', fontSize: '5vw', position: 'absolute', alignSelf: 'center', width: '70vw'}}>
                            전송될 예정입니다.
                        </div>
                        <div style = {{display: 'flex', flexDirection: 'column', zIndex: '1'}}>
                            <img style= {{width: '100vw', position: 'absolute', zIndex: '1'}}src= {require('../../../image/OrderSurvey/Connecting Finish.png').default}/>
                        </div>
                        <div style = {{display: 'flex', flexDirection: 'column', marginTop: '120vw', zIndex: '2', alignItems: 'center'}}>
                            <Button onClick = {() => {history.replace({pathname: '/mypage', state:{id: id, addr:addr, phoneNum: phoneNum}})}} style= {{display: 'flex', flexDirection: 'column', backgroundColor: 'rgba(0,0,0,0)', border: 'none', zIndex: '2', justifyContent: 'center'}}>
                                <img style= {{width: vhTovw(38.98), zIndex: '2'}}src= {require('../../../image/OrderSurvey/Asset 42.png').default}/>
                            </Button>
                            <Button onClick = {() => {history.replace({pathname: '/main', state:{id: id, addr:addr, phoneNum: phoneNum}})}} style= {{display: 'flex', flexDirection: 'column', backgroundColor: 'rgba(0,0,0,0)', border: 'none', zIndex: '2', justifyContent: 'center', marginTop: '1vw'}}>
                                <img style= {{width: vhTovw(38.98), zIndex: '2'}}src= {require('../../../image/OrderSurvey/Asset 43.png').default}/>
                            </Button>
                        </div>
                    </div>
                )
            )
        }
        </div>
  );
}

export default OrderSurveyMain;
