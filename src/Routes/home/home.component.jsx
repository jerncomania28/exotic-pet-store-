import { Link } from "react-router-dom";

//componnents
import Carousel from "../../components/carousel/carousel.component";
import Button from "../../components/buttons/button.component";

//styles
import "./home.styles.scss";

//images
import PetLove from "../../assets/pet.png";
import Dog1 from "../../assets/Dog-1.svg";
import Dog2 from "../../assets/Dog-2.svg";

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
              <Button buttonType="pink" width="200px">
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
            As You Take Vacation So Does Your Pet.
          </h1>
          <p className="pet-vacation-content-text">
            As a pet parent, Leaving your pets at home while you are on vacation
            or at work can be stressful. We offer proper treatment of your pet.
          </p>
          <div className="pet-vacation-content-icons">
            <p><></>Pet Boarding</p>
            <p>Pet DayCare</p>
            <p>Pet Grooming</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
