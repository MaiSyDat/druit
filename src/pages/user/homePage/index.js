import { memo } from "react";
import "./style.scss";
import { formatter } from "../../..//utils/formatter";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import cat1Img from "../../../assets/user/img/categories/cat1Img.jpg";
import cat2Img from "../../../assets/user/img/categories/cat2Img.jpg";
import cat3Img from "../../../assets/user/img/categories/cat3Img.jpg";
import cat5Img from "../../../assets/user/img/categories/cat5Img.jpg";
import cat6Img from "../../../assets/user/img/categories/cat6Img.jpg";
import cat7Img from "../../../assets/user/img/categories/cat7Img.jpg";
import cat8Img from "../../../assets/user/img/categories/cat8Img.jpg";
import cat9Img from "../../../assets/user/img/categories/cat9Img.jpg";
import feat1 from "../../../assets/user/img/featured/feat1.jpg";
import feat2 from "../../../assets/user/img/featured/feat2.jpg";
import feat3 from "../../../assets/user/img/featured/feat3.jpg";
import feat4 from "../../../assets/user/img/featured/feat4.jpg";
import feat5 from "../../../assets/user/img/featured/feat5.jpg";
import feat6 from "../../../assets/user/img/featured/feat6.jpg";
import feat7 from "../../../assets/user/img/featured/feat7.jpg";
import feat8 from "../../../assets/user/img/featured/feat8.jpg";
import feat9 from "../../../assets/user/img/featured/feat9.jpg";
import feat23 from "../../../assets/user/img/featured/feat23.jpg";
import feat10 from "../../../assets/user/img/featured/feat10.jpg";
import feat11 from "../../../assets/user/img/featured/feat11.jpg";
import feat12 from "../../../assets/user/img/featured/feat12.jpg";
import feat13 from "../../../assets/user/img/featured/feat13.jpg";
import feat14 from "../../../assets/user/img/featured/feat14.jpg";
import feat15 from "../../../assets/user/img/featured/feat15.jpg";
import feat16 from "../../../assets/user/img/featured/feat16.jpg";
import feat17 from "../../../assets/user/img/featured/feat17.jpg";
import feat18 from "../../../assets/user/img/featured/feat18.jpg";
import feat19 from "../../../assets/user/img/featured/feat19.jpg";
import feat20 from "../../../assets/user/img/featured/feat20.jpg";
import feat21 from "../../../assets/user/img/featured/feat21.jpg";
import feat22 from "../../../assets/user/img/featured/feat22.jpg";
import feat24 from "../../../assets/user/img/featured/feat24.jpg";
import feat25 from "../../../assets/user/img/featured/feat25.jpg";
import feat26 from "../../../assets/user/img/featured/feat26.jpg";
import feat27 from "../../../assets/user/img/featured/feat27.jpg";
import feat28 from "../../../assets/user/img/featured/feat28.jpg";
import feat29 from "../../../assets/user/img/featured/feat29.jpg";
import banner1 from "../../../assets/user/img/banner/banner1.jpg";
import banner2 from "../../../assets/user/img/banner/banner2.jpg";

import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { Link } from "react-router-dom";
import {
  // AiOutlineEye,
  AiOutlineShoppingCart,
  AiOutlineZoomIn,
} from "react-icons/ai";

