import './CardList.css'
function Content(props){
    return (
        
        <div className="Content">
            <h1>{props.Heading}</h1>
            {props.content}
            </div>

    )
}

export default Content;