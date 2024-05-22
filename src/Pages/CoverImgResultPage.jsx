import React, { useContext, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { toysMenuList } from "../Constant/ToysMenuList";
import { Link, useNavigate } from "react-router-dom";
import SelectTag from "../Components/SelectTag";
import SideBarList from "../Components/SideBarList";
import axios from "axios";
import Pagination from "../Components/Pagination";
import ProductContext from "../Components/ProductContext";

const CoverImgResultPage = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [sortOption, setSortOption] = useState("Bestselling");
  const limitValue = 12;
  const { selectData, setSelectData, allData, setAllData } = useContext(ProductContext);
  const navigate = useNavigate();

  const fetchData = async () => {
    const offset = pageNumber * limitValue;
    const response = await axios.get(
      `https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${limitValue}`
    );
    let sortedData = response.data;

    if (sortOption === "Price: Low to High") {
      sortedData = sortedData.sort((a, b) => a.price - b.price);
    } else if (sortOption === "Price: High to Low") {
      sortedData = sortedData.sort((a, b) => b.price - a.price);
    }
    setAllData(sortedData);
  };
  const allProducts = async () => {
    const product = await axios.get("https://api.escuelajs.co/api/v1/products");
    setTotalCount(product?.data?.length);
  };

  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    setPageNumber(selectedPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const totalPageCount = Math.ceil(totalCount / limitValue);

  const handleSelect = async (id) => {
    try {
      const response = await axios.get(
        `https://api.escuelajs.co/api/v1/products/${id}`
      );
      setSelectData(response?.data);
      window.scrollTo({ top: '0' });
      navigate('/product');
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  useEffect(() => {
    fetchData();
    allProducts();
    // eslint-disable-next-line
  }, [pageNumber, sortOption]);

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  return (
    <>
      <div className="bg-white">
        <div
          className="d-flex flex-row text-nowrap px-3 py-1"
          style={{ backgroundColor: "#fafafa" }}
        >
          <Row className="m-0">
            {toysMenuList?.map((menu, i) => (
              <Col key={i}>
                <Link
                  to={`/${menu}`}
                  className="text-decoration-none text-dark fs-12 result-menu"
                >
                  {menu}
                </Link>
              </Col>
            ))}
          </Row>
        </div>
        <div>
          <Row className="m-0">
            <Col>
              <div className="d-flex flex-row align-items-center px-3 bg-white py-2">
                <span>1-{limitValue} of {totalCount} results</span>
                <SelectTag
                  className={"w-25 ms-auto"}
                  title={"Bestselling"}
                  option={[
                    "Bestselling",
                    "Price: Low to High",
                    "Price: High to Low",
                  ]}
                  onChange={(event)=>handleSortChange(event)}
                />
              </div>
            </Col>
          </Row>
        </div>
        <Row className="m-0">
          <Col lg={2}>
            <SideBarList fetchData={fetchData} />
          </Col>
          <Col lg={10}>
            <Row>
              {allData.length > 0 && allData.map((result, index) => (
                <Col lg={3} key={index}>
                  <div
                    className="card p-2 my-3 product-details"
                    onClick={() => handleSelect(result?.id)}
                  >
                    <img
                      src={result?.images[0]}
                      alt={`Slide ${index + 1}`}
                      style={{ width: "220px", height: "250px" }}
                    />
                    <div>
                      <Link className="text-decoration-none card-link link-truncate">
                        {result?.title}
                      </Link>
                    </div>
                    <h4>₹{result?.price}</h4>
                    <small className="des-truncate">
                      {result?.description}
                    </small>
                    <small className="mt-2">
                      Category:{" "}
                      <span className="fw-bold">{result?.category?.name}</span>
                    </small>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </div>
      {selectData && (
        <Pagination
          handlePageClick={handlePageClick}
          pageNumber={pageNumber}
          totalPageCount={totalPageCount}
        />
      )}
    </>
  );
};

export default CoverImgResultPage;
