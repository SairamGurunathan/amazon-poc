import React from "react";

const NavIcons = ({ icon, title, onClick }) => {
  return (
    <>
      <div
        className="text-white d-flex flex-row align-items-center justify-content-center gap-1 menu"
        onClick={onClick}
      >
        {icon}
        <p className="p-0 m-0 fw-bold">{title}</p>
      </div>
    </>
  );
};

export default NavIcons;