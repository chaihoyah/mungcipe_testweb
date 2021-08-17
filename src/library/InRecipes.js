import React from 'react';
import {Button} from 'react-bootstrap';
import {Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function InRecipes(data) {
    let ingred = JSON.parse(data.ingred);
    let ingred_key = Object.getOwnPropertyNames(ingred);
    console.log(ingred_key);
    let sauce = JSON.parse(data.sauce);
    let sauce_key = Object.getOwnPropertyNames(sauce);
    let steps = JSON.parse(data.steps);
    let steps_key = Object.getOwnPropertyNames(steps);




    return(
                <div className="RecipeSum" style={{width:'100%'}}>
                    <Table striped bordered hover size='sm'>
                      <tbody>
                        <tr>
                          <td>연어</td>
                          <td>1마리</td>
                        </tr>
                        <tr>
                          <td>연어</td>
                          <td>2마리</td>
                        </tr>
                        <tr>
                          <td>연어</td>
                          <td>3마리</td>
                        </tr>
                      </tbody>
                    </Table>
                    <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '5px'}}>
                            소스
                    </div>
                    <Table striped bordered hover size='sm'>
                      <tbody>
                        <tr>
                          <td>연어</td>
                          <td>1마리</td>
                          <td>image</td>
                        </tr>
                        <tr>
                          <td>연어</td>
                          <td>2마리</td>
                          <td>image</td>
                        </tr>
                        <tr>
                          <td>연어</td>
                          <td>3마리</td>
                          <td>image</td>
                        </tr>
                      </tbody>
                    </Table>
                </div>
    );
};

export default InRecipes;