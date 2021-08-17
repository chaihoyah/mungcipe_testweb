import React, {Component} from 'react';
import { Navbar, Nav, Form, FormControl, Button, Dropdown,} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter ,Route, Link, Switch} from 'react-router-dom';
import {InRecipeMain, InRecipeMain1, InRecipeMain2, InRecipeMain3, InRecipeMain4, InRecipeMain5, InRecipeMain6, InRecipeMain7, InRecipeMain8, InRecipeMain9, InRecipeMain10, InRecipeMain11} from './InRecipe';
import {OrderMain} from './InRecipe/Order';
import {OrderSurveyMain} from './InRecipe/Order/OrderSurvey';
import {MyPageMain} from './MyInfo';
import {MenuaddMain} from './Menuadd';
import {Main} from './';
import {BeforeLoginMain} from './BeforeLogin';
import {AdminPage} from './Admin';


function App({match, history}) {

  return (
    <div className="App">
        <BrowserRouter>
            <div>
                <Route exact path="/" component={BeforeLoginMain} />
                <Route exact path="/main" component={Main} />
                <Route exact path="/inrecipe/" component={InRecipeMain} />
                <Route exact path="/inrecipe1/" component={InRecipeMain1} />
                <Route exact path="/inrecipe2/" component={InRecipeMain2} />
                <Route exact path="/inrecipe3/" component={InRecipeMain3} />
                <Route exact path="/inrecipe4/" component={InRecipeMain4} />
                <Route exact path="/inrecipe5/" component={InRecipeMain5} />
                <Route exact path="/inrecipe6/" component={InRecipeMain6} />
                <Route exact path="/inrecipe7/" component={InRecipeMain7} />
                <Route exact path="/inrecipe8/" component={InRecipeMain8} />
                <Route exact path="/inrecipe9/" component={InRecipeMain9} />
                <Route exact path="/inrecipe10/" component={InRecipeMain10} />
                <Route exact path="/inrecipe11/" component={InRecipeMain11} />
                <Route exact path="/inrecipe/order" component={OrderMain} />
                <Route exact path="/inrecipe/order/survey" component={OrderSurveyMain} />
                <Route exact path="/inadminshit" component={AdminPage}/>
                <Route path="/mypage" component={MyPageMain} />
                <Route path="/addmenu" component={MenuaddMain} />
            </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
