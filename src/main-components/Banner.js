import './Banner.css';


function Banner(props){
    return(
    <div className="Banner">
        <div className="banner_image" >
            <img src='\rbg-gif.gif'/>
        </div>
        <div className='BannerContent'>
            <div>
            <h1>{props.BannerHeading}</h1>
                </div>
            <div>
                <p>{props.BannerText}</p>
            </div>
        </div>
        
        
    </div>
    )

   
}

export default Banner;