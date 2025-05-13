import { Pages, Routes } from "@/constants/enums";
import { Home, Monitor, Phone, Package, Users, ListOrdered, BookPlus, BadgeDollarSign, Columns3Icon   } from "lucide-react";
import { Camera, Headphones, Watch } from "lucide-react";
import { Gamepad } from "lucide-react";

export const navBar = [
  // {
  //   id: 1,
  //   title: Pages.HOME,
  //   url: Routes.ROOT,
  // },
  {
    id: 2,
    title: Pages.CONTACT,
    url: Routes.CONTACT,
  },
  {
    id: 3,
    title: Pages.ABOUT,
    url: Routes.ABOUT,
  },

  {
    id: 4,
    title: Pages.REGISTER,
    url: Routes.REGISTER,
  },
];

export const FilterData = [
  {
    id: 1,
      title: `Woman's Fashion`,
  },
  {
    id: 2,
    title: "Men's Fashion",
  },
  {
    id: 3,
    title: "Electronics",
  },
  {
    id: 4,
    title: "Home & Lifestyle",
  },
  {
    id: 5,
    title: "Medicine",
  },
  {
    id: 6,
    title: "Sports & Outdoor",
  },
  {
    id: 7,
    title: "Baby's & Toys",
  },
  {
    id: 8,
    title: "Groceries & Pets",
  },
  {
    id: 9,
    title: "Health & Beauty",
  },
];
const gamingProducts = [
  {
    id: 1,
    name: "HAVIT HV-G92 Gamepad",
    description: "Fabric gaming chair with a 24-inch 144Hz monitor",
    price: 300,
    oldPrice: 350,
    rate: 3.5,
    discount: true,
    ndiscount: 50,
    reviews: 100,
    image: "/controlle.png",
    slug: "havit-hv-g92-gamepad",
    images: [
      "/controlle.png",
      "/controlle.png",
      "/controlle.png",
      "/controlle.png",
    ],
    colors: ["red", "blue", "green", "yellow"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 2,
    name: "AK-900 Wired Keyboard",
    description:
      "Gaming chair with synthetic leather and a 32-inch curved 165Hz monitor",
    price: 450,
    oldPrice: 500,
    rate: 1.5,
    discount: true,
    ndiscount: 30,
    reviews: 50,
    image: "/k.png",
    slug: "ak-900-wired-keyboard",
    images: ["/k.png", "/k.png", "/k.png", "/k.png"],
    colors: ["red", "blue", "green", "yellow"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 3,
    name: "IPS LCD Gaming Monitor 24.5 inch",
    description: "Luxury chair with ergonomic design and a 27-inch 4K monitor",
    price: 1800,
    oldPrice: 2000,
    rate: 2.5,
    discount: true,
    ndiscount: 40,
    reviews: 200,
    image: "/sc.png",
    slug: "ips-lcd-gaming-monitor-245-inch",
    images: ["/sc.png", "/sc.png", "/sc.png", "/sc.png"],
    colors: ["red", "blue", "yellow"],
    sizes: ["S", "M", "L"],
  },
  {
    id: 4,
    name: "S-Series Comfort Chair ",
    description: "Luxury chair with ergonomic design and a 27-inch 4K monitor",
    price: 1800,
    oldPrice: 2000,
    rate: 2.5,
    discount: true,
    ndiscount: 40,
    reviews: 200,
    image: "/cH.png",
    slug: "s-series-comfort-chair",
    images: ["/cH.png", "/cH.png", "/cH.png", "/cH.png"],
    colors: ["red", "blue", "green", "yellow"],
    sizes: ["S", "M", "XL"],
  },
  {
    id: 5,
    name: "The north coat",
    description: "Fabric gaming chair with a 24-inch 144Hz monitor",
    price: 300,
    oldPrice: 350,
    rate: 3.5,
    discount: true,
    ndiscount: 50,
    reviews: 100,
    image: "/Tsh.png",
    slug: "the-north-coat",
    images: ["/Tsh.png", "/Tsh.png", "/Tsh.png", "/Tsh.png"],
    colors: ["red", "green", "yellow"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 6,
    name: "Gucci duffle bag",
    description: "Fabric gaming chair with a 24-inch 144Hz monitor",
    price: 300,
    oldPrice: 350,
    rate: 3.5,
    discount: true,
    ndiscount: 50,
    reviews: 100,
    image: "/Bage.png",
    slug: "gucci-duffle-bag",
    images: ["/Bage.png", "/Bage.png", "/Bage.png", "/Bage.png"],
    colors: ["green", "yellow"],
    sizes: ["S", "M", "L", "XL"],
  },

  {
    id: 7,
    name: "RGB liquid CPU Cooler",
    description: "Fabric gaming chair with a 24-inch 144Hz monitor",
    price: 300,
    oldPrice: 350,
    rate: 3.5,
    discount: true,
    ndiscount: 50,
    reviews: 100,
    image: "/sound.png",
    slug: "rgb-liquid-cpu-cooler",
    images: ["/sound.png", "/sound.png", "/sound.png", "/sound.png"],
    colors: ["blue", "green", "yellow"],
    sizes: ["S", "M", "L", "XL"],
  },

  {
    id: 8,
    name: "Small BookSelf",
    description: "Fabric gaming chair with a 24-inch 144Hz monitor",
    price: 300,
    oldPrice: 0,
    rate: 3.5,
    discount: false,
    ndiscount: 50,
    reviews: 100,
    new: true,
    image: "/office.png",
    slug: "small-bookself",
    images: ["/office.png", "/office.png", "/office.png", "/office.png"],
    colors: ["red", "blue", "green"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 9,
    name: "DXRacer Master Series",
    description:
      "Gaming chair with synthetic leather and a 32-inch curved 165Hz monitor",
    price: 450,
    oldPrice: 0,
    rate: 1.5,
    discount: false,
    ndiscount: 30,
    reviews: 50,
    new: true,
    image:
      "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    slug: "dxracer-master-series",
    images: [
      "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ],
    colors: ["red", "blue"],
    sizes: ["S", "M"],
  },
];

export const Categories = [
  {
    id: 1,
    icon: <Phone className="w-10 h-10" strokeWidth={1} />,
    name: "Phones",
  },
  {
    id: 2,
    icon: <Monitor className="w-10 h-10" strokeWidth={1} />,
    name: "Computers",
  },
  {
    id: 3,
    icon: <Watch className="w-10 h-10" strokeWidth={1} />,
    name: "SmartWatch",
  },
  {
    id: 4,
    icon: <Camera className="w-10 h-10" strokeWidth={1} />,
    name: "Camera",
  },
  {
    id: 5,
    icon: <Headphones className="w-10 h-10" strokeWidth={1} />,
    name: "HeadPhones",
  },
  {
    id: 6,
    icon: <Gamepad className="w-10 h-10" strokeWidth={1} />,
    name: "Gaming",
  },
];

export const AdminDashboard = [
  {
    id: 1,
    name: "Dashboard",
    url: Routes.ADMIN_DASHBOARD,
    icon: <Home  strokeWidth={1} />,
  },
  {
    id: 2,
    name: "Products",
    url: Routes.ADMIN_PRODUCTS,
    icon: <Package  strokeWidth={1} />,
  },
  {
    id: 3,
    name: "Orders",
    url: Routes.ADMIN_ORDERS,
    icon: <ListOrdered strokeWidth={1} />,
  },
  {
    id: 4,
    name: "Users",
    url: Routes.ADMIN_USERS,
    icon: <Users  strokeWidth={1} />,
  },
  {
    id: 5,
    name: "Categories",
    url: Routes.ADMIN_CATEGORIES,
    icon: <BookPlus  strokeWidth={1} />,
  },
  {
    id: 6,
    name: "Coupons",
    url: Routes.ADMIN_COUPONS,
    icon: <BadgeDollarSign  strokeWidth={1} />,
  },
  {
    id: 7,
    name: "Customize",
    url: Routes.ADMIN_CUSTOMIZE,
    icon: <Columns3Icon  strokeWidth={1} />,
  },

];  

export default gamingProducts;
