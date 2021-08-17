import React, {Component, useEffect} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import { Navbar, Nav, Form, FormControl, Button, Dropdown, Table, Tabs, Tab, Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const url = "http://ec2-18-224-7-85.us-east-2.compute.amazonaws.com:8080/mungApi";
function InRecipeMain9({history, match, location}) {
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

  const ingred = '{ "닭가슴살": "290 (g) / 100 (g)", "당근": "50 (g)", "파프리카": "노랑 반 (개), 빨강 반 (개)", "브로콜리": "2 (조각)", "검은깨": "30 (g)", "현미식초": "20 (g)"}';
  const equip = ["찜기(찜틀)", "종이호일"];
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
                    <img style= {{width: '100vw'}} src={require("../image/InRecipe9/1.jpg").default}/>
                    <div style = {{display: 'flex', flexDirection: 'column', width: '90%', marginTop: '2vw', fontSize: '4.53vw', fontFamily: 'AppleNeoL', color: 'rgb(85,85,85)'}}>1. 닭가슴살을 전부 식초물에 담가 30분간 소독해주고, 당근, 파프리카, 브로콜리를 잘 씻어준다.</div>
                </div>
                <div style = {{display: 'flex', flexDirection: 'column', width: '100vw', alignItems: 'center', marginTop: '10vw', marginBottom: '5vw'}}>
                    <div style = {{display: 'flex', flexDirection: 'column', width: '90%', marginTop: '2vw', fontSize: '5vw', fontFamily: 'AppleNeoB'}}>STEP 2</div>
                    <br></br>
                    <img style= {{width: '100vw'}} src={require("../image/InRecipe9/2.jpg").default}/>
                    <div style = {{display: 'flex', flexDirection: 'column', width: '90%', marginTop: '2vw', fontSize: '4.53vw', fontFamily: 'AppleNeoL', color: 'rgb(85,85,85)'}}>2. 당근을 얇고 길게 썰어줍니다.</div>
                </div>
                <div style = {{display: 'flex', flexDirection: 'column', width: '100vw', alignItems: 'center', marginTop: '10vw', marginBottom: '5vw'}}>
                    <div style = {{display: 'flex', flexDirection: 'column', width: '90%', marginTop: '2vw', fontSize: '5vw', fontFamily: 'AppleNeoB'}}>STEP 3</div>
                    <br></br>
                    <img style= {{width: '100vw'}} src={require("../image/InRecipe9/3.jpg").default}/>
                    <div style = {{display: 'flex', flexDirection: 'column', width: '90%', marginTop: '2vw', fontSize: '4.53vw', fontFamily: 'AppleNeoL', color: 'rgb(85,85,85)'}}>3. 파프리카를 얇고 길게 썰어줍니다.</div>
                </div>
                <div style = {{display: 'flex', flexDirection: 'column', width: '100vw', alignItems: 'center', marginTop: '10vw', marginBottom: '5vw'}}>
                    <div style = {{display: 'flex', flexDirection: 'column', width: '90%', marginTop: '2vw', fontSize: '5vw', fontFamily: 'AppleNeoB'}}>STEP 4</div>
                    <br></br>
                    <img style= {{width: '100vw'}} src={require("../image/InRecipe9/4.jpg").default}/>
                    <div style = {{display: 'flex', flexDirection: 'column', width: '90%', marginTop: '2vw', fontSize: '4.53vw', fontFamily: 'AppleNeoL', color: 'rgb(85,85,85)'}}>4. 브로콜리를 물에 1분간 데치고 찬 물에 헹궈줍니다.</div>
                </div>
                <div style = {{display: 'flex', flexDirection: 'column', width: '100vw', alignItems: 'center', marginTop: '10vw', marginBottom: '5vw'}}>
                    <div style = {{display: 'flex', flexDirection: 'column', width: '90%', marginTop: '2vw', fontSize: '5vw', fontFamily: 'AppleNeoB'}}>STEP 5</div>
                    <br></br>
                    <img style= {{width: '100vw'}} src={require("../image/InRecipe9/5.jpg").default}/>
                    <div style = {{display: 'flex', flexDirection: 'column', width: '90%', marginTop: '2vw', fontSize: '4.53vw', fontFamily: 'AppleNeoL', color: 'rgb(85,85,85)'}}>5. 닭가슴살 290(g)의 물기를 잘 제거하여 적당한 크기로 잘라 믹서기에 곱게 갈아줍니다.</div>
                </div>
                <div style = {{display: 'flex', flexDirection: 'column', width: '100vw', alignItems: 'center', marginTop: '10vw', marginBottom: '5vw'}}>
                    <div style = {{display: 'flex', flexDirection: 'column', width: '90%', marginTop: '2vw', fontSize: '5vw', fontFamily: 'AppleNeoB'}}>STEP 6</div>
                    <br></br>
                    <img style= {{width: '100vw'}} src={require("../image/InRecipe9/6.jpg").default}/>
                    <div style = {{display: 'flex', flexDirection: 'column', width: '90%', marginTop: '2vw', fontSize: '4.53vw', fontFamily: 'AppleNeoL', color: 'rgb(85,85,85)'}}>6. 다른 닭가슴살 100(g)과 검은 깨 전부를 넣고 곱게 갈아준 뒤, 따로 담아준다.</div>
                </div>
                <div style = {{display: 'flex', flexDirection: 'column', width: '100vw', alignItems: 'center', marginTop: '10vw', marginBottom: '5vw'}}>
                    <div style = {{display: 'flex', flexDirection: 'column', width: '90%', marginTop: '2vw', fontSize: '5vw', fontFamily: 'AppleNeoB'}}>STEP 7</div>
                    <br></br>
                    <img style= {{width: '100vw'}} src={require("../image/InRecipe9/7.jpg").default}/>
                    <div style = {{display: 'flex', flexDirection: 'column', width: '90%', marginTop: '2vw', fontSize: '4.53vw', fontFamily: 'AppleNeoL', color: 'rgb(85,85,85)'}}>7. 삶은 브로콜리를 아주 잘게 다져준다.</div>
                </div>
                <div style = {{display: 'flex', flexDirection: 'column', width: '100vw', alignItems: 'center', marginTop: '10vw', marginBottom: '5vw'}}>
                    <div style = {{display: 'flex', flexDirection: 'column', width: '90%', marginTop: '2vw', fontSize: '5vw', fontFamily: 'AppleNeoB'}}>STEP 8</div>
                    <br></br>
                    <img style= {{width: '100vw'}} src={require("../image/InRecipe9/8.jpg").default}/>
                    <div style = {{display: 'flex', flexDirection: 'column', width: '90%', marginTop: '2vw', fontSize: '4.53vw', fontFamily: 'AppleNeoL', color: 'rgb(85,85,85)'}}>8. 종이 호일을 깔고 처음 갈아 놓은 닭가슴살을 네모난 모양으로 얇게 펴서 손질한 야채들을 일렬로 잘 놓아준다.</div>
                </div>
                <div style = {{display: 'flex', flexDirection: 'column', width: '100vw', alignItems: 'center', marginTop: '10vw', marginBottom: '5vw'}}>
                    <div style = {{display: 'flex', flexDirection: 'column', width: '90%', marginTop: '2vw', fontSize: '5vw', fontFamily: 'AppleNeoB'}}>STEP 9</div>
                    <br></br>
                    <img style= {{width: '100vw'}} src={require("../image/InRecipe9/9.jpg").default}/>
                    <div style = {{display: 'flex', flexDirection: 'column', width: '90%', marginTop: '2vw', fontSize: '4.53vw', fontFamily: 'AppleNeoL', color: 'rgb(85,85,85)'}}>9. 김밥 말듯이 돌돌 말아준다.</div>
                </div>
                <div style = {{display: 'flex', flexDirection: 'column', width: '100vw', alignItems: 'center', marginTop: '10vw', marginBottom: '5vw'}}>
                    <div style = {{display: 'flex', flexDirection: 'column', width: '90%', marginTop: '2vw', fontSize: '5vw', fontFamily: 'AppleNeoB'}}>STEP 10</div>
                    <br></br>
                    <img style= {{width: '100vw'}} src={require("../image/InRecipe9/10.jpg").default}/>
                    <div style = {{display: 'flex', flexDirection: 'column', width: '90%', marginTop: '2vw', fontSize: '4.53vw', fontFamily: 'AppleNeoL', color: 'rgb(85,85,85)'}}>10. 검은 깨와 간 닭가슴살을 조금 더 넓은 크기로 얇게 펴서 방금 말아 놓은 김밥 위로 감싸듯이 말아준다.</div>
                </div>
                <div style = {{display: 'flex', flexDirection: 'column', width: '100vw', alignItems: 'center', marginTop: '10vw', marginBottom: '5vw'}}>
                    <div style = {{display: 'flex', flexDirection: 'column', width: '90%', marginTop: '2vw', fontSize: '5vw', fontFamily: 'AppleNeoB'}}>STEP 11</div>
                    <br></br>
                    <img style= {{width: '100vw'}} src={require("../image/InRecipe9/11.jpg").default}/>
                    <div style = {{display: 'flex', flexDirection: 'column', width: '90%', marginTop: '2vw', fontSize: '4.53vw', fontFamily: 'AppleNeoL', color: 'rgb(85,85,85)'}}>11. 종이 호일로 감싸고 양쪽 끝을 잘 감싸 김밥 모양을 정돈한 뒤, 찜기에 강불로 40분간 쪄준다.</div>
                </div>
                <div style = {{display: 'flex', flexDirection: 'column', width: '100vw', alignItems: 'center', marginTop: '10vw', marginBottom: '5vw'}}>
                    <div style = {{display: 'flex', flexDirection: 'column', width: '90%', marginTop: '2vw', fontSize: '5vw', fontFamily: 'AppleNeoB'}}>STEP 12</div>
                    <br></br>
                    <img style= {{width: '100vw'}} src={require("../image/InRecipe9/12.jpg").default}/>
                    <div style = {{display: 'flex', flexDirection: 'column', width: '90%', marginTop: '2vw', fontSize: '4.53vw', fontFamily: 'AppleNeoL', color: 'rgb(85,85,85)'}}>12. 적당한 크기로 잘라준다.</div>
                </div>
                <div style = {{display: 'flex', flexDirection: 'column', width: '100vw', alignItems: 'center', marginTop: '7vw', marginBottom: '5vw'}}>
                    <div style = {{display: 'flex', flexDirection: 'column', width: '90%', marginTop: '2vw', fontSize: '3vw', fontFamily: 'AppleNeoL', color: 'rgb(85,85,85)'}}>{"레시피 출처: https://www.youtube.com/watch?v=0dMgwW7A104"}</div>
                </div>
            </div>


  const goBack = () =>{
    history.goBack();
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
          let val = event.target.value.replace(/\n/g, "");
          setSurveyOneGuitar(val);
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
          let val = event.target.value.replace(/\n/g, "");
          setSurveyThree(val);
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
          let survey1;
          if (surveyOneKey === 5) {
            survey1 = surveyOneGuitar;
          } else {
              survey1 = surveyOneKey.toString();
          }
          axios.post(url+"/user/survey3/", {
              params: {
                  username: "",
                  q1: survey1,
                  q2: surveyTwoKey.toString(),
                  q3: surveyThree
              }
          }).then((response) => {
              console.log(response);
              alert('감사합니다!');

              handleClose();
              surveyClose();
          });

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
                    <Navbar fixed='top' style={{display:'flex', flexDirection: 'row', width:'100vw', height: vhTovw(10.86), backgroundColor: 'rgba(0,0,0,0)', justifyContent: 'center', alignItems: 'flex-end'}}>
                        <div style={{display:'flex', flexDirection: 'row', width:'86.10vw', backgroundColor: 'rgba(0,0,0,0)', justifyContent: 'space-between'}}>
                            {!isQR && <Button style={{backgroundColor: 'rgba(0,0,0,0)', border: 'none', outline: 'none'}} onClick={goBack}>
                                <img style = {{height: vhTovw(4.86)}} src= {require('../image/InRecipe9/Asset 69.png').default}/>
                            </Button>}
                            {!isQR && <Button style={{backgroundColor: 'rgba(0,0,0,0)', border: 'none', outline: '#F7F7F7'}} onClick={() => {history.push({pathname: '/inrecipe/order', state:{id: id, addr: addr, phoneNum: phoneNum, recipeKey: 9}})}}>
                                <img style = {{width:'37.95vw'}} src= {(require('../image/InRecipe/Asset 161.png').default)}/>
                            </Button>}
                        </div>
                    </Navbar>
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
                        <img style = {{width: '100vw'}} src= {require('../image/InRecipe9/main.jpg').default}/>
                    </div>
                    <div className= "Recipetextbox" style={{position: 'absolute', display:'flex', width:'100vw', flexDirection:'column',alignItems:'center',marginTop: '85vw'}}>
                        <img style = {{width: '96.58vw'}} src= {require('../image/InRecipe1/Asset 72.png').default}/>
                    </div>
                    <div className= "Recipetext" style={{position: 'absolute', display:'flex', width:'75vw', height: '42.48vw',flexDirection:'row',alignItems:'center', justifyContent: 'space-between',marginTop: '82vw', backgroundColor: 'rgba(0,0,0,0)'}}>
                        <div style = {{display: 'flex', flexDirection: 'column', height: '18vw', justifyContent: 'space-between'}}>
                            <div style={{display: 'flex', flexDirection: 'column', fontFamily: 'AppleNeoM', fontSize: '6.15vw', color: 'rgba(85,85,85)'}}>김밥</div>
                            <div style={{fontFamily: 'AppleNeoL', fontSize: '3.33vw', color: 'rgba(85,85,85)'}}>{"Puppy\'s Kimbab"}</div>
                            <div style={{marginTop: '3vw',fontFamily: 'AppleNeoL', fontSize: '3.33vw', color: 'rgba(85,85,85, 0.5)'}}>몸에 좋고 맛있는 강아지용 김밥!</div>
                        </div>
                        <div style = {{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                            <img style = {{height: '14.02vw'}} src= {require('../image/InRecipe9/Asset 156.png').default}/>
                        </div>
                    </div>
                </div>
                {!isQR && <div className="RecipeSumFormat" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <div className="RecipeSum" style={{display: 'flex', flexDirection: 'column', width:'84.10vw', marginTop: '30vw'}}>
                        <hr style = {{height: '0.5vw', backgroundColor: 'black', width: '84.5vw'}}/>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', fontSize: '5.13vw', fontFamily: 'AppleNeoB'}}>
                                {'★"'+dogname+'"의 하루 권장 간식량은 '+parseInt(fitCal[0])+"kcal로 "+fitCal[1]+"일 간 주시면 됩니다!!★"}
                        </div>
                        <hr style = {{height: '0.5vw', backgroundColor: 'black', width: '84.5vw'}}/>
                    </div>
                </div>}
                <div className="RecipeSumFormat" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <div className="RecipeSum" style={{display: 'flex', flexDirection: 'column', width:'84.10vw', marginTop: '25vw'}}>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', fontSize: '5.13vw', fontFamily: 'AppleNeoB'}}>
                                추가 필요 도구
                        </div>
                        <hr style = {{height: '0.5vw', backgroundColor: 'black', marginTop: '5vw', width: '84.5vw'}}/>
                    </div>
                </div>
                <div className="RecipeSauce" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width:'100vw'}}>
                    {table_equip}
                </div>
                <div className="RecipeSumFormat" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <div className="RecipeSum" style={{display: 'flex', flexDirection: 'column', width:'84.10vw', marginTop: '10vw'}}>
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
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: vhTovw(15)}}>
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

export default InRecipeMain9;
