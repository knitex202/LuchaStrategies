import {userList} from '/Users/michellecedeno/firstapp/src/datatest.js'
import Card from './Card.js'
import './CardList.css'

const users = userList;

function CardList(){
    
    return(
        <div className='CardList'>
            {users.map((element, index) =>
             (<Card key={index} user={element} />))}
        </div>
    )
}

export default CardList;