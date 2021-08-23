import img1 from "./img/products/pro1.jpeg";
import img2 from "./img/products/pro2.jpg";
import img3 from "./img/products/pro3.jpg";
import img4 from "./img/products/pro4.png";
import img5 from "./img/products/pro5.jpg";
import img6 from "./img/products/pro6.jpeg";
import img7 from "./img/products/pro6.jpg";
import img8 from "./img/products/pro7.jpg";
import img9 from "./img/products/pro8.jpg";
import img10 from "./img/products/pro9.jpg";
import img11 from "./img/products/pro10.jpg";
import img12 from "./img/products/pro11.jpg";
import img13 from "./img/products/pro12.jpg";
import img14 from "./img/products/pro13.jpg";

const products = [
  {
    id: "1",
    pname: "Room Decorating",
    pimg: img1,
    plink: "",
  },
  {
    id: "2",
    pname: "Bohemian Style",
    pimg: img2,
    plink: "",
  },
  {
    id: "3",
    pname: "Living Room Style",
    pimg: img3,
    plink: "",
  },
  {
    id: "4",
    pname: "Living Room Decor",
    pimg: img4,
    plink: "",
  },
  {
    id: "5",
    pname: "TV Room Decor",
    pimg: img5,
    plink: "",
  },
  {
    id: "6",
    pname: "Home Decorating",
    pimg: img6,
    plink: "",
  },
];
const product_data = [
  {
    id: "0",
    name: "SPRING WOODS",
    category: "Frames Art Print",
    by: "Michele Payne",
    img: img7,
    style: ["Classic", "Modern"],
    style: ["Classic", "Modern"],
    size: ["8 * 10", "3 * 11", "10 * 12", "12 * 13"],
  },
  {
    id: "1",
    name: "PINK AND YELLOW SERAPE",
    category: "Frames Art Print",
    by: "Michele Payne",
    img: img8,
    style: ["Classic", "Modern"],
    style: ["Classic", "Modern"],
    size: ["8 * 10", "3 * 11", "10 * 12"],
  },
  {
    id: "2",
    name: "QUOTE SET BOOGIE",
    category: "Frames Art Print",
    by: "Michele Payne",
    img: img9,
    style: ["Classic", "Modern"],
    size: ["8 * 10", "3 * 11", "10 * 12"],
  },
  {
    id: "3",
    name: "QUOTE SET SUNSHINE",
    category: "Frames Art Print",
    by: "Michele Payne",
    img: img10,
    style: ["Classic", "Modern"],
    size: ["8 * 10", "3*11"],
  },
  {
    id: "4",
    name: "MULTICOLOR ZEBRA PATTERN 001",
    category: "Frames Art Print",
    by: "Orara Studio",
    img: img11,
    style: ["Classic", "Modern"],
    size: ["8 * 10", "3*11"],
  },
  {
    id: "5",
    name: "MODERN CHECKERBOARD",
    category: "Frames Art Print",
    by: "Orara Studio",
    img: img12,
    style: ["Classic", "Modern"],
    size: ["8 * 10", "3*11"],
  },
  {
    id: "6",
    name: "MINIMAL MOON",
    category: "Frames Art Print",
    by: "Orara Studio",
    img: img13,
    style: ["Classic", "Modern"],
    size: ["8 * 10", "3*11"],
  },
  {
    id: "7",
    name: "CIRCLE SUN AND MOON BW",
    category: "Frames Art Print",
    by: " Orara Studio",
    img: img14,
    style: ["Classic", "Modern"],
    size: ["8 * 10", "3 * 11", "10 * 12", "12 * 13"],
  },
];
const companyfooter = [
  {
    lname: "Shopping",
    llink: "/",
  },
  {
    lname: "Return Policy",
    llink: "/",
  },
  {
    lname: "Work With Us",
    llink: "/",
  },
  {
    lname: "Terms & Conditions",
    llink: "/",
  },
];
const followusfooter = [
  {
    licon: "fab fa-facebook-square",
    lname: "Facebook",
    llink: "/",
  },
  {
    licon: "fab fa-twitter",
    lname: "Twitter",
    llink: "/",
  },
  {
    licon: "fab fa-pinterest",
    lname: "Pinterest",
    llink: "/",
  },
  {
    licon: "fab fa-instagram",
    lname: "Instagram",
    llink: "/",
  },
];
export default products;
export { companyfooter, followusfooter, product_data };
