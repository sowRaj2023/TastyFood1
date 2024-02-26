import Cookies from "js-cookie"
import {Redirect} from "react-router-dom"

import {MdAttachEmail, MdPhoneInTalk} from 'react-icons/md'
import {BsTwitter} from 'react-icons/bs'
import {FaRegCopyright} from 'react-icons/fa'
import Header from '../Header'
import './index.css'

const Home = () =>{
    const jwtToken = Cookies.get("jwt_token")
    if(jwtToken === undefined){
        return <Redirect to="/login" />
    }
    return(
    <>
    <Header />
    <div className="home-container">
      <div className="home-content">
       
        <div className='description'>
        <p className="home-description">
        Food is one of the basic necessities of life. <br/>Food contains nutrients—substances essential<br/> 
        for the growth, repair, and maintenance of body<br/> tissues and for the regulation of vital processes. <br/>
        Nutrients provide the energy our bodies need to function. <br/>The energy in food is measured in units called calories.
        </p>
        
        </div>
        
      </div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
        >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          >
            .
          </li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1">
            .
          </li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2">
            .
          </li>
        </ol>
        <div className="carousel-inner image-slides">
          <div className="carousel-item active">
            <img
              className="d-block w-100 "
              src="https://img.freepik.com/free-photo/delicious-indian-food-tray_23-2148723505.jpg?w=996&t=st=1708932924~exp=1708933524~hmac=274309ad8e1f12df1ff88603d095c3b6886cf370300c6102d46652b2d63e12ac"
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141344.jpg?w=1380&t=st=1708933237~exp=1708933837~hmac=aff8490c6134099c30f7df13659b4a3f731152daa1537baccd3cd6c6b772a1fe"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://img.freepik.com/free-photo/top-view-tasty-salad-with-ingredients-grey-salad-food-health-diet_140725-123719.jpg?w=1380&t=st=1708933430~exp=1708934030~hmac=95ef7b20d9cd1b74aff495e380dc00e07634515df20b11a1ff68cb068ef5fe64"
              alt="Third slide"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true">
            .
          </span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true">
            .
          </span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <div className='order-button'>
      <button type="button" className="shop-now-button">
          Order Now
        </button>
        </div>
    </div>

    <div className="bottom-section">
      <div className="icon-container text-icon">
        <div>
          <MdAttachEmail className="icon" />
          <p>Tastyfoods@gmail.com</p>
        </div>
        <div>
          <MdPhoneInTalk className="icon" />
          <p className="text-icon">1234567891</p>
        </div>
        <div>
          <BsTwitter className="icon" />
          <p className="text-icon">@Tastyfoods</p>
        </div>
      </div>
      <hr className="line" />
      <div className="text-center">
        <p>Copyright</p>
        <FaRegCopyright className="icon-copy" />
        <p>2024 Tastyfoods. All rights reserved.</p>
      </div>
    </div>
 
    </>

)}
export default Home
