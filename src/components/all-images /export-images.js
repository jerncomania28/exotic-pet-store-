import image1 from "../../assets/hero-img-1.svg";
import image2 from "../../assets/hero-img-2.png";
import image3 from "../../assets/hero-img-3.svg";
import image4 from "../../assets/hero-img-4.png";

// pet Images.

import petAccessory1 from "../../assets/pet-accessory-1.png";
import petAccessory2 from "../../assets/pet-accessory-2.png";
import petAccessory3 from "../../assets/pet-accessory-3.png";

// service Images
import service1 from "../../assets/service-1.png";
import service2 from "../../assets/service-2.png";
import service3 from "../../assets/service-3.png";
import service4 from "../../assets/service-4.png";
import service5 from "../../assets/service-5.png";

export const CarouselImages = [image1, image2, image3, image4];

export const petAccessories = [
  {
    id: 1,
    header: "Dog Jacket",
    price: 4999,
    content: false,
    imgUrl: petAccessory1,
    buttonContent: "Shop Now",
    buttonType: "common",
    width: "100px",
  },
  {
    id: 2,
    header: "Food Active",
    price: 2500,
    content: false,
    imgUrl: petAccessory2,
    buttonContent: "Shop Now",
    buttonType: "common",
    width: "100px",
  },
  {
    id: 3,
    header: "Rabbit Toy",
    price: 4999,
    content: false,
    imgUrl: petAccessory3,
    buttonContent: "Shop Now",
    buttonType: "common",
    width: "100px",
  },
];

export const Services = [
  {
    id: 1,
    header: "Veterinary Care",
    price: false,
    content:
      "We provide a fully serviced veterinary clinic that offers comprehensive health care including exams, vaccination, and dental cleanings.",
    imgUrl: service1,
    buttonContent: "Make Appointement",
    buttonType: "service",
    width: "200px",
  },
  {
    id: 2,
    header: "Pet Shop",
    price: false,
    content:
      "Visit our luxury pet cafe for sales of exotic breeds of pets and pet accessories, food, and luxury carriers that will please both pets and pet lovers.",
    imgUrl: service2,
    buttonContent: "Visit Shop",
    buttonType: "service",
    width: "100px",
  },
  {
    id: 3,
    header: "Pet Boarding",
    price: false,
    content:
      "Exotic Pet Cafe offers a clean, safe, and fun home for your pets when you have to be away from them.",
    imgUrl: service3,
    buttonContent: "Make Appointment",
    buttonType: "service",
    width: "200px",
  },
  {
    id: 4,
    header: "Pet Grooming",
    price: false,
    content:
      "We take the mess and hassle out of bath time by providing you with professional grooming services that make your pet look and smell great in a safe and friendly environment.",
    imgUrl: service4,
    buttonContent: "Make Appointment",
    buttonType: "service",
    width: "200px",
  },
  {
    id: 5,
    header: "Pet Training",
    price: false,
    content:
      "From teaching your pets obedience to advanced training , our team of professional trainers are committed to providing intense pet training  in a fun engaging environment.",
    imgUrl: service5,
    buttonContent: "Make Appointment",
    buttonType: "service",
    width: "200px",
  },
];

export const packages = [
  "Single Room",
  "Socialist Exercise",
  "Custom Meals",
  "Spa and Grooming",
  "Exercise 2x",
  "Custom Meals",
  "Grooming 2x",
];
