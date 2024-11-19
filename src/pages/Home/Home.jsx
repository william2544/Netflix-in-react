import './home.css'
import Navbar from "../../components/Navber/Navbar";
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCard from '../../components/titleCard/TitleCard';
import Footer from '../../components/footer/Footer';

export default function Home() {
    return (
        <div className='home-container'>
            <Navbar/>
            <div className="hero">
                <img src={hero_banner} alt=""  className="bannner_img"/>
                <div className="hero-caption">
                    <img src={hero_title} alt="" className="caption-img"/>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero rem quasi, esse aspernatur tempore architecto! Necessitatibus rem, amet voluptates recusandae alias eius dolores provident cupiditate eaque aut tenetur voluptatibus deleniti, obcaecati optio neque sunt assumenda vitae! Dignissimos dolores corrupti recusandae quis mollitia magnam illum explicabo impedit necessitatibus odit, iusto, repellendus praesentium eos alias ab repudiandae! </p>
                    <div className="hero_btns">
                        <button className='btn' ><img src={play_icon} alt="" />Play</button>
                        <button className='btn black-btn' ><img src={info_icon} alt="" />More info</button>
                    </div>
                    <TitleCard/>
                </div>
            </div>
            <div className="more-cards">
                <TitleCard title={'Blockbaster Movies'} category={'popular'}/>
                {/* <TitleCard title={'Only on Netflix'} /> */}
                <TitleCard title={'Upcoming'} category={'upcoming'}/>
                <TitleCard title={'Top pics for you'} category={'top_rated'}/>
            </div>
            <Footer/>
        </div>
    )
};
