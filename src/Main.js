import React, {Component, useEffect} from 'react';
import axios from 'axios';
import { Navbar, Nav, Form, FormControl, Button, Dropdown,} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter ,Route, Link} from 'react-router-dom';
import ReactDOM from 'react-dom';
import Recipes from './library/Recipes';
import dotenv from "dotenv";

dotenv.config();

const url = "http://ec2-18-224-7-85.us-east-2.compute.amazonaws.com:8080/mungApi";
var recipeList =[];

async function getData(){
    const response = await axios.get(url+"recipe/",);

    for(var i = 0; i < response.data.length; i++) {
        const datas = response.data[i];
        const component = <Recipes key={datas.name} name={datas.name} img={datas.endpoint}/>;
        recipeList.push(component)
    }
    return recipeList;
};

function kakao_initialize() {
    if (!window.Kakao.isInitialized()){
        window.Kakao.init(process.env.REACT_APP_KAKAOAPI_KEY);
    }
    window.Kakao.Link.createDefaultButton({
        container: '#kakao-link-btn',
        objectType: 'feed',
        content: {
            title: '멍시피',
            description: '우리 강아지에게 수제간식 만들어주세요^^',
            imageUrl: 'https://instagram.ficn2-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/225651486_4248708801831106_2903970847338750214_n.jpg?_nc_ht=instagram.ficn2-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=KYFmkOhEG_kAX-VxqQZ&edm=AABBvjUBAAAA&ccb=7-4&oh=d5d91c640cf5ee3f9a196546ca870685&oe=610A8272&_nc_sid=83d603',
            link:{
                mobileWebUrl: 'http://mungcipe.kro.kr',
                webUrl: 'http://mungcipe.kro.kr',
            },
        },
        buttons: [
            {
                title: '웹으로 보기',
                link: {
                    mobileWebUrl: 'http://mungcipe.kro.kr',
                    webUrl: 'http://mungcipe.kro.kr',
                },
            }
        ]

    });
};

