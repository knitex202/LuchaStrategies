import './Main.css';
import Navigation from "./main-components/Navigation";
import Banner from "./main-components/Banner";
import Content from "./main-components/Content";
import Footer from "./main-components/Footer";
import CardList from './main-components/CardList';

let loginText;
let userNm;

function Main(){
    let login = false;

    login === false ? loginText = '' : loginText='Signed in as:' 
    login === false ? userNm = <a href="#login">Regiser/Login</a> : userNm = <a href="#login">Michelle Cedeno</a>
    return (
        <div className='Main'>
            <Navigation className="navigation" loginText={loginText} logState={userNm}/>
            <Banner BannerHeading="Great Change Starts With, You!" BannerText="We are a Firm that helps empower and elect Democrats to make great change"/>
            <Content/>
            <Content className="content" content={<CardList/>} Heading="Meet the Team"/>
            
                
            
            <Footer/>
        </div>
    );
}
    
    
        

export default Main;