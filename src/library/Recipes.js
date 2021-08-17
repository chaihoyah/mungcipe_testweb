import React from 'react';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Recipes(data) {
    console.log(data);
    return(
        <div className= "Recipe"style={{display:'flex', width:'100%', backgroundColor: 'silver', flexDirection:'column',alignItems:'center', marginTop: '110px'}}>
            <img width={'90%'} height={'90%'} src= {require('../image/noodle.jpg').default}/>
            <Button href="/inrecipe" style={{width: '60%', backgroundColor: 'red', borderColor: 'red', borderRadius: 5, marginLeft: '5px',marginTop: '5px'}}>{data.name}</Button>
        </div>
    );
};

export default Recipes;