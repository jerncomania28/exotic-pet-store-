import { Link } from "react-router-dom";

//componnents
import Carousel from "../../components/carousel/carousel.component";
import Button from "../../components/buttons/button.component";
import Card from "../../components/cards/card.component";

//styles
import "./home.styles.scss";

//images
import PetLove from "../../assets/pet.png";
import Dog1 from "../../assets/Dog-1.svg";
import Dog2 from "../../assets/Dog-2.svg";
import { petAccessories } from "../../components/all-images /export-images";
import { Services } from "../../components/all-images /export-images";
import { packages } from "../../components/all-images /export-images";

//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  return (
    <>
      <div className="hero-section">
        <Carousel />
        <div className="hero-section-content">
          <h1>
            open your <span className="color">Heart</span> <br />
            and your Home{" "}
          </h1>
          <p>
            Explore our wide variety of pets and services to choose from our
            established and trusted pet care services. Sign In Shop Now
          </p>
          <div className="hero-section-content-buttons">
            <Link to="/signin">
              <Button buttonType="coloured" width="200px">
                Sign In
              </Button>
            </Link>
            <Link to="/shop">
              <Button buttonType="inverted" width="200px">
                Shop Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="pet-love">
        <div className="pet-love-content">
          <small>Who we really are ?</small>
          <h1 className="pet-love-content-header">
            We Love To Take <br /> Care Of Your Pets
          </h1>
          <p className="pet-love-content-text">
            At Exotic pet cafe, we understand that your pets are also a big part
            of your family, so we go the extra mile to provide them with the
            best care and support.
          </p>
          <div className="pet-love-content-checks">
            <div className="pet-love-content-checks-1">
              <p>
                <FontAwesomeIcon icon="square-check" className="check-square" />
                Certified Groomer
              </p>
              <p>
                <FontAwesomeIcon icon="square-check" className="check-square" />
                Animal Lover
              </p>
            </div>
            <div className="pet-love-content-checks-2">
              <p>
                <FontAwesomeIcon icon="square-check" className="check-square" />
                15+ Years Experience
              </p>
              <p>
                <FontAwesomeIcon icon="square-check" className="check-square" />
                Best Services{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="pet-love-img">
          <img src={PetLove} alt="friendly doctor holding pet" />
        </div>
      </div>
      <div className="pet-vacation">
        <div className="pet-vacation-img">
          <img src={Dog1} alt="pet Vacation" />
          <img src={Dog2} alt="pet Vacation" />
        </div>
        <div className="pet-vacation-content">
          <h1 className="pet-vacation-content-header">
            As You Take Vacation <br /> So Does Your Pet.
          </h1>
          <p className="pet-vacation-content-text">
            As a pet parent, Leaving your pets at home while you are on vacation
            or at work can be stressful. We offer proper treatment of your pet.
          </p>
          <div className="pet-vacation-content-icons">
            <p>
              <FontAwesomeIcon icon="house" className="icon-pink" /> Pet
              Boarding
            </p>
            <p>
              {" "}
              <FontAwesomeIcon icon="briefcase" className="icon-blue" /> Pet
              DayCare
            </p>
            <p>
              <FontAwesomeIcon icon="briefcase" className="icon-yellow" />
              Pet Grooming
            </p>
          </div>
        </div>
      </div>
      <div className="pet-food-accessory">
        <h1 className="pet-food-accessory-header">
          {" "}
          Order Now Pet Food And Accesory At Our Store Today
        </h1>
        <div className="pet-food-accessory-cards-container">
          {petAccessories.map((item) => {
            return (
              <Card
                className="pet-food-accessory-cards"
                otherProperties={item}
                key={item.id}
              />
            );
          })}
        </div>
        <Button buttonType="coloured" width="300px">
          Shop Now
        </Button>
      </div>
      <div className="services">
        <small>What We Do For You ?</small>
        <h1 className="services-header">Our Services</h1>

        <div className="services-container">
          {Services.map((item) => {
            return (
              <Card
                className="service-card"
                otherProperties={item}
                key={item.id}
              />
            );
          })}
        </div>
      </div>
      <div className="price">
        <h1 className="price-header">The Best Choice For You</h1>
        <p className="price-txt">
          We offer long-term and short-term boarding. Every Pet has it’s own
          private, spacious room and daily individual time in our large play
          yard.
        </p>
        <div className="price-list">
          <div className="basic">
            <p className="basic-title">Basic</p>
            <p className="basic-day-care">Day Care </p>
            <h3 className="basic-price">NGN 20,000</h3>
            <Button buttonType="pinkCard" width="250px">
              Purcahse Now
            </Button>
            <div className="basic-packages">
              {packages.map((item, index) => {
                return (
                  <p key={index}>
                    <FontAwesomeIcon icon={['far', 'circle-check']} className="icon-pink" />
                    {item}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="exclusive">
            <p className="exclusive-title">Exclusive</p>
            <p className="exclusive-day-care">2X Care</p>
            <h3 className="exclusive-price">NGN 40,000</h3>
            <Button buttonType="yellowCard" width="250px">
              Purcahse Now
            </Button>
            <div className="exclusive-packages">
              {packages.map((item, index) => {
                return (
                  <p key={index}>
                    <FontAwesomeIcon icon={['far', 'circle-check']} className="icon-yellow" />
                    {item}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="platinum">
            <p className="platinum-title">Platinum</p>
            <p className="platinum-day-care">4X Care</p>
            <h3 className="platinum-price">NGN 100,000</h3>
            <Button buttonType="blueCard" width="250px">
              Purcahse Now
            </Button>
            <div className="platinum-packages">
              {packages.map((item, index) => {
                return (
                  <p key={index}>
                    <FontAwesomeIcon icon={['far', 'circle-check']} className="icon-blue" />
                    {item}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
