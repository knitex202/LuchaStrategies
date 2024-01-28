import './CardList.css'
import { imageContent } from '../styles';
function Content2(props){
    return (
        
        <div className="Content">
            <h1>{props.Heading}</h1>
            {props.content}
            </div>

    )
}

export default Content2;