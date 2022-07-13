// src/App.js
import './App.css';
import { useState } from "react";
// src/index.js
import 'antd/dist/antd.css';
// ejemplo import antd
// import { Card, Row, Col, Divider, Input, Button } from 'antd';
import foods from './foods.json';
import FoodBox from "./components/FoodBox";
import {Divider} from 'antd'




function App() {
  const [listFoods, setlistFoods] = useState (foods);
  return <div className="App">
  <Divider>FOOD LIST</Divider>
  <FoodBox food={ {
  name: "Orange",
  calories: 85,
  image: "https://i.imgur.com/abKGOcv.jpg",
  servings: 1
}} />
    {listFoods.map((food) => {
        return  <div>
      <p> {food.name} </p>
      <img src={food.image} width={300} alt="comida"/>
      <p> </p>
    </div>;
      })}
  </div>;
}
export default App;