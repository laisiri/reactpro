import React from 'react'
import porknoodle from './porknoodle.jpg'
import padthai from './padthai.jpg'
import padkraprown from './padkraprown.jpg'
import "./foodList.css"

class FoodList extends React.Component {
    render() {
       
        return (
            <div id='foodList' className='items'>
                <h2>รายการอาหาร</h2>
                <img src={porknoodle} alt="soup noodle" width="300" height="150"/>
                <h4>ก๋วยเตี๋ยวเรือ</h4>
                <img src={padthai} alt="padthai" width="300" height="150"/>
                <h4>ผัดไท</h4>
                <img src={padkraprown} alt="padkraprown" width="300" height="150"/>
                <h4>ข้าวผัดกระเพราหมู</h4>
            </div>    
        );
    };
}
export default FoodList