import React, {Component, useEffect} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import { Navbar, Nav, Form, FormControl, Button, Dropdown, Table, Tabs, Tab, Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const url = "http://ec2-18-224-7-85.us-east-2.compute.amazonaws.com:8080";
function InRecipeMain10({history, match, location}) {
  const [isSurvey, setIsSurvey] = React.useState(false);
  const [key, setKey] = React.useState("0");
  const [isQR, setIsQR] = React.useState(false);
  const [id, setId] = React.useState();
  const [addr, setAddr] = React.useState();
  const [phoneNum, setPhoneNum] = React.useState();
  const [ischangeShow, setIschangeShow] = React.useState(false);
  const [fitCal, setFitCal] = React.useState([]);
  const [dogname, setDogName] = React.useState();

  //설문 관련
  const [surveyOneKey, setSurveyOneKey] = React.useState(0);
  const [surveyOneGuitar, setSurveyOneGuitar] = React.useState("입력해 주세요");
  const [surveyTwoKey, setSurveyTwoKey] = React.useState(0);
  const [surveyThree, setSurveyThree] = React.useState("입력해 주세요");

  const ingred = '{ "계란": "1 (개)", "코코넛오일": "5 (mL) x2", "락토프리우유": "10 (mL)", "오트밀가루": "50 (g) + 10 (g)", "소고기사태": "60 (g)", "당근": "20 (g)", "양배추": "10 (g)", "병아리콩": "10 (g)", "캐롭파우더": "20 (g)", "애호박": "10 (g) x2", "물": "200 (mL)"}';
  const equip = ["찜기(찜틀)", "에어프라이기"];
  let ingredJson = JSON.parse(ingred);
  let ingred_keyJson = Object.getOwnPropertyNames(ingredJson);

  function toVW(num){
    let vw = num*2.164;
    let str = String(vw) + 'vw';
    return str;
  };

  const vhTovw = (num) => {
    return toVW(num);
  };

  const table_ingred = ingred_keyJson.map((name, index) =>{
        return(
            <div key = {index} style = {{display: 'flex', flexDirection: 'column', width: '84.10vw', fontSize: '3.5vw', fontFamily: 'AppleNeoL'}}>
            <div style = {{display: 'flex', flexDirection: 'row'}}>
                <div style = {{display: 'flex', flexDirection: 'column', width: '45%'}}>{name}</div>
                <div style = {{display: 'flex', flexDirection: 'column', width: '45%'}}>{ingredJson[name]}</div>
            </div>
            <hr style = {{height: '0.2vw', backgroundColor: 'black'}}/>
            </div>
        );
  });

  const table_equip = equip.map((name, index) =>{
        return(
            <div key = {index} style = {{display: 'flex', flexDirection: 'column', width: '84.10vw', fontSize: '3.5vw', fontFamily: 'AppleNeoL'}}>
            <div style = {{display: 'flex', flexDirection: 'row'}}>
                <div style = {{display: 'flex', flexDirection: 'column', width: '45%'}}>{name}</div>
            </div>
            <hr style = {{height: '0.2vw', backgroundColor: 'black'}}/>
            </div>
        );
  });

  const steps_ingred =
            <div>
                <div style = {{display: 'flex', flexDirection: 'column', width: '100vw', alignItems: 'center', marginTop: '10vw', marginBottom: '5vw'}}>
                    <div style = {{display: 'flex', flexDirection: 'column', width: '90%', marginTop: '2vw', fontSize: '5vw', fontFamily: 'AppleNeoB'}}>STEP 1</div>
                    <br></br>
                    <div style = {{display: 'flex', flexDirection: 'column', width: '90%', marginTop: '2vw', fontSize: '4.53vw', fontFamily: 'AppleNeoL', color: 'rgb(85,85,85)'}}>1. 당근과 양배추를 적당한 크기로 썰어줍니다.</div>
                </div>
                <div style = {{display: 'flex', flexDirection: 'column', width: '100vw', alignItems: 'center', marginTop: '10vw', marginBottom: '5vw'}}>
                    <div style = {{display: 'flex', flexDirection: 'column', width: '90%', marginTop: '2vw', fontSize: '5vw', fontFamily: 'AppleNeoB'}}>STEP 2</div>
                    <br></br>
                    <div style = {{display: 'flex', flexDirection: 'column', width: '90%', marginTop: '2vw', fontSize: '4.53vw', fontFamily: 'AppleNeoL', color: 'rgb(85,85,85)'}}>2. 애호박은 10(g)은 깍둑썰기, 10(g)은 채썰기(고명용)를 해줍니다.</div>
                </div>
                <div style = {{display: 'flex', flexDirection: 'column', width: '100vw', alignItems: 'center', marginTop: '10vw', marginBottom: '5vw'}}>
                    <div style = {{display: 'flex', flexDirection: 'column', width: '90%', marginTop: '2vw', fontSize: '5vw', fontFamily: 'AppleNeoB'}}>STEP 3</div>
                    <br></br>
                    <img style= {{width: '100vw'}} src={require("../image/InRecipe10/step3.png").default}/>
              <div style={{ display: 'flex', flexDirection: 'column', width: '90%', marginTop: '2vw', fontSize: '4.53vw', fontFamily: 'AppleNeoL', color: 'rgb(85,85,85)' }}>3. 계란은 노른자만 분리한 뒤, 코코넛 오일, 락토프리 우유를 볼에 담아 잘 섞고나서 오트밀 가루 50(g)을 넣고 반죽해줍니다.</div>
                </div>
                <div style = {{display: 'flex', flexDirection: 'column', width: '100vw', alignItems: 'center', marginTop: '10vw', marginBottom: '5vw'}}>
                    <div style = {{display: 'flex', flexDirection: 'column', width: '90%', marginTop: '2vw', fontSize: '5vw', fontFamily: 'AppleNeoB'}}>STEP 4</div>
                    <br></br>
                    <img style= {{width: '100vw'}} src={require("../image/InRecipe10/step4.png").default}/>
                    <div style = {{display: 'flex', flexDirection: 'column', width: '90%', marginTop: '2vw', fontSize: '4.53vw', fontFamily: 'AppleNeoL', color: 'rgb(85,85,85)'}}>4. 반죽을 뭉친 뒤 랩에 싸서 밥솥에 15-20분간 익혀줍니다.</div>
                </div>
                <div style = {{display: 'flex', flexDirection: 'column', width: '100vw', alignItems: 'center', marginTop: '10vw', marginBottom: '5vw'}}>
                    <div style = {{display: 'flex', flexDirection: 'column', width: '90%', marginTop: '2vw', fontSize: '5vw', fontFamily: 'AppleNeoB'}}>STEP 5</div>
                    <br></br>
                    <img style= {{width: '100vw'}} src={require("../image/InRecipe10/step5.png").default}/>
                    <div style = {{display: 'flex', flexDirection: 'column', width: '90%', marginTop: '2vw', fontSize: '4.53vw', fontFamily: 'AppleNeoL', color: 'rgb(85,85,85)'}}>5. 익힌 반죽을 비닐안에 넣고 균일하게 잘 펴주고 그대로 20분간 냉동해줍니다.</div>
                </div>
                <div style = {{display: 'flex', flexDirection: 'column', width: '100vw', alignItems: 'center', marginTop: '10vw', marginBottom: '5vw'}}>
                    <div style = {{display: 'flex', flexDirection: 'column', width: '90%', marginTop: '2vw', fontSize: '5vw', fontFamily: 'AppleNeoB'}}>STEP 6</div>
                    <br></br>
                    <img style= {{width: '100vw'}} src={require("../image/InRecipe10/step6.png").default}/>
                    <div style = {{display: 'flex', flexDirection: 'column', width: '90%', marginTop: '2vw', fontSize: '4.53vw', fontFamily: 'AppleNeoL', color: 'rgb(85,85,85)'}}>6. 냉동이 완료된 반죽을 겉가루(오트밀 10G)를 묻히며 붙지 않게 일자인 면으로 잘라줍니다.</div>
                </div>
                <div style = {{display: 'flex', flexDirection: 'column', width: '100vw', alignItems: 'center', marginTop: '10vw', marginBottom: '5vw'}}>
                    <div style = {{display: 'flex', flexDirection: 'column', width: '90%', marginTop: '2vw', fontSize: '5vw', fontFamily: 'AppleNeoB'}}>STEP 7</div>
                    <br></br>
                    <img style= {{width: '100vw'}} src={require("../image/InRecipe10/step7.png").default}/>
                    <div style = {{display: 'flex', flexDirection: 'column', width: '90%', marginTop: '2vw', fontSize: '4.53vw', fontFamily: 'AppleNeoL', color: 'rgb(85,85,85)'}}>7. 중불에 코코넛오일에 당근과 소고기사태를 먼저 넣고 볶아줍니다.</div>
                </div>
                <div style = {{display: 'flex', flexDirection: 'column', width: '100vw', alignItems: 'center', marginTop: '10vw', marginBottom: '5vw'}}>
                    <div style = {{display: 'flex', flexDirection: 'column', width: '90%', marginTop: '2vw', fontSize: '5vw', fontFamily: 'AppleNeoB'}}>STEP 8</div>
                    <br></br>
                    <img style= {{width: '100vw'}} src={require("../image/InRecipe10/step8.png").default}/>
                    <div style = {{display: 'flex', flexDirection: 'column', width: '90%', marginTop: '2vw', fontSize: '4.53vw', fontFamily: 'AppleNeoL', color: 'rgb(85,85,85)'}}>8. 고기의 겉면이 익었다면 양배추와 애호박을 넣고 볶아줍니다.</div>
                </div>
                <div style = {{display: 'flex', flexDirection: 'column', width: '100vw', alignItems: 'center', marginTop: '10vw', marginBottom: '5vw'}}>
                    <div style = {{display: 'flex', flexDirection: 'column', width: '90%', marginTop: '2vw', fontSize: '5vw', fontFamily: 'AppleNeoB'}}>STEP 9</div>
                    <br></br>
                    <img style= {{width: '100vw'}} src={require("../image/InRecipe10/step9.png").default}/>
                    <div style = {{display: 'flex', flexDirection: 'column', width: '90%', marginTop: '2vw', fontSize: '4.53vw', fontFamily: 'AppleNeoL', color: 'rgb(85,85,85)'}}>9. 고기가 어느정도 익었을 때, 병아리콩을 넣고 볶아줍니다.</div>
                </div>
                <div style = {{display: 'flex', flexDirection: 'column', width: '100vw', alignItems: 'center', marginTop: '10vw', marginBottom: '5vw'}}>
                    <div style = {{display: 'flex', flexDirection: 'column', width: '90%', marginTop: '2vw', fontSize: '5vw', fontFamily: 'AppleNeoB'}}>STEP 10</div>
                    <br></br>
                    <img style= {{width: '100vw'}} src={require("../image/InRecipe10/step10.png").default}/>
                    <div style = {{display: 'flex', flexDirection: 'column', width: '90%', marginTop: '2vw', fontSize: '4.53vw', fontFamily: 'AppleNeoL', color: 'rgb(85,85,85)'}}>10. 물을 붓고 캐롭파우더를 넣은 뒤, 잘 저어줍니다.</div>
                </div>
                <div style = {{display: 'flex', flexDirection: 'column', width: '100vw', alignItems: 'center', marginTop: '10vw', marginBottom: '5vw'}}>
                    <div style = {{display: 'flex', flexDirection: 'column', width: '90%', marginTop: '2vw', fontSize: '5vw', fontFamily: 'AppleNeoB'}}>STEP 11</div>
                    <br></br>
                    <img style= {{width: '100vw'}} src={require("../image/InRecipe10/step11.png").default}/>
                    <div style = {{display: 'flex', flexDirection: 'column', width: '90%', marginTop: '2vw', fontSize: '4.53vw', fontFamily: 'AppleNeoL', color: 'rgb(85,85,85)'}}>11. 끓기 시작하면, 준비한 면을 넣고 3분간 익혀줍니다.</div>
                </div>
                <div style = {{display: 'flex', flexDirection: 'column', width: '100vw', alignItems: 'center', marginTop: '10vw', marginBottom: '5vw'}}>
                    <div style = {{display: 'flex', flexDirection: 'column', width: '90%', marginTop: '2vw', fontSize: '5vw', fontFamily: 'AppleNeoB'}}>STEP 12</div>
                    <br></br>
                    <img style= {{width: '100vw'}} src={require("../image/InRecipe10/step12.png").default}/>
                    <div style = {{display: 'flex', flexDirection: 'column', width: '90%', marginTop: '2vw', fontSize: '4.53vw', fontFamily: 'AppleNeoL', color: 'rgb(85,85,85)'}}>12. 완성된 음식을 그릇에 담아주고, 애호박 고명을 올려줍니다.</div>
                </div>
                <div style = {{display: 'flex', flexDirection: 'column', width: '100vw', alignItems: 'center', marginTop: '7vw', marginBottom: '5vw'}}>
                    <div style = {{display: 'flex', flexDirection: 'column', width: '90%', marginTop: '2vw', fontSize: '3vw', fontFamily: 'AppleNeoL', color: 'rgb(85,85,85)'}}>{"레시피 출처: https://www.youtube.com/watch?v=vQkxQD-Eduk"}</div>
                    <div style = {{display: 'flex', flexDirection: 'column', width: '90%', marginTop: '2vw', fontSize: '3vw', fontFamily: 'AppleNeoL', color: 'rgb(85,85,85)'}}>{"https://www.youtube.com/watch?v=nAj4mJATkmU"}</div>
                </div>
            </div>


  const goBack = () =>{
    history.goBack();
  };

    //설문 관련
  function toCost(num) {
      let standard_iphone = 2.164;
      let inner_const = (window.innerWidth / window.innerHeight - 0.462) / 0.02;
      let margin = num + inner_const;
      let str = String(margin) + 'vh';
      return str;
  };

  const marginCheck = (num) => {
      return toCost(num);
  };

  //설문 관련

  const handleClose = () => setIschangeShow(false);
  const handleShow = () => setIschangeShow(true);
  const surveyClose = () => setIsSurvey(false);
  const surveyShow = () => setIsSurvey(true);
  //Q1

  function clickSurveyOne(num) {
      setSurveyOneKey(num);
  };

  function clickSurveyTwo(num) {
      setSurveyTwoKey(num);
  };

  const handleTextSurveyOneGuitar = (event) => {
      if (event.target.value.length <= 30) {
          setSurveyOneGuitar(event.target.value);
      }
  };


  function clickSurveyOneGuitar() {
      if (surveyOneGuitar === "입력해 주세요") {
          setSurveyOneGuitar("");
      }
  };

  function clickSurveyOneGuitarBlur() {
      if (surveyOneGuitar === "") {
          setSurveyOneGuitar("입력해 주세요");
      }
  };

  const handleTextSurveyThree = (event) => {
      if (event.target.value.length <= 30) {
          setSurveyThree(event.target.value);
      }
  };

  function clickSurveyThree() {
      if (surveyThree === "입력해 주세요") {
          setSurveyThree("");
      }
  };

  function clickSurveyThreeBlur() {
      if (surveyThree === "") {
          setSurveyThree("입력해 주세요");
      }
  };

  //End
  function submitSurvey() {
      //오류 잡기
      if (surveyOneKey === 0) {
          alert('설문 1번을 선택해 주세요.');
      }
      else if (surveyTwoKey === 0) {
          alert('설문 2번을 선택해 주세요.');
      }
      else if (surveyThree === "" || surveyThree === "입력해 주세요") {
          alert('설문 3번을 작성해 주세요.');
      }
      else {
          // axios.post(url+"/user/survey3/", {
          //     params: {
          //         username: "뭉치",
          //         q1: "q1 / int",
          //         q2: "q2 / int",
          //         q3: "q3 / String"
          //     }
          // }).then((response) => {
          //     console.log(response);
          //     alert('감사합니다!');
          // });
          handleClose();
          surveyClose();
      }
  };

    useEffect(() => {
      window.scrollTo(0, 0);
      if (!location.state) {
          setIsQR(true);
          handleShow();
      }
      else {
          setId(location.state.id);
          setAddr(location.state.addr);
          setPhoneNum(location.state.phoneNum);
          setFitCal(location.state.fitCal);
          setDogName(location.state.dogname);
      }
  }, []);

  return (
    <div className="InRecipe">
        { !isSurvey &&
            <div className="RealRecipe" style = {{overflowX: 'hidden'}}>
                <div className="TopNav">
                    <Navbar fixed='top' style={{display:'flex', flexDirection: 'row', width:'100vw', height: '10.86vh', backgroundColor: 'rgba(0,0,0,0)', justifyContent: 'center', alignItems: 'flex-end'}}>
                        <div style={{display:'flex', flexDirection: 'row', width:'84.10vw', backgroundColor: 'rgba(0,0,0,0)', justifyContent: 'space-between'}}>
                            <Button style={{backgroundColor: 'rgba(0,0,0,0)', border: 'none', outline: 'none'}} onClick={goBack}>
                                <img style = {{height:'4.86vh'}} src= {require('../image/InRecipe10/Asset 69.png').default}/>
                            </Button>
                        </div>
                    </Navbar>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <Button style={{backgroundColor: 'rgba(0,0,0,0)', border: 'none', outline: '#F7F7F7', marginTop: '87.6vh', position: 'fixed'}} onClick={() => {history.push({pathname: '/inrecipe/order', state:{id: id, addr: addr, phoneNum: phoneNum, recipeKey: 10}})}}>
                        <img style = {{width:'84.36vw'}} src= {(require('../image/InRecipe10/Asset 73.png').default)}/>
                    </Button>
                </div>
                <Modal show={ischangeShow} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" size="lg" centered style={{}}>
                    <Modal.Header>
                        <Modal.Title style={{ fontFamily: 'AppleNeoB', width: '100%', height: '6vw', fontSize: '4vw', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>배달 완료</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ fontFamily: 'AppleNeoL', width: '100%', height: '20vw', fontSize: '4vw', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}> 배달을 잘 받으셨나요? </Modal.Body>
                    <Modal.Footer style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Button style={{ width: '30vw', height: '7vw', backgroundColor: 'silver', borderColor: 'silver', fontFamily: 'AppleNeoL', fontSize: '3vw' }} onClick={surveyShow}>
                            네
                          </Button>
                        <Button style={{ width: '30vw', height: '7vw', backgroundColor: 'silver', borderColor: 'silver', fontFamily: 'AppleNeoL', fontSize: '3vw' }} onClick={handleClose}>
                            아니요
                          </Button>
                    </Modal.Footer>
                </Modal>
                <div className="Recipeimage" style={{position: 'relative', display:'flex', width:'100vw', flexDirection:'column',alignItems:'center'}}>
                    <div className= "Recipeimage" style={{display:'flex', width:'100vw', flexDirection:'column',alignItems:'center'}}>
                        <img style = {{width: '100vw'}} src= {require('../image/InRecipe10/jjajang.png').default}/>
                    </div>
                    <div className= "Recipetextbox" style={{position: 'absolute', display:'flex', width:'100vw', flexDirection:'column',alignItems:'center',marginTop: '55vw'}}>
                        <img style = {{width: '96.58vw'}} src= {require('../image/InRecipe10/Asset 72.png').default}/>
                    </div>
                    <div className= "Recipetext" style={{position: 'absolute', display:'flex', width:'75vw', height: '42.48vw',flexDirection:'row',alignItems:'center', justifyContent: 'space-between',marginTop: '53vw', backgroundColor: 'rgba(0,0,0,0)'}}>
                        <div style = {{display: 'flex', flexDirection: 'column', height: '18vw', justifyContent: 'space-between'}}>
                            <div style={{display: 'flex', flexDirection: 'column', fontFamily: 'AppleNeoM', fontSize: '6.15vw', color: 'rgba(85,85,85)'}}>짜장면</div>
                            <div style={{fontFamily: 'AppleNeoL', fontSize: '3.33vw', color: 'rgba(85,85,85)'}}>{"Puppy\'s Jajangmyeon"}</div>
                            <div style={{marginTop: '3vw',fontFamily: 'AppleNeoL', fontSize: '3.33vw', color: 'rgba(85,85,85, 0.5)'}}>몸에 좋고 맛있는 강아지용 짜장면!</div>
                        </div>
                        <div style = {{display: 'flex', flexDirection: 'column', height: '11vw', justifyContent: 'space-between'}}>
                            <img style = {{width: '13vw', height: '3.59vw'}} src= {require('../image/InRecipe10/Asset 93.png').default}/>
                            <img style = {{width: '11.71vw'}} src= {require('../image/InRecipe10/Asset 31.png').default}/>
                        </div>
                    </div>
                </div>
                <div className="RecipeSumFormat" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <div className="RecipeSum" style={{display: 'flex', flexDirection: 'column', width:'84.10vw', marginTop: '40vw'}}>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', fontSize: '5.13vw', fontFamily: 'AppleNeoB'}}>
                                기본 재료
                        </div>
                        <hr style = {{height: '0.5vw', backgroundColor: 'black', marginTop: '5vw', width: '84.5vw'}}/>
                    </div>
                </div>
                <div className="RecipeSauce" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width:'100vw'}}>
                    {table_ingred}
                </div>
                {steps_ingred}
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '15vh'}}>
                </div>
            </div>
        }
        { isSurvey &&
            <div style={{ width: '100vw', backgroundColor: '#FFB53F', overflowX: 'hidden' }}>
                <div style={{ display: 'flex', flexDirection: 'column', marginTop: vhTovw(10), alignItems: 'center'}}>
                    <img style={{width: vhTovw(12.32) }} src={require('../image/InRecipeSurvey/Asset 105.png').default} />
                </div>
                <div className="Q1" style={{ display: 'flex', flexDirection: 'column', marginTop: vhTovw(6), alignItems: 'center' }}>
                    <img style={{ width: vhTovw(33.37) }} src={require('../image/InRecipeSurvey/Asset 106.png').default} />
                    <div style={{ display: 'flex', flexDirection: 'column', marginTop: vhTovw(5), alignItems: 'center' }}>
                        <Button onClick={() => { setSurveyOneKey(1) }} style={{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',  backgroundColor: 'rgba(0,0,0,0)', border: 'none', outline: 'none' }}>
                            <img style={{ width: vhTovw(32) }} src={(surveyOneKey === 1) ? (require('../image/InRecipeSurvey/Asset 112.png').default) : (require('../image/InRecipeSurvey/Asset 107.png').default)} />
                        </Button>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', marginTop: vhTovw(1), alignItems: 'center' }}>
                        <Button onClick={() => { setSurveyOneKey(2) }} style={{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',  backgroundColor: 'rgba(0,0,0,0)', border: 'none', outline: 'none' }}>
                            <img style={{ width: vhTovw(32) }} src={(surveyOneKey === 2) ? (require('../image/InRecipeSurvey/Asset 113.png').default) : (require('../image/InRecipeSurvey/Asset 108.png').default)} />
                        </Button>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', marginTop: vhTovw(1), alignItems: 'center' }}>
                        <Button onClick={() => { setSurveyOneKey(3) }} style={{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',  backgroundColor: 'rgba(0,0,0,0)', border: 'none', outline: 'none' }}>
                            <img style={{ width: vhTovw(32) }} src={(surveyOneKey === 3) ? (require('../image/InRecipeSurvey/Asset 114.png').default) : (require('../image/InRecipeSurvey/Asset 109.png').default)} />
                        </Button>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', marginTop: vhTovw(1), alignItems: 'center' }}>
                        <Button onClick={() => { setSurveyOneKey(4) }} style={{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',  backgroundColor: 'rgba(0,0,0,0)', border: 'none', outline: 'none' }}>
                            <img style={{ width: vhTovw(32) }} src={(surveyOneKey === 4) ? (require('../image/InRecipeSurvey/Asset 115.png').default) : (require('../image/InRecipeSurvey/Asset 110.png').default)} />
                        </Button>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', marginTop: vhTovw(1), alignItems: 'center' }}>
                        <Button onClick={() => { setSurveyOneKey(5) }} style={{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',  backgroundColor: 'rgba(0,0,0,0)', border: 'none', outline: 'none' }}>
                            <img style={{ width: vhTovw(32) }} src={(surveyOneKey === 5) ? (require('../image/InRecipeSurvey/Asset 111.png').default) : (require('../image/OrderSurvey/Asset 103.png').default)} />
                        </Button>
                    </div>
                    {(surveyOneKey === 5) &&
                        <form style = {{position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: vhTovw(1)}}>
                            <div style = {{display: 'flex', flexDirection: 'column', height: vhTovw(5), width: vhTovw(32), backgroundColor: '#FF5C4D', fontSize: vhTovw(2.72), borderRadius: vhTovw(1.26), alignItems: 'center', justifyContent: 'center'}}>
                                <textarea value={surveyOneGuitar} onChange={handleTextSurveyOneGuitar} onClick={() => { clickSurveyOneGuitar() }} onBlur={() => { clickSurveyOneGuitarBlur() }} style ={{height: vhTovw(3), width: vhTovw(28),  backgroundColor: 'rgba(0,0,0,0)', color: 'white', fontSize: vhTovw(1.85), border: 'none', outline: 'none'}} />
                            </div>
                        </form>
                    }
                </div>
                <div className="Q2" style={{ display: 'flex', flexDirection: 'column', marginTop: vhTovw(6), alignItems: 'center' }}>
                    <img style={{width: vhTovw(36.97) }} src={require('../image/InRecipeSurvey/Asset 116.png').default} />
                    <div style={{ display: 'flex', flexDirection: 'column', marginTop: vhTovw(5), alignItems: 'center' }}>
                        <Button onClick={() => { setSurveyTwoKey(1) }} style={{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',  backgroundColor: 'rgba(0,0,0,0)', border: 'none', outline: 'none' }}>
                            <img style={{ width: vhTovw(32) }} src={(surveyTwoKey === 1) ? (require('../image/InRecipeSurvey/Asset 158.png').default) : (require('../image/InRecipeSurvey/Asset 117.png').default)} />
                        </Button>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', marginTop: vhTovw(1), alignItems: 'center' }}>
                        <Button onClick={() => { setSurveyTwoKey(2) }} style={{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',  backgroundColor: 'rgba(0,0,0,0)', border: 'none', outline: 'none' }}>
                            <img style={{ width: vhTovw(32) }} src={(surveyTwoKey === 2) ? (require('../image/InRecipeSurvey/Asset 122.png').default) : (require('../image/InRecipeSurvey/Asset 118.png').default)} />
                        </Button>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', marginTop: vhTovw(1), alignItems: 'center' }}>
                        <Button onClick={() => { setSurveyTwoKey(3) }} style={{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',  backgroundColor: 'rgba(0,0,0,0)', border: 'none', outline: 'none' }}>
                            <img style={{ width: vhTovw(32) }} src={(surveyTwoKey === 3) ? (require('../image/InRecipeSurvey/Asset 123.png').default) : (require('../image/InRecipeSurvey/Asset 119.png').default)} />
                        </Button>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', marginTop: vhTovw(1), alignItems: 'center' }}>
                        <Button onClick={() => { setSurveyTwoKey(4) }} style={{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',  backgroundColor: 'rgba(0,0,0,0)', border: 'none', outline: 'none' }}>
                            <img style={{ width: vhTovw(32) }} src={(surveyTwoKey === 4) ? (require('../image/InRecipeSurvey/Asset 157.png').default) : (require('../image/InRecipeSurvey/Asset 124.png').default)} />
                        </Button>
                    </div>
                </div>
                <div className="Q3" style={{ display: 'flex', flexDirection: 'column', marginTop: vhTovw(6), alignItems: 'center' }}>
                    <img style={{width: vhTovw(30.17) }} src={require('../image/InRecipeSurvey/Asset 125.png').default} />
                    <form style = {{position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: vhTovw(3.5)}}>
                        <div style = {{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: vhTovw(6.12), width: vhTovw(34.98), backgroundColor: '#FF5C4D', fontSize: vhTovw(2.72), borderRadius: vhTovw(1.26)}}>
                            <textarea value={surveyThree} onChange={handleTextSurveyThree} onClick={() => { clickSurveyThree() }} onBlur={() => { clickSurveyThreeBlur() }} style ={{height: vhTovw(2.77), width: vhTovw(30.98), backgroundColor: 'rgba(0,0,0,0)', color: 'rgba(255,255,255,1)', fontSize: vhTovw(1.85), border: 'none', outline: 'none'}} />
                        </div>
                    </form>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: vhTovw(10) }}>
                    <Button onClick={() => submitSurvey()} style={{ backgroundColor: 'rgba(0,0,0,0)', border: 'none' }}>
                        <img style={{ width: vhTovw(38.98) }} src={require('../image/BeforeLogin3/Asset 128.png').default} />
                    </Button>
                    <div style={{ display: 'flex', flexDirection: 'column', height: vhTovw(3.08), backgroundColor: '#FFB53F' }}>
                    </div>
                </div>
            </div>
        }
    </div>

  );
}

export default InRecipeMain10;
