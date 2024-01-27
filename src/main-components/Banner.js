import './Banner.css';

function Banner(props){
    return(
    <div className="Banner">
        <div className='BannerContent'>
            <h1>{props.BannerHeading}</h1>
            <p>{props.BannerText}</p>
        </div>
    </div>
    )

   
}

export default Banner;