function getRecommend(userInfo, isFilter, isSorted) {
    const recipeInfo = {
        0: {
            name: "계란죽",
            age: [2],
            disease: [2, 3],
            favor: [5],
            level: 1,
            tool: [],
            hard: 1,
            allergy: [2]
        },
        1: {
            name: "계란찜",
            age: [2],
            disease: [1, 2, 3],
            favor: [4, 5],
            level: 1,
            tool: [1],
            hard: 1,
            allergy: [2]
        },
        2: {
            name: "고구마만쥬",
            age: [],
            disease: [3],
            favor: [4],
            level: 3,
            tool: [2, 3],
            hard: 2,
            allergy: [2]
        },
        3: {
            name: "김밥",
            age: [1, 2, 3],
            disease: [1, 2],
            favor: [1, 5],
            level: 4,
            tool: [2],
            hard: 2,
            allergy: [1]
        },
        4: {
            name: "리코타치즈",
            age: [],
            disease: [],
            favor: [],
            level: 2,
            tool: [],
            hard: 1,
            allergy: [4]
        },
        5: {
            name: "멍치킨",
            age: [1, 2],
            disease: [1, 2, 3],
            favor: [1, 4],
            level: 3,
            tool: [3],
            hard: 2,
            allergy: [1, 2]
        },
        6: {
            name: "소고기무국",
            age: [1],
            disease: [2],
            favor: [3, 5],
            level: 1,
            tool: [],
            hard: 1,
            allergy: [3]
        },
        7: {
            name: "소시지",
            age: [1, 2, 3],
            disease: [1, 2],
            favor: [1, 5],
            level: 2,
            tool: [],
            hard: 2,
            allergy: [1]
        },
        8: {
            name: "아이스크림",
            age: [1, 2],
            disease: [1, 2],
            favor: [4],
            level: 2,
            tool: [1],
            hard: 3,
            allergy: [4]
        },
        9: {
            name: "치즈볼",
            age: [1, 2, 3],
            disease: [1, 2, 3],
            favor: [1, 4],
            level: 3,
            tool: [2, 3],
            hard: 2,
            allergy: [1, 2]
        },
        10: {
            name: "피자",
            age: [1, 2, 3],
            disease: [1, 2],
            favor: [1, 4, 5],
            level: 4,
            tool: [3],
            hard: 2,
            allergy: [1]
        }
    };
    const user = JSON.parse(userInfo.data);
    let len = Object.keys(recipeInfo).length;
    var scores = [];
    for (var i = 0; i < len; i++){
        scores.push(1);
    }
    //나이 - 재료
    if (!isSorted) {
        for (var i = 0; i < len; i++){
            if (recipeInfo[i].age.includes(user.age)){
                scores[i] += 1;
            }
            for (var j = 0; j < user.disease.length; j++) {
                if (recipeInfo[i].disease.includes(user.disease[j])){
                    scores[i] += 1;
                    break;
                }
            }
            for (var j = 0; j < user.favor.length; j++) {
                if (recipeInfo[i].favor.includes(user.favor[j])){
                    scores[i] += 1;
                    break;
                }
            }
            var levelScore = 0;
            switch(recipeInfo[i].level) {
                case 1: levelScore = 1; break;
                case 2: levelScore = 0.5; break;
                case 3: break;
            }
            scores[i] += levelScore;
        }
    }

    //필터링
    if (isFilter) {
        for (var i = 0; i < len; i++){
            if (recipeInfo[i].hard < user.hard[0] && recipeInfo[i].hard > user.hard[1]) {
                scores[i] = 0;
                console.log((i+1)+" 번째 나가리 / 이유: 딱딱 ");
            }
            for (var j = 0; j < recipeInfo[i].tool.length; j++) {
                if (!user.tools.includes(recipeInfo[i].tool[j])){
                    scores[i] = 0;
                    console.log((i+1)+" 번째 나가리 / 이유: 연장 / 번호: "+ j);
                    break;
                }
            }
            for (var j = 0; j < recipeInfo[i].allergy.length; j++) {
                if (user.allergy.includes(recipeInfo[i].allergy[j])){
                    scores[i] = 0;
                    console.log((i+1)+" 번째 나가리 / 이유: 알러지 / 번호: "+ j);
                    break;
                }
            }
        }
    }

    let recipeNames = [];
    for (var i = 0; i < len; i++){
        if(isFilter){
            if (scores[i] !== 0) {
                let data_ = {id: i, score: scores[i]};
                recipeNames.push(data_);
            }
        }
        else{
            let data_ = {id: i, score: scores[i]};
            recipeNames.push(data_);
        }
    }

    function customsort(a, b) { if(a.score == b.score){ return 0} return a.score < b.score ? 1 : -1; };

    recipeNames.sort(customsort);
    console.log(recipeNames);

    calculateKcal(userInfo, 1000);

    console.log(scores);
    return recipeNames;
}

function calculateKcal(userInfo, foodKcal) {
    const user = JSON.parse(userInfo.data);
    let age = parseInt(user.age/12);
    //1일 간식 칼로리
    var value = 0;
    if (user.pregnant)
        value = 2.4;
    else {
        if (age == 0)
            value = 3;
        else if (age == 1)
            value = 2;
        else if (age == 2) {
            if (user.fat < 3)
                value = 2.2;
            else if (user.fat < 5)
                value = 1.8;
            else if (user.fat == 5)
                value = 1.6;
            else if (user.fat < 8)
                value = 1.4;
            else
                value = 1;
            if (!user.isNeutral)
                value += 0.2;
        } else {
            if (user.fat < 3)
                value = 2;
            else if (user.fat < 5)
                value = 1.6;
            else if (user.fat == 5)
                value = 1.4;
            else if (user.fat < 8)
                value = 1.2;
            else
                value = 0.8;
        }
    }
    const kcal = (10.5) * ((user.weight)**(0.75)) * value;
    const day = parseInt(foodKcal / kcal); // 소수점 버림
    return [kcal, day];
}

