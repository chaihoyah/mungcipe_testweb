import React, {Component} from 'react';
import axios from 'axios';
import {Button, Navbar, Form, Dropdown,DropdownButton, ButtonGroup} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import '../App.css';

const url = "http://ec2-18-224-7-85.us-east-2.compute.amazonaws.com:8080/mungApi";
function BeforeLoginMain({history, match, location}) {

  const [id, setId] = React.useState("이름을 입력해 주세요");
  const [phoneNum, setPhoneNum] = React.useState("휴대폰 번호를 입력해 주세요");
  const [pageKey, setPageKey] = React.useState(1);
  const [idBackColor, setIdBackColor] = React.useState("white");
  const [idColor, setIdColor] = React.useState('rgba(255, 92, 77, 0.65)');
  const [phoneNumBackColor, setPhoneNumBackColor] = React.useState("white");
  const [phoneNumColor, setPhoneNumColor] = React.useState('rgba(255, 92, 77, 0.65)');

  const [surveyOne, setSurveyOne] = React.useState("입력해 주세요");
  const [surveyTwo, setSurveyTwo] = React.useState("입력해 주세요");
  const [surveyTwoClicked, setSurveyTwoClicked] = React.useState(0);
  const [surveyThree, setSurveyThree] = React.useState("입력해 주세요");
  const [surveyFourClickVal, setSurveyFourClickVal] = React.useState(0);
  const [surveyFour2ClickVal, setSurveyFour2ClickVal] = React.useState(0);
  const [surveyFive, setSurveyFive] = React.useState("입력해 주세요");
  const [surveyFiveisAge, setSurveyFiveisAge] = React.useState(1);
  const [surveyFiveisYoung, setSurveyFiveisYoung] = React.useState(0);
  const [surveyFiveisYoungAndRich, setSurveyFiveisYoungAndRich] = React.useState(0);
  const [surveyFiveisSE, setSurveyFiveisSE] = React.useState(0);
  const [surveyFiveisNeut, setSurveyFiveisNeut] = React.useState(0);
  const [surveySixisMale, setSurveySixisMale] = React.useState(0);
  const [surveySixisPreg, setSurveySixisPreg] = React.useState(0);

  const [surveySevenOne, setSurveySevenOne] =  React.useState(0);
  const [surveySevenTwo, setSurveySevenTwo] =  React.useState(0);
  const [surveySevenThree, setSurveySevenThree] =  React.useState(0);
  const [surveySevenFour, setSurveySevenFour] =  React.useState(0);
  const [surveySevenFive, setSurveySevenFive] =  React.useState(0);
  const [surveySevenGuitar, setSurveySevenGuitar] = React.useState("입력해 주세요");

  const [surveyEightOne, setSurveyEightOne] =  React.useState(0);
  const [surveyEightTwo, setSurveyEightTwo] =  React.useState(0);
  const [surveyEightThree, setSurveyEightThree] =  React.useState(0);
  const [surveyEightFour, setSurveyEightFour] =  React.useState(0);
  const [surveyEightFive, setSurveyEightFive] =  React.useState(0);
  const [surveyEightSix, setSurveyEightSix] =  React.useState(0);
  const [surveyEightGuitar, setSurveyEightGuitar] = React.useState("입력해 주세요");

  const [surveyNineOne, setSurveyNineOne] =  React.useState(0);
  const [surveyNineTwo, setSurveyNineTwo] =  React.useState(0);
  const [surveyNineThree, setSurveyNineThree] =  React.useState(0);
  const [surveyNineFour, setSurveyNineFour] =  React.useState(0);
  const [surveyNineFive, setSurveyNineFive] =  React.useState(0);
  const [surveyNineSix, setSurveyNineSix] =  React.useState(0);
  const [surveyNineSeven, setSurveyNineSeven] = React.useState(0);
  const [surveyNineGuitar, setSurveyNineGuitar] = React.useState("입력해 주세요");

  const [surveyTenOne, setSurveyTenOne] =  React.useState(0);
  const [surveyTenTwo, setSurveyTenTwo] =  React.useState(0);
  const [surveyTenThree, setSurveyTenThree] =  React.useState(0);
  const [surveyTenFour, setSurveyTenFour] =  React.useState(0);
  const [surveyTenFive, setSurveyTenFive] =  React.useState(0);
  const [surveyTenSix, setSurveyTenSix] =  React.useState(0);
  const [surveyTenGuitar, setSurveyTenGuitar] = React.useState("입력해 주세요");

  const dogBreedDic = ["믹스견", "스피츠", "시츄", "요크셔테리어", "말티즈", "포메라니안", "푸들", "치와와", "미니핀", "슈나우저", "페키니즈", "닥스훈트", "빠삐용",
  "비숑 프리제", "보스턴 테리어", "샤페이", "웰시코기", "비글", "코카스파니엘", "불독", "사모예드", "피레니즈", "리트리버", "말라뮤트", "한국 토종견", "허스키", "세퍼트",
  "하운드", "달마시안", "콜리", "쉽독"];
  const [dogBreedArr, setDogBreedArr] = React.useState([]);
  const [loadingDot, setLoadingDot] = React.useState(0);

  function toCost(num){
      let standard_iphone = 2.164;
      let inner_const = (window.innerWidth/window.innerHeight - 0.462)/0.02;
      let margin = num + inner_const;
      margin = 2.164 * margin;
      let str = String(margin) + 'vw';
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

  const plusKey = () => {
    setPageKey(pageKey+1);
  };

  const login = () => {
    if( id === "" || id === "이름을 입력해 주세요" || phoneNum === "" || phoneNum === "휴대폰 번호를 입력해 주세요" || phoneNum.length !== 11){
        alert("이름 및 휴대폰 번호를 제대로 입력해 주세요!");
    }
    else{
        //서버 통신
        axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        axios.get(url+"/user/login/", {
            params: {
                id: id,
                phone: phoneNum
            }
        }).then((response) => {
            console.log(response);
            console.log(response.data);
            if (response.data == -1) {
                alert("이름 및 휴대폰 번호를 제대로 입력해 주세요!");
            }else if (response.data == 0) {
                setPageKey(pageKey+1);
            } else if (response.data == 1) {
                history.replace({pathname: '/main', state:{id: id, phoneNum: phoneNum}});
            }
        });
    }
  };

  const handleTextChangeID = (event) => {
    let val = event.target.value.replace(/\n/g, "");
    if(event.target.value.length <= 10)
    {
        setId(val);
    }
  };

  const handleTextChangePhoneNum = (event) => {
    let val = event.target.value.replace(/[^0-9.]/g, "").replace(/(\.*)\./g, "$1");
    if(val.length <= 11){
        setPhoneNum(val);
    }
  };

  function clickTest0(){
    if (id === "이름을 입력해 주세요"){
        setId("");
    }
    setIdBackColor('#FF5C4D');
    setIdColor('white');
  };

  function clickTest1(){
    if (id === ""){
        setId("이름을 입력해 주세요");
    }
    setIdBackColor('white');
    setIdColor('rgba(255, 92, 77, 0.65)');
  };

  function clickTest2(){
    if (phoneNum === "휴대폰 번호를 입력해 주세요"){
        setPhoneNum("");
    }
    setPhoneNumBackColor('#FF5C4D');
    setPhoneNumColor('white');
  };

  function clickTest3(){
    if (phoneNum === ""){
        setPhoneNum("휴대폰 번호를 입력해 주세요");
    }
    setPhoneNumBackColor('white');
    setPhoneNumColor('rgba(255, 92, 77, 0.65)');
  };

//설문 관련
  //Q1
  const handleTextSurveyOne = (event) => {
    let val = event.target.value.replace(/\n/g, "");
    if(event.target.value.length <= 10)
    {
        setSurveyOne(val);
    }
  };

  function clickSurveyOne(){
    if (surveyOne === "입력해 주세요"){
        setSurveyOne("");
    }
  };

  function clickSurveyOneBlur(){
    if (surveyOne === ""){
        setSurveyOne("입력해 주세요");
    }
  };
  //Q2
  const handleTextSurveyTwo = (event) => {

    if (event.target.value){
        setDogBreedArr([]);
        const regex = new RegExp(event.target.value, 'i');
        setDogBreedArr(
            dogBreedDic.filter((name)=>name.search(regex)>=0)
        );
    }
    else {
        setDogBreedArr([]);
    }
    if(event.target.value.length <= 20)
    {
        let val = event.target.value.replace(/\n/g, "");
        setSurveyTwo(val);
    }
  };

  function clickSurveyTwo(){
    if (surveyTwo === "입력해 주세요"){
        setSurveyTwo("");
    }
    setSurveyTwoClicked(1);
  };

  function clickSurveyTwoBlur(){
    if (surveyTwo === ""){
        setSurveyTwo("입력해 주세요");
    }
    setSurveyTwoClicked(0);
  };

  const getBreedArray = (surveyTwo) =>{
    if (surveyTwo){
        setDogBreedArr([]);
        const regex = new RegExp(surveyTwo, 'i');
    }
  };

  function setBreedButton(name){
    setSurveyTwo(name);
    setDogBreedArr([]);
  };
  //Q3
  const handleTextSurveyThree = (event) => {
    let val = event.target.value.replace(/[^0-9.]/g, "").replace(/(\.*)\./g, "$1");    if(event.target.value.length <= 20)
    {
        setSurveyThree(val);
    }
  };

  function clickSurveyThree(){
    if (surveyThree === "입력해 주세요"){
        setSurveyThree("");
    }
  };

  function clickSurveyThreeBlur(){
    if (surveyThree === ""){
        setSurveyThree("입력해 주세요");
    }
  };
  //Q4
  function clickSurveyFourButton(button_num){
    if (button_num === surveyFourClickVal){
        setSurveyFourClickVal(0);
    }
    else{
        setSurveyFourClickVal(button_num);
    }
  };

  function clickSurveyFour2Button(button_num){
    if (button_num === surveyFour2ClickVal){
        setSurveyFour2ClickVal(0);
    }
    else{
        setSurveyFour2ClickVal(button_num);
    }
  };
  //Q5
  const handleTextSurveyFive = (event) => {
    let val = event.target.value.replace(/[^0-9.]/g, "").replace(/(\.*)\./g, "$1");
    if(event.target.value.length <= 20)
    {
        setSurveyFive(val);
    }

    if(!isNaN(parseInt(val)) && surveyFiveisAge){
        let age = parseInt(val);
        setSurveyFiveisYoung(0);
    }
    else if(!isNaN(parseInt(val)) && !surveyFiveisAge){
        let month = parseInt(val);
        if (month < 12){
            setSurveyFiveisYoung(1);
        }
        else {
            setSurveyFiveisYoung(0);
        }
        console.log(month);
    }
    else {
        setSurveyFiveisYoung(0);
    }
  };

  function clickSurveyFive(){
    if (surveyFive === "입력해 주세요"){
        setSurveyFive("");
        setSurveyFiveisYoung(0);
    }
  };

  function clickSurveyFiveBlur(){
    if (surveyFive === ""){
        setSurveyFive("입력해 주세요");
        setSurveyFiveisYoung(0);
    }
  };

  const setisAgeTrue = () => {
    setSurveyFiveisAge(1);
    setSurveyFiveisYoung(0);
  };

  const setisAgeFalse = () => {
    setSurveyFiveisAge(0);
    if(!isNaN(parseInt(surveyFive))){
        let month = parseInt(surveyFive);
        if (month < 12){
            setSurveyFiveisYoung(1);
        }
        else {
            setSurveyFiveisYoung(0);
        }
    }
  };
  //Q5-1
  const setisRichTrue = () => {
    setSurveyFiveisYoungAndRich(1);
  };

  const setisRichFalse = () => {
    alert("아기 강아지에게 간식 급여시에 부작용이 있을 수 있습니다!");
    setSurveyFiveisYoungAndRich(2);
  };
  //Q5-2
  const setisSETrue = () => {
    alert("※강아지 건강을 위해 강아지가 더 크면 이용 부탁드립니다!");
    setSurveyFiveisSE(1);
  };

  const setisSEFalse = () => {
    setSurveyFiveisSE(2);
  };
  //Q5-3
  const setisNeutTrue = () => {
    setSurveyFiveisNeut(1);
  };

  const setisNeutFalse = () => {
    setSurveyFiveisNeut(2);
  };

  //Q6
  const setisMaleTrue = () => {
    setSurveySixisMale(1);
  };

  const setisMaleFalse = () => {
    setSurveySixisMale(2);
  };
  //Q6-1
  const setisPregTrue = () => {
    setSurveySixisPreg(1);
  };

  const setisPregFalse = () => {
    setSurveySixisPreg(2);
  };

  //Q7
  const setSevenOneReverse = () => {
    if(surveySevenOne === 0)
        setSurveySevenOne(1);
    else setSurveySevenOne(0);
    console.log(surveySevenOne);
  };
  const setSevenTwoReverse = () => {
    if(surveySevenTwo === 0)
        setSurveySevenTwo(1);
    else setSurveySevenTwo(0);
  };
  const setSevenThreeReverse = () => {
    if(surveySevenThree === 0)
        setSurveySevenThree(1);
    else setSurveySevenThree(0);
  };
  const setSevenFourReverse = () => {
    if(surveySevenFour === 0)
        setSurveySevenFour(1);
    else setSurveySevenFour(0);
  };
  const setSevenFiveReverse = () => {
    if(surveySevenFive) {setSurveySevenGuitar("입력해 주세요");}
    if(surveySevenFive === 0)
        setSurveySevenFive(1);
    else setSurveySevenFive(0);
  };
  const handleTextChangeSevenGuitar = (event) => {
    let val = event.target.value.replace(/\n/g, "");
    setSurveySevenGuitar(val);
  };
  function clickSevenGuitar(){
    if (surveySevenGuitar === "입력해 주세요"){
        setSurveySevenGuitar("");
    }
  };

  function clickSevenGuitarBlur(){
    if (surveySevenGuitar === ""){
        setSurveySevenGuitar("입력해 주세요");
    }
  };

  //Q8
  const setEightOneReverse = () => {
    if(surveyEightOne === 0)
        setSurveyEightOne(1);
    else setSurveyEightOne(0);
  };
  const setEightTwoReverse = () => {
    if(surveyEightTwo === 0)
        setSurveyEightTwo(1);
    else setSurveyEightTwo(0);
  };
  const setEightThreeReverse = () => {
    if(surveyEightThree === 0)
        setSurveyEightThree(1);
    else setSurveyEightThree(0);
  };
  const setEightFourReverse = () => {
    if(surveyEightFour === 0)
        setSurveyEightFour(1);
    else setSurveyEightFour(0);
  };
  const setEightFiveReverse = () => {
    if(surveyEightFive === 0)
        setSurveyEightFive(1);
    else setSurveyEightFive(0);
  };
  const setEightSixReverse = () => {
    if(surveyEightSix === 0)
        setSurveyEightSix(1);
    else setSurveyEightSix(0);
  };
  const handleTextChangeEightGuitar = (event) => {
    let val = event.target.value.replace(/\n/g, "");
    setSurveyEightGuitar(val);
  };
  function clickEightGuitar(){
    if (surveyEightGuitar === "입력해 주세요"){
        setSurveyEightGuitar("");
    }
  };

  function clickEightGuitarBlur(){
    if (surveyEightGuitar === ""){
        setSurveyEightGuitar("입력해 주세요");
    }
  };

  //Q9
  const setNineOneReverse = () => {
    if(surveyNineOne === 0)
        setSurveyNineOne(1);
    else setSurveyNineOne(0);
  };
  const setNineTwoReverse = () => {
    if(surveyNineTwo === 0)
        setSurveyNineTwo(1);
    else setSurveyNineTwo(0);
  };
  const setNineThreeReverse = () => {
    if(surveyNineThree === 0)
        setSurveyNineThree(1);
    else setSurveyNineThree(0);
  };
  const setNineFourReverse = () => {
    if(surveyNineFour === 0)
        setSurveyNineFour(1);
    else setSurveyNineFour(0);
  };
  const setNineFiveReverse = () => {
    if(surveyNineFive === 0)
        setSurveyNineFive(1);
    else setSurveyNineFive(0);
  };
  const setNineSixReverse = () => {
    if(surveyNineSix === 0)
        setSurveyNineSix(1);
    else setSurveyNineSix(0);
  };
  const setNineSevenReverse = () => {
    if(surveyNineSeven === 0)
        setSurveyNineSeven(1);
    else setSurveyNineSeven(0);
  };
  const handleTextChangeNineGuitar = (event) => {
    let val = event.target.value.replace(/\n/g, "");
    setSurveyNineGuitar(val);
  };
  function clickNineGuitar(){
    if (surveyNineGuitar === "입력해 주세요"){
        setSurveyNineGuitar("");
    }
  };

  function clickNineGuitarBlur(){
    if (surveyNineGuitar === ""){
        setSurveyNineGuitar("입력해 주세요");
    }
  };

  //Q10
  const setTenOneReverse = () => {
    if(surveyTenOne === 0)
        setSurveyTenOne(1);
    else setSurveyTenOne(0);
  };
  const setTenTwoReverse = () => {
    if(surveyTenTwo === 0)
        setSurveyTenTwo(1);
    else setSurveyTenTwo(0);
  };
  const setTenThreeReverse = () => {
    if(surveyTenThree === 0)
        setSurveyTenThree(1);
    else setSurveyTenThree(0);
  };
  const setTenFourReverse = () => {
    if(surveyTenFour === 0)
        setSurveyTenFour(1);
    else setSurveyTenFour(0);
  };
  const setTenFiveReverse = () => {
    if(surveyTenFive === 0)
        setSurveyTenFive(1);
    else setSurveyTenFive(0);
  };
  const setTenSixReverse = () => {
    if(surveyTenSix === 0)
        setSurveyTenSix(1);
    else setSurveyTenSix(0);
  };
  const handleTextChangeTenGuitar = (event) => {
    let val = event.target.value.replace(/\n/g, "");
    setSurveyTenGuitar(val);
  };
  function clickTenGuitar(){
    if (surveyTenGuitar === "입력해 주세요"){
        setSurveyTenGuitar("");
    }
  };
  function clickTenGuitarBlur(){
    if (surveyTenGuitar === ""){
        setSurveyTenGuitar("입력해 주세요");
    }
  };

  //End
  function submitSurvey(){
    //  plusKey();
    //서버 통신 및 오류 잡기
    let isErr = false;
    if (surveyOne === "" || surveyOne === "입력해 주세요"){
        alert("강아지 이름을 제대로 입력해주세요. (질문 1번)");
        isErr = true;
    }
    else if (surveyTwo === "" || surveyTwo === "입력해 주세요"){
        alert("강아지 종을 제대로 입력해주세요. (질문 2번)");
        isErr = true;
    }
    else if (surveyThree === "" || surveyThree === "입력해 주세요"){
        alert("강아지 체중을 제대로 입력해주세요. (질문 3번)");
        isErr = true;
    }
    else if (surveyFourClickVal === 0 || surveyFour2ClickVal === 0){
        alert("강아지 체형을 제대로 선택해주세요. (질문 4번)");
        isErr = true;
    }
    else if (surveyFive === "" || surveyFive === "입력해 주세요"){
        alert("강아지 나이를 제대로 입력해주세요. (질문 5번)");
        isErr = true;
    }
    else if (surveyFiveisYoung){
        setSurveyFiveisNeut(0);
        if (surveyFiveisYoungAndRich === 0){
            alert("강아지 간식 급여 여부를 제대로 선택해주세요. (질문 5-1번)");
            isErr = true;
        }
        else if (surveyFiveisYoungAndRich === 1){
            if(surveyFiveisSE === 0){
                alert("강아지 부작용 여부를 제대로 선택해주세요. (질문 5-2번)");
                isErr = true;
            }
            else if(surveyFiveisSE === 1){
                alert("※강아지 건강을 위해 강아지가 더 크면 이용 부탁드립니다!");
                isErr = true;
            }
        }
        else{
            setSurveyFiveisSE(0);
        }
    }
    else if (!surveyFiveisYoung){
        setSurveyFiveisYoungAndRich(0);
        setSurveyFiveisSE(0);
        if(surveyFiveisNeut === 0){
            alert("강아지 중성화 여부를 제대로 선택해주세요. (질문 5-3번)");
            isErr = true;
        }
    }
    if (surveySixisMale === 0){
        alert("강아지 성별을 제대로 선택해주세요. (질문 6번)");
        isErr = true;
    }
    else if (surveySixisMale === 1){
        setSurveySixisPreg(0);
    }
    else if (surveySixisMale === 2){
        if (surveySixisPreg === 0){
            alert("강아지 임신여부를 제대로 선택해주세요. (질문 6-1번)");
            isErr = true;
        }
    }
    if (!isErr){
        plusKey();
        var time = 0;
        // let timer = setInterval(() => {
        //     console.log()
        //     if(parseInt(time) < 3){
        //         time+=1;
        //     }
        //     else{
        //         time = 0;
        //     }
        //     setLoadingDot(time);
        // }, 1000);

        // timer();
        let dogAge = parseInt(surveyFive);
        if(surveyFiveisAge)
            dogAge *= 12;
        dogAge = String(dogAge);
        console.log(dogAge);
        axios.post(url+"/user/survey1/", {
            params: {
                username: id,
                dogname: surveyOne,
                breed: surveyTwo,
                weight: surveyThree,
                form1: surveyFourClickVal,
                form2: surveyFour2ClickVal,
                age: dogAge,
                age_survey1: surveyFiveisYoung,
                age_survey2: surveyFiveisYoungAndRich,
                isNeutral: surveyFiveisNeut,
                gender: surveySixisMale,
                pregnant: surveySixisPreg,
                disease1: surveySevenOne,
                disease2: surveySevenTwo,
                disease3: surveySevenThree,
                disease4: surveySevenFour,
                disease5: surveySevenGuitar,
                food1: surveyEightOne,
                food2: surveyEightTwo,
                food3: surveyEightThree,
                food4: surveyEightFour,
                food5: surveyEightFive,
                food6: surveyEightGuitar,
                allergy1: surveyNineOne,
                allergy2: surveyNineTwo,
                allergy3: surveyNineThree,
                allergy4: surveyNineFour,
                allergy5: surveyNineFive,
                allergy6: surveyNineSix,
                allergy7: surveyNineGuitar,
                tool1: surveyTenOne,
                tool2: surveyTenTwo,
                tool3: surveyTenThree,
                tool4: surveyTenFour,
                tool5: surveyTenFive,
                tool6: surveyTenGuitar
                //address: textFormthree
            }
        }).then((response) => {
            console.log(response);
            let _data_ = {
                age: 0, // 개월 수
                disease: [],
                favor: [],
                hard: [], // 시작, 끝
                tools: [],
                allergy: [],
                fat: 0,  // a + b - 1
                pregnant: false,
                isNeutral: true,
                weight: 1.0
            };
            let age = parseInt(surveyFive);
            if (surveyFiveisAge) 
                age *= 12;

            _data_.age = age;

            if (surveySevenOne)
                _data_.disease.push(1); // 뉸
            if (surveySevenTwo)
                _data_.disease.push(2); // 슬개골
            if (surveySevenThree)
                _data_.disease.push(3); // 비만
            if (surveySevenFour)
                _data_.disease.push(4); // 귀

            if (surveyEightOne)
                _data_.favor.push(1); // 닭고기
            if (surveyEightTwo)
                _data_.favor.push(2); // 오리
            if (surveyEightThree)
                _data_.favor.push(3); // 소돼지고기
            if (surveyEightFour)
                _data_.favor.push(4); // 단호박고구마
            if (surveyEightFive)
                _data_.favor.push(5); // 야채

            _data_.hard.push(1);
            if (surveyTwo === "스피츠" || surveyTwo === "시츄" || surveyTwo === "요크셔테리어" || surveyTwo === "말티즈" || surveyTwo === "포메라니안" || surveyTwo === "푸들" || surveyTwo === "치와와" || surveyTwo === "미니핀" || surveyTwo === "슈나우저" || surveyTwo === "페키니즈" || surveyTwo === "닥스훈트" || surveyTwo === "빠삐용")
                _data_.hard.push(2);
            else if (age > 12 && age < 84)
                _data_.hard.push(3);
            else {
                _data_.hard.push(2);
            }

            if (surveyTenOne)
                _data_.tools.push(1); // 전자레인지
            if (surveyTenTwo)
                _data_.tools.push(2); // 찜기 찜틀
            if (surveyTenThree)
                _data_.tools.push(3); // 에어프라이기
            if (surveyTenFour)
                _data_.tools.push(4); // 가스레인지
            if (surveyTenFive)
                _data_.tools.push(5); // 인덕션

            if (surveyNineOne)
                _data_.allergy.push(1); // 닭고기
            if (surveyNineTwo)
                _data_.allergy.push(2); // 계란
            if (surveyNineThree)
                _data_.allergy.push(3); // 소고기
            if (surveyNineFour)
                _data_.allergy.push(4); // 유제품
            if (surveyNineFive)
                _data_.allergy.push(5); // 밀
            if (surveyNineSix)
                _data_.allergy.push(6); // 양고기

            _data_.fat = surveyFourClickVal + surveyFour2ClickVal -1;
            _data_.pregnant = surveySixisPreg;
            _data_.isNeutral = surveyFiveisNeut;
            _data_.weight = parseFloat(surveyThree);

            console.log(_data_);
            

            axios.post(url+"/user/add/", {
                params: {
                    id: id,
                    phone: phoneNum, //
                    address: "",
                    data: JSON.stringify(_data_),
                    dogname: surveyOne
                }
            }).then((response) => {
                console.log(response);
                // clearInterval(timer);
                history.replace({pathname: '/main', state:{id: id, phoneNum: phoneNum}});
            });

        });
    }
    else {console.log("ERROR");}
  };


  return (
        <div>
            { pageKey === 1 &&
            <div style = {{width: '100vw', height: '100vh', backgroundColor: '#FFB53F', overflow: 'hidden'}}>
                <div style = {{display:'flex', flexDirection: 'column',marginTop: vhTovw(6)}}>
                    <img style = {{marginLeft: marginCheck(3.7), width: '5.13vh'}} src= {require('../image/BeforeLogin/Asset 1.png').default}/>
                </div>
                <div style = {{display:'flex', flexDirection: 'row', marginLeft: marginCheck(3.2), width: '38.86vh', justifyContent: 'space-between', height: '12.04vh'}}>
                    <div style = {{display:'flex', flexDirection: 'column', width: '19.45vh', marginTop: '2.96vh'}}>
                        <img style = {{width: '18.8vh'}} src= {require('../image/BeforeLogin/Asset 14.png').default}/>
                    </div>

                </div>
                <div style = {{display:'flex', flexDirection: 'column', marginTop: '2.1vh'}}>
                    <img style = {{marginLeft: marginCheck(3.5), width: '23.85vh'}} src= {require('../image/BeforeLogin/Asset 15.png').default}/>
                </div>
                <img style = {{marginTop: '2.92vh', marginLeft: marginCheck(10.15), width: '42.50vh'}} src= {require('../image/BeforeLogin/Asset 5.png').default}/>
                <div style= {{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '2.69vh'}}>
                    <Button onClick = {() => plusKey()}style= {{backgroundColor: 'rgba(0,0,0,0)', border: 'none'}}>
                        <img style= {{width: '39.02vh'}}src= {require('../image/BeforeLogin/Asset 6.png').default}/>
                    </Button>
                    <img style= {{width: '13.39vh', marginTop: '5.33vh'}}src= {require('../image/BeforeLogin/Asset 7.png').default}/>
                </div>
            </div>
            }
            { pageKey === 2 &&
            <div style = {{width: '100vw', height: '100vh', paddingTop: '12vw', backgroundColor: '#FFB53F', overflowX: 'hidden'}}>
                <div style = {{display:'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <img style = {{width: '61.63vw'}} src= {require('../image/BeforeLogin2/Asset 17.png').default}/>
                </div>
                <div style = {{display:'flex', flexDirection: 'column',marginTop: '26.32vw', alignItems: 'center'}}>
                    <form style = {{position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                        <div style ={{height: '13.24vw', width: '84.09vw', backgroundColor: idBackColor, borderRadius: '2.73vw', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                            <textarea value={id} onChange = {handleTextChangeID} onClick = {() => {clickTest0()}} onBlur = {() => {clickTest1()}} style ={{height: '8.5vw', width: '80vw', backgroundColor: 'rgba(0,0,0,0)', color: idColor, fontFamily: 'AppleNeoM', fontSize: '6vw', border: 'none', outline: 'none', overflow: 'hidden'}} />
                        </div>
                    </form>
                </div>
                <div style = {{display:'flex', flexDirection: 'column', marginTop: '5vw', alignItems: 'center'}}>
                    <form style = {{position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                        <div style ={{height: '13.24vw', width: '84.09vw', backgroundColor: phoneNumBackColor, borderRadius: '2.73vw', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                            <textarea value={phoneNum} onChange = {handleTextChangePhoneNum} onClick = {() => {clickTest2()}} onBlur = {() => {clickTest3()}} style ={{height: '8.5vw', width: '80vw', backgroundColor: 'rgba(0,0,0,0)', color: phoneNumColor, fontFamily: 'AppleNeoM', fontSize: '6vw', border: 'none', outline: 'none', overflow: 'hidden'}} />
                        </div>
                    </form>
                </div>
                <div style= {{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '80vw'}}>
                    <Button onClick = {() => login()} style= {{backgroundColor: 'rgba(0,0,0,0)', border: 'none'}}>
                        <img style= {{width: '84.44vw'}}src= {require('../image/BeforeLogin2/Asset 10.png').default}/>
                    </Button>
                    <img style= {{width: '28.98vw', marginTop: '22.53vw'}}src= {require('../image/BeforeLogin2/Asset 11.png').default}/>
                </div>
            </div>
            }
            { pageKey === 3 &&
            <div style = {{width: '100vw', backgroundColor: '#FFB53F', overflowX: 'hidden', paddingTop: '7vw'}}>
                <div style = {{display:'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <img style = {{width: vhTovw(13.35)}} src= {require('../image/BeforeLogin3/Asset 39.png').default}/>
                </div>
                <div style = {{display:'flex', flexDirection: 'column', marginTop: vhTovw(6), alignItems: 'center'}}>
                    <img style = {{width: vhTovw(12.32)}} src= {require('../image/BeforeLogin3/Asset 129.png').default}/>
                </div>
                <div className = "Q1" style = {{display:'flex', flexDirection: 'column',marginTop: vhTovw(6), alignItems: 'center'}}>
                    <img style = {{width: vhTovw(33.29)}} src= {require('../image/BeforeLogin3/1번/Asset 41.png').default}/>
                    <form style = {{position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: vhTovw(3.5)}}>
                        <div style = {{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: vhTovw(6.12), width: vhTovw(34.98), backgroundColor: '#FF5C4D', fontSize: vhTovw(2.72), borderRadius: vhTovw(1.26)}}>
                            <textarea value={surveyOne} onChange = {handleTextSurveyOne} onClick = {() => {clickSurveyOne()}} onBlur = {() => {clickSurveyOneBlur()}} style ={{height: vhTovw(2.77), width: vhTovw(30.98), backgroundColor: 'rgba(0,0,0,0)', color: 'rgba(255,255,255,1)', fontSize: vhTovw(1.85), fontFamily: 'AppleNeoM', border: 'none', outline: 'none', overflow: 'hidden'}} />
                        </div>
                    </form>
                </div>
                <div className = "Q2" style = {{display:'flex', flexDirection: 'column', marginTop: vhTovw(9), alignItems: 'center'}}>
                    <img style = {{width: vhTovw(33.73)}} src= {require('../image/BeforeLogin3/2번/Asset 43.png').default}/>
                    <form style = {{position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: vhTovw(3.5)}}>
                        <div style = {{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: vhTovw(6.12), width: vhTovw(34.98), backgroundColor: '#FF5C4D', fontSize: vhTovw(2.72), borderRadius: vhTovw(1.26)}}>
                            <textarea value={surveyTwo} onChange = {handleTextSurveyTwo} onClick = {() => {clickSurveyTwo()}} onBlur = {() => {clickSurveyTwoBlur()}}style ={{ height: vhTovw(2.77), width: vhTovw(30.98), backgroundColor: 'rgba(0,0,0,0)', color: 'white', fontSize: vhTovw(1.85), fontFamily: 'AppleNeoM', border: 'none', outline: 'none'}} />
                        </div>
                    </form>
                    <Dropdown style={{display: 'flex', flexDirection: 'column', width: vhTovw(30.98), maxHeight: vhTovw(18.48), overflowY: 'scroll'}}>
                      {dogBreedArr.map((data, index) => (
                        <div>
                            <Dropdown.Item key = {index} onClick = {() => {setBreedButton(data)}} style = {{height: vhTovw(4), fontSize: vhTovw(1.85)}}>
                                {data}
                            </Dropdown.Item>
                            <Dropdown.Divider />
                        </div>
                      ))
                      }
                    </Dropdown>
                </div>
                <div className = "Q3" style = {{display:'flex', flexDirection: 'column',marginTop: vhTovw(9), alignItems: 'center'}}>
                    <img style = {{width: vhTovw(36.14)}} src= {require('../image/BeforeLogin3/3번/Asset 44.png').default}/>
                    <form style = {{position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: vhTovw(3.5)}}>
                        <div style = {{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: vhTovw(6.12), width: vhTovw(34.98), backgroundColor: '#FF5C4D', borderRadius: vhTovw(1.26)}}>
                            <textarea value={surveyThree} onChange = {handleTextSurveyThree} onClick = {() => {clickSurveyThree()}} onBlur = {() => {clickSurveyThreeBlur()}}style ={{height: vhTovw(2.77), width: vhTovw(20), backgroundColor: 'rgba(0,0,0,0)', color: 'white', fontSize: vhTovw(1.85), fontFamily: 'AppleNeoM', border: 'none', outline: 'none'}} />
                            <div style = {{marginLeft: '17vw', color: 'white', fontSize: vhTovw(1.85), fontFamily: 'AppleNeoB'}}>(kg)</div>
                        </div>
                    </form>
                </div>
                <div className = "Q4-1" style = {{display:'flex', flexDirection: 'column',marginTop: vhTovw(9),alignItems: 'center'}}>
                    <img style = {{width: '67.78vw'}} src= {require('../image/BeforeLogin3/4번/4-1번/Asset 45.png').default}/>
                    <div style = {{display:'flex', flexDirection: 'column'}}>
                        <div style = {{display:'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: vhTovw(3.5), width: vhTovw(39.28)}}>
                            <Button onClick = {() => clickSurveyFourButton(1)} style = {{backgroundColor: 'rgba(0,0,0,0)', border: 'none', outline: 'none'}}>
                                <img style = {{width: vhTovw(10)}} src= {surveyFourClickVal === 1 ? (require('../image/BeforeLogin3/4번/4-1번/Asset 51.png').default):(require('../image/BeforeLogin3/4번/4-1번/Asset 46.png').default)}/>
                            </Button>
                            <Button onClick = {() => clickSurveyFourButton(2)} style = {{backgroundColor: 'rgba(0,0,0,0)', border: 'none', outline: 'none'}}>
                                <img style = {{width: vhTovw(10)}} src= {surveyFourClickVal === 2 ? (require('../image/BeforeLogin3/4번/4-1번/Asset 52.png').default):(require('../image/BeforeLogin3/4번/4-1번/Asset 47.png').default)}/>
                            </Button>
                            <Button onClick = {() => clickSurveyFourButton(3)} style = {{backgroundColor: 'rgba(0,0,0,0)', border: 'none', outline: 'none'}}>
                                <img style = {{width: vhTovw(10)}} src= {surveyFourClickVal === 3 ? (require('../image/BeforeLogin3/4번/4-1번/Asset 53.png').default):(require('../image/BeforeLogin3/4번/4-1번/Asset 48.png').default)}/>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className = "Q4-1" style = {{display:'flex', flexDirection: 'row', justifyContent: 'center', marginTop: vhTovw(3.5), width: '70vw'}}>
                    <Button onClick = {() => clickSurveyFourButton(4)} style = {{backgroundColor: 'rgba(0,0,0,0)', border: 'none', outline: 'none'}}>
                        <img style = {{width: vhTovw(10)}} src= {surveyFourClickVal === 4 ? (require('../image/BeforeLogin3/4번/4-1번/Asset 54.png').default):(require('../image/BeforeLogin3/4번/4-1번/Asset 49.png').default)}/>
                    </Button>
                    <Button onClick = {() => clickSurveyFourButton(5)} style = {{backgroundColor: 'rgba(0,0,0,0)', border: 'none', outline: 'none'}}>
                        <img style = {{width: vhTovw(10)}} src= {surveyFourClickVal === 5 ? (require('../image/BeforeLogin3/4번/4-1번/Asset 55.png').default):(require('../image/BeforeLogin3/4번/4-1번/Asset 50.png').default)}/>
                    </Button>
                </div>
                <div className = "Q4-2" style = {{display:'flex', flexDirection: 'column',marginTop: vhTovw(9), alignItems: 'center'}}>
                    <img style = {{width: '67.78vw'}} src= {require('../image/BeforeLogin3/4번/4-2번/Asset 56.png').default}/>
                    <div style = {{display:'flex', flexDirection: 'column'}}>
                        <div style = {{display:'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: vhTovw(3.5), width: vhTovw(39.28)}}>
                            <Button onClick = {() => clickSurveyFour2Button(1)} style = {{backgroundColor: 'rgba(0,0,0,0)', border: 'none', outline: 'none'}}>
                                <img style = {{width: vhTovw(10)}} src= {surveyFour2ClickVal === 1 ? (require('../image/BeforeLogin3/4번/4-2번/Asset 62.png').default):(require('../image/BeforeLogin3/4번/4-2번/Asset 57.png').default)}/>
                            </Button>
                            <Button onClick = {() => clickSurveyFour2Button(2)} style = {{backgroundColor: 'rgba(0,0,0,0)', border: 'none', outline: 'none'}}>
                                <img style = {{width: vhTovw(10)}} src= {surveyFour2ClickVal === 2 ? (require('../image/BeforeLogin3/4번/4-2번/Asset 63.png').default):(require('../image/BeforeLogin3/4번/4-2번/Asset 58.png').default)}/>
                            </Button>
                            <Button onClick = {() => clickSurveyFour2Button(3)} style = {{backgroundColor: 'rgba(0,0,0,0)', border: 'none', outline: 'none'}}>
                                <img style = {{width: vhTovw(10)}} src= {surveyFour2ClickVal === 3 ? (require('../image/BeforeLogin3/4번/4-2번/Asset 64.png').default):(require('../image/BeforeLogin3/4번/4-2번/Asset 59.png').default)}/>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className = "Q4-2" style = {{display:'flex', flexDirection: 'row', justifyContent: 'center', marginTop: vhTovw(3.5), width: '70vw'}}>
                    <Button onClick = {() => clickSurveyFour2Button(4)} style = {{backgroundColor: 'rgba(0,0,0,0)', border: 'none', outline: 'none'}}>
                        <img style = {{width: vhTovw(10)}} src= {surveyFour2ClickVal === 4 ? (require('../image/BeforeLogin3/4번/4-2번/Asset 65.png').default):(require('../image/BeforeLogin3/4번/4-2번/Asset 60.png').default)}/>
                    </Button>
                    <Button onClick = {() => clickSurveyFour2Button(5)} style = {{backgroundColor: 'rgba(0,0,0,0)', border: 'none', outline: 'none'}}>
                        <img style = {{width: vhTovw(10)}} src= {surveyFour2ClickVal === 5 ? (require('../image/BeforeLogin3/4번/4-2번/Asset 66.png').default):(require('../image/BeforeLogin3/4번/4-2번/Asset 61.png').default)}/>
                    </Button>
                </div>
                <div className = "Q5" style = {{display:'flex', flexDirection: 'column',marginTop: vhTovw(9), alignItems: 'center'}}>
                    <img style = {{width: vhTovw(34.36)}} src= {require('../image/BeforeLogin3/5번/5-0번/Asset 67.png').default}/>
                    <div style = {{display:'flex', flexDirection: 'row', alignItems: 'center', marginTop: vhTovw(3.5)}}>
                        <form style = {{position: 'relative', display: 'flex', flexDirection: 'column'}}>
                            <div style = {{display: 'flex', flexDirection: 'column', height: vhTovw(6.12), width: vhTovw(18), backgroundColor: '#FF5C4D', borderRadius: vhTovw(1.26), alignItems: 'center', justifyContent: 'center'}}>
                                <textarea value={surveyFive} onChange = {handleTextSurveyFive} onClick = {() => {clickSurveyFive()}} onBlur = {() => {clickSurveyFiveBlur()}}style ={{height: vhTovw(3), width: vhTovw(14), backgroundColor: 'rgba(0,0,0,0)', color: 'white', fontSize: vhTovw(2), fontFamily: 'AppleNeoM', border: 'none', outline: 'none'}} />
                            </div>
                        </form>
                        <Button onClick = {() => setisAgeTrue()} style = {{backgroundColor: 'rgba(0,0,0,0)', border: 'none', outline: 'none', marginLeft: '2vw'}}>
                            <img style = {{width: vhTovw(5.45)}} src= {surveyFiveisAge ? (require('../image/BeforeLogin3/5번/5-0번/Asset 71.png').default):(require('../image/BeforeLogin3/5번/5-0번/Asset 69.png').default)}/>
                        </Button>
                        <Button onClick = {() => setisAgeFalse()} style = {{backgroundColor: 'rgba(0,0,0,0)', border: 'none', outline: 'none'}}>
                            <img style = {{width: vhTovw(7.45)}} src= {surveyFiveisAge ? (require('../image/BeforeLogin3/5번/5-0번/Asset 72.png').default):(require('../image/BeforeLogin3/5번/5-0번/Asset 70.png').default)}/>
                        </Button>
                    </div>
                </div>
                <div></div>
                { surveyFiveisYoung ? (
                    <div className = "Q5-1" style = {{display:'flex', flexDirection: 'column',marginTop: vhTovw(9), alignItems: 'center'}}>
                        <img style = {{width: vhTovw(30.41)}} src= {require('../image/BeforeLogin3/5번/5-1번/Asset 73.png').default}/>
                        <div style = {{display: 'flex', flexDirection: 'column', marginTop: vhTovw(3.5), alignItems: 'center', justifyContent: 'center'}}>
                            <Button onClick = {() => setisRichTrue()} style = {{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0)', border: 'none', outline: 'none'}}>
                                <img style = {{width: vhTovw(32)}} src= {surveyFiveisYoungAndRich === 1 ? (require('../image/BeforeLogin3/5번/5-1번/Asset 76.png').default) : (require('../image/BeforeLogin3/5번/5-1번/Asset 74.png').default)}/>
                            </Button>
                        </div>
                        <div style = {{display: 'flex', flexDirection: 'column', marginTop: vhTovw(0.8), alignItems: 'center', justifyContent: 'center'}}>
                            <Button onClick = {() => setisRichFalse()} style = {{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0)', border: 'none', outline: 'none'}}>
                                <img style = {{width: vhTovw(32)}} src= {surveyFiveisYoungAndRich === 2 ? (require('../image/BeforeLogin3/5번/5-1번/Asset 75.png').default) : (require('../image/BeforeLogin3/5번/5-1번/Asset 77.png').default)}/>
                            </Button>
                        </div>
                    </div>) : (
                    <div></div>
                    )
                }
                { (surveyFiveisYoung && surveyFiveisYoungAndRich) ?(
                <div className = "Q5-2" style = {{display:'flex', flexDirection: 'column',marginTop: vhTovw(9), alignItems: 'center'}}>
                    <img style = {{width: vhTovw(37)}} src= {require('../image/BeforeLogin3/5번/5-2번/Asset 78.png').default}/>
                    <div style = {{display: 'flex', flexDirection: 'column', marginTop: vhTovw(3.5), alignItems: 'center', justifyContent: 'center'}}>
                        <Button onClick = {() => setisSETrue()} style = {{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0)', border: 'none', outline: 'none'}}>
                            <img style = {{width: vhTovw(32)}} src= {surveyFiveisSE === 1 ? (require('../image/BeforeLogin3/5번/5-2번/Asset 81.png').default) : (require('../image/BeforeLogin3/5번/5-2번/Asset 79.png').default)}/>
                        </Button>
                    </div>
                    <div style = {{display: 'flex', flexDirection: 'column',marginTop: vhTovw(0.8), alignItems: 'center', justifyContent: 'center'}}>
                        <Button onClick = {() => setisSEFalse()} style = {{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0)', border: 'none', outline: 'none'}}>
                            <img style = {{width: vhTovw(32)}} src= {surveyFiveisSE === 2 ? (require('../image/BeforeLogin3/5번/5-2번/Asset 80.png').default) : (require('../image/BeforeLogin3/5번/5-2번/Asset 82.png').default)}/>
                        </Button>
                    </div>
                </div>):(
                <div></div>
                )
                }
                { !surveyFiveisYoung &&
                    <div className = "Q5-3" style = {{display:'flex', flexDirection: 'column',marginTop: vhTovw(9), alignItems: 'center'}}>
                        <img style = {{width: vhTovw(38.78)}} src= {require('../image/BeforeLogin3/5번/5-3번/Asset 83.png').default}/>
                        <div style = {{display: 'flex', flexDirection: 'column', marginTop: vhTovw(3.5), alignItems: 'center', justifyContent: 'center'}}>
                            <Button onClick = {() => setisNeutTrue()} style = {{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0)', border: 'none', outline: 'none'}}>
                                <img style = {{width: vhTovw(32)}} src= {surveyFiveisNeut === 1 ? (require('../image/BeforeLogin3/5번/5-3번/Asset 81.png').default) : (require('../image/BeforeLogin3/5번/5-3번/Asset 84.png').default)}/>
                            </Button>
                        </div>
                        <div style = {{display: 'flex', flexDirection: 'column',marginTop: vhTovw(0.8), alignItems: 'center', justifyContent: 'center'}}>
                            <Button onClick = {() => setisNeutFalse()} style = {{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0)', border: 'none', outline: 'none'}}>
                                <img style = {{width: vhTovw(32)}} src= {surveyFiveisNeut === 2 ? (require('../image/BeforeLogin3/5번/5-3번/Asset 85.png').default) : (require('../image/BeforeLogin3/5번/5-3번/Asset 82.png').default)}/>
                            </Button>
                        </div>
                    </div>
                }
                <div className = "Q6" style = {{display:'flex', flexDirection: 'column', marginTop: vhTovw(9), alignItems: 'center'}}>
                    <img style = {{width: vhTovw(36.93)}} src= {require('../image/BeforeLogin3/6번/6-0번/Asset 86.png').default}/>
                    <div style = {{display: 'flex', flexDirection: 'column', marginTop: vhTovw(3.5), alignItems: 'center', justifyContent: 'center'}}>
                        <Button onClick = {() => setisMaleTrue()} style = {{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0)', border: 'none', outline: 'none'}}>
                            <img style = {{width: vhTovw(32)}} src= {surveySixisMale === 1 ? (require('../image/BeforeLogin3/6번/6-0번/Asset 89.png').default) : (require('../image/BeforeLogin3/6번/6-0번/Asset 87.png').default)}/>
                        </Button>
                    </div>
                    <div style = {{display: 'flex', flexDirection: 'column',marginTop: vhTovw(0.8), alignItems: 'center', justifyContent: 'center'}}>
                        <Button onClick = {() => setisMaleFalse()} style = {{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0)', border: 'none', outline: 'none'}}>
                            <img style = {{width: vhTovw(32)}} src= {surveySixisMale === 2 ? (require('../image/BeforeLogin3/6번/6-0번/Asset 88.png').default) : (require('../image/BeforeLogin3/6번/6-0번/Asset 90.png').default)}/>
                        </Button>
                    </div>
                </div>
                {surveySixisMale === 2 &&
                    <div className = "Q6-1" style = {{display:'flex', flexDirection: 'column', marginTop: vhTovw(9), alignItems: 'center'}}>
                        <img style = {{width: vhTovw(36.61)}} src= {require('../image/BeforeLogin3/6번/6-1번/Asset 91.png').default}/>
                        <div style = {{display: 'flex', flexDirection: 'column', marginTop: vhTovw(3.5), alignItems: 'center', justifyContent: 'center'}}>
                            <Button onClick = {() => setisPregTrue()} style = {{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0)', border: 'none', outline: 'none'}}>
                                <img style = {{width: vhTovw(32)}} src= {surveySixisPreg === 1 ? (require('../image/BeforeLogin3/6번/6-1번/Asset 81.png').default) : (require('../image/BeforeLogin3/6번/6-1번/Asset 79.png').default)}/>
                            </Button>
                        </div>
                        <div style = {{display: 'flex', flexDirection: 'column',marginTop: vhTovw(0.8), alignItems: 'center', justifyContent: 'center'}}>
                            <Button onClick = {() => setisPregFalse()} style = {{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0)', border: 'none', outline: 'none'}}>
                                <img style = {{width: vhTovw(32)}} src= {surveySixisPreg === 2 ? (require('../image/BeforeLogin3/6번/6-1번/Asset 80.png').default) : (require('../image/BeforeLogin3/6번/6-1번/Asset 82.png').default)}/>
                            </Button>
                        </div>
                    </div>
                }
                <div className = "Q7" style = {{display:'flex', flexDirection: 'column', marginTop: vhTovw(9), alignItems: 'center'}}>
                    <img style = {{width: vhTovw(32.19)}} src= {require('../image/BeforeLogin3/7번/Asset 93.png').default}/>
                    <div style = {{display: 'flex', flexDirection: 'column', marginTop: vhTovw(3.5), alignItems: 'center', justifyContent: 'center'}}>
                        <Button onClick = {() => setSevenOneReverse()} style = {{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0)', border: 'none', outline: 'none'}}>
                            <img style = {{width: vhTovw(32)}} src= {surveySevenOne ? (require('../image/BeforeLogin3/7번/Asset 99.png').default) : (require('../image/BeforeLogin3/7번/Asset 94.png').default)}/>
                        </Button>
                    </div>
                    <div style = {{display: 'flex', flexDirection: 'column',marginTop: vhTovw(1), alignItems: 'center', justifyContent: 'center'}}>
                        <Button onClick = {() => setSevenTwoReverse()} style = {{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0)', border: 'none', outline: 'none'}}>
                            <img style = {{width: vhTovw(32)}} src= {surveySevenTwo ? (require('../image/BeforeLogin3/7번/Asset 95.png').default) : (require('../image/BeforeLogin3/7번/Asset 100.png').default)}/>
                        </Button>
                    </div>
                    <div style = {{display: 'flex', flexDirection: 'column',marginTop: vhTovw(1), alignItems: 'center', justifyContent: 'center'}}>
                        <Button onClick = {() => setSevenThreeReverse()} style = {{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0)', border: 'none', outline: 'none'}}>
                            <img style = {{width: vhTovw(32)}} src= {surveySevenThree ? (require('../image/BeforeLogin3/7번/Asset 101.png').default) : (require('../image/BeforeLogin3/7번/Asset 96.png').default)}/>
                        </Button>
                    </div>
                    <div style = {{display: 'flex', flexDirection: 'column',marginTop: vhTovw(1), alignItems: 'center', justifyContent: 'center'}}>
                        <Button onClick = {() => setSevenFourReverse()} style = {{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0)', border: 'none', outline: 'none'}}>
                            <img style = {{width: vhTovw(32)}} src= {surveySevenFour ? (require('../image/BeforeLogin3/7번/Asset 97.png').default) : (require('../image/BeforeLogin3/7번/Asset 102.png').default)}/>
                        </Button>
                    </div>
                    <div style = {{display: 'flex', flexDirection: 'column',marginTop: vhTovw(1), alignItems: 'center', justifyContent: 'center'}}>
                        <Button onClick = {() => setSevenFiveReverse()} style = {{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0)', border: 'none', outline: 'none'}}>
                            <img style = {{width: vhTovw(32)}} src= {surveySevenFive ? (require('../image/BeforeLogin3/7번/Asset 98.png').default) : (require('../image/BeforeLogin3/7번/Asset 103.png').default)}/>
                        </Button>
                    </div>
                    { surveySevenFive ? (
                        <form style = {{position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: vhTovw(1)}}>
                            <div style = {{display: 'flex', flexDirection: 'column', height: vhTovw(5), width: vhTovw(32), backgroundColor: '#FF5C4D', borderRadius: vhTovw(1.26), alignItems: 'center', justifyContent: 'center'}}>
                                <textarea value={surveySevenGuitar} onChange = {handleTextChangeSevenGuitar} onClick = {() => {clickSevenGuitar()}} onBlur = {() => {clickSevenGuitarBlur()}} style ={{height: vhTovw(3), width: vhTovw(28), backgroundColor: 'rgba(0,0,0,0)', color: 'white', fontSize: vhTovw(1.85), fontFamily: 'AppleNeoM', border: 'none', outline: 'none'}} />
                            </div>
                        </form>):(
                        <div></div>
                        )
                    }
                </div>
                <div className = "Q8" style = {{display:'flex', flexDirection: 'column', marginTop: vhTovw(9), alignItems: 'center'}}>
                    <img style = {{width: vhTovw(30.8)}} src= {require('../image/BeforeLogin3/8번/Asset 104.png').default}/>
                    <div style = {{display: 'flex', flexDirection: 'column', marginTop: vhTovw(3.5), alignItems: 'center', justifyContent: 'center'}}>
                        <Button onClick = {() => setEightOneReverse()} style = {{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0)', border: 'none', outline: 'none'}}>
                            <img style = {{width: vhTovw(32)}} src= {surveyEightOne ? (require('../image/BeforeLogin3/8번/Asset 52.png').default) : (require('../image/BeforeLogin3/8번/Asset 51.png').default)}/>
                        </Button>
                    </div>
                    <div style = {{display: 'flex', flexDirection: 'column',marginTop: vhTovw(1), alignItems: 'center', justifyContent: 'center'}}>
                        <Button onClick = {() => setEightTwoReverse()} style = {{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0)', border: 'none', outline: 'none'}}>
                            <img style = {{width: vhTovw(32)}} src= {surveyEightTwo ? (require('../image/BeforeLogin3/8번/Asset 54.png').default) : (require('../image/BeforeLogin3/8번/Asset 53.png').default)}/>
                        </Button>
                    </div>
                    <div style = {{display: 'flex', flexDirection: 'column',marginTop: vhTovw(1), alignItems: 'center', justifyContent: 'center'}}>
                        <Button onClick = {() => setEightThreeReverse()} style = {{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0)', border: 'none', outline: 'none'}}>
                            <img style = {{width: vhTovw(32)}} src= {surveyEightThree ? (require('../image/BeforeLogin3/8번/Asset 56.png').default) : (require('../image/BeforeLogin3/8번/Asset 55.png').default)}/>
                        </Button>
                    </div>
                    <div style = {{display: 'flex', flexDirection: 'column',marginTop: vhTovw(1), alignItems: 'center', justifyContent: 'center'}}>
                        <Button onClick = {() => setEightFourReverse()} style = {{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0)', border: 'none', outline: 'none'}}>
                            <img style = {{width: vhTovw(32)}} src= {surveyEightFour ? (require('../image/BeforeLogin3/8번/Asset 58.png').default) : (require('../image/BeforeLogin3/8번/Asset 57.png').default)}/>
                        </Button>
                    </div>
                    <div style = {{display: 'flex', flexDirection: 'column',marginTop: vhTovw(1), alignItems: 'center', justifyContent: 'center'}}>
                        <Button onClick = {() => setEightFiveReverse()} style = {{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0)', border: 'none', outline: 'none'}}>
                            <img style = {{width: vhTovw(32)}} src= {surveyEightFive ? (require('../image/BeforeLogin3/8번/Asset 60.png').default) : (require('../image/BeforeLogin3/8번/Asset 59.png').default)}/>
                        </Button>
                    </div>
                    <div style = {{display: 'flex', flexDirection: 'column',marginTop: vhTovw(1), alignItems: 'center', justifyContent: 'center'}}>
                        <Button onClick = {() => setEightSixReverse()} style = {{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0)', border: 'none', outline: 'none'}}>
                            <img style = {{width: vhTovw(32)}} src= {surveyEightSix ? (require('../image/BeforeLogin3/8번/Asset 107.png').default) : (require('../image/BeforeLogin3/8번/Asset 110.png').default)}/>
                        </Button>
                    </div>
                    { surveyEightSix ? (
                        <form style = {{position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: vhTovw(1)}}>
                            <div style = {{display: 'flex', flexDirection: 'column', height: vhTovw(5), width: vhTovw(32), backgroundColor: '#FF5C4D', borderRadius: vhTovw(1.26), alignItems: 'center', justifyContent: 'center'}}>
                                <textarea value={surveyEightGuitar} onChange = {handleTextChangeEightGuitar} onClick = {() => {clickEightGuitar()}} onBlur = {() => {clickEightGuitarBlur()}} style ={{height: vhTovw(3), width: vhTovw(28), backgroundColor: 'rgba(0,0,0,0)', color: 'white', fontSize: vhTovw(1.85), fontFamily: 'AppleNeoM', border: 'none', outline: 'none'}} />
                            </div>
                        </form>): (
                        <div></div>
                        )
                    }
                </div>
                <div className = "Q9" style = {{display:'flex', flexDirection: 'column', marginTop: vhTovw(9), alignItems: 'center'}}>
                    <img style = {{width: vhTovw(38.19)}} src= {require('../image/BeforeLogin3/9번/Asset 111.png').default}/>
                    <div style = {{display: 'flex', flexDirection: 'column', marginTop: vhTovw(3.5), alignItems: 'center', justifyContent: 'center'}}>
                        <Button onClick = {() => setNineOneReverse()} style = {{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0)', border: 'none', outline: 'none'}}>
                            <img style = {{width: vhTovw(32)}} src= {surveyNineOne ? (require('../image/BeforeLogin3/9번/Asset 52.png').default) : (require('../image/BeforeLogin3/9번/Asset 51.png').default)}/>
                        </Button>
                    </div>
                    <div style = {{display: 'flex', flexDirection: 'column',marginTop: vhTovw(1), alignItems: 'center', justifyContent: 'center'}}>
                        <Button onClick = {() => setNineTwoReverse()} style = {{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0)', border: 'none', outline: 'none'}}>
                            <img style = {{width: vhTovw(32)}} src= {surveyNineTwo ? (require('../image/BeforeLogin3/9번/Asset 62.png').default) : (require('../image/BeforeLogin3/9번/Asset 61.png').default)}/>
                        </Button>
                    </div>
                    <div style = {{display: 'flex', flexDirection: 'column',marginTop: vhTovw(1), alignItems: 'center', justifyContent: 'center'}}>
                        <Button onClick = {() => setNineThreeReverse()} style = {{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0)', border: 'none', outline: 'none'}}>
                            <img style = {{width: vhTovw(32)}} src= {surveyNineThree ? (require('../image/BeforeLogin3/9번/Asset 85.png').default) : (require('../image/BeforeLogin3/9번/Asset 84.png').default)}/>
                        </Button>
                    </div>
                    <div style = {{display: 'flex', flexDirection: 'column',marginTop: vhTovw(1), alignItems: 'center', justifyContent: 'center'}}>
                        <Button onClick = {() => setNineFourReverse()} style = {{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0)', border: 'none', outline: 'none'}}>
                            <img style = {{width: vhTovw(32)}} src= {surveyNineFour ? (require('../image/BeforeLogin3/9번/Asset 87.png').default) : (require('../image/BeforeLogin3/9번/Asset 86.png').default)}/>
                        </Button>
                    </div>
                    <div style = {{display: 'flex', flexDirection: 'column',marginTop: vhTovw(1), alignItems: 'center', justifyContent: 'center'}}>
                        <Button onClick = {() => setNineFiveReverse()} style = {{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0)', border: 'none', outline: 'none'}}>
                            <img style = {{width: vhTovw(32)}} src= {surveyNineFive ? (require('../image/BeforeLogin3/9번/Asset 89.png').default) : (require('../image/BeforeLogin3/9번/Asset 88.png').default)}/>
                        </Button>
                    </div>
                    <div style = {{display: 'flex', flexDirection: 'column',marginTop: vhTovw(1), alignItems: 'center', justifyContent: 'center'}}>
                        <Button onClick = {() => setNineSixReverse()} style = {{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0)', border: 'none', outline: 'none'}}>
                            <img style = {{width: vhTovw(32)}} src= {surveyNineSix ? (require('../image/BeforeLogin3/9번/Asset 91.png').default) : (require('../image/BeforeLogin3/9번/Asset 90.png').default)}/>
                        </Button>
                    </div>
                    <div style = {{display: 'flex', flexDirection: 'column',marginTop: vhTovw(1), alignItems: 'center', justifyContent: 'center'}}>
                        <Button onClick = {() => setNineSevenReverse()} style = {{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0)', border: 'none', outline: 'none'}}>
                            <img style = {{width: vhTovw(32)}} src= {surveyNineSeven ? (require('../image/BeforeLogin3/8번/Asset 107.png').default) : (require('../image/BeforeLogin3/8번/Asset 110.png').default)}/>
                        </Button>
                    </div>
                    { surveyNineSeven ? (
                        <form style = {{position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: vhTovw(1)}}>
                            <div style = {{display: 'flex', flexDirection: 'column', height: vhTovw(5), width: vhTovw(32), backgroundColor: '#FF5C4D', borderRadius: vhTovw(1.26), alignItems: 'center', justifyContent: 'center'}}>
                                <textarea value={surveyNineGuitar} onChange = {handleTextChangeNineGuitar} onClick = {() => {clickNineGuitar()}} onBlur = {() => {clickNineGuitarBlur()}} style ={{height: vhTovw(3), width: vhTovw(28),  backgroundColor: 'rgba(0,0,0,0)', color: 'white', fontSize: vhTovw(1.85), fontFamily: 'AppleNeoM', border: 'none', outline: 'none'}} />
                            </div>
                        </form>) : (
                        <div></div>
                        )
                    }
                </div>
                <div className = "Q10" style = {{display:'flex', flexDirection: 'column', marginTop: vhTovw(9), alignItems: 'center'}}>
                    <img style = {{width: vhTovw(33.25)}} src= {require('../image/BeforeLogin3/10번/Asset 116.png').default}/>
                    <div style = {{display: 'flex', flexDirection: 'column', marginTop: vhTovw(3.5), alignItems: 'center', justifyContent: 'center'}}>
                        <Button onClick = {() => setTenOneReverse()} style = {{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0)', border: 'none', outline: 'none'}}>
                            <img style = {{width: vhTovw(32)}} src= {surveyTenOne ? (require('../image/BeforeLogin3/10번/Asset 123.png').default) : (require('../image/BeforeLogin3/10번/Asset 117.png').default)}/>
                        </Button>
                    </div>
                    <div style = {{display: 'flex', flexDirection: 'column',marginTop: vhTovw(1), alignItems: 'center', justifyContent: 'center'}}>
                        <Button onClick = {() => setTenTwoReverse()} style = {{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0)', border: 'none', outline: 'none'}}>
                            <img style = {{width: vhTovw(32)}} src= {surveyTenTwo ? (require('../image/BeforeLogin3/10번/Asset 128.png').default) : (require('../image/BeforeLogin3/10번/Asset 131.png').default)}/>
                        </Button>
                    </div>
                    <div style = {{display: 'flex', flexDirection: 'column',marginTop: vhTovw(1), alignItems: 'center', justifyContent: 'center'}}>
                        <Button onClick = {() => setTenThreeReverse()} style = {{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0)', border: 'none', outline: 'none'}}>
                            <img style = {{width: vhTovw(32)}} src= {surveyTenThree ? (require('../image/BeforeLogin3/10번/Asset 119.png').default) : (require('../image/BeforeLogin3/10번/Asset 85.png').default)}/>
                        </Button>
                    </div>
                    <div style = {{display: 'flex', flexDirection: 'column',marginTop: vhTovw(1), alignItems: 'center', justifyContent: 'center'}}>
                        <Button onClick = {() => setTenSixReverse()} style = {{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0)', border: 'none', outline: 'none'}}>
                            <img style = {{width: vhTovw(32)}} src= {surveyTenSix ? (require('../image/BeforeLogin3/8번/Asset 107.png').default) : (require('../image/BeforeLogin3/8번/Asset 110.png').default)}/>
                        </Button>
                    </div>
                    { surveyTenSix ? (
                        <form style = {{position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: vhTovw(1)}}>
                            <div style = {{display: 'flex', flexDirection: 'column', height: vhTovw(5), width: vhTovw(32), backgroundColor: '#FF5C4D', borderRadius: vhTovw(1.26), alignItems: 'center', justifyContent: 'center'}}>
                                <textarea value={surveyTenGuitar} onChange = {handleTextChangeTenGuitar} onClick = {() => {clickTenGuitar()}} onBlur = {() => {clickTenGuitarBlur()}}style ={{height: vhTovw(3), width: vhTovw(28), backgroundColor: 'rgba(0,0,0,0)', color: 'white', fontSize: vhTovw(1.85), fontFamily: 'AppleNeoM', border: 'none', outline: 'none'}} />
                            </div>
                        </form>):(
                        <div></div>
                        )
                    }
                </div>
                <div style= {{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: vhTovw(10)}}>
                    <Button onClick = {() => submitSurvey()} style= {{backgroundColor: 'rgba(0,0,0,0)', border: 'none'}}>
                        <img style= {{width: vhTovw(38.98)}}src= {require('../image/BeforeLogin3/Asset 128.png').default}/>
                    </Button>
                    <img style= {{width: vhTovw(13.35), marginTop: vhTovw(5.33)}}src= {require('../image/BeforeLogin3/Asset 39.png').default}/>
                    <div style= {{display: 'flex', flexDirection: 'column', height: vhTovw(3.08), backgroundColor: '#FFB53F'}}>
                    </div>
                </div>
                <div style= {{display: 'flex', flexDirection: 'column', alignItems: 'center', height: '10vh'}}>
                </div>
            </div>
            }
            { pageKey === 4 &&
            <div style = {{width: '100vw', height: '100vh', backgroundColor: '#F7F7F7', overflow: 'hidden'}}>
                <div style = {{display: 'flex', flexDirection: 'column', zIndex: '1'}}>
                    <img style= {{height: '100vh',  position: 'absolute', zIndex:'1'}}src= {require('../image/BeforeLogin3/1.jpg').default}/>
                </div>
                <div style = {{display: 'flex', flexDirection: 'row',zIndex: '2', backgroundColor: 'black', marginTop: '52vh', width: '100vw', justifyContent: 'center'}}>
                    {(loadingDot > 0) &&
                            <img style= {{width: vhTovw(1.15), zIndex:'2'}}src= {require('../image/BeforeLogin3/Asset 49.png').default}/>
                    }
                    {(loadingDot > 1) &&
                            <img style= {{width: vhTovw(1.15), zIndex:'2', marginLeft: vhTovw(1.15)}}src= {require('../image/BeforeLogin3/Asset 49.png').default}/>
                    }
                    {(loadingDot > 2) &&
                            <img style= {{width: vhTovw(1.15), zIndex:'2', marginLeft: vhTovw(1.15)}}src= {require('../image/BeforeLogin3/Asset 49.png').default}/>
                    }
                </div>
            </div>
            }
        </div>
  );
}

export default BeforeLoginMain;
