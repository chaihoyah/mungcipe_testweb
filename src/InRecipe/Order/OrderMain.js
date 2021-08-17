import React, {Component, useEffect} from 'react';
import axios from 'axios';
import { Navbar, Nav, Form, FormControl, Button, Dropdown, Table, Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';

const url = "http://ec2-18-224-7-85.us-east-2.compute.amazonaws.com:8080/mungApi";
function OrderMain({history, match, location}) {
  const [addrInfo, setaddrInfo] = React.useState("정렬");
  const [ischangeShow, setIschangeShow] = React.useState(false);
  const [textForm, setTextForm] = React.useState("추가 요청사항이 있으시면 입력해주세요");
  const id = location.state.id;
  const [addr, setAddr] = React.useState(location.state.addr);
  const [phoneNum, setPhoneNum] = React.useState(location.state.phoneNum);
  const [recipeKey, setRecipeKey] = React.useState(location.state.recipeKey);
  const [textFormtwo, setTextFormtwo] = React.useState(phoneNum);
  const [textFormthree, setTextFormthree] = React.useState(addr);
  const [orderTextSum, setOrderTextSum] = React.useState("몸에 좋고 맛있는 강아지용 치킨 간식!");
  const [orderTextTitle, setOrderTextTitle] = React.useState("멍치킨");
  const [orderTextTitleEng, setOrderTextTitleEng] = React.useState("Puppy's Fried Chicken");
  const [orderTextIngred1, setOrderTextIngred1] = React.useState("달가슴살,단호박가루,쌀가루");
  const [orderTextIngred2, setOrderTextIngred2] = React.useState("계란,식초,두부");

  //변경 모달 관련
  const handleClose = () => {
        if(textFormtwo && textFormtwo.length == 11){
            if(textFormthree && textFormthree !== "배송지를 입력해 주세요"){
                let str = "이름: " + id + "\n"
                         +"연락처: " + textFormtwo + "\n"
                         +"주소: " + textFormthree + "\n";
                alert(str);
                setPhoneNum(textFormtwo);
                setAddr(textFormthree);

                axios.post(url+"/user/set/", {
                    params: {
                        id: id,
                        phone: textFormtwo,
                        address: textFormthree
                    }
                }).then((response) => {
                    console.log(response);
                    setIschangeShow(false);
                });
            }
            else{
                alert("주소를 제대로 작성해주세요!");
            }
        }
        else{
            alert("연락처를 제대로 작성해주세요!");
        }
  };

  const orderMenu = () => {
      let today = new Date();
      let year = today.getFullYear(); // 년도
      let month = today.getMonth() + 1;  // 월
      let date = today.getDate();  // 날짜
      let hours = today.getHours(); // 시
      let minutes = today.getMinutes();  // 분
      let seconds = today.getSeconds();  // 초
      let recipename;
      if(recipeKey === 0) recipename = "계란죽";
      else if(recipeKey === 1) recipename = "치즈볼";
      else if(recipeKey === 2) recipename = "소고기무국";
      else if(recipeKey === 3) recipename = "계란찜";
      else if(recipeKey === 4) recipename = "리코타치즈";
      else if(recipeKey === 5) recipename = "소시지";
      else if(recipeKey === 6) recipename = "아이스크림";
      else if(recipeKey === 7) recipename = "멍치킨";
      else if(recipeKey === 8) recipename = "피자";
      else if(recipeKey === 9) recipename = "김밥";
      else if(recipeKey === 10) recipename = "짜장면";
      else if(recipeKey === 11) recipename = "고구마만쥬";

      if(!textFormthree || textFormthree === "배송지를 입력해 주세요")
      {
        alert("배송지를 입력해 주세요!");
      }
      else{
        axios.post(url+"/user/set/", {
            params: {
                id: id,
                phone: textFormtwo,
                address: textFormthree
            }
        }).then((response) => {
            console.log("hi");
            axios.post(url+"/user/order/", {
                params: {
                    user_name: id,
                    phone: textFormtwo,
                    address: textFormthree,
                    recipe_name: recipename,
                    price: 10000,
                    time: year+"-"+month+"-"+date+" "+hours+":"+minutes+":"+seconds,
                    tip: textForm,
                    time_want: "희망배송시간 여기에 추가"
                }
            }).then((response) => {
                console.log("hi");
                console.log(response);
                goSurvey();
            });
        });
      }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    if(addr === ""){
        setAddr("배송지를 입력해 주세요");
        setTextFormthree("배송지를 입력해 주세요");
    }
  },[]);

  const handleShow = () => setIschangeShow(true);
  //텍스트 폼 관련
  const handleTextChange = (event) => {
    setTextForm(event.target.value)
  };
  const handleTextSubmit = (event) => {
    //텍스트 제출 관련
    alert(textForm);
    event.preventDefault();
  };
  //변경 관련
  const handleTextChangetwo = (event) => {
      let val = event.target.value.replace(/[^0-9.]/g, "").replace(/(\.*)\./g, "$1");
      if(val.length<=11){
      setTextFormtwo(val);
      }
  };

  const handleTextChangethree = (event) => {
    setTextFormthree(event.target.value);
  };


  const goBack = () =>{
    history.goBack();
  };

  function clickTextform(){
    if (textForm === "추가 요청사항이 있으시면 입력해주세요"){
        setTextForm("");
    }
  };

  function clickTextformBlur(){
    if (textForm === ""){
        setTextForm("추가 요청사항이 있으시면 입력해주세요");
    }
  };

  function clickTextformThree(){
    if (textFormthree === "배송지를 입력해 주세요"){
        setTextFormthree("");
    }
  };

  function clickTextformThreeBlur(){
    if (textFormthree === ""){
        setTextFormthree("배송지를 입력해 주세요");
    }
  };

  const goSurvey = () => {
    history.push({pathname: '/inrecipe/order/survey', state:{id: id, addr:textFormthree, phoneNum: phoneNum}});
  };

  return (
    <div className="Order" style={{display: 'flex', flexDirection: 'column', width: '100vw', height: '100vh', backgroundColor: '#F7F7F7'}}>
        <div className="TopNav">
            <Navbar fixed='top' style={{display:'flex', flexDirection: 'row', width:'100vw', height: '10.86vh', backgroundColor: '#F7F7F7', justifyContent: 'center', alignItems: 'flex-end'}}>
                <div style={{display:'flex', flexDirection: 'row', width:'84.10vw', justifyContent: 'space-between'}}>
                    <Button style={{backgroundColor: 'rgba(0,0,0,0)', border: 'none', outline: 'none'}} onClick={goBack}>
                        <img style = {{height:'4.86vh'}} src= {require('../../image/InRecipe/Asset 69.png').default}/>
                    </Button>
                </div>
            </Navbar>
        </div>
        <div className= "Address" style={{display:'flex', width:'100%', flexDirection:'column', marginTop:'31.56vw'}}>
            <div style={{display:'flex', flexDirection: 'row', width:'84.10vw', marginLeft: '7.95vw', alignItems: 'center',justifyContent: 'space-between'}}>
                <img style = {{width:'18.63vw', height: '5.3vw'}} src= {require('../../image/InRecipe/Order/Asset 77.png').default}/>
            </div>
            <div style={{display:'flex', flexDirection: 'column', position: 'absolute', zIndex: '1', marginTop: '6.7vw'}}>
                <img style = {{marginLeft: '1vw', width:'96.92vw', height: '43.93vw'}} src= {require('../../image/InRecipe/Order/Asset 80.png').default}/>
            </div>
            {!ischangeShow ?(
                <div style={{display:'flex', flexDirection: 'row', alignItems: 'center', marginTop: '10vw'}}>
                    <div style={{marginLeft:'15vw', fontFamily: 'AppleNeoM', fontSize: '4.19vw', color : 'rgb(85, 85, 85)', zIndex: '2'}}>
                        <div>연락처</div>
                    </div>
                    <div style={{marginLeft:'6vw', fontFamily: 'AppleNeoL', fontSize: '3.25vw', color : 'rgb(85, 85, 85)', zIndex: '2'}}>
                        <div>{phoneNum}</div>
                    </div>
                    <Button style={{display: 'flex', flexDirection: 'column', alignItems:'center', justifyContent: 'center', marginLeft: '15vw', width: '18.7vw', backgroundColor: 'rgba(0,0,0,0)', border: 'none', outline: 'none', borderRadius: 5, zIndex: '2'}} onClick={handleShow}>
                        <img style = {{width:'17.1vw', height: '9.57vw'}} src= {require('../../image/InRecipe/Order/Asset 81.png').default}/>
                    </Button>
                </div>
            ):(
                <div style={{display:'flex', flexDirection: 'row', alignItems: 'center', marginTop: '10vw'}}>
                    <div style={{marginLeft:'15vw', fontFamily: 'AppleNeoM', fontSize: '4.19vw', color : 'rgb(85, 85, 85)', zIndex: '2'}}>
                        <div>연락처</div>
                    </div>
                    <form style={{display:'flex', flexDirection: 'column', marginLeft:'6vw',fontFamily: 'AppleNeoL', fontSize: '3.25vw', zIndex: '2', height: '4.3vw', justifyContent: 'center'}}>
                        <label>
                            <textarea value={textFormtwo} onChange = {handleTextChangetwo} style ={{height: '5vw', width:'26vw', border: '1px solid black', color : 'rgb(85, 85, 85)', overflow: 'hidden'}} />
                        </label>
                    </form>
                    <Button style={{display: 'flex', flexDirection: 'column', alignItems:'center', justifyContent: 'center', marginLeft: '5vw', width: '23vw', backgroundColor: 'rgba(0,0,0,0)', border: 'none', outline: 'none', borderRadius: 5, zIndex: '2'}} onClick={handleClose}>
                        <img style = {{width:'21.88vw', height: '9.66vw'}} src= {require('../../image/InRecipe/Order/Asset 32.png').default}/>
                    </Button>
                </div>
            )
            }

            <div style={{display:'flex', flexDirection: 'row', marginTop: '2.5vw'}}>
                <div style={{marginLeft:'15vw', fontFamily: 'AppleNeoM', fontSize: '4.19vw', color : 'rgb(85, 85, 85)', zIndex: '2'}}>
                    <div>주소</div>
                </div>
                <form style={{display:'flex', flexDirection: 'column', marginLeft:'9.4vw', marginTop: '0.4vw',fontFamily: 'AppleNeoL', fontSize: '3.25vw', zIndex: '2', height: '10vw', justifyContent: 'center'}}>
                    <label>
                        <textarea value={textFormthree} onChange = {handleTextChangethree} onClick = {() => {clickTextformThree()}} onBlur = {() => {clickTextformThreeBlur()}}style ={{height: '10vw', width:'53vw', border: '1px solid black', color : 'rgb(85, 85, 85)'}} />
                    </label>
                </form>
            </div>
            <br></br>
        </div>
        {
            {
                0: <div className= "option" style={{display:'flex', width:'100%', flexDirection:'column', marginTop:'10vw'}}>
                       <div style={{display:'flex', flexDirection: 'row', width:'84.10vw', marginLeft: '7.95vw'}}>
                           <img style = {{width:'18.63vw', height: '5.3vw'}} src= {require('../../image/InRecipe/Order/Asset 78.png').default}/>
                       </div>
                       <br></br>
                       <div style={{display:'flex', flexDirection: 'column', width:'100vw', justifyContent: 'center', height: '41vw'}}>
                           <div style={{display:'flex', flexDirection: 'column', position: 'absolute', zIndex: '1', marginLeft: '1vw', zIndex: '1', marginTop: '1.3vw'}}>
                               <img style = {{width:'96.92vw'}} src= {require('../../image/InRecipe/Order/Asset 100.png').default}/>
                           </div>
                           <div style = {{width:'85vw', display: 'flex', flexDirection: 'row',marginLeft: '7.2vw', zIndex: '2'}}>
                               <div style = {{display: 'flex', flexDirection: 'column', marginLeft: '39.4vw'}}>
                                   <div style = {{display: 'flex', flexDirection: 'column', marginLeft: '0vw',fontSize: '1.71vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.5)'}}>
                                       {"몸에 좋고 맛있는 강아지용 계란죽!"}
                                   </div>
                                   <div style = {{display: 'flex', flexDirection: 'column', marginTop: '1.5vw', fontSize: '5.3vw', fontFamily: 'AppleNeoM', color: 'rgb(85,85,85)'}}>
                                       {"계란죽"}
                                   </div>
                                   <div style = {{display: 'flex', flexDirection: 'column', fontSize: '2.65vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.45)'}}>
                                       {"Puppy's Egg Rice Gruel"}
                                   </div>
                                   <div style = {{display: 'flex', flexDirection: 'column', marginTop: '3vw',fontSize: '2.39vw', fontFamily: 'AppleNeoL', color: 'rgb(85,85,85)'}}>
                                       {"계란, 당근, 양배추, 쌀밥"}
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>,
                1: <div className= "option" style={{display:'flex', width:'100%', flexDirection:'column', marginTop:'10vw'}}>
                       <div style={{display:'flex', flexDirection: 'row', width:'84.10vw', marginLeft: '7.95vw'}}>
                           <img style = {{width:'18.63vw', height: '5.3vw'}} src= {require('../../image/InRecipe/Order/Asset 78.png').default}/>
                       </div>
                       <br></br>
                       <div style={{display:'flex', flexDirection: 'column', width:'100vw', justifyContent: 'center', height: '41vw'}}>
                           <div style={{display:'flex', flexDirection: 'column', position: 'absolute', zIndex: '1', marginLeft: '1vw', zIndex: '1', marginTop: '1.3vw'}}>
                               <img style = {{width:'96.92vw'}} src= {require('../../image/InRecipe/Order/Asset 102.png').default}/>
                           </div>
                           <div style = {{width:'85vw', display: 'flex', flexDirection: 'row',marginLeft: '7.2vw', zIndex: '2'}}>
                               <div style = {{display: 'flex', flexDirection: 'column', marginLeft: '39.4vw'}}>
                                   <div style = {{display: 'flex', flexDirection: 'column', marginLeft: '0vw',fontSize: '1.71vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.5)'}}>
                                       {"몸에 좋고 맛있는 강아지용 치즈볼 간식!"}
                                   </div>
                                   <div style = {{display: 'flex', flexDirection: 'column', marginTop: '1.5vw', fontSize: '5.3vw', fontFamily: 'AppleNeoM', color: 'rgb(85,85,85)'}}>
                                       {"치즈볼"}
                                   </div>
                                   <div style = {{display: 'flex', flexDirection: 'column', fontSize: '2.65vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.45)'}}>
                                       {"Puppy's Cheeseball"}
                                   </div>
                                   <div style = {{display: 'flex', flexDirection: 'column', marginTop: '3vw',fontSize: '2.39vw', fontFamily: 'AppleNeoL', color: 'rgb(85,85,85)'}}>
                                       {"닭가슴살, 두부, 단호박, 고구마,"}
                                   </div>
                                   <div style = {{display: 'flex', flexDirection: 'column',fontSize: '2.39vw', fontFamily: 'AppleNeoL', color: 'rgb(85,85,85)'}}>
                                       {"아기치즈, 단호박가루, 계란"}
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>,
                2: <div className= "option" style={{display:'flex', width:'100%', flexDirection:'column', marginTop:'10vw'}}>
                       <div style={{display:'flex', flexDirection: 'row', width:'84.10vw', marginLeft: '7.95vw'}}>
                           <img style = {{width:'18.63vw', height: '5.3vw'}} src= {require('../../image/InRecipe/Order/Asset 78.png').default}/>
                       </div>
                       <br></br>
                       <div style={{display:'flex', flexDirection: 'column', width:'100vw', justifyContent: 'center', height: '41vw'}}>
                           <div style={{display:'flex', flexDirection: 'column', position: 'absolute', zIndex: '1', marginLeft: '1vw', zIndex: '1', marginTop: '1.3vw'}}>
                               <img style = {{width:'96.92vw'}} src= {require('../../image/InRecipe/Order/Asset 104.png').default}/>
                           </div>
                           <div style = {{width:'85vw', display: 'flex', flexDirection: 'row',marginLeft: '7.2vw', zIndex: '2'}}>
                               <div style = {{display: 'flex', flexDirection: 'column', marginLeft: '39.4vw'}}>
                                   <div style = {{display: 'flex', flexDirection: 'column', marginLeft: '0vw',fontSize: '1.71vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.5)'}}>
                                       {"몸에 좋고 맛있는 강아지용 소고기무국!"}
                                   </div>
                                   <div style = {{display: 'flex', flexDirection: 'column', marginTop: '1.5vw', fontSize: '5.3vw', fontFamily: 'AppleNeoM', color: 'rgb(85,85,85)'}}>
                                       {"소고기무국"}
                                   </div>
                                   <div style = {{display: 'flex', flexDirection: 'column', fontSize: '2.65vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.45)'}}>
                                       {"Puppy's Soup"}
                                   </div>
                                   <div style = {{display: 'flex', flexDirection: 'column', marginTop: '3vw',fontSize: '2.39vw', fontFamily: 'AppleNeoL', color: 'rgb(85,85,85)'}}>
                                       {"무우, 애호박, 참기름,"}
                                   </div>
                                   <div style = {{display: 'flex', flexDirection: 'column',fontSize: '2.39vw', fontFamily: 'AppleNeoL', color: 'rgb(85,85,85)'}}>
                                       {"소고기 양지, 현미밥"}
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>,
                3: <div className= "option" style={{display:'flex', width:'100%', flexDirection:'column', marginTop:'10vw'}}>
                       <div style={{display:'flex', flexDirection: 'row', width:'84.10vw', marginLeft: '7.95vw'}}>
                           <img style = {{width:'18.63vw', height: '5.3vw'}} src= {require('../../image/InRecipe/Order/Asset 78.png').default}/>
                       </div>
                       <br></br>
                       <div style={{display:'flex', flexDirection: 'column', width:'100vw', justifyContent: 'center', height: '41vw'}}>
                           <div style={{display:'flex', flexDirection: 'column', position: 'absolute', zIndex: '1', marginLeft: '1vw', zIndex: '1', marginTop: '1.3vw'}}>
                               <img style = {{width:'96.92vw'}} src= {require('../../image/InRecipe/Order/Asset 106.png').default}/>
                           </div>
                           <div style = {{width:'85vw', display: 'flex', flexDirection: 'row',marginLeft: '7.2vw', zIndex: '2'}}>
                               <div style = {{display: 'flex', flexDirection: 'column', marginLeft: '39.4vw'}}>
                                   <div style = {{display: 'flex', flexDirection: 'column', marginLeft: '0vw',fontSize: '1.71vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.5)'}}>
                                       {"몸에 좋고 맛있는 강아지용 계란찜!"}
                                   </div>
                                   <div style = {{display: 'flex', flexDirection: 'column', marginTop: '1.5vw', fontSize: '5.3vw', fontFamily: 'AppleNeoM', color: 'rgb(85,85,85)'}}>
                                       {"계란찜"}
                                   </div>
                                   <div style = {{display: 'flex', flexDirection: 'column', fontSize: '2.65vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.45)'}}>
                                       {"Puppy's Steamed Eggs"}
                                   </div>
                                   <div style = {{display: 'flex', flexDirection: 'column', marginTop: '3vw',fontSize: '2.39vw', fontFamily: 'AppleNeoL', color: 'rgb(85,85,85)'}}>
                                       {"당근, 애호박, 고구마, 계란"}
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>,
                4: <div className= "option" style={{display:'flex', width:'100%', flexDirection:'column', marginTop:'10vw'}}>
                       <div style={{display:'flex', flexDirection: 'row', width:'84.10vw', marginLeft: '7.95vw'}}>
                           <img style = {{width:'18.63vw', height: '5.3vw'}} src= {require('../../image/InRecipe/Order/Asset 78.png').default}/>
                       </div>
                       <br></br>
                       <div style={{display:'flex', flexDirection: 'column', width:'100vw', justifyContent: 'center', height: '41vw'}}>
                           <div style={{display:'flex', flexDirection: 'column', position: 'absolute', zIndex: '1', marginLeft: '1vw', zIndex: '1', marginTop: '1.3vw'}}>
                               <img style = {{width:'96.92vw'}} src= {require('../../image/InRecipe/Order/Asset 108.png').default}/>
                           </div>
                           <div style = {{width:'85vw', display: 'flex', flexDirection: 'row',marginLeft: '7.2vw', zIndex: '2'}}>
                               <div style = {{display: 'flex', flexDirection: 'column', marginLeft: '39.4vw'}}>
                                   <div style = {{display: 'flex', flexDirection: 'column', marginLeft: '0vw',fontSize: '1.71vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.5)'}}>
                                       {"몸에 좋고 맛있는 강아지용 치즈 간식!"}
                                   </div>
                                   <div style = {{display: 'flex', flexDirection: 'column', marginTop: '1.5vw', fontSize: '5.3vw', fontFamily: 'AppleNeoM', color: 'rgb(85,85,85)'}}>
                                       {"리코타치즈"}
                                   </div>
                                   <div style = {{display: 'flex', flexDirection: 'column', fontSize: '2.65vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.45)'}}>
                                       {"Puppy's Ricotta cheese"}
                                   </div>
                                   <div style = {{display: 'flex', flexDirection: 'column', marginTop: '3vw',fontSize: '2.39vw', fontFamily: 'AppleNeoL', color: 'rgb(85,85,85)'}}>
                                       {"락토프리 우유, 현미식초"}
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>,
                5: <div className= "option" style={{display:'flex', width:'100%', flexDirection:'column', marginTop:'10vw'}}>
                       <div style={{display:'flex', flexDirection: 'row', width:'84.10vw', marginLeft: '7.95vw'}}>
                           <img style = {{width:'18.63vw', height: '5.3vw'}} src= {require('../../image/InRecipe/Order/Asset 78.png').default}/>
                       </div>
                       <br></br>
                       <div style={{display:'flex', flexDirection: 'column', width:'100vw', justifyContent: 'center', height: '41vw'}}>
                           <div style={{display:'flex', flexDirection: 'column', position: 'absolute', zIndex: '1', marginLeft: '1vw', zIndex: '1', marginTop: '1.3vw'}}>
                               <img style = {{width:'96.92vw'}} src= {require('../../image/InRecipe/Order/Asset 110.png').default}/>
                           </div>
                           <div style = {{width:'85vw', display: 'flex', flexDirection: 'row',marginLeft: '7.2vw', zIndex: '2'}}>
                               <div style = {{display: 'flex', flexDirection: 'column', marginLeft: '39.4vw'}}>
                                   <div style = {{display: 'flex', flexDirection: 'column', marginLeft: '0vw',fontSize: '1.71vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.5)'}}>
                                       {"몸에 좋고 맛있는 강아지용 소시지 간식!"}
                                   </div>
                                   <div style = {{display: 'flex', flexDirection: 'column', marginTop: '1.5vw', fontSize: '5.3vw', fontFamily: 'AppleNeoM', color: 'rgb(85,85,85)'}}>
                                       {"소시지"}
                                   </div>
                                   <div style = {{display: 'flex', flexDirection: 'column', fontSize: '2.65vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.45)'}}>
                                       {"Puppy's Sausage"}
                                   </div>
                                   <div style = {{display: 'flex', flexDirection: 'column', marginTop: '3vw',fontSize: '2.39vw', fontFamily: 'AppleNeoL', color: 'rgb(85,85,85)'}}>
                                       {"당근, 감자, 양배추,"}
                                   </div>
                                   <div style = {{display: 'flex', flexDirection: 'column',fontSize: '2.39vw', fontFamily: 'AppleNeoL', color: 'rgb(85,85,85)'}}>
                                       {"닭가슴살, 파프리카, 식초"}
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>,
                6: <div className= "option" style={{display:'flex', width:'100%', flexDirection:'column', marginTop:'10vw'}}>
                       <div style={{display:'flex', flexDirection: 'row', width:'84.10vw', marginLeft: '7.95vw'}}>
                           <img style = {{width:'18.63vw', height: '5.3vw'}} src= {require('../../image/InRecipe/Order/Asset 78.png').default}/>
                       </div>
                       <br></br>
                       <div style={{display:'flex', flexDirection: 'column', width:'100vw', justifyContent: 'center', height: '41vw'}}>
                           <div style={{display:'flex', flexDirection: 'column', position: 'absolute', zIndex: '1', marginLeft: '1vw', zIndex: '1', marginTop: '1.3vw'}}>
                               <img style = {{width:'96.92vw'}} src= {require('../../image/InRecipe/Order/Asset 112.png').default}/>
                           </div>
                           <div style = {{width:'85vw', display: 'flex', flexDirection: 'row',marginLeft: '7.2vw', zIndex: '2'}}>
                               <div style = {{display: 'flex', flexDirection: 'column', marginLeft: '39.4vw'}}>
                                   <div style = {{display: 'flex', flexDirection: 'column', marginLeft: '0vw',fontSize: '1.71vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.5)'}}>
                                       {"몸에 좋고 맛있는 강아지용 아이스크림 간식!"}
                                   </div>
                                   <div style = {{display: 'flex', flexDirection: 'column', marginTop: '1.5vw', fontSize: '4.3vw', fontFamily: 'AppleNeoM', color: 'rgb(85,85,85)'}}>
                                       {"단호박 푸딩 아이스크림"}
                                   </div>
                                   <div style = {{display: 'flex', flexDirection: 'column', fontSize: '2.65vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.45)'}}>
                                       {"Puppy's Icecream"}
                                   </div>
                                   <div style = {{display: 'flex', flexDirection: 'column', marginTop: '3vw',fontSize: '2.39vw', fontFamily: 'AppleNeoL', color: 'rgb(85,85,85)'}}>
                                       {"락토프리 우유, 한천가루, 단호박"}
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>,
                7: <div className= "option" style={{display:'flex', width:'100%', flexDirection:'column', marginTop:'10vw'}}>
                       <div style={{display:'flex', flexDirection: 'row', width:'84.10vw', marginLeft: '7.95vw'}}>
                           <img style = {{width:'18.63vw', height: '5.3vw'}} src= {require('../../image/InRecipe/Order/Asset 78.png').default}/>
                       </div>
                       <br></br>
                       <div style={{display:'flex', flexDirection: 'column', width:'100vw', justifyContent: 'center', height: '41vw'}}>
                           <div style={{display:'flex', flexDirection: 'column', position: 'absolute', zIndex: '1', marginLeft: '1vw', zIndex: '1', marginTop: '1.3vw'}}>
                               <img style = {{width:'96.92vw'}} src= {require('../../image/InRecipe/Order/Asset 114.png').default}/>
                           </div>
                           <div style = {{width:'85vw', display: 'flex', flexDirection: 'row',marginLeft: '7.2vw', zIndex: '2'}}>
                               <div style = {{display: 'flex', flexDirection: 'column', marginLeft: '39.4vw'}}>
                                   <div style = {{display: 'flex', flexDirection: 'column', marginLeft: '0vw',fontSize: '1.71vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.5)'}}>
                                       {"몸에 좋고 맛있는 강아지용 치킨 간식!"}
                                   </div>
                                   <div style = {{display: 'flex', flexDirection: 'column', marginTop: '1.5vw', fontSize: '4.3vw', fontFamily: 'AppleNeoM', color: 'rgb(85,85,85)'}}>
                                       {"멍치킨"}
                                   </div>
                                   <div style = {{display: 'flex', flexDirection: 'column', fontSize: '2.65vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.45)'}}>
                                       {"Puppy's Fried Chicken"}
                                   </div>
                                   <div style = {{display: 'flex', flexDirection: 'column', marginTop: '3vw',fontSize: '2.39vw', fontFamily: 'AppleNeoL', color: 'rgb(85,85,85)'}}>
                                       {"단호박가루, 쌀가루, 두부"}
                                   </div>
                                   <div style = {{display: 'flex', flexDirection: 'column',fontSize: '2.39vw', fontFamily: 'AppleNeoL', color: 'rgb(85,85,85)'}}>
                                       {"닭가슴살, 계란, 식초"}
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>,
                8: <div className= "option" style={{display:'flex', width:'100%', flexDirection:'column', marginTop:'10vw'}}>
                       <div style={{display:'flex', flexDirection: 'row', width:'84.10vw', marginLeft: '7.95vw'}}>
                           <img style = {{width:'18.63vw', height: '5.3vw'}} src= {require('../../image/InRecipe/Order/Asset 78.png').default}/>
                       </div>
                       <br></br>
                       <div style={{display:'flex', flexDirection: 'column', width:'100vw', justifyContent: 'center', height: '41vw'}}>
                           <div style={{display:'flex', flexDirection: 'column', position: 'absolute', zIndex: '1', marginLeft: '1vw', zIndex: '1', marginTop: '1.3vw'}}>
                               <img style = {{width:'96.92vw'}} src= {require('../../image/InRecipe/Order/Asset 116.png').default}/>
                           </div>
                           <div style = {{width:'85vw', display: 'flex', flexDirection: 'row',marginLeft: '7.2vw', zIndex: '2'}}>
                               <div style = {{display: 'flex', flexDirection: 'column', marginLeft: '39.4vw'}}>
                                   <div style = {{display: 'flex', flexDirection: 'column', marginLeft: '0vw',fontSize: '1.71vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.5)'}}>
                                       {"몸에 좋고 맛있는 강아지용 피자 간식!"}
                                   </div>
                                   <div style = {{display: 'flex', flexDirection: 'column', marginTop: '1.5vw', fontSize: '4.3vw', fontFamily: 'AppleNeoM', color: 'rgb(85,85,85)'}}>
                                       {"피자"}
                                   </div>
                                   <div style = {{display: 'flex', flexDirection: 'column', fontSize: '2.65vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.45)'}}>
                                       {"Puppy's Pizza"}
                                   </div>
                                   <div style = {{display: 'flex', flexDirection: 'column', marginTop: '3vw',fontSize: '2.39vw', fontFamily: 'AppleNeoL', color: 'rgb(85,85,85)'}}>
                                       {"단호박, 닭가슴살, 미숫가루"}
                                   </div>
                                   <div style = {{display: 'flex', flexDirection: 'column',fontSize: '2.39vw', fontFamily: 'AppleNeoL', color: 'rgb(85,85,85)'}}>
                                       {"브로콜리, 크랜베리"}
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>,
                9: <div className= "option" style={{display:'flex', width:'100%', flexDirection:'column', marginTop:'10vw'}}>
                       <div style={{display:'flex', flexDirection: 'row', width:'84.10vw', marginLeft: '7.95vw'}}>
                           <img style = {{width:'18.63vw', height: '5.3vw'}} src= {require('../../image/InRecipe/Order/Asset 78.png').default}/>
                       </div>
                       <br></br>
                       <div style={{display:'flex', flexDirection: 'column', width:'100vw', justifyContent: 'center', height: '41vw'}}>
                           <div style={{display:'flex', flexDirection: 'column', position: 'absolute', zIndex: '1', marginLeft: '1vw', zIndex: '1', marginTop: '1.3vw'}}>
                               <img style = {{width:'96.92vw'}} src= {require('../../image/InRecipe/Order/Asset 118.png').default}/>
                           </div>
                           <div style = {{width:'85vw', display: 'flex', flexDirection: 'row',marginLeft: '7.2vw', zIndex: '2'}}>
                               <div style = {{display: 'flex', flexDirection: 'column', marginLeft: '39.4vw'}}>
                                   <div style = {{display: 'flex', flexDirection: 'column', marginLeft: '0vw',fontSize: '1.71vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.5)'}}>
                                       {"몸에 좋고 맛있는 강아지용 김밥!"}
                                   </div>
                                   <div style = {{display: 'flex', flexDirection: 'column', marginTop: '1.5vw', fontSize: '4.3vw', fontFamily: 'AppleNeoM', color: 'rgb(85,85,85)'}}>
                                       {"김밥"}
                                   </div>
                                   <div style = {{display: 'flex', flexDirection: 'column', fontSize: '2.65vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.45)'}}>
                                       {"Puppy's Kimbab"}
                                   </div>
                                   <div style = {{display: 'flex', flexDirection: 'column', marginTop: '3vw',fontSize: '2.39vw', fontFamily: 'AppleNeoL', color: 'rgb(85,85,85)'}}>
                                       {"닭가슴살, 당근, 파프리카,"}
                                   </div>
                                   <div style = {{display: 'flex', flexDirection: 'column',fontSize: '2.39vw', fontFamily: 'AppleNeoL', color: 'rgb(85,85,85)'}}>
                                       {"브로콜리, 검은깨, 식초"}
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>,
                10: <div className= "option" style={{display:'flex', width:'100%', flexDirection:'column', marginTop:'10vw'}}>
                       <div style={{display:'flex', flexDirection: 'row', width:'84.10vw', marginLeft: '7.95vw'}}>
                           <img style = {{width:'18.63vw', height: '5.3vw'}} src= {require('../../image/InRecipe/Order/Asset 78.png').default}/>
                       </div>
                       <br></br>
                       <div style={{display:'flex', flexDirection: 'column', width:'100vw', justifyContent: 'center', height: '41vw'}}>
                           <div style={{display:'flex', flexDirection: 'column', position: 'absolute', zIndex: '1', marginLeft: '1vw', zIndex: '1', marginTop: '1.3vw'}}>
                               <img style = {{width:'96.92vw'}} src= {require('../../image/InRecipe/Order/Asset 120.png').default}/>
                           </div>
                           <div style = {{width:'85vw', display: 'flex', flexDirection: 'row',marginLeft: '7.2vw', zIndex: '2'}}>
                                <div style = {{width:'35.3vw'}}> </div>
                               <img style = {{width: '13vw', height: '3.59vw', position: 'absolute', marginLeft: '68vw', marginTop: '5vw'}} src= {require('../../image/InRecipe10/Asset 93.png').default}/>
                               <img style = {{width:'8vw', position: 'absolute', marginLeft: '72vw', marginTop: '10vw'}} src= {require('../../image/InRecipe10/Asset 31.png').default}/>
                               <div style = {{display: 'flex', flexDirection: 'column', marginLeft: '4vw', marginTop: '4vw'}}>
                                   <div style = {{display: 'flex', flexDirection: 'column', marginLeft: '0vw',fontSize: '1.71vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.5)'}}>
                                       {"몸에 좋고 맛있는 강아지용 짜장면!"}
                                   </div>
                                   <div style = {{display: 'flex', flexDirection: 'column', marginTop: '1.5vw', fontSize: '4.3vw', fontFamily: 'AppleNeoM', color: 'rgb(85,85,85)'}}>
                                       {"짜장면"}
                                   </div>
                                   <div style = {{display: 'flex', flexDirection: 'column', fontSize: '2.65vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.45)'}}>
                                       {"Puppy's Jajangmyeon"}
                                   </div>
                                   <div style = {{display: 'flex', flexDirection: 'column', marginTop: '2vw',fontSize: '2.39vw', fontFamily: 'AppleNeoL', color: 'rgb(85,85,85)'}}>
                                       {"계란, 코코넛오일, 락토프리우유,"}
                                   </div>
                                   <div style = {{display: 'flex', flexDirection: 'column',fontSize: '2.39vw', fontFamily: 'AppleNeoL', color: 'rgb(85,85,85)'}}>
                                       {"오트밀가루, 소고기사태, 당근,"}
                                   </div>
                                   <div style = {{display: 'flex', flexDirection: 'column',fontSize: '2.39vw', fontFamily: 'AppleNeoL', color: 'rgb(85,85,85)'}}>
                                       {"양배추, 병아리콩, 캐롭파우더, 애호박"}
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>,
                11: <div className= "option" style={{display:'flex', width:'100%', flexDirection:'column', marginTop:'10vw'}}>
                       <div style={{display:'flex', flexDirection: 'row', width:'84.10vw', marginLeft: '7.95vw'}}>
                           <img style = {{width:'18.63vw', height: '5.3vw'}} src= {require('../../image/InRecipe/Order/Asset 78.png').default}/>
                       </div>
                       <br></br>
                       <div style={{display:'flex', flexDirection: 'column', width:'100vw', justifyContent: 'center', height: '41vw'}}>
                           <div style={{display:'flex', flexDirection: 'column', position: 'absolute', zIndex: '1', marginLeft: '1vw', zIndex: '1', marginTop: '1.3vw'}}>
                               <img style = {{width:'96.92vw'}} src= {require('../../image/InRecipe/Order/Asset 122.png').default}/>
                           </div>
                           <div style = {{width:'85vw', display: 'flex', flexDirection: 'row',marginLeft: '7.2vw', zIndex: '2'}}>
                               <div style = {{display: 'flex', flexDirection: 'column', marginLeft: '39.4vw'}}>
                                   <div style = {{display: 'flex', flexDirection: 'column', marginLeft: '0vw',fontSize: '1.71vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.5)'}}>
                                       {"몸에 좋고 맛있는 강아지용 고구마만쥬!"}
                                   </div>
                                   <div style = {{display: 'flex', flexDirection: 'column', marginTop: '1.5vw', fontSize: '4.3vw', fontFamily: 'AppleNeoM', color: 'rgb(85,85,85)'}}>
                                       {"고구마만쥬"}
                                   </div>
                                   <div style = {{display: 'flex', flexDirection: 'column', fontSize: '2.65vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,0.45)'}}>
                                       {"Puppy's Sweet potato Manju"}
                                   </div>
                                   <div style = {{display: 'flex', flexDirection: 'column', marginTop: '4vw',fontSize: '2.39vw', fontFamily: 'AppleNeoL', color: 'rgb(85,85,85)'}}>
                                       {"고구마, 미숫가루, 계란, 흑임자"}
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>,
            }[recipeKey]
        }
        <div className= "option" style={{display:'flex', width:'100%', flexDirection:'column', marginTop:'3vw', backgroundColor: '#F7F7F7'}}>
            <div style={{display:'flex', flexDirection: 'row', width:'84.10vw', marginLeft: '7.95vw'}}>
                <img style = {{width:'29.32vw', height: '5.38vw'}} src= {require('../../image/InRecipe/Order/Asset 79.png').default}/>
            </div>
            <div style={{display:'flex', flexDirection: 'column', width:'100vw', justifyContent: 'center', height: '41vw'}}>
                <div style={{display:'flex', flexDirection: 'column', position: 'absolute', zIndex: '1', marginLeft: '1vw'}}>
                    <img style = {{width:'96.92vw'}} src= {require('../../image/InRecipe/Order/Asset 80.png').default}/>
                </div>
                <form onSubmit={handleTextSubmit} style={{display:'flex', flexDirection:'column', marginLeft: '14vw',zIndex: '2'}}>
                    <label>
                        <textarea value={textForm} onChange = {handleTextChange} onClick = {() => clickTextform()} onBlur = {() => clickTextformBlur()}style ={{width: '71vw', height: '20vw', fontFamily: 'AppleNeoL', color: 'rgba(85,85,85,1)',fontSize: '3.25vw', border: 'none'}}/>
                    </label>
                </form>
            </div>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '9vw', backgroundColor: '#F7F7F7'}}>
            <Button style={{backgroundColor: 'rgba(0,0,0,0)', border: 'none', outline: '#F7F7F7'}} onClick= {orderMenu}>
                <img style = {{width:'84.36vw'}} src= {(require('../../image/InRecipe/Order/Asset 83.png').default)}/>
            </Button>
        </div>
    </div>
  );
}

export default OrderMain;
