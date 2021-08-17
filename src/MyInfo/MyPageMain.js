import React, {Component} from 'react';
import axios from 'axios';
import { Navbar, Nav, Form, FormControl, Button, Dropdown, Table, Tabs, Tab, Modal} from 'react-bootstrap';
import Order from './Component/Order';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const url = "http://ec2-18-224-7-85.us-east-2.compute.amazonaws.com:8080/mungApi";

function MyPageMain({history, match, location}) {
  const [isOrderInfo, setIsOrderInfo] = React.useState(true);
  const [key, setKey] = React.useState(0);
  const [ischangeShow, setIschangeShow] = React.useState(false);
  const [ischangeInfo, setIschangeInfo] = React.useState(false);
  const [id, setId] = React.useState(location.state.id);
  const [addr, setAddr] = React.useState(location.state.addr);
  //const [addr2, setAddr2] = React.useState("");
//   if (location.state.addr){
//     if(location.state.addr.length > 20){
//         setAddr(location.state.addr.slice(0,20));
//         setAddr2(location.state.addr.slice(20, ));
//       }
//       else{
//         setAddr(location.state.addr);
//       }
//   }

//   console.log(location.state);
  const [phoneNum, setPhoneNum] = React.useState(location.state.phoneNum);
  const [textFormtwo, setTextFormtwo] = React.useState(phoneNum);
  const [textFormthree, setTextFormthree] = React.useState(addr);
  const [infomation, setInfomation] = React.useState();
  const [orderBack, setOrderBack] = React.useState('rgba(255, 92, 77, 1)');
  const [orderText, setOrderText] = React.useState('rgba(255, 255, 255, 1)');
  const [userBack, setUserBack] = React.useState('rgba(255, 211, 207, 1)');
  const [userText, setUserText] = React.useState('rgba(29, 29, 29, 1)');
  const [now, setNow] = React.useState([]);
  const [last, setLast] =React.useState([]);
  const [forReload, setForReload] = React.useState(-1);
  const [forDeleteIdx, setForDeleteIdx] = React.useState(-1);
  var recipeInfo = '김밥';

  //var now = [];
  //var last = [];
  function toVW(num){
    let vw = num*2.164;
    let str = String(vw) + 'vw';
    return str;
  };

  const vhTovw = (num) => {
    return toVW(num);
  };

  let deleteOrder = (orderIdx) => {
    axios.get(url+"/user/order/delete/", {
        params: {
            idx: orderIdx
        }
    }).then((response) => {
        console.log(response);
        alert('주문이 취소되었습니다!');

        //reload
        setForReload(-1);
    });
  }


  React.useEffect(()=>{
      if (forReload !== -1){
        deleteOrder(forReload);
      }
  },[forDeleteIdx, forReload]);


  
  console.log(key);
    React.useEffect(()=>{
      //window.scrollTo(0, 0);
      if(key === 0)
      {
          console.log("key = 0");
          console.log(location.state.id);
        axios.get(url+"/user/get_order/", {
          params: {
            name: location.state.id
          }
        }).then((response) => {
            console.log(response);
            let length = response.data.length;
            let now_let = [];
            let last_let = [];
            for (var i = 0; i < length; i++) {
              const data = response.data[i];
              let date = data.time.split(' ')[0];
              if (data.state > 2) {
                  let recipe_name = data.recipe_name;
                  const component
                      = <div className="Pastorder">
                      {
                      {
                          계란죽: <div style={{display:'flex', flexDirection: 'column', width:'100vw', justifyContent: 'center', height: '41vw', backgroundColor: '#F7F7F7', alignItems: 'center'}}>
                                      <img  src= {require('../image/Myinfo/Orderinfo/Asset 63.png').default} style = {{width: '97.01vw', position: 'absolute', zIndex: '1'}}/>
                                      <div style = {{display: 'flex', flexDirection: 'row', zIndex: '2', marginLeft: '32vw', width: '53vw', zIndex: '2'}}>
                                          <div style = {{display: 'flex', flexDirection: 'column', width: '56%'}}>
                                              <div style = {{display: 'flex', flexDirection: 'column',fontSize: '1.71vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.5)', marginTop: '1vw'}}>
                                                  {"몸에 좋고 맛있는 강아지용 계란죽!"}
                                              </div>
                                              <div style = {{display: 'flex', flexDirection: 'column', fontSize: '5.3vw', fontFamily: 'AppleNeoM', color: 'rgb(85,85,85)'}}>
                                                  {"계란죽"}
                                              </div>
                                              <div style = {{display: 'flex', flexDirection: 'column', fontSize: '2.65vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.45)'}}>
                                                  {"Puppy\'s Egg Rice Gruel"}
                                              </div>
                                              <div style = {{display: 'flex', flexDirection: 'column', fontSize: '2.65vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.54)', marginTop: '5vw'}}>
                                                  {date}
                                              </div>
                                          </div>
                                          <div style = {{display: 'flex',flexDirection: 'column', height: '23vw', justifyContent: 'center', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                                              <Button style={{display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0)', border: 'none'}} onClick={() => {history.push({pathname: '/inrecipe/order', state:{id: id, phoneNum: phoneNum, addr: addr, recipeKey: 0}})}}>
                                                  <img  src= {require('../image/Myinfo/Orderinfo/Asset 14.png').default} style = {{width: '17.1vw'}}/>
                                              </Button>
                                          </div>
                                      </div>
                                  </div>
                                  ,
                          치즈볼: <div style={{display:'flex', flexDirection: 'column', width:'100vw', justifyContent: 'center', height: '41vw', backgroundColor: '#F7F7F7', alignItems: 'center'}}>
                                      <img  src= {require('../image/Myinfo/Orderinfo/Asset 65.png').default} style = {{width: '97.01vw', position: 'absolute', zIndex: '1'}}/>
                                      <div style = {{display: 'flex', flexDirection: 'row', zIndex: '2', marginLeft: '32vw', width: '53vw', zIndex: '2'}}>
                                          <div style = {{display: 'flex', flexDirection: 'column', width: '56%'}}>
                                              <div style = {{display: 'flex', flexDirection: 'column',fontSize: '1.71vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.5)', marginTop: '1vw'}}>
                                                  {"몸에 좋고 맛있는 강아지용 치즈볼 간식!"}
                                              </div>
                                              <div style = {{display: 'flex', flexDirection: 'column', fontSize: '5.3vw', fontFamily: 'AppleNeoM', color: 'rgb(85,85,85)'}}>
                                                  {"치즈볼"}
                                              </div>
                                              <div style = {{display: 'flex', flexDirection: 'column', fontSize: '2.65vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.45)'}}>
                                                  {"Puppy\'s Cheeseball"}
                                              </div>
                                              <div style = {{display: 'flex', flexDirection: 'column', fontSize: '2.65vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.54)', marginTop: '5vw'}}>
                                                  {date}
                                              </div>
                                          </div>
                                          <div style = {{display: 'flex',flexDirection: 'column', height: '23vw', justifyContent: 'center', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                                              <Button style={{display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0)', border: 'none'}} onClick={() => {history.push({pathname: '/inrecipe/order', state:{id: id, phoneNum: phoneNum, addr: addr, recipeKey: 1}})}}>
                                                  <img  src= {require('../image/Myinfo/Orderinfo/Asset 14.png').default} style = {{width: '17.1vw'}}/>
                                              </Button>
                                          </div>
                                      </div>
                                  </div>
                                  ,
                          소고기무국: <div style={{display:'flex', flexDirection: 'column', width:'100vw', justifyContent: 'center', height: '41vw', backgroundColor: '#F7F7F7', alignItems: 'center'}}>
                                      <img  src= {require('../image/Myinfo/Orderinfo/Asset 71.png').default} style = {{width: '97.01vw', position: 'absolute', zIndex: '1'}}/>
                                      <div style = {{display: 'flex', flexDirection: 'row', zIndex: '2', marginLeft: '32vw', width: '53vw', zIndex: '2'}}>
                                          <div style = {{display: 'flex', flexDirection: 'column', width: '56%'}}>
                                              <div style = {{display: 'flex', flexDirection: 'column',fontSize: '1.71vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.5)', marginTop: '1vw'}}>
                                                  {"몸에 좋고 맛있는 강아지용 소고기무국!"}
                                              </div>
                                              <div style = {{display: 'flex', flexDirection: 'column', fontSize: '5.3vw', fontFamily: 'AppleNeoM', color: 'rgb(85,85,85)'}}>
                                                  {"소고기무국"}
                                              </div>
                                              <div style = {{display: 'flex', flexDirection: 'column', fontSize: '2.65vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.45)'}}>
                                                  {"Puppy's Soup"}
                                              </div>
                                              <div style = {{display: 'flex', flexDirection: 'column', fontSize: '2.65vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.54)', marginTop: '5vw'}}>
                                                  {date}
                                              </div>
                                          </div>
                                          <div style = {{display: 'flex',flexDirection: 'column', height: '23vw', justifyContent: 'center', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                                              <Button style={{display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0)', border: 'none'}} onClick={() => {history.push({pathname: '/inrecipe/order', state:{id: id, phoneNum: phoneNum, addr: addr, recipeKey: 2}})}}>
                                                  <img  src= {require('../image/Myinfo/Orderinfo/Asset 14.png').default} style = {{width: '17.1vw'}}/>
                                              </Button>
                                          </div>
                                      </div>
                                  </div>
                                  ,
                          계란찜: <div style={{display:'flex', flexDirection: 'column', width:'100vw', justifyContent: 'center', height: '41vw', backgroundColor: '#F7F7F7', alignItems: 'center'}}>
                                      <img  src= {require('../image/Myinfo/Orderinfo/Asset 73.png').default} style = {{width: '97.01vw', position: 'absolute', zIndex: '1'}}/>
                                      <div style = {{display: 'flex', flexDirection: 'row', zIndex: '2', marginLeft: '32vw', width: '53vw', zIndex: '2'}}>
                                          <div style = {{display: 'flex', flexDirection: 'column', width: '56%'}}>
                                              <div style = {{display: 'flex', flexDirection: 'column',fontSize: '1.71vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.5)', marginTop: '1vw'}}>
                                                  {"몸에 좋고 맛있는 강아지용 계란찜!"}
                                              </div>
                                              <div style = {{display: 'flex', flexDirection: 'column', fontSize: '5.3vw', fontFamily: 'AppleNeoM', color: 'rgb(85,85,85)'}}>
                                                  {"계란찜"}
                                              </div>
                                              <div style = {{display: 'flex', flexDirection: 'column', fontSize: '2.65vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.45)'}}>
                                                  {"Puppy\'s Steamed Eggs"}
                                              </div>
                                              <div style = {{display: 'flex', flexDirection: 'column', fontSize: '2.65vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.54)', marginTop: '5vw'}}>
                                                  {date}
                                              </div>
                                          </div>
                                          <div style = {{display: 'flex',flexDirection: 'column', height: '23vw', justifyContent: 'center', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                                              <Button style={{display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0)', border: 'none'}} onClick={() => {history.push({pathname: '/inrecipe/order', state:{id: id, phoneNum: phoneNum, addr: addr, recipeKey: 3}})}}>
                                                  <img  src= {require('../image/Myinfo/Orderinfo/Asset 14.png').default} style = {{width: '17.1vw'}}/>
                                              </Button>
                                          </div>
                                      </div>
                                  </div>
                                  ,
                          리코타치즈: <div style={{display:'flex', flexDirection: 'column', width:'100vw', justifyContent: 'center', height: '41vw', backgroundColor: '#F7F7F7', alignItems: 'center'}}>
                                      <img  src= {require('../image/Myinfo/Orderinfo/Asset 75.png').default} style = {{width: '97.01vw', position: 'absolute', zIndex: '1'}}/>
                                      <div style = {{display: 'flex', flexDirection: 'row', zIndex: '2', marginLeft: '32vw', width: '53vw', zIndex: '2'}}>
                                          <div style = {{display: 'flex', flexDirection: 'column', width: '56%'}}>
                                              <div style = {{display: 'flex', flexDirection: 'column',fontSize: '1.71vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.5)', marginTop: '1vw'}}>
                                                  {"몸에 좋고 맛있는 강아지용 치즈 간식!"}
                                              </div>
                                              <div style = {{display: 'flex', flexDirection: 'column', fontSize: '5.3vw', fontFamily: 'AppleNeoM', color: 'rgb(85,85,85)'}}>
                                                  {"리코타치즈"}
                                              </div>
                                              <div style = {{display: 'flex', flexDirection: 'column', fontSize: '2.65vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.45)'}}>
                                                  {"Puppy\'s Ricotta cheese"}
                                              </div>
                                              <div style = {{display: 'flex', flexDirection: 'column', fontSize: '2.65vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.54)', marginTop: '5vw'}}>
                                                  {date}
                                              </div>
                                          </div>
                                          <div style = {{display: 'flex',flexDirection: 'column', height: '23vw', justifyContent: 'center', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                                              <Button style={{display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0)', border: 'none'}} onClick={() => {history.push({pathname: '/inrecipe/order', state:{id: id, phoneNum: phoneNum, addr: addr, recipeKey: 4}})}}>
                                                  <img  src= {require('../image/Myinfo/Orderinfo/Asset 14.png').default} style = {{width: '17.1vw'}}/>
                                              </Button>
                                          </div>
                                      </div>
                                  </div>
                                  ,
                          소시지: <div style={{display:'flex', flexDirection: 'column', width:'100vw', justifyContent: 'center', height: '41vw', backgroundColor: '#F7F7F7', alignItems: 'center'}}>
                                      <img  src= {require('../image/Myinfo/Orderinfo/Asset 77.png').default} style = {{width: '97.01vw', position: 'absolute', zIndex: '1'}}/>
                                      <div style = {{display: 'flex', flexDirection: 'row', zIndex: '2', marginLeft: '32vw', width: '53vw', zIndex: '2'}}>
                                          <div style = {{display: 'flex', flexDirection: 'column', width: '56%'}}>
                                              <div style = {{display: 'flex', flexDirection: 'column',fontSize: '1.71vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.5)', marginTop: '1vw'}}>
                                                  {"몸에 좋고 맛있는 강아지용 소시지 간식!"}
                                              </div>
                                              <div style = {{display: 'flex', flexDirection: 'column', fontSize: '5.3vw', fontFamily: 'AppleNeoM', color: 'rgb(85,85,85)'}}>
                                                  {"소시지"}
                                              </div>
                                              <div style = {{display: 'flex', flexDirection: 'column', fontSize: '2.65vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.45)'}}>
                                                  {"Puppy\'s Sausage"}
                                              </div>
                                              <div style = {{display: 'flex', flexDirection: 'column', fontSize: '2.65vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.54)', marginTop: '5vw'}}>
                                                  {date}
                                              </div>
                                          </div>
                                          <div style = {{display: 'flex',flexDirection: 'column', height: '23vw', justifyContent: 'center', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                                              <Button style={{display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0)', border: 'none'}} onClick={() => {history.push({pathname: '/inrecipe/order', state:{id: id, phoneNum: phoneNum, addr: addr, recipeKey: 5}})}}>
                                                  <img  src= {require('../image/Myinfo/Orderinfo/Asset 14.png').default} style = {{width: '17.1vw'}}/>
                                              </Button>
                                          </div>
                                      </div>
                                  </div>
                                  ,
                          아이스크림: <div style={{display:'flex', flexDirection: 'column', width:'100vw', justifyContent: 'center', height: '41vw', backgroundColor: '#F7F7F7', alignItems: 'center'}}>
                                      <img  src= {require('../image/Myinfo/Orderinfo/Asset 79.png').default} style = {{width: '97.01vw', position: 'absolute', zIndex: '1'}}/>
                                      <div style = {{display: 'flex', flexDirection: 'row', zIndex: '2', marginLeft: '32vw', width: '53vw', zIndex: '2'}}>
                                          <div style = {{display: 'flex', flexDirection: 'column', width: '56%'}}>
                                              <div style = {{display: 'flex', flexDirection: 'column',fontSize: '1.71vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.5)', marginTop: '1vw'}}>
                                                  {"몸에 좋고 맛있는 강아지용 아이스크림 간식!"}
                                              </div>
                                              <div style = {{display: 'flex', flexDirection: 'column', fontSize: '5.3vw', fontFamily: 'AppleNeoM', color: 'rgb(85,85,85)'}}>
                                                  {"단호박 푸딩 아이스크림"}
                                              </div>
                                              <div style = {{display: 'flex', flexDirection: 'column', fontSize: '2.65vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.45)'}}>
                                                  {"Puppy\'s Icecream"}
                                              </div>
                                              <div style = {{display: 'flex', flexDirection: 'column', fontSize: '2.65vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.54)', marginTop: '1vw'}}>
                                                  {date}
                                              </div>
                                          </div>
                                          <div style = {{display: 'flex',flexDirection: 'column', height: '23vw', justifyContent: 'center', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                                              <Button style={{display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0)', border: 'none'}} onClick={() => {history.push({pathname: '/inrecipe/order', state:{id: id, phoneNum: phoneNum, addr: addr, recipeKey: 6}})}}>
                                                  <img  src= {require('../image/Myinfo/Orderinfo/Asset 14.png').default} style = {{width: '17.1vw'}}/>
                                              </Button>
                                          </div>
                                      </div>
                                  </div>
                                  ,
                          멍치킨: <div style={{display:'flex', flexDirection: 'column', width:'100vw', justifyContent: 'center', height: '41vw', backgroundColor: '#F7F7F7', alignItems: 'center'}}>
                                      <img  src= {require('../image/Myinfo/Orderinfo/Asset 81.png').default} style = {{width: '97.01vw', position: 'absolute', zIndex: '1'}}/>
                                      <div style = {{display: 'flex', flexDirection: 'row', zIndex: '2', marginLeft: '32vw', width: '53vw', zIndex: '2'}}>
                                          <div style = {{display: 'flex', flexDirection: 'column', width: '56%'}}>
                                              <div style = {{display: 'flex', flexDirection: 'column',fontSize: '1.71vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.5)', marginTop: '1vw'}}>
                                                  {"몸에 좋고 맛있는 강아지용 치킨 간식!"}
                                              </div>
                                              <div style = {{display: 'flex', flexDirection: 'column', fontSize: '5.3vw', fontFamily: 'AppleNeoM', color: 'rgb(85,85,85)'}}>
                                                  {"멍치킨"}
                                              </div>
                                              <div style = {{display: 'flex', flexDirection: 'column', fontSize: '2.65vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.45)'}}>
                                                  {"Puppy\'s Fried Chicken"}
                                              </div>
                                              <div style = {{display: 'flex', flexDirection: 'column', fontSize: '2.65vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.54)', marginTop: '5vw'}}>
                                                  {date}
                                              </div>
                                          </div>
                                          <div style = {{display: 'flex',flexDirection: 'column', height: '23vw', justifyContent: 'center', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                                              <Button style={{display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0)', border: 'none'}} onClick={() => {history.push({pathname: '/inrecipe/order', state:{id: id, phoneNum: phoneNum, addr: addr, recipeKey: 7}})}}>
                                                  <img  src= {require('../image/Myinfo/Orderinfo/Asset 14.png').default} style = {{width: '17.1vw'}}/>
                                              </Button>
                                          </div>
                                      </div>
                                  </div>
                                  ,
                          피자: <div style={{display:'flex', flexDirection: 'column', width:'100vw', justifyContent: 'center', height: '41vw', backgroundColor: '#F7F7F7', alignItems: 'center'}}>
                                      <img  src= {require('../image/Myinfo/Orderinfo/Asset 83.png').default} style = {{width: '97.01vw', position: 'absolute', zIndex: '1'}}/>
                                      <div style = {{display: 'flex', flexDirection: 'row', zIndex: '2', marginLeft: '32vw', width: '53vw', zIndex: '2'}}>
                                          <div style = {{display: 'flex', flexDirection: 'column', width: '56%'}}>
                                              <div style = {{display: 'flex', flexDirection: 'column',fontSize: '1.71vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.5)', marginTop: '1vw'}}>
                                                  {"몸에 좋고 맛있는 강아지용 피자 간식!"}
                                              </div>
                                              <div style = {{display: 'flex', flexDirection: 'column', fontSize: '5.3vw', fontFamily: 'AppleNeoM', color: 'rgb(85,85,85)'}}>
                                                  {"피자"}
                                              </div>
                                              <div style = {{display: 'flex', flexDirection: 'column', fontSize: '2.65vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.45)'}}>
                                                  {"Puppy\'s Pizza"}
                                              </div>
                                              <div style = {{display: 'flex', flexDirection: 'column', fontSize: '2.65vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.54)', marginTop: '5vw'}}>
                                                  {date}
                                              </div>
                                          </div>
                                          <div style = {{display: 'flex',flexDirection: 'column', height: '23vw', justifyContent: 'center', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                                              <Button style={{display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0)', border: 'none'}} onClick={() => {history.push({pathname: '/inrecipe/order', state:{id: id, phoneNum: phoneNum, addr: addr, recipeKey: 8}})}}>
                                                  <img  src= {require('../image/Myinfo/Orderinfo/Asset 14.png').default} style = {{width: '17.1vw'}}/>
                                              </Button>
                                          </div>
                                      </div>
                                  </div>
                                  ,
                          김밥: <div style={{display:'flex', flexDirection: 'column', width:'100vw', justifyContent: 'center', height: '41vw', backgroundColor: '#F7F7F7', alignItems: 'center'}}>
                                      <img  src= {require('../image/Myinfo/Orderinfo/Asset 85.png').default} style = {{width: '97.01vw', position: 'absolute', zIndex: '1'}}/>
                                      <div style = {{display: 'flex', flexDirection: 'row', zIndex: '2', marginLeft: '32vw', width: '53vw', zIndex: '2'}}>
                                          <div style = {{display: 'flex', flexDirection: 'column', width: '56%'}}>
                                              <div style = {{display: 'flex', flexDirection: 'column',fontSize: '1.71vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.5)', marginTop: '1vw'}}>
                                                  {"몸에 좋고 맛있는 강아지용 김밥!"}
                                              </div>
                                              <div style = {{display: 'flex', flexDirection: 'column', fontSize: '5.3vw', fontFamily: 'AppleNeoM', color: 'rgb(85,85,85)'}}>
                                                  {"김밥"}
                                              </div>
                                              <div style = {{display: 'flex', flexDirection: 'column', fontSize: '2.65vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.45)'}}>
                                                  {"Puppy\'s Kimbab"}
                                              </div>
                                              <div style = {{display: 'flex', flexDirection: 'column', fontSize: '2.65vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.54)', marginTop: '5vw'}}>
                                                  {date}
                                              </div>
                                          </div>
                                          <div style = {{display: 'flex',flexDirection: 'column', height: '23vw', justifyContent: 'center', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                                              <Button style={{display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0)', border: 'none'}} onClick={() => {history.push({pathname: '/inrecipe/order', state:{id: id, phoneNum: phoneNum, addr: addr, recipeKey: 9}})}}>
                                                  <img  src= {require('../image/Myinfo/Orderinfo/Asset 14.png').default} style = {{width: '17.1vw'}}/>
                                              </Button>
                                          </div>
                                      </div>
                                  </div>
                                  ,
                          짜장면: <div style={{display:'flex', flexDirection: 'column', width:'100vw', justifyContent: 'center', height: '41vw', backgroundColor: '#F7F7F7', alignItems: 'center'}}>
                                      <img  src= {require('../image/Myinfo/Orderinfo/Asset 87.png').default} style = {{width: '97.01vw', position: 'absolute', zIndex: '1'}}/>
                                      <div style = {{display: 'flex', flexDirection: 'row', zIndex: '2', marginLeft: '32vw', width: '53vw', zIndex: '2'}}>
                                          <div style = {{display: 'flex', flexDirection: 'column'}}>
                                              <div style = {{display: 'flex', flexDirection: 'column',fontSize: '1.71vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.5)', marginTop: '1vw'}}>
                                                  {"몸에 좋고 맛있는 강아지용 짜장면!"}
                                              </div>
                                              <div style = {{display: 'flex', flexDirection: 'column', fontSize: '5.3vw', fontFamily: 'AppleNeoM', color: 'rgb(85,85,85)'}}>
                                                  {"짜장면"}
                                              </div>
                                              <div style = {{display: 'flex', flexDirection: 'column', fontSize: '2.65vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.45)'}}>
                                                  {"Puppy\'s Jajangmyeon"}
                                              </div>
                                              <div style = {{display: 'flex', flexDirection: 'column', fontSize: '2.65vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.54)', marginTop: '5vw'}}>
                                                  {date}
                                              </div>
                                          </div>
                                          <div style = {{display: 'flex',flexDirection: 'column', height: '23vw', justifyContent: 'center', marginLeft: '5vw', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                                              <Button style={{display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0)', border: 'none'}} onClick={() => {history.push({pathname: '/inrecipe/order', state:{id: id, phoneNum: phoneNum, addr: addr, recipeKey: 10}})}}>
                                                  <img  src= {require('../image/Myinfo/Orderinfo/Asset 14.png').default} style = {{width: '17.1vw'}}/>
                                              </Button>
                                          </div>
                                      </div>
                                  </div>
                                  ,
                          고구마만쥬: <div style={{display:'flex', flexDirection: 'column', width:'100vw', justifyContent: 'center', height: '41vw', backgroundColor: '#F7F7F7', alignItems: 'center'}}>
                                      <img  src= {require('../image/Myinfo/Orderinfo/Asset 89.png').default} style = {{width: '97.01vw', position: 'absolute', zIndex: '1'}}/>
                                      <div style = {{display: 'flex', flexDirection: 'row', zIndex: '2', marginLeft: '32vw', width: '53vw', zIndex: '2'}}>
                                          <div style = {{display: 'flex', flexDirection: 'column', width: '56%'}}>
                                              <div style = {{display: 'flex', flexDirection: 'column',fontSize: '1.71vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.5)', marginTop: '1vw'}}>
                                                  {"몸에 좋고 맛있는 강아지용 고구마만쥬!"}
                                              </div>
                                              <div style = {{display: 'flex', flexDirection: 'column', fontSize: '5.3vw', fontFamily: 'AppleNeoM', color: 'rgb(85,85,85)'}}>
                                                  {"고구마만쥬"}
                                              </div>
                                              <div style = {{display: 'flex', flexDirection: 'column', fontSize: '2.65vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.45)'}}>
                                                  {"Puppy\'s Sweet potato Manju"}
                                              </div>
                                              <div style = {{display: 'flex', flexDirection: 'column', fontSize: '2.65vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.54)', marginTop: '5vw'}}>
                                                  {date}
                                              </div>
                                          </div>
                                          <div style = {{display: 'flex',flexDirection: 'column', height: '23vw', justifyContent: 'center', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                                              <Button style={{display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0)', border: 'none'}} onClick={() => {history.push({pathname: '/inrecipe/order', state:{id: id, phoneNum: phoneNum, addr: addr, recipeKey: 11}})}}>
                                                  <img  src= {require('../image/Myinfo/Orderinfo/Asset 14.png').default} style = {{width: '17.1vw'}}/>
                                              </Button>
                                          </div>
                                      </div>
                                  </div>
                                  ,
                      }[recipe_name]
                  }
                  </div>
                  last_let.push(component);
              } else if (data.state >= 0) {
                  let recipe_name = data.recipe_name;
                  console.log(recipe_name);
                  let state_string = "";
                  let state_string2 = "";
                  if(data.state === 0){
                      state_string = "승인중";
                      state_string2 = "(2~3분 소요)";
                  }
                  else if(data.state === 1){
                    state_string = "제작중";
                  }
                  else if(data.state === 2){
                    state_string = "배송중";
                  }
                  const component
                      = <div className = "currentOrders" id={data.idx}>
                      {
                          {
                              계란죽: <div style={{display:'flex', flexDirection: 'column', width:'100vw', justifyContent: 'center', height: '41vw', backgroundColor: '#F7F7F7', alignItems: 'center'}}>
                                          <img  src= {require('../image/Myinfo/Orderinfo/Asset 63.png').default} style = {{width: '97.01vw', position: 'absolute', zIndex: '1'}}/>
                                          <div style = {{display: 'flex', flexDirection: 'row', zIndex: '2', marginLeft: '32vw', width: '53vw', zIndex: '2'}}>
                                              <div style = {{display: 'flex', flexDirection: 'column', width: '55%'}}>
                                                  <div style = {{display: 'flex', flexDirection: 'column',fontSize: '1.71vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.5)', marginTop: '1vw'}}>
                                                      {"몸에 좋고 맛있는 강아지용 계란죽!"}
                                                  </div>
                                                  <div style = {{display: 'flex', flexDirection: 'column', fontSize: '5.3vw', fontFamily: 'AppleNeoM', color: 'rgb(85,85,85)'}}>
                                                      {"계란죽"}
                                                  </div>
                                                  <div style = {{display: 'flex', flexDirection: 'column', fontSize: '2.65vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.45)'}}>
                                                      {"Puppy\'s Egg Rice Gruel"}
                                                  </div>
                                                  <div style = {{display: 'flex', flexDirection: 'column', fontSize: '2.65vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.54)', marginTop: '5vw'}}>
                                                      {date}
                                                  </div>
                                              </div>
                                              <div style = {{display: 'flex',flexDirection: 'column', height: '26vw', justifyContent: 'center', alignItems: 'center'}}>
                                                  <div style= {{fontSize: '4vw', fontFamily: 'AppleNeoL'}}>
                                                      {state_string}
                                                  </div>
                                                  {(data.state === 0) &&
                                                    <div style= {{fontSize: '2vw', fontFamily: 'AppleNeoL'}}>
                                                        {state_string2}
                                                    </div>
                                                  }
                                                  {(data.state === 0) &&
                                                    <Button style={{display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '19vw', backgroundColor: 'rgba(0,0,0,0)', border: 'none', marginTop: '2vw'}} onClick={() => {handleShow(); setForDeleteIdx(data.idx); console.log(data.idx);}}>
                                                        <img  src= {require('../image/Myinfo/Orderinfo/Asset 13.png').default} style = {{width: '17.1vw'}}/>
                                                    </Button>
                                                  }
                                              </div>
                                          </div>
                                      </div>
                                      ,
                              치즈볼: <div style={{display:'flex', flexDirection: 'column', width:'100vw', justifyContent: 'center', height: '41vw', backgroundColor: '#F7F7F7', alignItems: 'center'}}>
                                          <img  src= {require('../image/Myinfo/Orderinfo/Asset 65.png').default} style = {{width: '97.01vw', position: 'absolute', zIndex: '1'}}/>
                                          <div style = {{display: 'flex', flexDirection: 'row', zIndex: '2', marginLeft: '32vw', width: '53vw', zIndex: '2'}}>
                                              <div style = {{display: 'flex', flexDirection: 'column', width: '55%'}}>
                                                  <div style = {{display: 'flex', flexDirection: 'column',fontSize: '1.71vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.5)', marginTop: '1vw'}}>
                                                      {"몸에 좋고 맛있는 강아지용 치즈볼 간식!"}
                                                  </div>
                                                  <div style = {{display: 'flex', flexDirection: 'column', fontSize: '5.3vw', fontFamily: 'AppleNeoM', color: 'rgb(85,85,85)'}}>
                                                      {"치즈볼"}
                                                  </div>
                                                  <div style = {{display: 'flex', flexDirection: 'column', fontSize: '2.65vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.45)'}}>
                                                      {"Puppy\'s Cheeseball"}
                                                  </div>
                                                  <div style = {{display: 'flex', flexDirection: 'column', fontSize: '2.65vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.54)', marginTop: '5vw'}}>
                                                      {date}
                                                  </div>
                                              </div>
                                              <div style = {{display: 'flex',flexDirection: 'column', height: '26vw', justifyContent: 'center', alignItems: 'center'}}>
                                                  <div style= {{fontSize: '4vw', fontFamily: 'AppleNeoL'}}>
                                                      {state_string}
                                                  </div>
                                                  {(data.state === 0) &&
                                                    <div style= {{fontSize: '2vw', fontFamily: 'AppleNeoL'}}>
                                                        {state_string2}
                                                    </div>
                                                  }
                                                  {(data.state === 0) &&
                                                    <Button style={{display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '19vw', backgroundColor: 'rgba(0,0,0,0)', border: 'none', marginTop: '2vw'}} onClick={() => {handleShow(); setForDeleteIdx(data.idx); console.log(data.idx);}}>
                                                        <img  src= {require('../image/Myinfo/Orderinfo/Asset 13.png').default} style = {{width: '17.1vw'}}/>
                                                    </Button>
                                                  }
                                              </div>
                                          </div>
                                      </div>
                                      ,
                              소고기무국: <div style={{display:'flex', flexDirection: 'column', width:'100vw', justifyContent: 'center', height: '41vw', backgroundColor: '#F7F7F7', alignItems: 'center'}}>
                                          <img  src= {require('../image/Myinfo/Orderinfo/Asset 71.png').default} style = {{width: '97.01vw', position: 'absolute', zIndex: '1'}}/>
                                          <div style = {{display: 'flex', flexDirection: 'row', zIndex: '2', marginLeft: '32vw', width: '53vw', zIndex: '2'}}>
                                              <div style = {{display: 'flex', flexDirection: 'column', width: '55%'}}>
                                                  <div style = {{display: 'flex', flexDirection: 'column',fontSize: '1.71vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.5)', marginTop: '1vw'}}>
                                                      {"몸에 좋고 맛있는 강아지용 소고기무국!"}
                                                  </div>
                                                  <div style = {{display: 'flex', flexDirection: 'column', fontSize: '5.3vw', fontFamily: 'AppleNeoM', color: 'rgb(85,85,85)'}}>
                                                      {"소고기무국"}
                                                  </div>
                                                  <div style = {{display: 'flex', flexDirection: 'column', fontSize: '2.65vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.45)'}}>
                                                      {"Puppy's Soup"}
                                                  </div>
                                                  <div style = {{display: 'flex', flexDirection: 'column', fontSize: '2.65vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.54)', marginTop: '5vw'}}>
                                                      {date}
                                                  </div>
                                              </div>
                                              <div style = {{display: 'flex',flexDirection: 'column', height: '26vw', justifyContent: 'center', alignItems: 'center'}}>
                                                  <div style= {{fontSize: '4vw', fontFamily: 'AppleNeoL'}}>
                                                      {state_string}
                                                  </div>
                                                  {(data.state === 0) &&
                                                    <div style= {{fontSize: '2vw', fontFamily: 'AppleNeoL'}}>
                                                        {state_string2}
                                                    </div>
                                                  }
                                                  {(data.state === 0) &&
                                                    <Button style={{display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '19vw', backgroundColor: 'rgba(0,0,0,0)', border: 'none', marginTop: '2vw'}} onClick={() => {handleShow(); setForDeleteIdx(data.idx); console.log(data.idx);}}>
                                                        <img  src= {require('../image/Myinfo/Orderinfo/Asset 13.png').default} style = {{width: '17.1vw'}}/>
                                                    </Button>
                                                  }
                                              </div>
                                          </div>
                                      </div>
                                      ,
                              계란찜: <div style={{display:'flex', flexDirection: 'column', width:'100vw', justifyContent: 'center', height: '41vw', backgroundColor: '#F7F7F7', alignItems: 'center'}}>
                                          <img  src= {require('../image/Myinfo/Orderinfo/Asset 73.png').default} style = {{width: '97.01vw', position: 'absolute', zIndex: '1'}}/>
                                          <div style = {{display: 'flex', flexDirection: 'row', zIndex: '2', marginLeft: '32vw', width: '53vw', zIndex: '2'}}>
                                              <div style = {{display: 'flex', flexDirection: 'column', width: '55%'}}>
                                                  <div style = {{display: 'flex', flexDirection: 'column',fontSize: '1.71vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.5)', marginTop: '1vw'}}>
                                                      {"몸에 좋고 맛있는 강아지용 계란찜!"}
                                                  </div>
                                                  <div style = {{display: 'flex', flexDirection: 'column', fontSize: '5.3vw', fontFamily: 'AppleNeoM', color: 'rgb(85,85,85)'}}>
                                                      {"계란찜"}
                                                  </div>
                                                  <div style = {{display: 'flex', flexDirection: 'column', fontSize: '2.65vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.45)'}}>
                                                      {"Puppy\'s Steamed Eggs"}
                                                  </div>
                                                  <div style = {{display: 'flex', flexDirection: 'column', fontSize: '2.65vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.54)', marginTop: '5vw'}}>
                                                      {date}
                                                  </div>
                                              </div>
                                              <div style = {{display: 'flex',flexDirection: 'column', height: '26vw', justifyContent: 'center', alignItems: 'center'}}>
                                                  <div style= {{fontSize: '4vw', fontFamily: 'AppleNeoL'}}>
                                                      {state_string}
                                                  </div>
                                                  {(data.state === 0) &&
                                                    <div style= {{fontSize: '2vw', fontFamily: 'AppleNeoL'}}>
                                                        {state_string2}
                                                    </div>
                                                  }
                                                  {(data.state === 0) &&
                                                    <Button style={{display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '19vw', backgroundColor: 'rgba(0,0,0,0)', border: 'none', marginTop: '2vw'}} onClick={() => {handleShow(); setForDeleteIdx(data.idx); console.log(data.idx);}}>
                                                        <img  src= {require('../image/Myinfo/Orderinfo/Asset 13.png').default} style = {{width: '17.1vw'}}/>
                                                    </Button>
                                                  }
                                              </div>
                                          </div>
                                      </div>
                                      ,
                              리코타치즈: <div style={{display:'flex', flexDirection: 'column', width:'100vw', justifyContent: 'center', height: '41vw', backgroundColor: '#F7F7F7', alignItems: 'center'}}>
                                          <img  src= {require('../image/Myinfo/Orderinfo/Asset 75.png').default} style = {{width: '97.01vw', position: 'absolute', zIndex: '1'}}/>
                                          <div style = {{display: 'flex', flexDirection: 'row', zIndex: '2', marginLeft: '32vw', width: '53vw', zIndex: '2'}}>
                                              <div style = {{display: 'flex', flexDirection: 'column', width: '55%'}}>
                                                  <div style = {{display: 'flex', flexDirection: 'column',fontSize: '1.71vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.5)', marginTop: '1vw'}}>
                                                      {"몸에 좋고 맛있는 강아지용 치즈 간식!"}
                                                  </div>
                                                  <div style = {{display: 'flex', flexDirection: 'column', fontSize: '5.3vw', fontFamily: 'AppleNeoM', color: 'rgb(85,85,85)'}}>
                                                      {"리코타치즈"}
                                                  </div>
                                                  <div style = {{display: 'flex', flexDirection: 'column', fontSize: '2.65vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.45)'}}>
                                                      {"Puppy\'s Ricotta cheese"}
                                                  </div>
                                                  <div style = {{display: 'flex', flexDirection: 'column', fontSize: '2.65vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.54)', marginTop: '5vw'}}>
                                                      {date}
                                                  </div>
                                              </div>
                                              <div style = {{display: 'flex',flexDirection: 'column', height: '26vw', justifyContent: 'center', alignItems: 'center'}}>
                                                  <div style= {{fontSize: '4vw', fontFamily: 'AppleNeoL'}}>
                                                      {state_string}
                                                  </div>
                                                  {(data.state === 0) &&
                                                    <div style= {{fontSize: '2vw', fontFamily: 'AppleNeoL'}}>
                                                        {state_string2}
                                                    </div>
                                                  }
                                                  {(data.state === 0) &&
                                                    <Button style={{display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '19vw', backgroundColor: 'rgba(0,0,0,0)', border: 'none', marginTop: '2vw'}} onClick={() => {handleShow(); setForDeleteIdx(data.idx); console.log(data.idx);}}>
                                                        <img  src= {require('../image/Myinfo/Orderinfo/Asset 13.png').default} style = {{width: '17.1vw'}}/>
                                                    </Button>
                                                  }
                                              </div>
                                          </div>
                                      </div>
                                      ,
                              소시지: <div style={{display:'flex', flexDirection: 'column', width:'100vw', justifyContent: 'center', height: '41vw', backgroundColor: '#F7F7F7', alignItems: 'center'}}>
                                          <img  src= {require('../image/Myinfo/Orderinfo/Asset 77.png').default} style = {{width: '97.01vw', position: 'absolute', zIndex: '1'}}/>
                                          <div style = {{display: 'flex', flexDirection: 'row', zIndex: '2', marginLeft: '32vw', width: '53vw', zIndex: '2'}}>
                                              <div style = {{display: 'flex', flexDirection: 'column', width: '55%'}}>
                                                  <div style = {{display: 'flex', flexDirection: 'column',fontSize: '1.71vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.5)', marginTop: '1vw'}}>
                                                      {"몸에 좋고 맛있는 강아지용 소시지 간식!"}
                                                  </div>
                                                  <div style = {{display: 'flex', flexDirection: 'column', fontSize: '5.3vw', fontFamily: 'AppleNeoM', color: 'rgb(85,85,85)'}}>
                                                      {"소시지"}
                                                  </div>
                                                  <div style = {{display: 'flex', flexDirection: 'column', fontSize: '2.65vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.45)'}}>
                                                      {"Puppy\'s Sausage"}
                                                  </div>
                                                  <div style = {{display: 'flex', flexDirection: 'column', fontSize: '2.65vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.54)', marginTop: '5vw'}}>
                                                      {date}
                                                  </div>
                                              </div>
                                              <div style = {{display: 'flex',flexDirection: 'column', height: '26vw', justifyContent: 'center', alignItems: 'center'}}>
                                                  <div style= {{fontSize: '4vw', fontFamily: 'AppleNeoL'}}>
                                                      {state_string}
                                                  </div>
                                                  {(data.state === 0) &&
                                                    <div style= {{fontSize: '2vw', fontFamily: 'AppleNeoL'}}>
                                                        {state_string2}
                                                    </div>
                                                  }
                                                  {(data.state === 0) &&
                                                    <Button style={{display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '19vw', backgroundColor: 'rgba(0,0,0,0)', border: 'none', marginTop: '2vw'}} onClick={() => {handleShow(); setForDeleteIdx(data.idx); console.log(data.idx);}}>
                                                        <img  src= {require('../image/Myinfo/Orderinfo/Asset 13.png').default} style = {{width: '17.1vw'}}/>
                                                    </Button>
                                                  }
                                              </div>
                                          </div>
                                      </div>
                                      ,
                              아이스크림: <div style={{display:'flex', flexDirection: 'column', width:'100vw', justifyContent: 'center', height: '41vw', backgroundColor: '#F7F7F7', alignItems: 'center'}}>
                                          <img  src= {require('../image/Myinfo/Orderinfo/Asset 79.png').default} style = {{width: '97.01vw', position: 'absolute', zIndex: '1'}}/>
                                          <div style = {{display: 'flex', flexDirection: 'row', zIndex: '2', marginLeft: '32vw', width: '55vw', zIndex: '2'}}>
                                              <div style = {{display: 'flex', flexDirection: 'column', width: '55%'}}>
                                                  <div style = {{display: 'flex', flexDirection: 'column',fontSize: '1.71vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.5)', marginTop: '1vw'}}>
                                                      {"몸에 좋고 맛있는 강아지용 아이스크림 간식!"}
                                                  </div>
                                                  <div style = {{display: 'flex', flexDirection: 'column', fontSize: '5.3vw', fontFamily: 'AppleNeoM', color: 'rgb(85,85,85)'}}>
                                                      {"단호박 푸딩 아이스크림"}
                                                  </div>
                                                  <div style = {{display: 'flex', flexDirection: 'column', fontSize: '2.65vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.45)'}}>
                                                      {"Puppy\'s Icecream"}
                                                  </div>
                                                  <div style = {{display: 'flex', flexDirection: 'column', fontSize: '2.65vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.54)', marginTop: '1vw'}}>
                                                      {date}
                                                  </div>
                                              </div>
                                              <div style = {{display: 'flex',flexDirection: 'column', height: '26vw', justifyContent: 'center', alignItems: 'center'}}>
                                                  <div style= {{fontSize: '4vw', fontFamily: 'AppleNeoL'}}>
                                                      {state_string}
                                                  </div>
                                                  {(data.state === 0) &&
                                                    <div style= {{fontSize: '2vw', fontFamily: 'AppleNeoL'}}>
                                                        {state_string2}
                                                    </div>
                                                  }
                                                  {(data.state === 0) &&
                                                    <Button style={{display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '19vw', backgroundColor: 'rgba(0,0,0,0)', border: 'none', marginTop: '2vw'}} onClick={() => {handleShow(); setForDeleteIdx(data.idx); console.log(data.idx);}}>
                                                        <img  src= {require('../image/Myinfo/Orderinfo/Asset 13.png').default} style = {{width: '17.1vw'}}/>
                                                    </Button>
                                                  }
                                              </div>
                                          </div>
                                      </div>
                                      ,
                              멍치킨: <div style={{display:'flex', flexDirection: 'column', width:'100vw', justifyContent: 'center', height: '41vw', backgroundColor: '#F7F7F7', alignItems: 'center'}}>
                                          <img  src= {require('../image/Myinfo/Orderinfo/Asset 81.png').default} style = {{width: '97.01vw', position: 'absolute', zIndex: '1'}}/>
                                          <div style = {{display: 'flex', flexDirection: 'row', zIndex: '2', marginLeft: '32vw', width: '53vw', zIndex: '2'}}>
                                              <div style = {{display: 'flex', flexDirection: 'column', width: '55%'}}>
                                                  <div style = {{display: 'flex', flexDirection: 'column',fontSize: '1.71vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.5)', marginTop: '1vw'}}>
                                                      {"몸에 좋고 맛있는 강아지용 치킨 간식!"}
                                                  </div>
                                                  <div style = {{display: 'flex', flexDirection: 'column', fontSize: '5.3vw', fontFamily: 'AppleNeoM', color: 'rgb(85,85,85)'}}>
                                                      {"멍치킨"}
                                                  </div>
                                                  <div style = {{display: 'flex', flexDirection: 'column', fontSize: '2.65vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.45)'}}>
                                                      {"Puppy\'s Fried Chicken"}
                                                  </div>
                                                  <div style = {{display: 'flex', flexDirection: 'column', fontSize: '2.65vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.54)', marginTop: '5vw'}}>
                                                      {date}
                                                  </div>
                                              </div>
                                              <div style = {{display: 'flex',flexDirection: 'column', height: '26vw', justifyContent: 'center', alignItems: 'center'}}>
                                                  <div style= {{fontSize: '4vw', fontFamily: 'AppleNeoL'}}>
                                                      {state_string}
                                                  </div>
                                                  {(data.state === 0) &&
                                                    <div style= {{fontSize: '2vw', fontFamily: 'AppleNeoL'}}>
                                                        {state_string2}
                                                    </div>
                                                  }
                                                  {(data.state === 0) &&
                                                    <Button style={{display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '19vw', backgroundColor: 'rgba(0,0,0,0)', border: 'none', marginTop: '2vw'}} onClick={() => {handleShow(); setForDeleteIdx(data.idx); console.log(data.idx);}}>
                                                        <img  src= {require('../image/Myinfo/Orderinfo/Asset 13.png').default} style = {{width: '17.1vw'}}/>
                                                    </Button>
                                                  }
                                              </div>
                                          </div>
                                      </div>
                                      ,
                              피자: <div style={{display:'flex', flexDirection: 'column', width:'100vw', justifyContent: 'center', height: '41vw', backgroundColor: '#F7F7F7', alignItems: 'center'}}>
                                          <img  src= {require('../image/Myinfo/Orderinfo/Asset 83.png').default} style = {{width: '97.01vw', position: 'absolute', zIndex: '1'}}/>
                                          <div style = {{display: 'flex', flexDirection: 'row', zIndex: '2', marginLeft: '32vw', width: '53vw', zIndex: '2'}}>
                                              <div style = {{display: 'flex', flexDirection: 'column', width: '55%'}}>
                                                  <div style = {{display: 'flex', flexDirection: 'column',fontSize: '1.71vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.5)', marginTop: '1vw'}}>
                                                      {"몸에 좋고 맛있는 강아지용 피자 간식!"}
                                                  </div>
                                                  <div style = {{display: 'flex', flexDirection: 'column', fontSize: '5.3vw', fontFamily: 'AppleNeoM', color: 'rgb(85,85,85)'}}>
                                                      {"피자"}
                                                  </div>
                                                  <div style = {{display: 'flex', flexDirection: 'column', fontSize: '2.65vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.45)'}}>
                                                      {"Puppy\'s Pizza"}
                                                  </div>
                                                  <div style = {{display: 'flex', flexDirection: 'column', fontSize: '2.65vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.54)', marginTop: '5vw'}}>
                                                      {date}
                                                  </div>
                                              </div>
                                              <div style = {{display: 'flex',flexDirection: 'column', height: '26vw', justifyContent: 'center', alignItems: 'center'}}>
                                                  <div style= {{fontSize: '4vw', fontFamily: 'AppleNeoL'}}>
                                                      {state_string}
                                                  </div>
                                                  {(data.state === 0) &&
                                                    <div style= {{fontSize: '2vw', fontFamily: 'AppleNeoL'}}>
                                                        {state_string2}
                                                    </div>
                                                  }
                                                  {(data.state === 0) &&
                                                    <Button style={{display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '19vw', backgroundColor: 'rgba(0,0,0,0)', border: 'none', marginTop: '2vw'}} onClick={() => {handleShow(); setForDeleteIdx(data.idx); console.log(data.idx);}}>
                                                        <img  src= {require('../image/Myinfo/Orderinfo/Asset 13.png').default} style = {{width: '17.1vw'}}/>
                                                    </Button>
                                                  }
                                              </div>
                                          </div>
                                      </div>
                                      ,
                              김밥: <div style={{display:'flex', flexDirection: 'column', width:'100vw', justifyContent: 'center', height: '41vw', backgroundColor: '#F7F7F7', alignItems: 'center'}}>
                                          <img  src= {require('../image/Myinfo/Orderinfo/Asset 85.png').default} style = {{width: '97.01vw', position: 'absolute', zIndex: '1'}}/>
                                          <div style = {{display: 'flex', flexDirection: 'row', zIndex: '2', marginLeft: '32vw', width: '53vw', zIndex: '2'}}>
                                              <div style = {{display: 'flex', flexDirection: 'column', width: '55%'}}>
                                                  <div style = {{display: 'flex', flexDirection: 'column',fontSize: '1.71vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.5)', marginTop: '1vw'}}>
                                                      {"몸에 좋고 맛있는 강아지용 김밥!"}
                                                  </div>
                                                  <div style = {{display: 'flex', flexDirection: 'column', fontSize: '5.3vw', fontFamily: 'AppleNeoM', color: 'rgb(85,85,85)'}}>
                                                      {"김밥"}
                                                  </div>
                                                  <div style = {{display: 'flex', flexDirection: 'column', fontSize: '2.65vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.45)'}}>
                                                      {"Puppy\'s Kimbab"}
                                                  </div>
                                                  <div style = {{display: 'flex', flexDirection: 'column', fontSize: '2.65vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.54)', marginTop: '5vw'}}>
                                                      {date}
                                                  </div>
                                              </div>
                                              <div style = {{display: 'flex',flexDirection: 'column', height: '26vw', justifyContent: 'center', alignItems: 'center'}}>
                                                  <div style= {{fontSize: '4vw', fontFamily: 'AppleNeoL'}}>
                                                      {state_string}
                                                  </div>
                                                  {(data.state === 0) &&
                                                    <div style= {{fontSize: '2vw', fontFamily: 'AppleNeoL'}}>
                                                        {state_string2}
                                                    </div>
                                                  }
                                                  {(data.state === 0) &&
                                                    <Button style={{display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '19vw', backgroundColor: 'rgba(0,0,0,0)', border: 'none', marginTop: '2vw'}} onClick={() => {handleShow(); setForDeleteIdx(data.idx); console.log(data.idx);}}>
                                                        <img  src= {require('../image/Myinfo/Orderinfo/Asset 13.png').default} style = {{width: '17.1vw'}}/>
                                                    </Button>
                                                  }
                                              </div>
                                          </div>
                                      </div>
                                      ,
                              짜장면: <div style={{display:'flex', flexDirection: 'column', width:'100vw', justifyContent: 'center', height: '41vw', backgroundColor: '#F7F7F7', alignItems: 'center'}}>
                                          <img  src= {require('../image/Myinfo/Orderinfo/Asset 87.png').default} style = {{width: '97.01vw', position: 'absolute', zIndex: '1'}}/>
                                          <div style = {{display: 'flex', flexDirection: 'row', zIndex: '2', marginLeft: '32vw', width: '53vw', zIndex: '2'}}>
                                              <div style = {{display: 'flex', flexDirection: 'column'}}>
                                                  <div style = {{display: 'flex', flexDirection: 'column',fontSize: '1.71vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.5)', marginTop: '1vw'}}>
                                                      {"몸에 좋고 맛있는 강아지용 짜장면!"}
                                                  </div>
                                                  <div style = {{display: 'flex', flexDirection: 'column', fontSize: '5.3vw', fontFamily: 'AppleNeoM', color: 'rgb(85,85,85)'}}>
                                                      {"짜장면"}
                                                  </div>
                                                  <div style = {{display: 'flex', flexDirection: 'column', fontSize: '2.65vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.45)'}}>
                                                      {"Puppy\'s Jajangmyeon"}
                                                  </div>
                                                  <div style = {{display: 'flex', flexDirection: 'column', fontSize: '2.65vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.54)', marginTop: '5vw'}}>
                                                      {date}
                                                  </div>
                                              </div>
                                              <div style = {{display: 'flex',flexDirection: 'column', height: '26vw', marginLeft: '6vw', justifyContent: 'center', alignItems: 'center'}}>
                                                  <div style= {{fontSize: '4vw', fontFamily: 'AppleNeoL'}}>
                                                      {state_string}
                                                  </div>
                                                  {(data.state === 0) &&
                                                    <div style= {{fontSize: '2vw', fontFamily: 'AppleNeoL'}}>
                                                        {state_string2}
                                                    </div>
                                                  }
                                                  {(data.state === 0) &&
                                                    <Button style={{display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '19vw', backgroundColor: 'rgba(0,0,0,0)', border: 'none', marginTop: '2vw'}} onClick={() => {handleShow(); setForDeleteIdx(data.idx); console.log(data.idx);}}>
                                                        <img  src= {require('../image/Myinfo/Orderinfo/Asset 13.png').default} style = {{width: '17.1vw'}}/>
                                                    </Button>
                                                  }
                                              </div>
                                          </div>
                                      </div>
                                      ,
                              고구마만쥬: <div style={{display:'flex', flexDirection: 'column', width:'100vw', justifyContent: 'center', height: '41vw', backgroundColor: '#F7F7F7', alignItems: 'center'}}>
                                          <img  src= {require('../image/Myinfo/Orderinfo/Asset 89.png').default} style = {{width: '97.01vw', position: 'absolute', zIndex: '1'}}/>
                                          <div style = {{display: 'flex', flexDirection: 'row', zIndex: '2', marginLeft: '32vw', width: '53vw', zIndex: '2'}}>
                                              <div style = {{display: 'flex', flexDirection: 'column', width: '55%'}}>
                                                  <div style = {{display: 'flex', flexDirection: 'column',fontSize: '1.71vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.5)', marginTop: '1vw'}}>
                                                      {"몸에 좋고 맛있는 강아지용 고구마만쥬!"}
                                                  </div>
                                                  <div style = {{display: 'flex', flexDirection: 'column', fontSize: '5.3vw', fontFamily: 'AppleNeoM', color: 'rgb(85,85,85)'}}>
                                                      {"고구마만쥬"}
                                                  </div>
                                                  <div style = {{display: 'flex', flexDirection: 'column', fontSize: '2.65vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.45)'}}>
                                                      {"Puppy\'s Sweet potato Manju"}
                                                  </div>
                                                  <div style = {{display: 'flex', flexDirection: 'column', fontSize: '2.65vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.54)', marginTop: '5vw'}}>
                                                      {date}
                                                  </div>
                                              </div>
                                              <div style = {{display: 'flex',flexDirection: 'column', height: '26vw', justifyContent: 'center', alignItems: 'center'}}>
                                                  <div style= {{fontSize: '4vw', fontFamily: 'AppleNeoL'}}>
                                                      {state_string}
                                                  </div>
                                                  {(data.state === 0) &&
                                                    <div style= {{fontSize: '2vw', fontFamily: 'AppleNeoL'}}>
                                                        {state_string2}
                                                    </div>
                                                  }
                                                  {(data.state === 0) &&
                                                    <Button style={{display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '19vw', backgroundColor: 'rgba(0,0,0,0)', border: 'none', marginTop: '2vw'}} onClick={() => {handleShow(); setForDeleteIdx(data.idx); console.log(data.idx);}}>
                                                        <img  src= {require('../image/Myinfo/Orderinfo/Asset 13.png').default} style = {{width: '17.1vw'}}/>
                                                    </Button>
                                                  }
                                              </div>
                                          </div>
                                      </div>
                                      ,
                          }[recipe_name]
                      }
                      </div>
                  now_let.push(component);
              }
            }
            setNow(now_let);
            setLast(last_let);
        });
      }
      else {
        const info  =
        (
        <div className = "info">
            <img style = {{width:'24.79vw', marginLeft: '7.95vw'}} src= {require('../image/Myinfo/Userinfo/Asset 25.png').default}/>
            <div className="Userinfo">
                <div style={{display:'flex', flexDirection: 'column', width:'100vw', height: '70vw'}}>
                    <img  src= {require('../image/Myinfo/Userinfo/Asset 33.png').default} style = {{width: '97.01vw', position: 'absolute', zIndex: '1'}}/>
                    <div style= {{display: 'flex', flexDirection: 'row', marginLeft: '13vw', marginTop: '13vw', zIndex: '2', alignItems: 'center'}}>
                        <img  src= {require('../image/Myinfo/Userinfo/Asset 29.png').default} style = {{height: '4.19vw'}}/>
                        <div style={{color: 'rgb(85,85,85)', fontSize: '3.25vw', fontFamily: 'AppleNeoL', marginLeft: '10vw'}}>{id}</div>
                    </div>
                    <div style= {{display: 'flex', flexDirection: 'row', marginLeft: '13vw', marginTop: '4vw', zIndex: '2', alignItems: 'center'}}>
                        <img  src= {require('../image/Myinfo/Userinfo/Asset 30.png').default} style = {{height: '4.19vw'}}/>
                        {!ischangeInfo ?(
                            <div style={{color: 'rgb(85,85,85)', fontSize: '3.25vw', fontFamily: 'AppleNeoL', marginLeft: '6.5vw'}}>{phoneNum}</div>
                        ):(
                            <div>
                                <form onSubmit={handleTextSubmit}>
                                    <label>
                                        <textarea value={textFormtwo} onChange = {handleTextChangetwo} style ={{height: '4.3vw', width:'30vw', marginLeft: '6.5vw', fontFamily: 'AppleNeoL', fontSize: '3.25vw'}} />
                                    </label>
                                </form>
                            </div>
                        )
                        }
                    </div>
                    <div style= {{display: 'flex', flexDirection: 'row', marginLeft: '13vw', marginTop: '15vw', zIndex: '2'}}>
                        <img  src= {require('../image/Myinfo/Userinfo/Asset 31.png').default} style = {{height: '4.19vw', marginTop: '0.7vw'}}/>
                        {!ischangeInfo ?(
                            <div>
                                <div style={{color: 'rgb(85,85,85)', fontSize: '3.25vw', fontFamily: 'AppleNeoL', marginLeft: '10vw'}}>{addr.slice(0, 20)}</div>
                                <div style={{color: 'rgb(85,85,85)', fontSize: '3.25vw', fontFamily: 'AppleNeoL', marginLeft: '10vw'}}>{addr.slice(20, )}</div>
                            </div>
                        ):(
                            <div>
                                <form onSubmit={handleTextSubmit}>
                                    <label>
                                        <textarea value={textFormthree} onChange = {handleTextChangethree} style ={{height: '9vw', width:'50vw', marginLeft: '10vw', fontFamily: 'AppleNeoL', fontSize: '3.25vw'}} />
                                    </label>
                                </form>
                            </div>
                        )
                        }
                    </div>
                </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <div className="changeBut" style = {{display: 'flex', flexDirection: 'column', width: '80vw', alignSelf: 'center'}}>
                {!ischangeInfo ?
                (
                    <Button style={{backgroundColor: 'rgba(0,0,0,0)', border: 'none', alignSelf: 'flex-end'}} onClick={changeInfo}>
                        <img  src= {require('../image/Myinfo/Userinfo/Asset 28.png').default} style = {{width: '17.09vw'}}/>
                    </Button>
                ):(
                    <Button style={{backgroundColor: 'rgba(0,0,0,0)', border: 'none', alignSelf: 'flex-end'}} onClick={handleTextSubmit}>
                        <img  src= {require('../image/Myinfo/Userinfo/Asset 32.png').default} style = {{width: '21.88vw'}}/>
                    </Button>
                )
                }
                </div>
            </div>
        </div>
        );
        setInfomation(info);
      }
    }, [key, ischangeInfo, forReload]);


  const goBack = () =>{
    history.goBack();
  };

  //주문 취소, 재주문
  const cancleOrder = (sth) =>{
    console.log(forDeleteIdx);
    handleClose();
    setForReload(forDeleteIdx);
  };
  const reBuy = (sth) =>{
    history.push()
  };
  //주문취소 관련 모달
  const handleClose = () => setIschangeShow(false);
  const handleShow = () => setIschangeShow(true);

  const pageChangeTrue = () => {
    setIsOrderInfo(true);
  };
  const pageChangeFalse = () => {
    setIsOrderInfo(false);
  };

  //정보 변경 관련
  const changeInfo = () => setIschangeInfo(true);
  const notchangeInfo = () => setIschangeInfo(false);

  const handleTextChangetwo = (event) => {
    let val = event.target.value.replace(/[^0-9.]/g, "").replace(/(\.*)\./g, "$1");
    if(val.length<=11){
    setTextFormtwo(val);
    }
  };

  const handleTextChangethree = (event) => {
    setTextFormthree(event.target.value);
  };


  const handleTextSubmit = (event) => {
    //텍스트 제출 관련, 서버 통신!!!
    if(textFormtwo && textFormtwo.length == 11){
        if(textFormthree){
            let str = "이름: " + id + "\n"
                     +"전화 번호: " + textFormtwo + "\n"
                     +"주소: " + textFormthree + "\n";
            alert(str);
            setPhoneNum(textFormtwo);
            setAddr(textFormthree);
            setIschangeInfo(false);

            axios.post(url+"/user/set/", {
                params: {
                    id: id,
                    phone: textFormtwo,
                    address: textFormthree
                }
            }).then((response) => {
                console.log(response);
            });
        }
        else{
            alert("주소를 제대로 작성해주세요!");
        }
    }
    else{
        alert("연락처를 제대로 작성해주세요!");
    }

    event.preventDefault();
  };

  return (
    <div className="MyPage" style= {{display: 'flex', flexDirection: 'column', width: '100vw', height: '100vh', backgroundColor: '#F7F7F7'}}>
        <div className="TopNav">
            <Navbar fixed='top' style={{display:'flex', flexDirection: 'row', width:'100vw', height: vhTovw(10.86), justifyContent: 'center', alignItems: 'flex-end'}}>
                <div style={{display:'flex', flexDirection: 'row', width:'84.10vw', backgroundColor: 'rgba(0,0,0,0)', justifyContent: 'space-between'}}>
                    <Button onClick= {() => goBack()} style={{backgroundColor: 'rgba(0,0,0,0)', border: 'none', outline: 'none'}}>
                        <img style = {{height:vhTovw(4.86)}} src= {require('../image/Myinfo/Orderinfo/Asset 3.png').default}/>
                    </Button>
                </div>
            </Navbar>
        </div>
        <div style = {{display: 'flex', flexDirection: 'row', width: '84vw', position: 'absolute', marginTop: vhTovw(12), height: '13.33vw', alignSelf: 'center', borderRadius: '50px', backgroundColor: 'rgba(255, 211, 207, 1)'}}>
            <Button onClick= {() => {setKey(0); setOrderBack('rgba(255, 92, 77, 1)'); setOrderText('rgba(255,255,255,1)');setUserBack('rgba(255, 211, 207, 1)'); setUserText('rgba(29, 29, 27, 1)')}} style = {{display: 'flex', flexDirection: 'column', justifyContent:'center',alignItems: 'center',width: '42vw', backgroundColor: orderBack, color: orderText, border: 'none', borderRadius: '50px', fontSize: '5.13vw', fontFamily: 'AppleNeoR'}}>
                <div style = {{height: '13.33vw', display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: 'px'}}>
                {"주문정보"}
                </div>
            </Button>
            <Button onClick= {() => {setKey(1); setOrderBack('rgba(255, 211, 207, 1)'); setOrderText('rgba(29,29,29,1)');setUserBack('rgba(255, 92, 77, 1)'); setUserText('rgba(255, 255, 255, 1)')}}style = {{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',width: '42vw', backgroundColor: userBack, color: userText, border: 'none', borderRadius: '50px', fontSize: '5.13vw', fontFamily: 'AppleNeoR'}}>
                <div style = {{height: '13.33vw', display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: '5px'}}>
                {"사용자정보"}
                </div>
            </Button>
        </div>
        { key === 0 ?
        (
        <div className="orders" style={{ display: 'flex', flexDirection: 'column', marginTop: vhTovw(24), backgroundColor: '#F7F7F7' }}>
            <img style = {{width:'30.77vw', marginLeft: '7.95vw'}} src= {require('../image/Myinfo/Orderinfo/Asset 10.png').default}/>
            {now}
            <Modal show = {ischangeShow} onHide = {handleClose} aria-labelledby="contained-modal-title-vcenter" size= "lg" centered style = {{}}>
                <Modal.Header>
                    <Modal.Title style={{fontFamily:'AppleNeoB', width: '100%', height: '6vw', fontSize: '4vw', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>주문 취소</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{fontFamily:'AppleNeoL', width: '100%', height: '20vw', fontSize: '4vw', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}> 정말로 주문을 취소하시겠습니까? </Modal.Body>
                <Modal.Footer style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                    <Button style={{width:'30vw', height: '7vw',backgroundColor:'silver', borderColor:'silver', fontFamily: 'AppleNeoL', fontSize: '3vw'}} onClick={cancleOrder}>
                        네, 취소 할게요
                    </Button>
                    <Button style={{width:'30vw', height: '7vw', backgroundColor:'silver', borderColor:'silver', fontFamily: 'AppleNeoL', fontSize: '3vw'}} onClick={handleClose}>
                        아니요
                    </Button>
                </Modal.Footer>
            </Modal>
            <img style = {{width:'30.77vw', marginLeft: '7.95vw', marginTop: '6vw'}} src= {require('../image/Myinfo/Orderinfo/Asset 11.png').default}/>
            {last}
        </div>

        ):(
        <div className="info" style={{ marginTop: vhTovw(24), backgroundColor: '#F7F7F7' }}>
            <img style = {{width:'24.79vw', marginLeft: '7.95vw'}} src= {require('../image/Myinfo/Userinfo/Asset 25.png').default}/>
            <div className="Userinfo">
                <div style={{display:'flex', flexDirection: 'column', width:'100vw', height: '70vw'}}>
                    <img  src= {require('../image/Myinfo/Userinfo/Asset 33.png').default} style = {{width: '97.01vw', position: 'absolute', zIndex: '1'}}/>
                    <div style= {{display: 'flex', flexDirection: 'row', marginLeft: '13vw', marginTop: '13vw', zIndex: '2', alignItems: 'center'}}>
                        <img  src= {require('../image/Myinfo/Userinfo/Asset 29.png').default} style = {{height: '4.19vw'}}/>
                        <div style={{color: 'rgb(85,85,85)', fontSize: '3.25vw', fontFamily: 'AppleNeoL', marginLeft: '10vw'}}>{id}</div>
                    </div>
                    <div style= {{display: 'flex', flexDirection: 'row', marginLeft: '13vw', marginTop: '4vw', zIndex: '2', alignItems: 'center'}}>
                        <img  src= {require('../image/Myinfo/Userinfo/Asset 30.png').default} style = {{height: '4.19vw'}}/>
                        {!ischangeInfo ?(
                            <div style={{color: 'rgb(85,85,85)', fontSize: '3.25vw', fontFamily: 'AppleNeoL', marginLeft: '6.5vw'}}>{phoneNum}</div>
                        ):(
                            <div>
                                <form onSubmit={handleTextSubmit}>
                                    <label>
                                        <textarea value={textFormtwo} onChange = {handleTextChangetwo} style ={{height: '5vw', width:'30vw', marginTop: '1vw',marginLeft: '6.5vw', fontFamily: 'AppleNeoL', fontSize: '3.25vw', border: '1px solid black', overflow: 'hidden'}} />
                                    </label>
                                </form>
                            </div>
                        )
                        }
                    </div>
                    <div style= {{display: 'flex', flexDirection: 'row', marginLeft: '13vw', marginTop: '13vw', height: '18vw', zIndex: '2'}}>
                        <img  src= {require('../image/Myinfo/Userinfo/Asset 31.png').default} style = {{height: '4.19vw', marginTop: '0.7vw'}}/>
                        {!ischangeInfo ?(
                            <div>
                                <div style={{color: 'rgb(85,85,85)', fontSize: '3.25vw', fontFamily: 'AppleNeoL', marginLeft: '10vw'}}>{addr.slice(0,20)}</div>
                                <div style={{color: 'rgb(85,85,85)', fontSize: '3.25vw', fontFamily: 'AppleNeoL', marginLeft: '10vw'}}>{addr.slice(20,)}</div>
                            </div>
                        ):(
                            <div>
                                <form onSubmit={handleTextSubmit}>
                                    <label>
                                        <textarea value={textFormthree} onChange = {handleTextChangethree} style ={{height: '14vw', width:'47vw',marginLeft: '10.1vw', fontFamily: 'AppleNeoL', fontSize: '3.25vw', border: '1px solid black'}} />
                                    </label>
                                </form>
                            </div>
                        )
                        }
                    </div>
                </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <div className="changeBut" style = {{display: 'flex', flexDirection: 'column', width: '80vw', alignSelf: 'center'}}>
                {!ischangeInfo ?
                (
                    <Button style={{backgroundColor: 'rgba(0,0,0,0)', border: 'none', alignSelf: 'flex-end'}} onClick={changeInfo}>
                        <img  src= {require('../image/Myinfo/Userinfo/Asset 28.png').default} style = {{width: '17.09vw'}}/>
                    </Button>
                ):(
                    <Button style={{backgroundColor: 'rgba(0,0,0,0)', border: 'none', alignSelf: 'flex-end'}} onClick={handleTextSubmit}>
                        <img  src= {require('../image/Myinfo/Userinfo/Asset 32.png').default} style = {{width: '21.88vw'}}/>
                    </Button>
                )
                }
                </div>
            </div>
        </div>
        )
        }

    </div>
  );
}

export default MyPageMain;
