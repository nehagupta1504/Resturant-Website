import { React, useState } from "react";
import Menu from "./MenuApi";
import "./style.css";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

const uniqueCategories = [
  ...new Set(
    Menu.map((curEle) => {
      return curEle.category;
    })
  ),
  "All",
];
const Resturant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueCategories);
  const filterItem = (category) => {
    if (category === "All") {
      return setMenuData(Menu);
    }
    const updatedList = Menu.filter((curEle) => {
      return curEle.category === category;
    });
    setMenuData(updatedList);
  };
  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList} />
      <MenuCard menu={menuData} />
    </>
  );
};

export default Resturant;
