import React from 'react';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Order(data) {
    console.log(data);

    const model1 = <div key="model1"><img width={'35%'} height={'30%'} src= {require('../../image/noodle.jpg').default} style = {{marginLeft: '2%'}}/>
    <div style={{display:'flex', flexDirection: 'column'}}>
        <div style={{fontSize: '4vw'}}> {data.name} </div>
        <div style={{fontSize: '4vw'}}> {data.price}원 </div>
        <br></br>
        <div style={{fontSize: '2vw'}}> {data.time} </div>
    </div></div>;

    if (data.state > 2) {
        const model2 = <div key="model2"><div style={{display: 'flex', flexDirection:'column', marginLeft: '15%'}}>
        <br></br>
        <Button style={{width: '80%', backgroundColor: 'red', borderColor: 'red', borderRadius: 5, marginLeft: '3%'}} onClick={() => {data.callback1()}}>재구매</Button>{' '}
        <br></br>
        <Button style={{width: '80%', backgroundColor: 'red', borderColor: 'red', borderRadius: 5, marginLeft: '3%'}} onClick={() => {data.callback2()}}>평가&후기</Button>{' '}
    </div></div>;
        return(
            <div className="Pastorder" style={{borderRadius: 10, width: '95%', border: '2px solid black', marginTop: '2%', marginLeft:'2.5%'}}>
                <div style={{display:'flex', flexDirection: 'row', alignItems: 'center'}}>
                    {model1}
                    {model2}
                </div>
                <br></br>
            </div>
            
        );
    } else {
        const model2 = <div key="model2"><div style={{display: 'flex', flexDirection:'column', marginLeft: '15%'}}>
        <br></br>
        <div style={{fontSize: '5vw'}}>승인중</div>
        <div style={{fontSize: '2vw'}}>(2~3분 소요)</div>
        <br></br>
        <Button style={{width: '80%', backgroundColor: 'red', borderColor: 'red', borderRadius: 5, marginLeft: '3%'}} onClick={() => {data.callback1()}}>주문취소</Button>{' '}
    </div></div>;
        return(
            <div className="Currentorder" style={{borderRadius: 10, width: '95%', border: '2px solid black', marginTop: '2%', marginLeft:'2.5%'}}>
                    <div style={{width: '100%', fontSize: '6vw', marginLeft: '2%', fontWeight: 'bold'}}>현재 주문 정보</div>
                    <br></br>
                    <div style={{display:'flex', flexDirection: 'row', alignItems: 'center'}}>
                        {model1}
                        {model2}
                    </div>
                    <br></br>
                </div>
        );
    }
}

export default Order;