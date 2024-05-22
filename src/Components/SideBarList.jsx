import React, { useContext, useEffect, useState } from "react";
import { priceSortList } from "../Constant/PriceSortList";
import { Link } from "react-router-dom";
import InputBox from "./InputBox";
import ButtonTag from "./ButtonTag";
import axios from "axios";
import ProductContext from "./ProductContext";

const SideBarList = ({ fetchData }) => {
  const [list, setList] = useState([]);
  const [activePriceLink, setActivePriceLink] = useState("all");
  const [activeCategoryLink, setActiveCategoryLink] = useState("all-categories");
  const [minMax, setMinMax] = useState({
    min: "",
    max: "",
  });
  const { setAllData } = useContext(ProductContext);

  const allCategory = async () => {
    const res = await axios.get("https://api.escuelajs.co/api/v1/categories");
    setList(res?.data);
  };

  const category = async (id) => {
    const selectedCategory = await axios.get(
      `https://api.escuelajs.co/api/v1/products/?categoryId=${id}`
    );
    setAllData(selectedCategory.data);
  };

  const pricebelow = async (rate) => {
    const price = await axios.get(
      `https://api.escuelajs.co/api/v1/products/?price=${rate}`
    );
    setAllData(price?.data);
  };

  const priceRange = async (min, max) => {
    const price = await axios.get(
      `https://api.escuelajs.co/api/v1/products/?price_min=${min}&price_max=${max}`
    );
    setAllData(price?.data);
  };

  useEffect(() => {
    allCategory();
  }, []);

  return (
    <div>
      <div className="mt-3">
        <h6>Price</h6>
        {priceSortList.length > 0 &&
          priceSortList.map((price, index) => (
            <div className="d-flex flex-column" key={index}>
              <Link
                className={`text-decoration-none card-link text-dark ${
                  activePriceLink === "all" ? "fw-bold" : ""
                }`}
                onClick={() => {
                  fetchData();
                  setActivePriceLink("all");
                }}
              >
                {price.clear}
              </Link>
              <Link
                className={`text-decoration-none card-link text-dark ${
                  activePriceLink === "below50" ? "fw-bold" : ""
                }`}
                onClick={() => {
                  pricebelow(50);
                  setActivePriceLink("below50");
                }}
              >
                {price.below}
              </Link>
              {price.price.map((pri, priIndex) => (
                <Link
                  className={`text-decoration-none card-link text-dark ${
                    activePriceLink === `range-${pri.min}-${pri.max}` ? "fw-bold" : ""
                  }`}
                  onClick={() => {
                    priceRange(pri.min, pri.max);
                    setActivePriceLink(`range-${pri.min}-${pri.max}`);
                  }}
                  key={priIndex}
                >
                  ₹{pri.min} - ₹{pri.max}
                </Link>
              ))}
            </div>
          ))}
        <div className="d-flex flex-row gap-2">
          <InputBox
            placeholder={"₹ Min"}
            onChange={(e) => setMinMax({ ...minMax, min: e.target.value })}
            value={minMax.min}
          />
          <InputBox
            placeholder={"₹ Max"}
            onChange={(e) => setMinMax({ ...minMax, max: e.target.value })}
            value={minMax.max}
          />
          <ButtonTag
            label={"Go"}
            variant={"outline-info"}
            className={"text-dark"}
            onClick={() => {
              priceRange(minMax.min, minMax.max);
              setActivePriceLink(`range-${minMax.min}-${minMax.max}`);
              setMinMax({ min: "", max: "" });
            }}
          />
        </div>
      </div>
      <div className="my-3">
        <h6>Category</h6>
        <ul className="footer-list p-0">
          <li>
            <Link
              className={`text-decoration-none card-link text-dark ${
                activeCategoryLink === "all-categories" ? "fw-bold" : ""
              }`}
              onClick={() => {
                fetchData();
                setActiveCategoryLink("all-categories");
              }}
            >
              All Categories
            </Link>
          </li>
          {list.length > 0 &&
            list.map((cate, i) => (
              <li key={i}>
                <Link
                  onClick={() => {
                    category(cate.id);
                    setActiveCategoryLink(`category-${cate.id}`);
                  }}
                  className={`text-decoration-none card-link text-dark ${
                    activeCategoryLink === `category-${cate.id}` ? "fw-bold" : ""
                  }`}
                >
                  {cate.name}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBarList;
