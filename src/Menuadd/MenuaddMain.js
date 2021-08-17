import React, {Component, useEffect} from 'react';
import axios from 'axios';
import { Navbar, Nav, Form, FormControl, Button, Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const url = "http://ec2-18-224-7-85.us-east-2.compute.amazonaws.com:8080/mungApi";

function MenuaddMain({history, match, location}) {
  const [id, setId] = React.useState(location.state.id);
  const [addr, setAddr] = React.useState(location.state.addr);
  const [phoneNum, setPhoneNum] = React.useState(location.state.phoneNum);
  const [MenuName, setMenuName] = React.useState("메뉴 이름을 입력해 주세요");
  const [Reason, setReason] = React.useState("이유를 간략하게 적어주세요");
  const [IsSubmitShow, setIsSubmitShow] = React.useState(false);
  const [IsThanks, setIsThanks] = React.useState(false);

  const handleTextChangeMenuName = (event) => {
    setMenuName(event.target.value);
  };

  const handleTextChangeReason = (event) => {
    setReason(event.target.value);
  };

  const goBack = () =>{
    history.goBack();
  };

  const handleClose = () => setIsSubmitShow(false);
  const handleShow = () => {
    if(MenuName === "메뉴 이름을 입력해 주세요" || MenuName === "" || Reason === "이유를 간략하게 적어주세요" || Reason === ""){
        alert("이름과 이유를 모두 입력해주세요.")
    }
    else{
      setIsSubmitShow(true);
    }
  };
  const handleSubmit = () => {
    //서버 통신
    axios.post(url+"/user/newmenu/", {
            params: {
                user_name:id,
                text: Reason,
                new_menu: MenuName
            }
        }).then((response) => {
            console.log(response);
            setIsSubmitShow(false);
            setIsThanks(true);
            setTimeout(() => {
                history.push({pathname: '/main', state:{id: id, phoneNum: phoneNum}});
            }, 2000);
        });
  };

  function toVW(num){
    let vw = num*2.164;
    let str = String(vw) + 'vw';
    return str;
  };

  const vhTovw = (num) => {
    return toVW(num);
  };

  function clickTextformOne(){
    if (MenuName === "메뉴 이름을 입력해 주세요"){
        setMenuName("");
    }
  };

  function clickTextformOneBlur(){
    if (MenuName === ""){
        setMenuName("메뉴 이름을 입력해 주세요");
    }
  };

  function clickTextformTwo(){
    if (Reason === "이유를 간략하게 적어주세요"){
        setReason("");
    }
  };

  function clickTextformTwoBlur(){
    if (Reason === ""){
        setReason("이유를 간략하게 적어주세요");
    }
  };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  return (
    <div className="MenuAdd" style = {{height: '100vh', width: '100vw', backgroundColor: '#F7F7F7'}}>
        { !IsThanks ?
        (
        <div>
            <div className="TopNav">
                <Navbar fixed='top' style={{display:'flex', flexDirection: 'row', width:'100vw', height: vhTovw(10.86), backgroundColor: '#F7F7F7', justifyContent: 'center', alignItems: 'flex-end'}}>
                    <div style={{display:'flex', flexDirection: 'row', width:'84.10vw', backgroundColor: '#F7F7F7', justifyContent: 'space-between'}}>
                        <Button style={{backgroundColor: 'rgba(0,0,0,0)', border: 'none', outline: 'none'}} onClick={goBack}>
                            <img style = {{height:vhTovw(4.86)}} src= {require('../image/Menuadd/Asset 34.png').default}/>
                        </Button>
                    </div>
                </Navbar>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', marginTop: vhTovw(10)}}>
                <img style = {{width:'30.77vw', marginLeft: '8.3vw', marginTop: vhTovw(3)}} src= {require('../image/Menuadd/Asset 35.png').default}/>
            </div>
            <div style={{display:'flex', flexDirection:'column', marginTop: vhTovw(8), backgroundColor: '#F7F7F7'}}>
                <img style = {{width:'20.09vw', marginLeft: '8.3vw'}} src= {require('../image/Menuadd/Asset 36.png').default}/>
            </div>
            <div style={{display:'flex', flexDirection:'column', backgroundColor: '#F7F7F7'}}>
                <img style = {{width:'96.92vw', position: 'absolute', marginLeft: '1.45vw', zIndex: '1'}} src= {require('../image/Menuadd/Asset 44.png').default}/>
                <form style = {{marginTop: '11.47vw', marginLeft: '12vw', zIndex: '2'}}>
                    <label>
                        <textarea value={MenuName} onChange = {handleTextChangeMenuName} onClick= {() => {clickTextformOne()}} onBlur= {() => {clickTextformOneBlur()}} style ={{height: '20vw', width:'76vw', fontFamily: 'AppleNeoL', fontSize: '3vw', border: 'none', color: 'rgba(85,85,85,1)'}} />
                    </label>
                </form>
            </div>
            <div style={{display:'flex', flexDirection:'column', marginTop: vhTovw(11), backgroundColor: '#F7F7F7'}}>
                <img style = {{width:'9.4vw', marginLeft: '8.3vw'}} src= {require('../image/Menuadd/Asset 38.png').default}/>
            </div>
            <div style={{display:'flex', flexDirection:'column', backgroundColor: '#F7F7F7'}}>
                <img style = {{width:'96.92vw', position: 'absolute', marginLeft: '1.45vw', zIndex: '1'}} src= {require('../image/Menuadd/Asset 44.png').default}/>
                <form style = {{marginTop: '11.47vw', marginLeft: '12vw', zIndex: '2'}}>
                    <label>
                        <textarea value={Reason} onChange = {handleTextChangeReason} onClick= {() => {clickTextformTwo()}} onBlur= {() => {clickTextformTwoBlur()}} style ={{height: '20vw', width:'76vw', fontFamily: 'AppleNeoL', fontSize: '3vw', border: 'none', color: 'rgba(85,85,85,1)'}} />
                    </label>
                </form>
            </div>
            <Modal show = {IsSubmitShow} onHide = {handleClose} aria-labelledby="contained-modal-title-vcenter" size= "lg"centered>
                <Modal.Header style={{display: 'flex', flexDirection: 'column'}}>
                    <Modal.Title style={{fontFamily:'AppleNeoB', width: '100%', height: '10vw', fontSize: '3.5vw', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}} centered>다음 정보로 메뉴 추가</Modal.Title>
                    <Modal.Title style={{fontFamily:'AppleNeoB', width: '100%', height: '4vw', fontSize: '3.5vw', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}} centered>요청 하시겠습니까?</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{fontFamily:'AppleNeoL', marginTop: '3vw', width: '100%', height: '5vw', fontSize: '4vw', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}> 메뉴 이름: {MenuName}</Modal.Body>
                <Modal.Body style={{fontFamily:'AppleNeoL', width: '100%', height: '30vw', fontSize: '4vw', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <div>
                이유: {Reason.slice(0,20)}
                </div>
                <div>
                {Reason.slice(20,)}
                </div>
                </Modal.Body>
                <Modal.Footer style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                    <Button style={{width:'30vw', height: '7vw',backgroundColor:'silver', borderColor:'silver', fontFamily: 'AppleNeoL', fontSize: '3vw'}} onClick={handleSubmit}>
                        네, 요청합니다
                    </Button>
                    <Button style={{width:'30vw', height: '7vw', backgroundColor:'silver', borderColor:'silver', fontFamily: 'AppleNeoL', fontSize: '3vw'}} onClick={handleClose}>
                        아니요
                    </Button>
                </Modal.Footer>
            </Modal>
            <div style={{display: 'flex', flexDirection: 'column', marginTop: '34vw', marginLeft: '6.8vw'}}>
                <Button style={{backgroundColor: 'rgba(0,0,0,0)', border: 'none', outline: '#F7F7F7', width:'86.5vw'}} onClick={handleShow}>
                    <img style = {{width:'84.36vw'}} src= {(require('../image/Menuadd/Asset 40.png').default)}/>
                </Button>
            </div>
        </div>) : (
        <div>
                <img style = {{width:'100vw'}} src= {require('../image/Menuadd/thanksimg.jpg').default}/>
        </div>
        )
        }
    </div>
  );
}

export default MenuaddMain;
