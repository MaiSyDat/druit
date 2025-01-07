import { memo } from 'react';
import "./style.scss";
import { Link } from "react-router-dom";
import {
    AiOutlineFacebook,
    AiOutlineGlobal,
    AiOutlineInstagram,
    AiOutlineTikTok
} from 'react-icons/ai';

const Footer = () => {
    return <footer className='footer'>
        <div className='container'>
            <div className='row'>
                <div className='col-xl-3'>
                    <div className='footer__about'>
                        <h1 className='footer__about__logo'>DFRUIT</h1>
                        <ul>
                            <li>Địa chỉ: Cầu giấy, Hà Nội</li>
                            <li>Phone: 1900 123 456</li>
                            <li>Email: DFruit@gmail.com</li>
                        </ul>
                    </div>
                </div>
                <div className='col-xl-3'>
                    <div className='footer__widget'>
                        <h4>Hướng dẫn mua hàng</h4>
                        <ul>
                            <li>
                                <Link to="">Trang chủ</Link>
                            </li>
                            <li>
                                <Link to="">Cửa hàng</Link>
                            </li>
                            <li>
                                <Link to="">Sản phẩm</Link>
                            </li>
                            <li>
                                <Link to="">Bài viết</Link>
                            </li>
                            <li>
                                <Link to="">Liên hệ</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='col-xl-3'>
                    <div className='footer__widget'>
                        <h4>Hỗ trợ khách hàng</h4>
                        <ul>
                            <li>
                                <Link to="">Trang chủ</Link>
                            </li>
                            <li>
                                <Link to="">Cửa hàng</Link>
                            </li>
                            <li>
                                <Link to="">Sản phẩm</Link>
                            </li>
                            <li>
                                <Link to="">Bài viết</Link>
                            </li>
                            <li>
                                <Link to="">Liên hệ</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='col-xl-3'>
                    <div className='footer__widget'>
                        <h4>Khuyễn mãi và ưu đãi</h4>
                        <p>Đăng ký nhận thông tin tại đây</p>
                        <form action="#">
                            <input type='email' placeholder='Nhập email'></input>
                            <button type='submit' className='button-sibmit'>Đăng ký</button>
                        </form>

                        <div className='footer__widget__social'>
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
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
};

export default memo(Footer);