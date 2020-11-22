import React from 'react'
import Food from './food'
import porknoodle from './porknoodle.jpg'
import padthai from './padthai.jpg'
import padkraprown from './padkraprown.jpg'
import "./foodList.css"

class FoodList extends React.Component {
    render() {
       
        return (
            <div id='foodList' className='items'>
                
                <h2>รายการอาหาร</h2>
                <Food image={porknoodle} alt="porkNoodle" name="ก๋วยเตี๋ยวเรือ"/>
                <Food image={padthai} alt="padthai" name="ผัดไท"/>
                <Food image={padkraprown} alt="padkraprown" name="ข้าวผัดกระเพราหมู"/>
               
            </div>    
        );
    };
}
export default FoodList