const HomePage = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const sliderItem = [
    {
      sliderImg: cat1Img,
      name: "Cherry",
    },
    {
      sliderImg: cat2Img,
      name: "Dâu tây",
    },
    {
      sliderImg: cat3Img,
      name: "Táo đỏ",
    },
    {
      sliderImg: cat5Img,
      name: "Kiwi",
    },
    {
      sliderImg: cat6Img,
      name: "Táo xanh",
    },
    {
      sliderImg: cat7Img,
      name: "Dưa hấu",
    },
    {
      sliderImg: cat8Img,
      name: "Việt quất",
    },
    {
      sliderImg: cat9Img,
      name: "Xoài",
    },
  ];

  const featProduct = {
    all: {
      title: "Toàn bộ",
      product: [], // Sẽ được tự động cập nhật sau
    },
    fruit: {
      title: "Trái cây",
      product: [
        { img: feat1, name: "Dưa hấu", price: 40000 },
        { img: feat2, name: "Kiwi", price: 40000 },
        { img: feat3, name: "Chuối", price: 40000 },
        { img: feat4, name: "Quýt", price: 40000 },
        { img: feat5, name: "Cam", price: 40000 },
        { img: feat6, name: "Cherry", price: 40000 },
        { img: feat7, name: "Táo đỏ", price: 40000 },
        { img: feat8, name: "Thơm", price: "Vô giá" },
        { img: feat9, name: "Việt quất", price: 40000 },
        { img: feat23, name: "Dâu tây", price: 40000 },
      ],
    },
    fruitTray: {
      title: "Mâm ngũ quả",
      product: [
        { img: feat10, name: "Mẫu 1", price: 40000 },
        { img: feat11, name: "Mẫu 2", price: 40000 },
        { img: feat12, name: "Mẫu 3", price: 40000 },
        { img: feat13, name: "Mẫu 4", price: 40000 },
        { img: feat14, name: "Mẫu 5", price: 40000 },
        { img: feat15, name: "Mẫu 6", price: 40000 },
        { img: feat16, name: "Mẫu 7", price: 40000 },
        { img: feat17, name: "Mẫu 8", price: 40000 },
        { img: feat18, name: "Mẫu 9", price: 40000 },
      ],
    },
    fruitJuice: {
      title: "Nước ép",
      product: [
        { img: feat19, name: "Nước ép Cam", price: 40000 },
        { img: feat20, name: "Nước ép Chanh bạc hà", price: 40000 },
        { img: feat21, name: "Combo 3 loại nước ép", price: 40000 },
        { img: feat22, name: "Nước ép Chanh leo", price: 40000 },
        { img: feat24, name: "Nước ép dâu tằm", price: 40000 },
        { img: feat25, name: "Nước ép Dâu tây", price: 40000 },
        { img: feat26, name: "Nước ép Chanh tươi", price: 40000 },
        { img: feat27, name: "Nước ép Dưa hấu", price: 40000 },
        { img: feat28, name: "Nước ép Mâm xôi", price: 40000 },
        { img: feat29, name: "Nước ép Dâu tây chesse", price: 40000 },
      ],
    },
  };

  // Tự động cập nhật danh mục "all" với tất cả sản phẩm
  featProduct.all.product = Object.values(featProduct)
    .filter((category) => category.product) // Lọc các danh mục có sản phẩm
    .flatMap((category) => category.product); // Gom tất cả sản phẩm vào 1 mảng

  const renderFeatProduct = (data) => {
    const tabList = [];
    const tabPanels = [];

    Object.keys(data).forEach((key, index) => {
      tabList.push(<Tab key={index}>{data[key].title}</Tab>);

      const tabPanel = [];
      data[key].product.forEach((item, j) => {
        tabPanel.push(
          <div className="col-lg-3" key={j}>
            <div className="featured_item">
              <div
                className="featured__item__pic"
                style={{
                  backgroundImage: `url(${item.img})`,
                }}
              >
                <ul>
                  <li>
                    <AiOutlineZoomIn />
                  </li>
                  <li>
                    <AiOutlineShoppingCart />
                  </li>
                </ul>
              </div>

              <div className="featured__item__text">
                <Link to="">{item.name}</Link>
                <h4>{formatter(item.price)}</h4>
              </div>
            </div>
          </div>
        );
      });
      tabPanels.push(tabPanel);
    });
    return (
      <Tabs>
        <TabList>{tabList}</TabList>
        {tabPanels.map((item, key) => (
          <TabPanel>
            <div className="row">{item}</div>
          </TabPanel>
        ))}
      </Tabs>
    );
  };
  return (
    <>
      {/* categories begin*/}
      <div div className="container container__categories__slider">
        <Carousel responsive={responsive} className="categories__slider">
          {sliderItem.map((item, key) => (
            <div
              className="categories__slider__item"
              style={{ backgroundImage: `url(${item.sliderImg})` }}
            >
              <p>{item.name}</p>
            </div>
          ))}
        </Carousel>
      </div>
      {/* categories end*/}

      {/*Featured begin*/}
      <div className="container">
        <div className="featured">
          <div className="section__title">
            <h2>Sản phẩm nổi bật</h2>
          </div>
          {renderFeatProduct(featProduct)}
        </div>
      </div>
      {/* Featured end*/}

      {/*Banner begin */}
      <div className="container">
        <div className="banner">
          <div className="banner__pic">
            <img src={banner1} alt="banner" />
            <div className="banner__pic__text">
              <h2>Trái cây tươi</h2>
              <p>
                100% tự nhiên
                <br />
                Không chất bảo quản
              </p>
              <button className="button-sibmit">Mua ngay</button>
            </div>
          </div>
          <div className="banner__pic">
            <img src={banner2} alt="banner" />
            <div className="banner__pic__text">
              <h2>Trái cây tươi</h2>
              <p>
                100% tự nhiên
                <br />
                Không chất bảo quản
              </p>
              <button className="button-sibmit">Mua ngay</button>
            </div>
          </div>
        </div>
      </div>

      {/*Banner end */}
    </>
  );
};

export default memo(HomePage);
