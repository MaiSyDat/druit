import { memo, useState } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineGlobal,
  AiOutlineUser,
  AiOutlineTikTok,
  AiOutlineMail,
  AiOutlineShoppingCart,
  AiOutlineMenu,
  AiOutlinePhone,
} from "react-icons/ai";
import { formatter } from "../../../../utils/formatter";
import { ROUTERS } from "../../../../utils/router";

const Header = () => {
  const [isShowCategories, setShowCategories] = useState(true);
  const [menus] = useState([
    {
      name: "Trang chủ",
      path: ROUTERS.USER.HOME,
    },
    {
      name: "Cửa hàng",
      path: ROUTERS.USER.PRODUCTS,
    },
    {
      name: "Sản phẩm",
      path: "",
      isShowSubmenu: false,
      child: [
        {
          name: "Thịt",
          path: "",
        },
        {
          name: "Rau củ",
          path: "",
        },
        {
          name: "Thức ăn nhanh",
          path: "",
        },
      ],
    },
    {
      name: "Bài viết",
      path: "",
    },
    {
      name: "Liên hệ",
      path: "",
    },
  ]);

  return (
    <>
      <div className="header__top">
        <div className="container">
          <div className="row">
            <div className="col-6 header__top_left">
              <ul>
                <li>
                  <Link to={""}>
                    <AiOutlineMail />
                    DFruit@gmail.com
                  </Link>
                </li>
                <li>Miễn phí ship đơn từ {formatter(200000)}</li>
              </ul>
            </div>
            <div className="col-6 header__top_right">
              <ul>
                <li>
                  <Link to={""}>
                    <AiOutlineFacebook />
                  </Link>
                </li>
                <li>
                  <Link to={""}>
                    <AiOutlineInstagram />
                  </Link>
                </li>
                <li>
                  <Link to={""}>
                    <AiOutlineGlobal />
                  </Link>
                </li>
                <li>
                  <Link to={""}>
                    <AiOutlineTikTok />
                  </Link>
                </li>

                <li>
                  <Link to={""}>
                    <AiOutlineUser />
                  </Link>
                  <span>Đăng nhập</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="header__logo">
              <h1>DFRUIT</h1>
            </div>
          </div>
          <div className="col-lg-6">
            <nav className="header__menu">
              <ul>
                {
                  // ? để tránh trường hợp menus = null
                  menus?.map((menu, menukey) => (
                    <li key={menukey} className={menukey === 0 ? "active" : ""}>
                      <Link to={menu?.path}>{menu?.name}</Link>
                      {menu.child && (
                        <ul className="header__menu__dropdown">
                          {menu.child.map((childItem, childKey) => (
                            <li key={`${menukey} - ${childKey}`}>
                              <Link to={childItem.path}>{childItem.name}</Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))
                }
              </ul>
            </nav>
          </div>
          <div className="col-lg-3">
            <div className="header__cart">
              <div className="header__cart__price">
                <span>{formatter(1000000)}</span>
              </div>
              <ul>
                <li>
                  <Link to={"#"}>
                    <AiOutlineShoppingCart />
                    <span>5</span>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="humberger__open">
              <AiOutlineMenu
                onClick={() => {
                  alert("CHECK");
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="hero__categories col-lg-3">
            <div
              className="hero__categories__all"
              onClick={() => setShowCategories(!isShowCategories)}
            >
              <AiOutlineMenu />
              <span>Danh sách sản phẩm</span>
            </div>
            <ul className={isShowCategories ? "" : "hidden"}>
              <li>
                <Link to="#">Trái cây hôm nay</Link>
              </li>
              <li>
                <Link to="#">Trái cây nhập khẩu</Link>
              </li>
              <li>
                <Link to="#">Trái cây cắt sẵn</Link>
              </li>
              <li>
                <Link to="#">Mâm ngũ quả</Link>
              </li>
              <li>
                <Link to="#">Hộp quà nguyệt cát</Link>
              </li>
              <li>
                <Link to="#">Quà tặng trái cây</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-9 hero__search">
            <div className="hero__search__container">
              <div className="hero__search__form">
                <form>
                  <input type="search" placeholder="Bạn đang tìm gì ?" />
                  <button type="submit" className="button-sibmit">
                    Tìm kiếm
                  </button>
                </form>
              </div>

              <div className="hero__search__phone">
                <div className="hero__search__phone_icon">
                  <AiOutlinePhone />
                </div>
                <div className="hero__search__phone_support">
                  <p>1900 123 456</p>
                  <span>Hỗ trợ 24/7</span>
                </div>
              </div>
            </div>
            <div className="hero_banner">
              <div className="hero_text">
                <span>Trái cây tươi</span>
                <h2>
                  Trái cây <br /> sạch 100%
                </h2>
                <p>Miễn phí giao hàng tận nơi</p>
                <Link to="" className="button-sibmit">
                  Mua ngay
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default memo(Header);
