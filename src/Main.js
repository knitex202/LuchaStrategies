import './Main.css';
import Navigation from "./main-components/Navigation";
import Banner from "./main-components/Banner";
import Content from './main-components/Content';
import Content2 from "./main-components/Content2";
import Footer from "./main-components/Footer";
import CardList from './main-components/CardList';
import { contentPara } from './verbiage/paragraphs';

let loginText;
let userNm;

function Main(){
    let login = true;

    login === false ? loginText = '' : loginText='Signed in as:' 
    login === false ? userNm = <a href="#login">Regiser/Login</a> : userNm = <a href="#login">Michelle Cedeno</a>
    return (
        <div className='Main'>
            <Navigation className="navigation" loginText={loginText} logState={userNm}/>
            <Banner BannerHeading="Great Change Starts With, You!" BannerText="We are a Firm that helps empower and elect Democrats to make great change"/>
            <div className='what_we_do_area'>
                <h1>What We Do</h1>
                <div>
                    <div className='what_we_do_content'>
                        
                        <h4>General Consulting</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className='what_we_do_content'>
                        <h4>Field Planning</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className='what_we_do_content'>
                        <h4>Comms Training</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
                <div>
                    <div className='what_we_do_content'>
                        <h4>Media Training</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className='what_we_do_content'>
                        <h4>Research</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className='what_we_do_content'>
                        <h4>Website Design and Development</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
                <div>
                    <div className='what_we_do_content'>
                        <h4>E-newsletter Designs</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
                
            </div>

             <Content image="\Texas-voters.png" Heading="This is a Heading" text={contentPara}/> 
            <Content2 className="content" content={<CardList/>} Heading="Meet the Team"/>
            <div>
                <h1>Our Work</h1>
                <div className='our_work'>
                    <a href='https://www.tiffanie4rrisd.com/home' >
                        <img src='https://media.licdn.com/dms/image/C5622AQHOUAGMJycTHw/feedshare-shrink_800/0/1595194455065?e=1709769600&v=beta&t=mdpQQZwzAd7p3m9TKXqn8wh_RTlqwgzmmC5fvul3KpM' alt='Tiffanie Harrison Logo' width={300}/>
                    </a>
                    <div>
                        <a href='https://www.birkholzfortexas.com/'>
                            <img src='https://images.squarespace-cdn.com/content/v1/639c8d6442af5f251ff65a12/29f421f1-d23e-49e7-b46f-3e44a81be914/1.png?format=1500w' width={300}/>
                        </a>
                    </div>
                </div>

            </div>
                
            
            <Footer/>
        </div>
    );
}
    
    
        

export default Main;