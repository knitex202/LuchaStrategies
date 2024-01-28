import './CardList.css'
import { imageContent } from '../styles';
function Content(props){
    return (
        
        <div className="Content">
            <div className="content_wrapper">
                <div className="content_image_wrapper">
                    <img style={imageContent} src={props.image}/>
                </div>
                <div className="content_text_wrapper" >   
                    <h1>{props.Heading}</h1>
                    {props.text}
                </div>
            </div>
        </div>

    )
}

export default Content;