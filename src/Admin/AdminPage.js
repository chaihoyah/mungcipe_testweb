import React, {Component} from 'react';
import axios from 'axios';
import {Button, Navbar, Form, Dropdown,DropdownButton, ButtonGroup} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import '../App.css';

const url = "http://ec2-18-224-7-85.us-east-2.compute.amazonaws.com:8080/mungApi";

var container0 = [], container1 = [], container2 = [], container3 = [];

function AdminPage({history, match, location}) {

  const [listup, setListup] = React.useState(0);
  const [refresh, setRefresh] = React.useState(0);

  const [container0_, setContainer0] = React.useState([]);
  const [container1_, setContainer1] = React.useState([]);
  const [container2_, setContainer2] = React.useState([]);
  const [container3_, setContainer3] = React.useState([]);

  

React.useEffect(()=>{
    let container0 = [];
    let container1 = [];
    let container2 = [];
    let container3 = [];
    axios.get(url+"/admin/order/all/").then((response) => {
        console.log(response);
        let length = response.data.length;
        for (var i = 0; i < length; i++) {
            const data = response.data[i];
            console.log(data);
            if (data.state === 0) { // 승인 대기중
                    const component =
                    <div style={{display:'flex', flexDirection: 'column', width:'96vw', justifyContent: 'center',  backgroundColor: '#F7F7F7', marginRight: '2.0vw', marginLeft: '2.0vw', border: '1px solid silver'}}>
                        <div style={{marginTop: '1.0vh', marginLeft:'2.0vw'}}>
                            <div style = {{display: 'flex', flexDirection: 'column', fontSize: '4.0vw', fontFamily: 'AppleNeoM', color: 'rgb(85,85,85)', marginLeft:'2.0vw'}}>
                                {"레시피: " + data.recipe_name}
                            </div>
                            <div style = {{display: 'flex', flexDirection: 'column', fontSize: '4.0vw', fontFamily: 'AppleNeoM', color: 'rgb(85,85,85)', marginLeft:'2.0vw'}}>
                                {"사용자: " + data.user_name}
                            </div>
                            <div style = {{display: 'flex', flexDirection: 'column', fontSize: '4.0vw', fontFamily: 'AppleNeoM', color: 'rgb(85,85,85)', marginLeft:'2.0vw'}}>
                                {"휴대폰: " + data.phone}
                            </div>
                            <div style = {{display: 'flex', flexDirection: 'column', fontSize: '4.0vw', fontFamily: 'AppleNeoM', color: 'rgb(85,85,85)', marginLeft:'2.0vw'}}>
                                {"주소지: " + data.address}
                            </div>
                        </div>
                        <div style={{marginBottom: '1.0vh', marginRight:'2.0vw'}}>
                            <div style = {{display: 'flex',flexDirection: 'column', justifyContent: 'center', marginLeft: '5vw', justifyContent: 'flex-end', alignItems: 'flex-end', marginBottom: '1.0vh'}}>
                                <Button style={{backgroundColor: 'rgb(240,190,0)', border: 'none', color: 'rgb(0,0,0)', width: '20vw', height: '10vw', fontSize: '3vw'}} onClick={() => {deleteOrder(data.idx)}}> {"주문취소"}
                                </Button>
                            </div>
                            <div style = {{display: 'flex',flexDirection: 'column', justifyContent: 'center', marginLeft: '5vw', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                                <Button style={{backgroundColor: 'rgb(240,190,0)', border: 'none', color: 'rgb(0,0,0)', width: '20vw', height: '10vw', fontSize: '3vw'}} onClick={() => {changeOrder(data.idx, 1)}}> {"승인하기"}
                                </Button>
                            </div>
                        </div>
                    </div>;
                    container0.push(component);
                    console.log(container0);
            } else if (data.state === 1) { // 제작중
                    const component =
                    <div style={{display:'flex', flexDirection: 'column', width:'96vw', justifyContent: 'center',  backgroundColor: '#F7F7F7', marginRight: '2.0vw', marginLeft: '2.0vw', border: '1px solid silver'}}>
                        <div style={{marginTop: '1.0vh', marginLeft:'2.0vw'}}>
                            <div style = {{display: 'flex', flexDirection: 'column', fontSize: '4.0vw', fontFamily: 'AppleNeoM', color: 'rgb(85,85,85)', marginLeft:'2.0vw'}}>
                                {"레시피: " + data.recipe_name}
                            </div>
                            <div style = {{display: 'flex', flexDirection: 'column', fontSize: '4.0vw', fontFamily: 'AppleNeoM', color: 'rgb(85,85,85)', marginLeft:'2.0vw'}}>
                                {"사용자: " + data.user_name}
                            </div>
                            <div style = {{display: 'flex', flexDirection: 'column', fontSize: '4.0vw', fontFamily: 'AppleNeoM', color: 'rgb(85,85,85)', marginLeft:'2.0vw'}}>
                                {"휴대폰: " + data.phone}
                            </div>
                            <div style = {{display: 'flex', flexDirection: 'column', fontSize: '4.0vw', fontFamily: 'AppleNeoM', color: 'rgb(85,85,85)', marginLeft:'2.0vw'}}>
                                {"주소지: " + data.address}
                            </div>
                        </div>
                        <div style={{marginBottom: '1.0vh', marginRight:'2.0vw'}}>
                            <div style = {{display: 'flex',flexDirection: 'column', justifyContent: 'center', marginLeft: '5vw', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                                <Button style={{backgroundColor: 'rgb(240,190,0)', border: 'none', color: 'rgb(0,0,0)', width: '20vw', height: '10vw', fontSize: '3vw'}} onClick={() => {changeOrder(data.idx, 2)}}> {"배송하기"}
                                </Button>
                            </div>
                        </div>
                    </div>;
                    container1.push(component);
                    console.log(container1_);
                } else if (data.state === 2) { // 배송중
                    const component =
                    <div style={{display:'flex', flexDirection: 'column', width:'96vw', justifyContent: 'center',  backgroundColor: '#F7F7F7', marginRight: '2.0vw', marginLeft: '2.0vw', border: '1px solid silver'}}>
                        <div style={{marginTop: '1.0vh', marginLeft:'2.0vw'}}>
                            <div style = {{display: 'flex', flexDirection: 'column', fontSize: '4.0vw', fontFamily: 'AppleNeoM', color: 'rgb(85,85,85)', marginLeft:'2.0vw'}}>
                                {"레시피: " + data.recipe_name}
                            </div>
                            <div style = {{display: 'flex', flexDirection: 'column', fontSize: '4.0vw', fontFamily: 'AppleNeoM', color: 'rgb(85,85,85)', marginLeft:'2.0vw'}}>
                                {"사용자: " + data.user_name}
                            </div>
                            <div style = {{display: 'flex', flexDirection: 'column', fontSize: '4.0vw', fontFamily: 'AppleNeoM', color: 'rgb(85,85,85)', marginLeft:'2.0vw'}}>
                                {"휴대폰: " + data.phone}
                            </div>
                            <div style = {{display: 'flex', flexDirection: 'column', fontSize: '4.0vw', fontFamily: 'AppleNeoM', color: 'rgb(85,85,85)', marginLeft:'2.0vw'}}>
                                {"주소지: " + data.address}
                            </div>
                        </div>
                        <div style={{marginBottom: '1.0vh', marginRight:'2.0vw'}}>
                            <div style = {{display: 'flex',flexDirection: 'column', justifyContent: 'center', marginLeft: '5vw', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                                <Button style={{backgroundColor: 'rgb(240,190,0)', border: 'none', color: 'rgb(0,0,0)', width: '20vw', height: '10vw', fontSize: '3vw'}} onClick={() => {changeOrder(data.idx, 3)}}> {"배송완료"}
                                </Button>
                            </div>
                        </div>
                    </div>;
                    container2.push(component);
                    console.log(container2_);
                } else if (data.state === 3) { // 배송완료
                    const component =
                    <div style={{display:'flex', flexDirection: 'column', width:'96vw', justifyContent: 'center',  backgroundColor: '#F7F7F7', marginRight: '2.0vw', marginLeft: '2.0vw', border: '1px solid silver'}}>
                        <div style={{marginTop: '1.0vh', marginLeft:'2.0vw'}}>
                            <div style = {{display: 'flex', flexDirection: 'column', fontSize: '4.0vw', fontFamily: 'AppleNeoM', color: 'rgb(85,85,85)', marginLeft:'2.0vw'}}>
                                {"레시피: " + data.recipe_name}
                            </div>
                            <div style = {{display: 'flex', flexDirection: 'column', fontSize: '4.0vw', fontFamily: 'AppleNeoM', color: 'rgb(85,85,85)', marginLeft:'2.0vw'}}>
                                {"사용자: " + data.user_name}
                            </div>
                            <div style = {{display: 'flex', flexDirection: 'column', fontSize: '4.0vw', fontFamily: 'AppleNeoM', color: 'rgb(85,85,85)', marginLeft:'2.0vw'}}>
                                {"휴대폰: " + data.phone}
                            </div>
                            <div style = {{display: 'flex', flexDirection: 'column', fontSize: '4.0vw', fontFamily: 'AppleNeoM', color: 'rgb(85,85,85)', marginLeft:'2.0vw'}}>
                                {"주소지: " + data.address}
                            </div>
                        </div>
                    </div>;
                    container3.push(component);
                    console.log(container3_);
                }
        }
        setContainer0(container0);
        setContainer1(container1);
        setContainer2(container2);
        setContainer3(container3);
    });
  },[listup]);


  //End
  function deleteOrder(idx, container){
    axios.get(url+"/admin/order/delete/", {
        params: {
            idx: idx
        }
    }).then((response) => {
        console.log(response);
        alert('완료!');
        setListup(listup + 1);
    });
  }

  function changeOrder(idx, state){
    axios.get(url+"/admin/order/set/", {
        params: {
            idx: idx,
            state: state
        }
    }).then((response) => {
        console.log(response);
        alert('완료!');
        setListup(listup + 1);
    });
  }
  console.log(container0);

  return (
        <div>
            <div>
                <h1>Admin page</h1>
            </div>
            <div id="container0">
                <div style = {{display: 'flex', flexDirection: 'column', fontSize: '6vw', fontFamily: 'AppleNeoM', color: 'rgb(85,85,85)'}}>
                    {"승인 대기중"}
                </div>
                <hr style = {{height: '0.5vw', backgroundColor: 'black', width: '84.5vw'}}/>
                <div>
                    {container0_}
                </div>
            </div>
            <div id="container1">
                <div style = {{display: 'flex', flexDirection: 'column', fontSize: '6vw', fontFamily: 'AppleNeoM', color: 'rgb(85,85,85)'}}>
                    {"제작중"}
                </div>
                <hr style = {{height: '0.5vw', backgroundColor: 'black', width: '84.5vw'}}/>
                <div>
                    {container1_}
                </div>
            </div>
            <div id="container2">
                <div style = {{display: 'flex', flexDirection: 'column', fontSize: '6vw', fontFamily: 'AppleNeoM', color: 'rgb(85,85,85)'}}> 
                    {"배송중"}
                </div>
                <hr style = {{height: '0.5vw', backgroundColor: 'black', width: '84.5vw'}}/>
                <div>
                    {container2_}
                </div>
            </div>
            <div id="container3">
                <div style = {{display: 'flex', flexDirection: 'column', fontSize: '6vw', fontFamily: 'AppleNeoM', color: 'rgb(85,85,85)'}}>
                    {"완료된 주문"}
                </div>
                <hr style = {{height: '0.5vw', backgroundColor: 'black', width: '84.5vw'}}/>
                <div>
                    {container3_}
                </div>
            </div>
        </div>
  );
}

export default AdminPage;