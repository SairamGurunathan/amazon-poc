import React, { useState } from "react";
import NavIcons from "./NavIcons";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import OffcanvasMenu from "./OffcanvasMenu";
import { offcanvasList } from "../Constant/OffcanvasList";
import { list } from "../Constant/MenuList";

const MenuList = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  return (
    <>
      <div
        className="d-flex flex-row text-white gap-2 ps-3 fs-6 py-1"
        style={{ backgroundColor: "#232f3e" }}>
        <NavIcons
          icon={
            <Icon
              icon="icon-park-outline:hamburger-button"
              style={{ color: "white" }}
            />
          }
          title={"All"}
          onClick={handleShow}
        />
        {list?.map((menu, index) => (
          <Link
            key={index}
            to={`/${menu}`}
            className="text-decoration-none text-white border-1 p-1 menu"
          >
            {menu}
          </Link>
        ))}
      </div>
      <OffcanvasMenu show={show} menuList={offcanvasList} setShow={setShow} />
    </>
  );
};

export default MenuList;
