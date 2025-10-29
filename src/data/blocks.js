import b1 from '../assets/signatureProjects/wolsey.webp';
import b2 from '../assets/signatureProjects/mhceg.webp';
import b3 from '../assets/signatureProjects/kaller.png';
import b4 from '../assets/signatureProjects/datta.webp';
// import b5 from '../assets/signatureProjects/mt--archCircle.webp';
import b6 from '../assets/signatureProjects/logo.webp';
import b7 from '../assets/signatureProjects/Indigenous.webp';

const blocks = [
  {
    top: "20%",
    left: "10%",
    img: `${b1}`,
    name: "Wolsey",
    category: "Engineering",
    page: "/wolsey",
  },
  {
    top: "10%",
    left: "45%",
    img: `${b2}`,
    name: "MHCEG",
    category: "Engineering",
    page: "/mhceg",
  },
  {
    top: "45%",
    left: "40%",
    img: `${b3}`,
    name: "Kaller",
    category: "Architecture",
    page: "/kaller",
  },
  {
    top: "60%",
    left: "75%",
    img: `${b4}`,
    name: "Datta",
    category: "Architecture",
    page: "/datta-and-tayefi",
  },
  // {
  //   top: "80%",
  //   left: "50%",
  //   img: `${b5}`,
  //   name: "MT-ARCH",
  //   category: "Architecture",
  //   page: "/mt-arch",
  // },
  {
    top: "30%",
    left: "80%",
    img: `${b6}`,
    name: "Mosaic",
    category: "RealEstate",
    page: "/mosaic-realState",
  },
  {
    top: "65%",
    left: "15%",
    img: `${b7}`,
    name: "Indigenous",
    category: "Engineering",
    page: "/indigenous-mosaic",
  },
];

export default blocks;