function Main({match, history, location}) {
  const [sortRecipe, setsortRecipe] = React.useState("정렬");
  const [id, setId] = React.useState("");
  const [addr, setAddr] = React.useState("");
  const [phoneNum, setPhoneNum] = React.useState("");
  const [recipe, setRecipe] = React.useState();
  const [isFilter, setIsFilter] = React.useState(true);
  const [isSorted, setIsSorted] = React.useState(true);
  const [buttonOutline, setButtonOutline] = React.useState('23.15vw');

  let recipe_eggjuk, recipe_cheeseball, recipe_sogogimuguk,
  recipe_eggjjim, recipe_ricottacheese, recipe_sausage, recipe_icecream, recipe_mungchicken,
  recipe_pizza, recipe_gimbab, recipe_gogumamanju;

  let recipe_array = [];

  function toVW(num){
    let vw = num*2.164;
    let str = String(vw) + 'vw';
    return str;
  };

  const vhTovw = (num) => {
    return toVW(num);
  };

  useEffect(() => {
    kakao_initialize();
    if(!location.state){
        document.location.href = "/";
    }
    else{
    var indexJson;
    axios.get(url+"/user/get/", {
        params: {
            id: location.state.id
        }
    }).then((response) => {
        console.log(response);
        setId(response.data[0].id);
        setAddr(response.data[0].address);
        setPhoneNum(response.data[0].phone);
        return response.data[0];
    }).then((data) => {


  let eggfitCal = calculateKcal(data, 157.3);
  console.log(data.dogname);
  recipe_eggjuk =
        <div className="Recipe0">
            <Button onClick={() => {history.push({pathname: '/inrecipe', state:{id: data.id, addr:data.address, phoneNum: data.phone, fitCal: eggfitCal, dogname: data.dogname}})}} style={{display:'flex', width:'100vw', flexDirection:'column',alignItems:'center', backgroundColor: '#F7F7F7', marginBottom: vhTovw(7), border: 'none'}}>
                <img style = {{width: '84.44vw'}} src= {require('./image/InRecipe/mainpage.png').default}/>
                <div style={{display:'flex', width:'78.46vw', flexDirection:'row', marginTop: vhTovw(2.09), justifyContent: 'space-between'}}>
                   <img style = {{width: '31.54vw', height: '11.11vw'}} src= {require('./image/InRecipe/Asset 143.png').default}/>
                   <div>
                       <img style = {{width: '25.64vw'}} src= {require('./image/Main/Asset 11.png').default}/>
                   </div>
                </div>
            </Button>
        </div>;

  let cheeseballfitCal = calculateKcal(data, 559.6);
 recipe_cheeseball =
        <div className="Recipe1">
            <Button onClick={() => {history.push({pathname: '/inrecipe1', state:{id: data.id, addr:data.address, phoneNum: data.phone, fitCal: cheeseballfitCal, dogname: data.dogname}})}} style={{display:'flex', width:'100vw', flexDirection:'column',alignItems:'center', backgroundColor: '#F7F7F7', marginBottom: vhTovw(7), border: 'none'}}>
                <img style = {{width: '26.32vw', width: '84.44vw'}} src= {require('./image/InRecipe1/mainpage.png').default}/>
                <div style={{display:'flex', width:'78.46vw', flexDirection:'row', marginTop: vhTovw(2.09), justifyContent: 'space-between'}}>
                   <img style = {{height: '11.11vw'}} src= {require('./image/InRecipe1/Asset 144.png').default}/>
                   <div>
                       <img style = {{width: '25.64vw'}} src= {require('./image/Main/Asset 13.png').default}/>
                   </div>
                </div>
            </Button>
        </div>;
  let soupfitCal = calculateKcal(data, 272.2);
 recipe_sogogimuguk =
        <div className="Recipe2">
            <Button onClick={() => {history.push({pathname: '/inrecipe2', state:{id: data.id, addr:data.address, phoneNum: data.phone, fitCal: soupfitCal, dogname: data.dogname}})}} style={{display:'flex', width:'100vw', flexDirection:'column',alignItems:'center', backgroundColor: '#F7F7F7', marginBottom: vhTovw(7), border: 'none'}}>
                <img style = {{width: '84.44vw'}} src= {require('./image/InRecipe2/mainpage.png').default}/>
                <div style={{display:'flex', width:'78.46vw', flexDirection:'row', marginTop: vhTovw(2.09), justifyContent: 'space-between'}}>
                   <img style = {{width: '26.67vw', height: '11.11vw'}} src= {require('./image/InRecipe2/Asset 145.png').default}/>
                   <div>
                       <img style = {{width: '25.64vw'}} src= {require('./image/Main/Asset 11.png').default}/>
                   </div>
                </div>
            </Button>
        </div>;

  let jjimfitCal = calculateKcal(data, 245.8);
 recipe_eggjjim =
        <div className="Recipe3">
            <Button onClick={() => {history.push({pathname: '/inrecipe3', state:{id: data.id, addr:data.address, phoneNum: data.phone, fitCal: jjimfitCal, dogname: data.dogname}})}} style={{display:'flex', width:'100vw', flexDirection:'column',alignItems:'center', backgroundColor: '#F7F7F7', marginBottom: vhTovw(7), border: 'none'}}>
                <img style = {{width: '84.44vw'}} src= {require('./image/InRecipe3/mainpage.png').default}/>
                <div style={{display:'flex', width:'78.46vw', flexDirection:'row', marginTop: vhTovw(2.09), justifyContent: 'space-between'}}>
                   <img style = {{width: '31.03vw', height: '11.11vw'}} src= {require('./image/InRecipe3/Asset 146.png').default}/>
                   <div>
                       <img style = {{width: '25.64vw'}} src= {require('./image/Main/Asset 11.png').default}/>
                   </div>
                </div>
            </Button>
        </div>;

  let cheesefitCal = calculateKcal(data, 517.3);
 recipe_ricottacheese =
        <div className="Recipe4">
            <Button onClick={() => {history.push({pathname: '/inrecipe4', state:{id: data.id, addr:data.address, phoneNum: data.phone, fitCal: cheesefitCal, dogname: data.dogname}})}} style={{display:'flex', width:'100vw', flexDirection:'column',alignItems:'center', backgroundColor: '#F7F7F7', marginBottom: vhTovw(7), border: 'none'}}>
                <img style = {{width: '84.44vw'}} src= {require('./image/InRecipe4/mainpage.png').default}/>
                <div style={{display:'flex', width:'78.46vw', flexDirection:'row', marginTop: vhTovw(2.09), justifyContent: 'space-between'}}>
                   <img style = {{width: '31.62vw', height: '11.11vw'}} src= {require('./image/InRecipe4/Asset 147.png').default}/>
                   <div>
                       <img style = {{width: '25.64vw'}} src= {require('./image/Main/Asset 12.png').default}/>
                   </div>
                </div>
            </Button>
        </div>;

  let sausagefitCal = calculateKcal(data, 583);
 recipe_sausage =
        <div className="Recipe5">
            <Button onClick={() => {history.push({pathname: '/inrecipe5', state:{id: data.id, addr:data.address, phoneNum: data.phone, fitCal: sausagefitCal, dogname: data.dogname}})}} style={{display:'flex', width:'100vw', flexDirection:'column',alignItems:'center', backgroundColor: '#F7F7F7', marginBottom: vhTovw(7), border: 'none'}}>
                <img style = {{width: '84.44vw'}} src= {require('./image/InRecipe5/mainpage.png').default}/>
                <div style={{display:'flex', width:'78.46vw', flexDirection:'row', marginTop: vhTovw(2.09), justifyContent: 'space-between'}}>
                   <img style = {{width: '22.74vw', height: '11.11vw'}} src= {require('./image/InRecipe5/Asset 148.png').default}/>
                   <div>
                       <img style = {{width: '25.64vw'}} src= {require('./image/Main/Asset 12.png').default}/>
                   </div>
                </div>
            </Button>
        </div>;

  let icefitCal = calculateKcal(data, 629.3);
 recipe_icecream =
        <div className="Recipe6">
            <Button onClick={() => {history.push({pathname: '/inrecipe6', state:{id: data.id, addr:data.address, phoneNum: data.phone, fitCal: icefitCal, dogname: data.dogname}})}} style={{display:'flex', width:'100vw', flexDirection:'column',alignItems:'center', backgroundColor: '#F7F7F7', marginBottom: vhTovw(7), border: 'none'}}>
                <img style = {{width: '84.44vw'}} src= {require('./image/InRecipe6/mainpage.png').default}/>
                <div style={{display:'flex', width:'78.46vw', flexDirection:'row', marginTop: vhTovw(2.09), justifyContent: 'space-between'}}>
                   <img style = {{width: '45.26vw', height: '8.89vw'}} src= {require('./image/InRecipe6/Asset 149.png').default}/>
                   <div>
                       <img style = {{width: '25.64vw'}} src= {require('./image/Main/Asset 12.png').default}/>
                   </div>
                </div>
            </Button>
        </div>;

  let chickfitCal = calculateKcal(data, 1501.2);
 recipe_mungchicken =
        <div className="Recipe7">
            <Button onClick={() => {history.push({pathname: '/inrecipe7', state:{id: data.id, addr:data.address, phoneNum: data.phone, fitCal: chickfitCal, dogname: data.dogname}})}} style={{display:'flex', width:'100vw', flexDirection:'column',alignItems:'center', backgroundColor: '#F7F7F7', marginBottom: vhTovw(7), border: 'none'}}>
                <img style = {{width: '84.44vw'}} src= {require('./image/InRecipe7/mainpage.png').default}/>
                <div style={{display:'flex', width:'78.46vw', flexDirection:'row', marginTop: vhTovw(2.09), justifyContent: 'space-between'}}>
                   <img style = {{width: '30.17vw', height: '11.03vw'}} src= {require('./image/InRecipe7/Asset 29.png').default}/>
                   <div>
                       <img style = {{width: '25.64vw'}} src= {require('./image/Main/Asset 13.png').default}/>
                   </div>
                </div>
            </Button>
        </div>;

  let pizzafitCal = calculateKcal(data, 1044.3);
 recipe_pizza =
        <div className="Recipe8">
            <Button onClick={() => {history.push({pathname: '/inrecipe8', state:{id: data.id, addr:data.address, phoneNum: data.phone, fitCal: pizzafitCal, dogname: data.dogname}})}} style={{display:'flex', width:'100vw', flexDirection:'column',alignItems:'center', backgroundColor: '#F7F7F7', marginBottom: vhTovw(7), border: 'none'}}>
                <img style = {{width: '84.44vw'}} src= {require('./image/InRecipe8/mainpage.png').default}/>
                <div style={{display:'flex', width:'78.46vw', flexDirection:'row', marginTop: vhTovw(2.09), justifyContent: 'space-between'}}>
                   <img style = {{width: '18.63vw', height: '11.11vw'}} src= {require('./image/InRecipe8/Asset 150.png').default}/>
                   <div>
                       <img style = {{width: '25.64vw'}} src= {require('./image/Main/Asset 14.png').default}/>
                   </div>
                </div>
            </Button>
        </div>;

  let kimbabfitCal = calculateKcal(data, 662.2);
 recipe_gimbab =
        <div className="Recipe9">
            <Button onClick={() => {history.push({pathname: '/inrecipe9', state:{id: data.id, addr:data.address, phoneNum: data.phone, fitCal: kimbabfitCal, dogname: data.dogname}})}} style={{display:'flex', width:'100vw', flexDirection:'column',alignItems:'center', backgroundColor: '#F7F7F7', marginBottom: vhTovw(7), border: 'none'}}>
                <img style = {{width: '84.44vw'}} src= {require('./image/InRecipe9/mainpage.png').default}/>
                <div style={{display:'flex', width:'78.46vw', flexDirection:'row', marginTop: vhTovw(2.09), justifyContent: 'space-between'}}>
                   <img style = {{width: '21.97vw', height: '11.11vw'}} src= {require('./image/InRecipe9/Asset 151.png').default}/>
                   <div>
                       <img style = {{width: '25.64vw'}} src= {require('./image/Main/Asset 14.png').default}/>
                   </div>
                </div>
            </Button>
        </div>;

  let manjufitCal = calculateKcal(data, 1189.65);
     recipe_gogumamanju =
        <div className="Recipe11">
            <Button onClick={() => {history.push({pathname: '/inrecipe11', state:{id: data.id, addr:data.address, phoneNum: data.phone, fitCal: manjufitCal, dogname: data.dogname}})}} style={{display:'flex', width:'100vw', flexDirection:'column',alignItems:'center', backgroundColor: '#F7F7F7', marginBottom: vhTovw(7), border: 'none'}}>
                <img style = {{width: '84.44vw'}} src= {require('./image/InRecipe11/mainpage.png').default}/>
                <div style={{display:'flex', width:'78.46vw', flexDirection:'row', marginTop: vhTovw(2.09), justifyContent: 'space-between'}}>
                   <img style = {{width: '39.32vw', height: '11.11vw'}} src= {require('./image/InRecipe11/Asset 152.png').default}/>
                   <div>
                       <img style = {{width: '25.64vw'}} src= {require('./image/Main/Asset 13.png').default}/>
                   </div>
                </div>
            </Button>
        </div>;
        recipe_array = [recipe_eggjuk, recipe_eggjjim, recipe_gogumamanju, recipe_gimbab, recipe_ricottacheese, 
            recipe_mungchicken,  recipe_sogogimuguk, recipe_sausage, recipe_icecream, recipe_cheeseball, recipe_pizza];

        indexJson = getRecommend(data, isFilter, isSorted);

        (async () => {
            const recipeL = await getD(indexJson);
            setRecipe(recipeL);
        })();
    
    });
    }
  }, [isFilter, isSorted]);

  async function getD(indexJson){
    let recipeL = [];
    console.log(indexJson);
    for(let i =0; i<indexJson.length; i++){
        recipeL.push(recipe_array[indexJson[i].id]);
    }

    return recipeL;
  };

  function filterChange(){
    if(isFilter){
        alert("※ 강아지에게 적합하지 않은 레시피들도 모두 표시됩니다!");
        setIsFilter(!isFilter);
    }
    else{
        setIsFilter(!isFilter);
    }
  };

  function sortChange(){
    if(isSorted){
        setIsSorted(!isSorted);
        setButtonOutline(vhTovw(9.16));
    }
    else{
        setIsSorted(!isSorted);
        console.log("GANADA");
        setButtonOutline(vhTovw(10.7));
    }
  };


  return (
    <BrowserRouter>
    <div className="App" style = {{backgroundColor: '#F7F7F7'}}>
        <div className="TopNav">
            <Navbar fixed='top' style={{display:'flex', flexDirection: 'row', width:'100vw', height: vhTovw(14.55), backgroundColor: '#F7F7F7', justifyContent: 'center'}}>
                <div style={{display:'flex', flexDirection: 'row', width:'84.10vw', backgroundColor: '#F7F7F7', justifyContent: 'space-between', marginTop: vhTovw(3.4)}}>
                    <Navbar.Brand href="/main">
                        <img style = {{height:'11.28vw'}} src= {require('./image/Main/Asset 19.png').default}/>
                    </Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link id="kakao-link-btn" >
                            <img style = {{height:vhTovw(4.78)}} src= {require('./image/Main/Asset 49.png').default}/>
                        </Nav.Link>
                        <Nav.Link style= {{marginLeft: '1vw'}} onClick={() => {history.push({pathname: '/mypage', state:{id: id, addr:addr, phoneNum: phoneNum}})}}>
                            <img style = {{height:vhTovw(4.78)}} src= {require('./image/Main/Asset 50.png').default}/>
                        </Nav.Link>
                    </Nav>
                </div>
            </Navbar>
        </div>
        <div className="TopFilterNav">
            <Navbar fixed='top' style={{display:'flex', flexDirection: 'row', width:'100vw', height: vhTovw(6.91),backgroundColor: '#F7F7F7', marginTop:vhTovw(12.95), alignItems:'flex-end'}}>
                <Button style={{marginLeft: '7.9vw', display: 'flex', flexDirection: 'column', alignItems:'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0)', border: 'none', borderRadius: vhTovw(2.17), width: buttonOutline, height: vhTovw(4.38)}} onClick = {() => sortChange()}>
                    <img style = {{height:vhTovw(4.38)}} src= {isSorted ? (require('./image/Main/Sort1.png').default) : (require('./image/Main/Sort2.png').default)}/>
                </Button>
                <Button style={{display: 'flex', flexDirection: 'column', alignItems:'center', justifyContent: 'center', marginLeft: '2.82vw', backgroundColor: 'rgba(0,0,0,0)', border: 'none', borderRadius: vhTovw(2.17), width:vhTovw(9.12), height: vhTovw(4.38)}} onClick = {() => filterChange()}>
                    <img style = {{height:vhTovw(4.38)}} src= {isFilter ? (require('./image/Main/Asset 23.png').default) : (require('./image/Main/Filter Off.png').default)}/>
                </Button>
            </Navbar>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Button style={{backgroundColor: 'rgba(0,0,0,0)', border: 'none', outline: '#F7F7F7', marginTop: '88.6vh', position: 'fixed'}} onClick={() => {history.push({pathname: '/addmenu', state:{id: id, addr:addr, phoneNum: phoneNum}})}}>
                <img style = {{width:'84.36vw'}} src= {(require('./image/Main/Asset 33.png').default)}/>
            </Button>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: vhTovw(21.5), backgroundColor: '#F7F7F7'}}>
        </div>
        {recipe}
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: vhTovw(15), backgroundColor: '#F7F7F7'}}>
        </div>
    </div>
    </BrowserRouter>
  );
}

export default Main;
