import React from "react";
import ButtonTag from "./ButtonTag";
import { footerList } from "../Constant/FooterList";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../Assets/PngItem_12080.png";
import { Icon } from "@iconify/react";
import { AdditionalLink } from "../Constant/AdditonalLinks";
import { policy } from "../Constant/TermsAndPolicy";

const Footer = () => {
  const handleBacktoTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <div>
        <ButtonTag
          label={"Back to top"}
          type={"button"}
          className={"btn-back w-100 text-white border-0 rounded-0 py-3"}
          onClick={handleBacktoTop}
        />
        <div style={{ backgroundColor: "#232f3e" }} className="text-white">
          <Container>
            <Row>
              {footerList?.map((option, index) => (
                <Col>
                  <ul key={index} className="footer-list my-5">
                    <h6 className="fw-bold">{option?.heading}</h6>
                    {option?.list?.map((li) => (
                      <li>
                        <Link className="text-decoration-none text-white link-hover fs-12">
                          {li}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Col>
              ))}
            </Row>
          </Container>
          <hr />
          <div className="d-flex flex-row gap-2 align-items-center justify-content-center">
            <div className="pe-5">
              <img
                alt="logo"
                src={logo}
                width="120"
                height="30"
                className="d-inline-block align-top ps-3"
              />
            </div>
            <div className="d-flex flex-row gap-2 py-4">
              <ButtonTag
                label={"English"}
                className={"d-flex align-items-center rounded-0 gap-2"}
                icon={<Icon icon="ph:globe" style={{ color: "white" }} />}
                variant={"outline-light"}
              />
              <ButtonTag
                label={"India"}
                className={"d-flex align-items-center rounded-0 gap-2"}
                icon={<Icon icon="twemoji:flag-india" className="fs-5" />}
                variant={"outline-light"}
              />
            </div>
          </div>
        </div>
        <div className="text-white footer-bottom">
          <Container>
            <Row className="py-4">
              {AdditionalLink?.map((add, i) => (
                <Col lg={3} className="p-0">
                  <ul key={i} className="footer-list">
                    <li>
                      <Link className="text-decoration-none text-white link-hover lh-sm">
                        <div className="d-flex flex-column">
                          <small className="fs-12">{add?.heading}</small>
                          <small className="text-wrap text-mute fs-12 w-50">
                            {add?.discription}
                          </small>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </Col>
              ))}
            </Row>
            <div className="d-flex flex-row align-items-center justify-content-center gap-2">
              {policy?.map((term, i) => (
                <Link className="text-decoration-none text-white link-hover">
                  <small className="fs-12">{term}</small>
                </Link>
              ))}
            </div>
            <small className="d-flex align-items-center justify-content-center pb-4 fs-12">
              © 1996-2024, Amazon.com, Inc. or its affiliates
            </small>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Footer;
