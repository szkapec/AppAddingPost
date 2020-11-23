import React from 'react'
import './news.css';
import flag from '../../images/flag.png';
import cov from '../../images/cov.png';
import shop from '../../images/shop.png';
import course from '../../images/course.svg';
import baflix from '../../images/baflix.png';
import weather from '../../images/weather.png';
import hotel from '../../images/hotel.png';
import meme from '../../images/meme.png';
import Mathew from '../../images/Mathew.jpg';
const News = () => {
    return (
        <section className="news-container">
            <div className="news-item">
                <a href="https://szkapec.github.io/mateusz-kapron/#/">
                    <figure className="news-figure">
                        <img className="news-img" src={Mathew} alt="random image"/>
                        <figcaption className="news-name">Mateusz Kaproń</figcaption>
                    </figure>
                </a>
            </div>
            <div className="news-item">
                <a href="https://szkapec.github.io/mateusz-kapron/#/">
                    <figure className="news-figure">
                        <img src={flag} alt="flag image"/>
                        <div className="news-name">
                            <div>Strony</div>
                            <div className="small">7 nowych</div>
                        </div>
                    </figure>
                </a>
            </div>
            <div className="news-item">
                <a href="https://szkapec.github.io/covid/#/">
                    <figure className="news-figure">
                        <img src={cov} alt="cov"/>
                        <figcaption className="news-name">Covid-19</figcaption>
                    </figure>
                </a>
            </div>
           
            <div className="news-item">
                <a href="https://szkapec.github.io/ecommerce/#/">
                    <figure className="news-figure">
                        <img className="news-img" src={shop} alt="shop"/>
                        <figcaption className="news-name">Sklep</figcaption>
                    </figure>
                </a>
            </div>
            <div className="news-item">
                <a href="https://hotel-aplication-react.netlify.app/rooms/">
                    <figure className="news-figure">
                        <img className="news-img" src={hotel} alt="hotel"/>
                        <figcaption className="news-name">Hotel</figcaption>
                    </figure>
                </a>
            </div>
            <div className="news-item">
                <a href="https://szkapec.github.io/kurs-online/#/">
                    <figure className="news-figure">
                        <img className="news-img" src={course} alt="course"/>
                        <figcaption className="news-name">Kursy</figcaption>
                    </figure>
                </a>
            </div>
            <div className="news-item">
                <a href="https://szkapec.github.io/appbaflix/#/browse">
                    <figure className="news-figure">
                        <img className="news-img" src={baflix} alt="baflix"/>
                        <figcaption className="news-name">Baflix</figcaption>
                    </figure>
                </a>
            </div>
            <div className="news-item">
                <a href="https://szkapec.github.io/react-router-weather/#/">
                    <figure className="news-figure">
                        <img className="news-img" src={weather} alt="weather"/>
                        <figcaption className="news-name">Pogoda</figcaption>
                    </figure>
                </a>
            </div>
            <div className="news-item">
                <a href="https://szkapec.github.io/meme-generator/">
                    <figure className="news-figure">
                        <img className="news-img" src={meme} alt="weather"/>
                        <figcaption className="news-name">Memy</figcaption>
                    </figure>
                </a>
            </div>
           


        </section>
    )
}

export default News;
