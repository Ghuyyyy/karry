import Header, { Footers } from "./Layout";
import icon1 from "../assets/img/icon1.png";
import icon2 from "../assets/img/icon2.png";
import iconProduct1 from "../assets/img/iconproduct1.png";
import iconProduct2 from "../assets/img/iconproduct2.png";
import { Carousel } from "react-bootstrap";

function Home() {
  return (
    <>
      <Header />
      <div className="home-body">
        <div className="home-body-slide">
          <div className="home-box">
            <h1 className="slogan landing-text">
              KARRY - CÙNG BẠN TRÊN MỌI HÀNH TRÌNH
            </h1>
            <div className="home-box-service">
              <div className="search-service--wrapper">
                <div className="tabs-left">
                  <a href="" className="active">
                    <div className="service-box ">
                      <img src={icon1} alt="" />
                      <p>Xe tự lái</p>
                    </div>
                  </a>
                  <a href="">
                    <div className="service-box">
                      <img src={icon2} alt="" />
                      <p>Xe có tài xế</p>
                    </div>
                  </a>
                </div>

                <div className="search-service--wrapper-box">
                  <div className="wd-search">
                    <div className="wd-search__wrapper">
                      <div className="form-search ">
                        <label htmlFor="" className="home-label">
                          Địa điểm
                        </label>
                        <div className="wrap-input ">
                          <i className="fa-solid fa-location-dot"></i>
                          <div className="here-autocomplete search--address">
                            <input
                              type="text"
                              placeholder="Thành phố Hồ Chí Minh, Việt Nam"
                              defaultValue="Thành phố Hồ Chí Minh, Việt Nam"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="form-search">
                        <label htmlFor="" className="home-label">
                          Bắt đầu
                        </label>
                        <div className="row">
                        <div className="col-xl-5">
                          <div className="wrap-input">
                          <div className="here-autocomplete">
                            <input
                              type="date"
                              defaultValue="10/03/2023"
                            />
                          </div>
                          </div>
                          
                        </div>

                        <div className="col-xl-4">
                          <div className="wrap-input">
                          <select name="" id="select-autocomplete" className="here-autocomplete">
                            <option value="0">00:00</option>
                            <option value="1">00:30</option>
                            <option value="2">01:00</option>
                            <option value="3">01:30</option>
                            <option value="4">02:00</option>
                            <option value="5">02:30</option>
                            <option value="6">03:00</option>
                            <option value="7">03:30</option>
                            <option value="8">04:00</option>
                            <option value="9">04:30</option>
                            <option value="10">05:00</option>
                            <option value="11">05:30</option>
                            <option value="12">06:00</option>
                            <option value="13">06:30</option>
                            <option value="14">07:00</option>
                            <option value="15">07:30</option>
                            <option value="16">08:00</option>
                            <option value="17">08:30</option>
                            <option value="18">09:00</option>
                            <option value="19">09:30</option>
                            <option value="20">10:00</option>
                            <option value="21">10:30</option>
                            <option value="22">11:00</option>
                            <option value="23">11:30</option>
                            <option value="24">12:00</option>
                            <option value="25">12:30</option>
                            <option value="26">13:00</option>
                            <option value="27">13:30</option>
                            <option value="28">14:00</option>
                            <option value="29">15:30</option>
                            <option value="30">16:00</option>
                            <option value="31">16:30</option>
                            <option value="32">17:00</option>
                            <option value="33">17:30</option>
                            <option value="34">18:00</option>
                            <option value="35">18:30</option>
                            <option value="36">19:00</option>
                            <option value="37">19:30</option>
                            <option value="38">20:00</option>
                            <option value="39">20:30</option>
                            <option value="40">21:00</option>
                            <option value="41">21:30</option>
                            <option value="42">22:00</option>
                            <option value="43">22:30</option>
                            <option value="44">23:00</option>
                            <option value="45">23:30</option>
                          </select>
                          </div>
                          
                        </div>
                        </div>
                        
                      </div>

                      <div className="form-search">
                        <label htmlFor="" className="home-label">
                          Kết thúc
                        </label>
                        <div className="row">
                        <div className="col-xl-5">
                          <div className="wrap-input">
                          <div className="here-autocomplete">
                            <input
                              type="date"
                              defaultValue="10/03/2023"
                            />
                          </div>
                          </div>
                          
                        </div>

                        <div className="col-xl-4">
                          <div className="wrap-input">
                          <select name="" id="select-autocomplete" className="here-autocomplete">
                            <option value="0">00:00</option>
                            <option value="1">00:30</option>
                            <option value="2">01:00</option>
                            <option value="3">01:30</option>
                            <option value="4">02:00</option>
                            <option value="5">02:30</option>
                            <option value="6">03:00</option>
                            <option value="7">03:30</option>
                            <option value="8">04:00</option>
                            <option value="9">04:30</option>
                            <option value="10">05:00</option>
                            <option value="11">05:30</option>
                            <option value="12">06:00</option>
                            <option value="13">06:30</option>
                            <option value="14">07:00</option>
                            <option value="15">07:30</option>
                            <option value="16">08:00</option>
                            <option value="17">08:30</option>
                            <option value="18">09:00</option>
                            <option value="19">09:30</option>
                            <option value="20">10:00</option>
                            <option value="21">10:30</option>
                            <option value="22">11:00</option>
                            <option value="23">11:30</option>
                            <option value="24">12:00</option>
                            <option value="25">12:30</option>
                            <option value="26">13:00</option>
                            <option value="27">13:30</option>
                            <option value="28">14:00</option>
                            <option value="29">15:30</option>
                            <option value="30">16:00</option>
                            <option value="31">16:30</option>
                            <option value="32">17:00</option>
                            <option value="33">17:30</option>
                            <option value="34">18:00</option>
                            <option value="35">18:30</option>
                            <option value="36">19:00</option>
                            <option value="37">19:30</option>
                            <option value="38">20:00</option>
                            <option value="39">20:30</option>
                            <option value="40">21:00</option>
                            <option value="41">21:30</option>
                            <option value="42">22:00</option>
                            <option value="43">22:30</option>
                            <option value="44">23:00</option>
                            <option value="45">23:30</option>
                          </select>
                          </div>
                          
                        </div>
                        </div>
                      </div>

                      <div className="btn-homeSearch">
                        <a href="" className="btn btn-search-car">
                          <i className="fa-solid fa-magnifying-glass"></i>
                          <span>Tìm xe ngay</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="insurance-partner">
            <p className="Lstitle">ĐỐI TÁC BẢO HIỂM</p>
            <div className="partner-logo hasCursor">
              <div className="row">
                <div className="col-xl-4">
                  <img
                    src="https://www.mioto.vn/static/media/global-care.f6fdc8ef.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="col-xl-4">
                  <img
                    src="https://www.mioto.vn/static/media/mic.e9091023.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="col-xl-4">
                  <img
                    src="https://www.mioto.vn/static/media/l_pjico.bb9b4a65.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="home-promo">
          <div className="container ex-container ">
            <h4 className="home-promo-title title-car">Ưu đãi hiện hành</h4>
            {/* do co the thoi */}
            <Carousel variant="dark">
              <Carousel.Item>
                <div className="row">
                  <div className="col-xl-4">
                    <img
                      className="d-block w-100"
                      src="https://n1-cstg.mioto.vn/g/2023/02/01/09/H4831UA7.jpg"
                      alt="First slide"
                    />
                  </div>
                  <div className="col-xl-4">
                    <img
                      className="d-block w-100"
                      src="https://n1-cstg.mioto.vn/g/2023/02/01/09/H4831UA7.jpg"
                      alt="First slide"
                    />
                  </div>
                  <div className="col-xl-4">
                    <img
                      className="d-block w-100"
                      src="https://n1-cstg.mioto.vn/g/2023/02/01/09/H4831UA7.jpg"
                      alt="First slide"
                    />
                  </div>
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div className="row">
                  <div className="col-xl-4">
                    <img
                      className="d-block w-100"
                      src="https://n1-cstg.mioto.vn/g/2023/02/01/09/H4831UA7.jpg"
                      alt="First slide"
                    />
                  </div>
                  <div className="col-xl-4">
                    <img
                      className="d-block w-100"
                      src="https://n1-cstg.mioto.vn/g/2023/02/01/09/H4831UA7.jpg"
                      alt="First slide"
                    />
                  </div>
                  <div className="col-xl-4">
                    <img
                      className="d-block w-100"
                      src="https://n1-cstg.mioto.vn/g/2023/02/01/09/H4831UA7.jpg"
                      alt="First slide"
                    />
                  </div>
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div className="row">
                  <div className="col-xl-4">
                    <img
                      className="d-block w-100"
                      src="https://n1-cstg.mioto.vn/g/2023/02/01/09/H4831UA7.jpg"
                      alt="First slide"
                    />
                  </div>
                  <div className="col-xl-4">
                    <img
                      className="d-block w-100"
                      src="https://n1-cstg.mioto.vn/g/2023/02/01/09/H4831UA7.jpg"
                      alt="First slide"
                    />
                  </div>
                  <div className="col-xl-4">
                    <img
                      className="d-block w-100"
                      src="https://n1-cstg.mioto.vn/g/2023/02/01/09/H4831UA7.jpg"
                      alt="First slide"
                    />
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>

        <div className="home-promo features__sect">
          <div className="container ex-container ">
            <h4 className="home-promo-title title-car">Ưu đãi hiện hành</h4>
            {/* do co the thoi */}
            <Carousel variant="dark">
              <Carousel.Item>
                <div className="row">
                  <div className="col-xl-3">
                    <img
                      className="d-block w-100"
                      src="https://www.mioto.vn/static/media/features_1.d60ace8e.jpg"
                      alt="First slide"
                    />
                  </div>
                  <div className="col-xl-3">
                    <img
                      className="d-block w-100"
                      src="https://www.mioto.vn/static/media/features_2.63b45674.jpg"
                      alt="First slide"
                    />
                  </div>
                  <div className="col-xl-3">
                    <img
                      className="d-block w-100"
                      src="https://www.mioto.vn/static/media/features_3.d9b52125.jpg"
                      alt="First slide"
                    />
                  </div>

                  <div className="col-xl-3">
                    <img
                      className="d-block w-100"
                      src="https://www.mioto.vn/static/media/features_4.173d9abf.jpg"
                      alt="First slide"
                    />
                  </div>
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div className="row">
                  <div className="col-xl-3">
                    <img
                      className="d-block w-100"
                      src="https://www.mioto.vn/static/media/features_1.d60ace8e.jpg"
                      alt="First slide"
                    />
                  </div>
                  <div className="col-xl-3">
                    <img
                      className="d-block w-100"
                      src="https://www.mioto.vn/static/media/features_2.63b45674.jpg"
                      alt="First slide"
                    />
                  </div>
                  <div className="col-xl-3">
                    <img
                      className="d-block w-100"
                      src="https://www.mioto.vn/static/media/features_3.d9b52125.jpg"
                      alt="First slide"
                    />
                  </div>

                  <div className="col-xl-3">
                    <img
                      className="d-block w-100"
                      src="https://www.mioto.vn/static/media/features_4.173d9abf.jpg"
                      alt="First slide"
                    />
                  </div>
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div className="row">
                  <div className="col-xl-3">
                    <img
                      className="d-block w-100"
                      src="https://www.mioto.vn/static/media/features_1.d60ace8e.jpg"
                      alt="First slide"
                    />
                  </div>
                  <div className="col-xl-3">
                    <img
                      className="d-block w-100"
                      src="https://www.mioto.vn/static/media/features_2.63b45674.jpg"
                      alt="First slide"
                    />
                  </div>
                  <div className="col-xl-3">
                    <img
                      className="d-block w-100"
                      src="https://www.mioto.vn/static/media/features_3.d9b52125.jpg"
                      alt="First slide"
                    />
                  </div>

                  <div className="col-xl-3">
                    <img
                      className="d-block w-100"
                      src="https://www.mioto.vn/static/media/features_4.173d9abf.jpg"
                      alt="First slide"
                    />
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>

        <div className="tutorial__sect">
          <div className="container ex-container ">
            <div className="tutorial__sect-background"></div>
            <h4 className="tutorial__sect--title">Hướng dẫn thuê xe</h4>

            <div className="row step-box__wrap">
              <div className="col-xl-3 step-box__item">
                <a href="#" className="tutorial__sect--link">
                  <div className="fix-img">
                    <img
                      src="https://www.mioto.vn/static/media/step-1.c204d3e1.svg"
                      alt=""
                    />
                  </div>
                  <div className="step-detail">
                    <h5>Đặt xe với Karry</h5>
                  </div>
                </a>
              </div>
              <div className="col-xl-3 step-box__item">
                <a href="#" className="tutorial__sect--link">
                  <div className="fix-img">
                    <img
                      src="https://www.mioto.vn/static/media/step-2.0bcadc00.svg"
                      alt=""
                    />
                  </div>
                  <div className="step-detail">
                    <h5>Nhận xe hoặc giao tận nơi</h5>
                  </div>
                </a>
              </div>
              <div className="col-xl-3 step-box__item">
                <a href="#" className="tutorial__sect--link">
                  <div className="fix-img">
                    <img
                      src="https://www.mioto.vn/static/media/step-3.5ee48572.svg"
                      alt=""
                    />
                  </div>
                  <div className="step-detail">
                    <h5>Trải nghiệm chuyến đi</h5>
                  </div>
                </a>
              </div>
              <div className="col-xl-3 step-box__item">
                <a href="#" className="tutorial__sect--link">
                  <div className="fix-img">
                    <img
                      src="https://www.mioto.vn/static/media/step-4.518ab6a3.svg"
                      alt=""
                    />
                  </div>
                  <div className="step-detail">
                    <h5>Kết thúc giao dịch</h5>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="home-promo features__sect destination__sect">
          <div className="container ex-container ">
            <h4 className="home-promo-title title-car">
              XE NỔI BẬT - XE TỰ LÁI
            </h4>
            {/* do co the thoi */}
            <Carousel variant="dark">
              <Carousel.Item>
                <div className="row dest-item">
                  <div className="col-dest-item box-car__wrap ">
                    <div className="dest-img">
                      <a href="#" className="box-car__link">
                        <div className="fix-imgs fix-img dest-item-img">
                          <img
                            src="https://n1-cstg.mioto.vn/1/cho_thue_xe_tu_lai_tphcm/hcm/p/m/cities/HoChiMinh_v2.jpg"
                            alt=""
                          />
                        </div>
                        <h3>
                          Hồ Chí Minh <span>2000+ xe</span>
                        </h3>
                      </a>
                    </div>
                  </div>
                  <div className="col-dest-item box-car__wrap ">
                    <div className="dest-img">
                      <a href="#" className="box-car__link">
                        <div className="fix-imgs fix-img dest-item-img">
                          <img
                            src="https://n1-cstg.mioto.vn/1/cho_thue_xe_tu_lai_tphcm/hcm/p/m/cities/HoChiMinh_v2.jpg"
                            alt=""
                          />
                        </div>
                        <h3>
                          Hồ Chí Minh <span>2000+ xe</span>
                        </h3>
                      </a>
                    </div>
                  </div>
                  <div className="col-dest-item box-car__wrap ">
                    <div className="dest-img">
                      <a href="#" className="box-car__link">
                        <div className="fix-imgs fix-img dest-item-img">
                          <img
                            src="https://n1-cstg.mioto.vn/1/cho_thue_xe_tu_lai_tphcm/hcm/p/m/cities/HoChiMinh_v2.jpg"
                            alt=""
                          />
                        </div>
                        <h3>
                          Hồ Chí Minh <span>2000+ xe</span>
                        </h3>
                      </a>
                    </div>
                  </div>
                  <div className="col-dest-item box-car__wrap ">
                    <div className="dest-img">
                      <a href="#" className="box-car__link">
                        <div className="fix-imgs fix-img dest-item-img">
                          <img
                            src="https://n1-cstg.mioto.vn/1/cho_thue_xe_tu_lai_tphcm/hcm/p/m/cities/HoChiMinh_v2.jpg"
                            alt=""
                          />
                        </div>
                        <h3>
                          Hồ Chí Minh <span>2000+ xe</span>
                        </h3>
                      </a>
                    </div>
                  </div>
                  <div className="col-dest-item box-car__wrap ">
                    <div className="dest-img">
                      <a href="#" className="box-car__link">
                        <div className="fix-imgs fix-img dest-item-img">
                          <img
                            src="https://n1-cstg.mioto.vn/1/cho_thue_xe_tu_lai_tphcm/hcm/p/m/cities/HoChiMinh_v2.jpg"
                            alt=""
                          />
                        </div>
                        <h3>
                          Hồ Chí Minh <span>2000+ xe</span>
                        </h3>
                      </a>
                    </div>
                  </div>
                </div>
              </Carousel.Item>

              
            </Carousel>
          </div>
        </div>

        <div className="airport-container">
          <div className="airport-note">
            <span>Giao xe </span>
            <span>sân bay</span>
          </div>

          <div className="swiper swiper-airport">
            <Carousel variant="dark">
              <Carousel.Item>
                <div className="row dest-item">
                  <div className="col-dest-item box-car__wrap ">
                    <div className="dest-img">
                      <a href="#" className="box-car__link">
                        <div className="border-img">
                          <div className="fix-img dest-item-img">
                            <img
                              src="https://n1-cstg.mioto.vn/g/2022/04/14/17/NGXIIKNY.jpg"
                              alt=""
                            />
                          </div>
                        </div>

                        <h3>Tân Sơn Nhất</h3>
                      </a>
                    </div>
                  </div>
                  
                  <div className="col-dest-item box-car__wrap ">
                    <div className="dest-img">
                      <a href="#" className="box-car__link">
                        <div className="border-img">
                          <div className="fix-img dest-item-img">
                            <img
                              src="https://n1-cstg.mioto.vn/g/2022/04/14/17/NGXIIKNY.jpg"
                              alt=""
                            />
                          </div>
                        </div>

                        <h3>Tân Sơn Nhất</h3>
                      </a>
                    </div>
                  </div>
                  <div className="col-dest-item box-car__wrap ">
                    <div className="dest-img">
                      <a href="#" className="box-car__link">
                        <div className="border-img">
                          <div className="fix-img dest-item-img">
                            <img
                              src="https://n1-cstg.mioto.vn/g/2022/04/14/17/NGXIIKNY.jpg"
                              alt=""
                            />
                          </div>
                        </div>

                        <h3>Tân Sơn Nhất</h3>
                      </a>
                    </div>
                  </div>
                  <div className="col-dest-item box-car__wrap ">
                    <div className="dest-img">
                      <a href="#" className="box-car__link">
                        <div className="border-img">
                          <div className="fix-img dest-item-img">
                            <img
                              src="https://n1-cstg.mioto.vn/g/2022/04/14/17/NGXIIKNY.jpg"
                              alt=""
                            />
                          </div>
                        </div>

                        <h3>Tân Sơn Nhất</h3>
                      </a>
                    </div>
                  </div>
                  <div className="col-dest-item box-car__wrap ">
                    <div className="dest-img">
                      <a href="#" className="box-car__link">
                        <div className="border-img">
                          <div className="fix-img dest-item-img">
                            <img
                              src="https://n1-cstg.mioto.vn/g/2022/04/14/17/NGXIIKNY.jpg"
                              alt=""
                            />
                          </div>
                        </div>

                        <h3>Tân Sơn Nhất</h3>
                      </a>
                    </div>
                  </div>
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div className="row dest-item">
                  <div className="col-dest-item box-car__wrap ">
                    <div className="dest-img">
                      <a href="#" className="box-car__link">
                        <div className="border-img">
                          <div className="fix-img dest-item-img">
                            <img
                              src="https://n1-cstg.mioto.vn/g/2022/04/14/17/NGXIIKNY.jpg"
                              alt=""
                            />
                          </div>
                        </div>

                        <h3>Tân Sơn Nhất</h3>
                      </a>
                    </div>
                  </div>
                  
                  <div className="col-dest-item box-car__wrap ">
                    <div className="dest-img">
                      <a href="#" className="box-car__link">
                        <div className="border-img">
                          <div className="fix-img dest-item-img">
                            <img
                              src="https://n1-cstg.mioto.vn/g/2022/04/14/17/NGXIIKNY.jpg"
                              alt=""
                            />
                          </div>
                        </div>

                        <h3>Tân Sơn Nhất</h3>
                      </a>
                    </div>
                  </div>
                  <div className="col-dest-item box-car__wrap ">
                    <div className="dest-img">
                      <a href="#" className="box-car__link">
                        <div className="border-img">
                          <div className="fix-img dest-item-img">
                            <img
                              src="https://n1-cstg.mioto.vn/g/2022/04/14/17/NGXIIKNY.jpg"
                              alt=""
                            />
                          </div>
                        </div>

                        <h3>Tân Sơn Nhất</h3>
                      </a>
                    </div>
                  </div>
                  <div className="col-dest-item box-car__wrap ">
                    <div className="dest-img">
                      <a href="#" className="box-car__link">
                        <div className="border-img">
                          <div className="fix-img dest-item-img">
                            <img
                              src="https://n1-cstg.mioto.vn/g/2022/04/14/17/NGXIIKNY.jpg"
                              alt=""
                            />
                          </div>
                        </div>

                        <h3>Tân Sơn Nhất</h3>
                      </a>
                    </div>
                  </div>
                  <div className="col-dest-item box-car__wrap ">
                    <div className="dest-img">
                      <a href="#" className="box-car__link">
                        <div className="border-img">
                          <div className="fix-img dest-item-img">
                            <img
                              src="https://n1-cstg.mioto.vn/g/2022/04/14/17/NGXIIKNY.jpg"
                              alt=""
                            />
                          </div>
                        </div>

                        <h3>Tân Sơn Nhất</h3>
                      </a>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>

        <div className="home-promo features__sect destination__sect wd-dest">
          <div className="container ex-container ">
            <h4 className="home-promo-title title-car">
              XE NỔI BẬT - XE TỰ LÁI
            </h4>
            {/* do co the thoi */}
            <Carousel variant="dark">
              <Carousel.Item>
                <div className="row dest-item">
                  <div className="col-dest-item box-car__wrap ">
                    <div className="dest-img">
                      <a href="#" className="box-car__link">
                        <div className="fix-imgs fix-img dest-item-img">
                          <img
                            src="https://n1-cstg.mioto.vn/1/cho_thue_xe_tu_lai_tphcm/hcm/p/m/cities/HoChiMinh_v2.jpg"
                            alt=""
                          />
                        </div>
                        <h3>
                          Hồ Chí Minh <span>2000+ xe</span>
                        </h3>
                      </a>
                    </div>
                  </div>
                  <div className="col-dest-item box-car__wrap ">
                    <div className="dest-img">
                      <a href="#" className="box-car__link">
                        <div className="fix-imgs fix-img dest-item-img">
                          <img
                            src="https://n1-cstg.mioto.vn/1/cho_thue_xe_tu_lai_tphcm/hcm/p/m/cities/HoChiMinh_v2.jpg"
                            alt=""
                          />
                        </div>
                        <h3>
                          Hồ Chí Minh <span>2000+ xe</span>
                        </h3>
                      </a>
                    </div>
                  </div>
                  <div className="col-dest-item box-car__wrap ">
                    <div className="dest-img">
                      <a href="#" className="box-car__link">
                        <div className="fix-imgs fix-img dest-item-img">
                          <img
                            src="https://n1-cstg.mioto.vn/1/cho_thue_xe_tu_lai_tphcm/hcm/p/m/cities/HoChiMinh_v2.jpg"
                            alt=""
                          />
                        </div>
                        <h3>
                          Hồ Chí Minh <span>2000+ xe</span>
                        </h3>
                      </a>
                    </div>
                  </div>
                  <div className="col-dest-item box-car__wrap ">
                    <div className="dest-img">
                      <a href="#" className="box-car__link">
                        <div className="fix-imgs fix-img dest-item-img">
                          <img
                            src="https://n1-cstg.mioto.vn/1/cho_thue_xe_tu_lai_tphcm/hcm/p/m/cities/HoChiMinh_v2.jpg"
                            alt=""
                          />
                        </div>
                        <h3>
                          Hồ Chí Minh <span>2000+ xe</span>
                        </h3>
                      </a>
                    </div>
                  </div>
                  <div className="col-dest-item box-car__wrap ">
                    <div className="dest-img">
                      <a href="#" className="box-car__link">
                        <div className="fix-imgs fix-img dest-item-img">
                          <img
                            src="https://n1-cstg.mioto.vn/1/cho_thue_xe_tu_lai_tphcm/hcm/p/m/cities/HoChiMinh_v2.jpg"
                            alt=""
                          />
                        </div>
                        <h3>
                          Hồ Chí Minh <span>2000+ xe</span>
                        </h3>
                      </a>
                    </div>
                  </div>
                </div>
              </Carousel.Item>

              
            </Carousel>
          </div>
        </div>

        <div className="airport-container wd-airport">
          <div className="airport-note">
            <span>Giao xe </span>
            <span>sân bay</span>
          </div>

          <div className="swiper swiper-airport">
            <Carousel variant="dark">
              <Carousel.Item>
                <div className="row dest-item">
                  <div className="col-dest-item box-car__wrap ">
                    <div className="dest-img">
                      <a href="#" className="box-car__link">
                        <div className="border-img">
                          <div className="fix-img dest-item-img">
                            <img
                              src="https://n1-cstg.mioto.vn/g/2022/04/14/17/NGXIIKNY.jpg"
                              alt=""
                            />
                          </div>
                        </div>

                        <h3>Tân Sơn Nhất</h3>
                      </a>
                    </div>
                  </div>
                  
                  <div className="col-dest-item box-car__wrap ">
                    <div className="dest-img">
                      <a href="#" className="box-car__link">
                        <div className="border-img">
                          <div className="fix-img dest-item-img">
                            <img
                              src="https://n1-cstg.mioto.vn/g/2022/04/14/17/NGXIIKNY.jpg"
                              alt=""
                            />
                          </div>
                        </div>

                        <h3>Tân Sơn Nhất</h3>
                      </a>
                    </div>
                  </div>
                  <div className="col-dest-item box-car__wrap ">
                    <div className="dest-img">
                      <a href="#" className="box-car__link">
                        <div className="border-img">
                          <div className="fix-img dest-item-img">
                            <img
                              src="https://n1-cstg.mioto.vn/g/2022/04/14/17/NGXIIKNY.jpg"
                              alt=""
                            />
                          </div>
                        </div>

                        <h3>Tân Sơn Nhất</h3>
                      </a>
                    </div>
                  </div>
                  <div className="col-dest-item box-car__wrap ">
                    <div className="dest-img">
                      <a href="#" className="box-car__link">
                        <div className="border-img">
                          <div className="fix-img dest-item-img">
                            <img
                              src="https://n1-cstg.mioto.vn/g/2022/04/14/17/NGXIIKNY.jpg"
                              alt=""
                            />
                          </div>
                        </div>

                        <h3>Tân Sơn Nhất</h3>
                      </a>
                    </div>
                  </div>
                  <div className="col-dest-item box-car__wrap ">
                    <div className="dest-img">
                      <a href="#" className="box-car__link">
                        <div className="border-img">
                          <div className="fix-img dest-item-img">
                            <img
                              src="https://n1-cstg.mioto.vn/g/2022/04/14/17/NGXIIKNY.jpg"
                              alt=""
                            />
                          </div>
                        </div>

                        <h3>Tân Sơn Nhất</h3>
                      </a>
                    </div>
                  </div>
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div className="row dest-item">
                  <div className="col-dest-item box-car__wrap ">
                    <div className="dest-img">
                      <a href="#" className="box-car__link">
                        <div className="border-img">
                          <div className="fix-img dest-item-img">
                            <img
                              src="https://n1-cstg.mioto.vn/g/2022/04/14/17/NGXIIKNY.jpg"
                              alt=""
                            />
                          </div>
                        </div>

                        <h3>Tân Sơn Nhất</h3>
                      </a>
                    </div>
                  </div>
                  
                  <div className="col-dest-item box-car__wrap ">
                    <div className="dest-img">
                      <a href="#" className="box-car__link">
                        <div className="border-img">
                          <div className="fix-img dest-item-img">
                            <img
                              src="https://n1-cstg.mioto.vn/g/2022/04/14/17/NGXIIKNY.jpg"
                              alt=""
                            />
                          </div>
                        </div>

                        <h3>Tân Sơn Nhất</h3>
                      </a>
                    </div>
                  </div>
                  <div className="col-dest-item box-car__wrap ">
                    <div className="dest-img">
                      <a href="#" className="box-car__link">
                        <div className="border-img">
                          <div className="fix-img dest-item-img">
                            <img
                              src="https://n1-cstg.mioto.vn/g/2022/04/14/17/NGXIIKNY.jpg"
                              alt=""
                            />
                          </div>
                        </div>

                        <h3>Tân Sơn Nhất</h3>
                      </a>
                    </div>
                  </div>
                  <div className="col-dest-item box-car__wrap ">
                    <div className="dest-img">
                      <a href="#" className="box-car__link">
                        <div className="border-img">
                          <div className="fix-img dest-item-img">
                            <img
                              src="https://n1-cstg.mioto.vn/g/2022/04/14/17/NGXIIKNY.jpg"
                              alt=""
                            />
                          </div>
                        </div>

                        <h3>Tân Sơn Nhất</h3>
                      </a>
                    </div>
                  </div>
                  <div className="col-dest-item box-car__wrap ">
                    <div className="dest-img">
                      <a href="#" className="box-car__link">
                        <div className="border-img">
                          <div className="fix-img dest-item-img">
                            <img
                              src="https://n1-cstg.mioto.vn/g/2022/04/14/17/NGXIIKNY.jpg"
                              alt=""
                            />
                          </div>
                        </div>

                        <h3>Tân Sơn Nhất</h3>
                      </a>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>

        <div className="owner__sect">
          <div className="container ex-container ">
            <div className="inner__wrap">
              <h3>Bạn muốn cho thuê xe</h3>
              <p>
                Hãy đăng kí trở thành đối tác của chúng tôi ngay để có cơ hội
                kiếm thêm thu nhập hằng tháng.
              </p>
              <div className="inner__wrap--btn">
                <a href="#" className="btn btn-find btn--m">
                  Tìm hiểu ngay
                </a>
                <a href="#" className="btn btn-registerCar btn--m">
                  Đăng ký xe
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="home-promo features__sect">
          <div className="container ex-container ">
            <h4 className="home-promo-title title-car">
              XE NỔI BẬT - XE TỰ LÁI
            </h4>
            {/* do co the thoi */}
            <Carousel variant="dark">
              <Carousel.Item>
                <div className="row">
                  <div className="col-xl-3 box-car__wrap">
                    <a href="#" className="box-car__link">
                      <div className="img-car">
                        <div className="fix-imgs fix-img">
                          <img
                            src="https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_t…2019/p/g/2021/07/21/18/X47TzLvUbd2ae0Ya3AMWqg.jpg"
                            alt=""
                          />
                        </div>
                        <div className="price-car">700k</div>
                      </div>
                      <div className="desc-car">
                        <div className="desc-car__name">
                          HONDA CITY 2019
                          <img src={iconProduct1} alt="" />
                        </div>
                        <div className="group-line n-rating">
                          <span className="star">5.0</span>
                          <i class="fa-solid fa-star icon-star"></i>
                          <span className="dot-car"> • </span>
                          <span className="ic-mr">141 chuyến</span>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.74373 14.1812L0 20.4535L4.36948 20.2293L6.35463 23.999L9.81785 18.1959C7.33642 17.5754 5.20562 16.1312 3.74373 14.1812Z"
                              fill="#FFA800"
                            ></path>
                            <path
                              d="M20.2329 14.1812C18.7834 16.1302 16.655 17.575 14.1816 18.2039L17.6518 23.999L19.6348 20.2413L23.9995 20.4648L20.2329 14.1812Z"
                              fill="#FFA800"
                            ></path>
                            <circle
                              cx="12.0004"
                              cy="8.72698"
                              r="8.72698"
                              fill="#FFA800"
                            ></circle>
                            <circle
                              cx="12.0028"
                              cy="8.7269"
                              r="7.09067"
                              fill="#FFE99D"
                            ></circle>
                            <path
                              d="M11.7334 4.59761C11.85 4.28582 12.291 4.28582 12.4076 4.59761L13.2976 6.9777C13.3482 7.11297 13.4747 7.2049 13.619 7.2112L16.1576 7.32213C16.4901 7.33666 16.6264 7.7561 16.3659 7.96333L14.3773 9.54523C14.2643 9.63513 14.216 9.78388 14.2546 9.92305L14.9336 12.3717C15.0225 12.6925 14.6657 12.9517 14.3881 12.768L12.2691 11.3656C12.1487 11.2859 11.9923 11.2859 11.8719 11.3656L9.7529 12.768C9.47531 12.9517 9.11852 12.6925 9.20746 12.3717L9.88644 9.92305C9.92503 9.78388 9.8767 9.63513 9.76368 9.54523L7.7751 7.96333C7.5146 7.7561 7.65088 7.33666 7.98344 7.32213L10.5221 7.2112C10.6663 7.2049 10.7929 7.11297 10.8434 6.9777L11.7334 4.59761Z"
                              fill="#FFA800"
                            ></path>
                          </svg>
                        </div>
                        <div className="group-label">
                          <span>Số tự động</span>
                          <span>Giao xe tận nơi</span>
                        </div>
                        <div className="location">
                          <p>
                            <i class="fa-solid fa-location-dot"></i> Quận Tân
                            Phú, Hồ Chí Minh
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-xl-3 box-car__wrap">
                    <a href="#" className="box-car__link">
                      <div className="img-car">
                        <div className="fix-imgs fix-img">
                          <img
                            src="https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_t…2019/p/g/2021/07/21/18/X47TzLvUbd2ae0Ya3AMWqg.jpg"
                            alt=""
                          />
                        </div>
                        <div className="price-car">700k</div>
                      </div>
                      <div className="desc-car">
                        <div className="desc-car__name">
                          HONDA CITY 2019
                          <img src={iconProduct1} alt="" />
                        </div>
                        <div className="group-line n-rating">
                          <span className="star">5.0</span>
                          <i class="fa-solid fa-star icon-star"></i>
                          <span className="dot-car"> • </span>
                          <span className="ic-mr">141 chuyến</span>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.74373 14.1812L0 20.4535L4.36948 20.2293L6.35463 23.999L9.81785 18.1959C7.33642 17.5754 5.20562 16.1312 3.74373 14.1812Z"
                              fill="#FFA800"
                            ></path>
                            <path
                              d="M20.2329 14.1812C18.7834 16.1302 16.655 17.575 14.1816 18.2039L17.6518 23.999L19.6348 20.2413L23.9995 20.4648L20.2329 14.1812Z"
                              fill="#FFA800"
                            ></path>
                            <circle
                              cx="12.0004"
                              cy="8.72698"
                              r="8.72698"
                              fill="#FFA800"
                            ></circle>
                            <circle
                              cx="12.0028"
                              cy="8.7269"
                              r="7.09067"
                              fill="#FFE99D"
                            ></circle>
                            <path
                              d="M11.7334 4.59761C11.85 4.28582 12.291 4.28582 12.4076 4.59761L13.2976 6.9777C13.3482 7.11297 13.4747 7.2049 13.619 7.2112L16.1576 7.32213C16.4901 7.33666 16.6264 7.7561 16.3659 7.96333L14.3773 9.54523C14.2643 9.63513 14.216 9.78388 14.2546 9.92305L14.9336 12.3717C15.0225 12.6925 14.6657 12.9517 14.3881 12.768L12.2691 11.3656C12.1487 11.2859 11.9923 11.2859 11.8719 11.3656L9.7529 12.768C9.47531 12.9517 9.11852 12.6925 9.20746 12.3717L9.88644 9.92305C9.92503 9.78388 9.8767 9.63513 9.76368 9.54523L7.7751 7.96333C7.5146 7.7561 7.65088 7.33666 7.98344 7.32213L10.5221 7.2112C10.6663 7.2049 10.7929 7.11297 10.8434 6.9777L11.7334 4.59761Z"
                              fill="#FFA800"
                            ></path>
                          </svg>
                        </div>
                        <div className="group-label">
                          <span>Số tự động</span>
                          <span>Giao xe tận nơi</span>
                        </div>
                        <div className="location">
                          <p>
                            <i class="fa-solid fa-location-dot"></i> Quận Tân
                            Phú, Hồ Chí Minh
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-xl-3 box-car__wrap">
                    <a href="#" className="box-car__link">
                      <div className="img-car">
                        <div className="fix-imgs fix-img">
                          <img
                            src="https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_t…2019/p/g/2021/07/21/18/X47TzLvUbd2ae0Ya3AMWqg.jpg"
                            alt=""
                          />
                        </div>
                        <div className="price-car">700k</div>
                      </div>
                      <div className="desc-car">
                        <div className="desc-car__name">
                          HONDA CITY 2019
                          <img src={iconProduct1} alt="" />
                        </div>
                        <div className="group-line n-rating">
                          <span className="star">5.0</span>
                          <i class="fa-solid fa-star icon-star"></i>
                          <span className="dot-car"> • </span>
                          <span className="ic-mr">141 chuyến</span>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.74373 14.1812L0 20.4535L4.36948 20.2293L6.35463 23.999L9.81785 18.1959C7.33642 17.5754 5.20562 16.1312 3.74373 14.1812Z"
                              fill="#FFA800"
                            ></path>
                            <path
                              d="M20.2329 14.1812C18.7834 16.1302 16.655 17.575 14.1816 18.2039L17.6518 23.999L19.6348 20.2413L23.9995 20.4648L20.2329 14.1812Z"
                              fill="#FFA800"
                            ></path>
                            <circle
                              cx="12.0004"
                              cy="8.72698"
                              r="8.72698"
                              fill="#FFA800"
                            ></circle>
                            <circle
                              cx="12.0028"
                              cy="8.7269"
                              r="7.09067"
                              fill="#FFE99D"
                            ></circle>
                            <path
                              d="M11.7334 4.59761C11.85 4.28582 12.291 4.28582 12.4076 4.59761L13.2976 6.9777C13.3482 7.11297 13.4747 7.2049 13.619 7.2112L16.1576 7.32213C16.4901 7.33666 16.6264 7.7561 16.3659 7.96333L14.3773 9.54523C14.2643 9.63513 14.216 9.78388 14.2546 9.92305L14.9336 12.3717C15.0225 12.6925 14.6657 12.9517 14.3881 12.768L12.2691 11.3656C12.1487 11.2859 11.9923 11.2859 11.8719 11.3656L9.7529 12.768C9.47531 12.9517 9.11852 12.6925 9.20746 12.3717L9.88644 9.92305C9.92503 9.78388 9.8767 9.63513 9.76368 9.54523L7.7751 7.96333C7.5146 7.7561 7.65088 7.33666 7.98344 7.32213L10.5221 7.2112C10.6663 7.2049 10.7929 7.11297 10.8434 6.9777L11.7334 4.59761Z"
                              fill="#FFA800"
                            ></path>
                          </svg>
                        </div>
                        <div className="group-label">
                          <span>Số tự động</span>
                          <span>Giao xe tận nơi</span>
                        </div>
                        <div className="location">
                          <p>
                            <i class="fa-solid fa-location-dot"></i> Quận Tân
                            Phú, Hồ Chí Minh
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>

                  <div className="col-xl-3 box-car__wrap">
                    <a href="#" className="box-car__link">
                      <div className="img-car">
                        <div className="fix-imgs fix-img">
                          <img
                            src="https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_t…2019/p/g/2021/07/21/18/X47TzLvUbd2ae0Ya3AMWqg.jpg"
                            alt=""
                          />
                        </div>
                        <div className="price-car">700k</div>
                      </div>
                      <div className="desc-car">
                        <div className="desc-car__name">
                          HONDA CITY 2019
                          <img src={iconProduct1} alt="" />
                        </div>
                        <div className="group-line n-rating">
                          <span className="star">5.0</span>
                          <i class="fa-solid fa-star icon-star"></i>
                          <span className="dot-car"> • </span>
                          <span className="ic-mr">141 chuyến</span>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.74373 14.1812L0 20.4535L4.36948 20.2293L6.35463 23.999L9.81785 18.1959C7.33642 17.5754 5.20562 16.1312 3.74373 14.1812Z"
                              fill="#FFA800"
                            ></path>
                            <path
                              d="M20.2329 14.1812C18.7834 16.1302 16.655 17.575 14.1816 18.2039L17.6518 23.999L19.6348 20.2413L23.9995 20.4648L20.2329 14.1812Z"
                              fill="#FFA800"
                            ></path>
                            <circle
                              cx="12.0004"
                              cy="8.72698"
                              r="8.72698"
                              fill="#FFA800"
                            ></circle>
                            <circle
                              cx="12.0028"
                              cy="8.7269"
                              r="7.09067"
                              fill="#FFE99D"
                            ></circle>
                            <path
                              d="M11.7334 4.59761C11.85 4.28582 12.291 4.28582 12.4076 4.59761L13.2976 6.9777C13.3482 7.11297 13.4747 7.2049 13.619 7.2112L16.1576 7.32213C16.4901 7.33666 16.6264 7.7561 16.3659 7.96333L14.3773 9.54523C14.2643 9.63513 14.216 9.78388 14.2546 9.92305L14.9336 12.3717C15.0225 12.6925 14.6657 12.9517 14.3881 12.768L12.2691 11.3656C12.1487 11.2859 11.9923 11.2859 11.8719 11.3656L9.7529 12.768C9.47531 12.9517 9.11852 12.6925 9.20746 12.3717L9.88644 9.92305C9.92503 9.78388 9.8767 9.63513 9.76368 9.54523L7.7751 7.96333C7.5146 7.7561 7.65088 7.33666 7.98344 7.32213L10.5221 7.2112C10.6663 7.2049 10.7929 7.11297 10.8434 6.9777L11.7334 4.59761Z"
                              fill="#FFA800"
                            ></path>
                          </svg>
                        </div>
                        <div className="group-label">
                          <span>Số tự động</span>
                          <span>Giao xe tận nơi</span>
                        </div>
                        <div className="location">
                          <p>
                            <i class="fa-solid fa-location-dot"></i> Quận Tân
                            Phú, Hồ Chí Minh
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div className="row">
                  <div className="col-xl-3 box-car__wrap">
                    <a href="#" className="box-car__link">
                      <div className="img-car">
                        <div className="fix-imgs fix-img">
                          <img
                            src="https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_t…2019/p/g/2021/07/21/18/X47TzLvUbd2ae0Ya3AMWqg.jpg"
                            alt=""
                          />
                        </div>
                        <div className="price-car">700k</div>
                      </div>
                      <div className="desc-car">
                        <div className="desc-car__name">
                          HONDA CITY 2019
                          <img src={iconProduct1} alt="" />
                        </div>
                        <div className="group-line n-rating">
                          <span className="star">5.0</span>
                          <i class="fa-solid fa-star icon-star"></i>
                          <span className="dot-car"> • </span>
                          <span className="ic-mr">141 chuyến</span>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.74373 14.1812L0 20.4535L4.36948 20.2293L6.35463 23.999L9.81785 18.1959C7.33642 17.5754 5.20562 16.1312 3.74373 14.1812Z"
                              fill="#FFA800"
                            ></path>
                            <path
                              d="M20.2329 14.1812C18.7834 16.1302 16.655 17.575 14.1816 18.2039L17.6518 23.999L19.6348 20.2413L23.9995 20.4648L20.2329 14.1812Z"
                              fill="#FFA800"
                            ></path>
                            <circle
                              cx="12.0004"
                              cy="8.72698"
                              r="8.72698"
                              fill="#FFA800"
                            ></circle>
                            <circle
                              cx="12.0028"
                              cy="8.7269"
                              r="7.09067"
                              fill="#FFE99D"
                            ></circle>
                            <path
                              d="M11.7334 4.59761C11.85 4.28582 12.291 4.28582 12.4076 4.59761L13.2976 6.9777C13.3482 7.11297 13.4747 7.2049 13.619 7.2112L16.1576 7.32213C16.4901 7.33666 16.6264 7.7561 16.3659 7.96333L14.3773 9.54523C14.2643 9.63513 14.216 9.78388 14.2546 9.92305L14.9336 12.3717C15.0225 12.6925 14.6657 12.9517 14.3881 12.768L12.2691 11.3656C12.1487 11.2859 11.9923 11.2859 11.8719 11.3656L9.7529 12.768C9.47531 12.9517 9.11852 12.6925 9.20746 12.3717L9.88644 9.92305C9.92503 9.78388 9.8767 9.63513 9.76368 9.54523L7.7751 7.96333C7.5146 7.7561 7.65088 7.33666 7.98344 7.32213L10.5221 7.2112C10.6663 7.2049 10.7929 7.11297 10.8434 6.9777L11.7334 4.59761Z"
                              fill="#FFA800"
                            ></path>
                          </svg>
                        </div>
                        <div className="group-label">
                          <span>Số tự động</span>
                          <span>Giao xe tận nơi</span>
                        </div>
                        <div className="location">
                          <p>
                            <i class="fa-solid fa-location-dot"></i> Quận Tân
                            Phú, Hồ Chí Minh
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-xl-3 box-car__wrap">
                    <a href="#" className="box-car__link">
                      <div className="img-car">
                        <div className="fix-imgs fix-img">
                          <img
                            src="https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_t…2019/p/g/2021/07/21/18/X47TzLvUbd2ae0Ya3AMWqg.jpg"
                            alt=""
                          />
                        </div>
                        <div className="price-car">700k</div>
                      </div>
                      <div className="desc-car">
                        <div className="desc-car__name">
                          HONDA CITY 2019
                          <img src={iconProduct1} alt="" />
                        </div>
                        <div className="group-line n-rating">
                          <span className="star">5.0</span>
                          <i class="fa-solid fa-star icon-star"></i>
                          <span className="dot-car"> • </span>
                          <span className="ic-mr">141 chuyến</span>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.74373 14.1812L0 20.4535L4.36948 20.2293L6.35463 23.999L9.81785 18.1959C7.33642 17.5754 5.20562 16.1312 3.74373 14.1812Z"
                              fill="#FFA800"
                            ></path>
                            <path
                              d="M20.2329 14.1812C18.7834 16.1302 16.655 17.575 14.1816 18.2039L17.6518 23.999L19.6348 20.2413L23.9995 20.4648L20.2329 14.1812Z"
                              fill="#FFA800"
                            ></path>
                            <circle
                              cx="12.0004"
                              cy="8.72698"
                              r="8.72698"
                              fill="#FFA800"
                            ></circle>
                            <circle
                              cx="12.0028"
                              cy="8.7269"
                              r="7.09067"
                              fill="#FFE99D"
                            ></circle>
                            <path
                              d="M11.7334 4.59761C11.85 4.28582 12.291 4.28582 12.4076 4.59761L13.2976 6.9777C13.3482 7.11297 13.4747 7.2049 13.619 7.2112L16.1576 7.32213C16.4901 7.33666 16.6264 7.7561 16.3659 7.96333L14.3773 9.54523C14.2643 9.63513 14.216 9.78388 14.2546 9.92305L14.9336 12.3717C15.0225 12.6925 14.6657 12.9517 14.3881 12.768L12.2691 11.3656C12.1487 11.2859 11.9923 11.2859 11.8719 11.3656L9.7529 12.768C9.47531 12.9517 9.11852 12.6925 9.20746 12.3717L9.88644 9.92305C9.92503 9.78388 9.8767 9.63513 9.76368 9.54523L7.7751 7.96333C7.5146 7.7561 7.65088 7.33666 7.98344 7.32213L10.5221 7.2112C10.6663 7.2049 10.7929 7.11297 10.8434 6.9777L11.7334 4.59761Z"
                              fill="#FFA800"
                            ></path>
                          </svg>
                        </div>
                        <div className="group-label">
                          <span>Số tự động</span>
                          <span>Giao xe tận nơi</span>
                        </div>
                        <div className="location">
                          <p>
                            <i class="fa-solid fa-location-dot"></i> Quận Tân
                            Phú, Hồ Chí Minh
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-xl-3 box-car__wrap">
                    <a href="#" className="box-car__link">
                      <div className="img-car">
                        <div className="fix-imgs fix-img">
                          <img
                            src="https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_t…2019/p/g/2021/07/21/18/X47TzLvUbd2ae0Ya3AMWqg.jpg"
                            alt=""
                          />
                        </div>
                        <div className="price-car">700k</div>
                      </div>
                      <div className="desc-car">
                        <div className="desc-car__name">
                          HONDA CITY 2019
                          <img src={iconProduct1} alt="" />
                        </div>
                        <div className="group-line n-rating">
                          <span className="star">5.0</span>
                          <i class="fa-solid fa-star icon-star"></i>
                          <span className="dot-car"> • </span>
                          <span className="ic-mr">141 chuyến</span>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.74373 14.1812L0 20.4535L4.36948 20.2293L6.35463 23.999L9.81785 18.1959C7.33642 17.5754 5.20562 16.1312 3.74373 14.1812Z"
                              fill="#FFA800"
                            ></path>
                            <path
                              d="M20.2329 14.1812C18.7834 16.1302 16.655 17.575 14.1816 18.2039L17.6518 23.999L19.6348 20.2413L23.9995 20.4648L20.2329 14.1812Z"
                              fill="#FFA800"
                            ></path>
                            <circle
                              cx="12.0004"
                              cy="8.72698"
                              r="8.72698"
                              fill="#FFA800"
                            ></circle>
                            <circle
                              cx="12.0028"
                              cy="8.7269"
                              r="7.09067"
                              fill="#FFE99D"
                            ></circle>
                            <path
                              d="M11.7334 4.59761C11.85 4.28582 12.291 4.28582 12.4076 4.59761L13.2976 6.9777C13.3482 7.11297 13.4747 7.2049 13.619 7.2112L16.1576 7.32213C16.4901 7.33666 16.6264 7.7561 16.3659 7.96333L14.3773 9.54523C14.2643 9.63513 14.216 9.78388 14.2546 9.92305L14.9336 12.3717C15.0225 12.6925 14.6657 12.9517 14.3881 12.768L12.2691 11.3656C12.1487 11.2859 11.9923 11.2859 11.8719 11.3656L9.7529 12.768C9.47531 12.9517 9.11852 12.6925 9.20746 12.3717L9.88644 9.92305C9.92503 9.78388 9.8767 9.63513 9.76368 9.54523L7.7751 7.96333C7.5146 7.7561 7.65088 7.33666 7.98344 7.32213L10.5221 7.2112C10.6663 7.2049 10.7929 7.11297 10.8434 6.9777L11.7334 4.59761Z"
                              fill="#FFA800"
                            ></path>
                          </svg>
                        </div>
                        <div className="group-label">
                          <span>Số tự động</span>
                          <span>Giao xe tận nơi</span>
                        </div>
                        <div className="location">
                          <p>
                            <i class="fa-solid fa-location-dot"></i> Quận Tân
                            Phú, Hồ Chí Minh
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>

                  <div className="col-xl-3 box-car__wrap">
                    <a href="#" className="box-car__link">
                      <div className="img-car">
                        <div className="fix-imgs fix-img">
                          <img
                            src="https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_t…2019/p/g/2021/07/21/18/X47TzLvUbd2ae0Ya3AMWqg.jpg"
                            alt=""
                          />
                        </div>
                        <div className="price-car">700k</div>
                      </div>
                      <div className="desc-car">
                        <div className="desc-car__name">
                          HONDA CITY 2019
                          <img src={iconProduct1} alt="" />
                        </div>
                        <div className="group-line n-rating">
                          <span className="star">5.0</span>
                          <i class="fa-solid fa-star icon-star"></i>
                          <span className="dot-car"> • </span>
                          <span className="ic-mr">141 chuyến</span>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.74373 14.1812L0 20.4535L4.36948 20.2293L6.35463 23.999L9.81785 18.1959C7.33642 17.5754 5.20562 16.1312 3.74373 14.1812Z"
                              fill="#FFA800"
                            ></path>
                            <path
                              d="M20.2329 14.1812C18.7834 16.1302 16.655 17.575 14.1816 18.2039L17.6518 23.999L19.6348 20.2413L23.9995 20.4648L20.2329 14.1812Z"
                              fill="#FFA800"
                            ></path>
                            <circle
                              cx="12.0004"
                              cy="8.72698"
                              r="8.72698"
                              fill="#FFA800"
                            ></circle>
                            <circle
                              cx="12.0028"
                              cy="8.7269"
                              r="7.09067"
                              fill="#FFE99D"
                            ></circle>
                            <path
                              d="M11.7334 4.59761C11.85 4.28582 12.291 4.28582 12.4076 4.59761L13.2976 6.9777C13.3482 7.11297 13.4747 7.2049 13.619 7.2112L16.1576 7.32213C16.4901 7.33666 16.6264 7.7561 16.3659 7.96333L14.3773 9.54523C14.2643 9.63513 14.216 9.78388 14.2546 9.92305L14.9336 12.3717C15.0225 12.6925 14.6657 12.9517 14.3881 12.768L12.2691 11.3656C12.1487 11.2859 11.9923 11.2859 11.8719 11.3656L9.7529 12.768C9.47531 12.9517 9.11852 12.6925 9.20746 12.3717L9.88644 9.92305C9.92503 9.78388 9.8767 9.63513 9.76368 9.54523L7.7751 7.96333C7.5146 7.7561 7.65088 7.33666 7.98344 7.32213L10.5221 7.2112C10.6663 7.2049 10.7929 7.11297 10.8434 6.9777L11.7334 4.59761Z"
                              fill="#FFA800"
                            ></path>
                          </svg>
                        </div>
                        <div className="group-label">
                          <span>Số tự động</span>
                          <span>Giao xe tận nơi</span>
                        </div>
                        <div className="location">
                          <p>
                            <i class="fa-solid fa-location-dot"></i> Quận Tân
                            Phú, Hồ Chí Minh
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div className="row">
                  <div className="col-xl-3 box-car__wrap">
                    <a href="#" className="box-car__link">
                      <div className="img-car">
                        <div className="fix-imgs fix-img">
                          <img
                            src="https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_t…2019/p/g/2021/07/21/18/X47TzLvUbd2ae0Ya3AMWqg.jpg"
                            alt=""
                          />
                        </div>
                        <div className="price-car">700k</div>
                      </div>
                      <div className="desc-car">
                        <div className="desc-car__name">
                          HONDA CITY 2019
                          <img src={iconProduct1} alt="" />
                        </div>
                        <div className="group-line n-rating">
                          <span className="star">5.0</span>
                          <i class="fa-solid fa-star icon-star"></i>
                          <span className="dot-car"> • </span>
                          <span className="ic-mr">141 chuyến</span>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.74373 14.1812L0 20.4535L4.36948 20.2293L6.35463 23.999L9.81785 18.1959C7.33642 17.5754 5.20562 16.1312 3.74373 14.1812Z"
                              fill="#FFA800"
                            ></path>
                            <path
                              d="M20.2329 14.1812C18.7834 16.1302 16.655 17.575 14.1816 18.2039L17.6518 23.999L19.6348 20.2413L23.9995 20.4648L20.2329 14.1812Z"
                              fill="#FFA800"
                            ></path>
                            <circle
                              cx="12.0004"
                              cy="8.72698"
                              r="8.72698"
                              fill="#FFA800"
                            ></circle>
                            <circle
                              cx="12.0028"
                              cy="8.7269"
                              r="7.09067"
                              fill="#FFE99D"
                            ></circle>
                            <path
                              d="M11.7334 4.59761C11.85 4.28582 12.291 4.28582 12.4076 4.59761L13.2976 6.9777C13.3482 7.11297 13.4747 7.2049 13.619 7.2112L16.1576 7.32213C16.4901 7.33666 16.6264 7.7561 16.3659 7.96333L14.3773 9.54523C14.2643 9.63513 14.216 9.78388 14.2546 9.92305L14.9336 12.3717C15.0225 12.6925 14.6657 12.9517 14.3881 12.768L12.2691 11.3656C12.1487 11.2859 11.9923 11.2859 11.8719 11.3656L9.7529 12.768C9.47531 12.9517 9.11852 12.6925 9.20746 12.3717L9.88644 9.92305C9.92503 9.78388 9.8767 9.63513 9.76368 9.54523L7.7751 7.96333C7.5146 7.7561 7.65088 7.33666 7.98344 7.32213L10.5221 7.2112C10.6663 7.2049 10.7929 7.11297 10.8434 6.9777L11.7334 4.59761Z"
                              fill="#FFA800"
                            ></path>
                          </svg>
                        </div>
                        <div className="group-label">
                          <span>Số tự động</span>
                          <span>Giao xe tận nơi</span>
                        </div>
                        <div className="location">
                          <p>
                            <i class="fa-solid fa-location-dot"></i> Quận Tân
                            Phú, Hồ Chí Minh
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-xl-3 box-car__wrap">
                    <a href="#" className="box-car__link">
                      <div className="img-car">
                        <div className="fix-imgs fix-img">
                          <img
                            src="https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_t…2019/p/g/2021/07/21/18/X47TzLvUbd2ae0Ya3AMWqg.jpg"
                            alt=""
                          />
                        </div>
                        <div className="price-car">700k</div>
                      </div>
                      <div className="desc-car">
                        <div className="desc-car__name">
                          HONDA CITY 2019
                          <img src={iconProduct1} alt="" />
                        </div>
                        <div className="group-line n-rating">
                          <span className="star">5.0</span>
                          <i class="fa-solid fa-star icon-star"></i>
                          <span className="dot-car"> • </span>
                          <span className="ic-mr">141 chuyến</span>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.74373 14.1812L0 20.4535L4.36948 20.2293L6.35463 23.999L9.81785 18.1959C7.33642 17.5754 5.20562 16.1312 3.74373 14.1812Z"
                              fill="#FFA800"
                            ></path>
                            <path
                              d="M20.2329 14.1812C18.7834 16.1302 16.655 17.575 14.1816 18.2039L17.6518 23.999L19.6348 20.2413L23.9995 20.4648L20.2329 14.1812Z"
                              fill="#FFA800"
                            ></path>
                            <circle
                              cx="12.0004"
                              cy="8.72698"
                              r="8.72698"
                              fill="#FFA800"
                            ></circle>
                            <circle
                              cx="12.0028"
                              cy="8.7269"
                              r="7.09067"
                              fill="#FFE99D"
                            ></circle>
                            <path
                              d="M11.7334 4.59761C11.85 4.28582 12.291 4.28582 12.4076 4.59761L13.2976 6.9777C13.3482 7.11297 13.4747 7.2049 13.619 7.2112L16.1576 7.32213C16.4901 7.33666 16.6264 7.7561 16.3659 7.96333L14.3773 9.54523C14.2643 9.63513 14.216 9.78388 14.2546 9.92305L14.9336 12.3717C15.0225 12.6925 14.6657 12.9517 14.3881 12.768L12.2691 11.3656C12.1487 11.2859 11.9923 11.2859 11.8719 11.3656L9.7529 12.768C9.47531 12.9517 9.11852 12.6925 9.20746 12.3717L9.88644 9.92305C9.92503 9.78388 9.8767 9.63513 9.76368 9.54523L7.7751 7.96333C7.5146 7.7561 7.65088 7.33666 7.98344 7.32213L10.5221 7.2112C10.6663 7.2049 10.7929 7.11297 10.8434 6.9777L11.7334 4.59761Z"
                              fill="#FFA800"
                            ></path>
                          </svg>
                        </div>
                        <div className="group-label">
                          <span>Số tự động</span>
                          <span>Giao xe tận nơi</span>
                        </div>
                        <div className="location">
                          <p>
                            <i class="fa-solid fa-location-dot"></i> Quận Tân
                            Phú, Hồ Chí Minh
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-xl-3 box-car__wrap">
                    <a href="#" className="box-car__link">
                      <div className="img-car">
                        <div className="fix-imgs fix-img">
                          <img
                            src="https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_t…2019/p/g/2021/07/21/18/X47TzLvUbd2ae0Ya3AMWqg.jpg"
                            alt=""
                          />
                        </div>
                        <div className="price-car">700k</div>
                      </div>
                      <div className="desc-car">
                        <div className="desc-car__name">
                          HONDA CITY 2019
                          <img src={iconProduct1} alt="" />
                        </div>
                        <div className="group-line n-rating">
                          <span className="star">5.0</span>
                          <i class="fa-solid fa-star icon-star"></i>
                          <span className="dot-car"> • </span>
                          <span className="ic-mr">141 chuyến</span>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.74373 14.1812L0 20.4535L4.36948 20.2293L6.35463 23.999L9.81785 18.1959C7.33642 17.5754 5.20562 16.1312 3.74373 14.1812Z"
                              fill="#FFA800"
                            ></path>
                            <path
                              d="M20.2329 14.1812C18.7834 16.1302 16.655 17.575 14.1816 18.2039L17.6518 23.999L19.6348 20.2413L23.9995 20.4648L20.2329 14.1812Z"
                              fill="#FFA800"
                            ></path>
                            <circle
                              cx="12.0004"
                              cy="8.72698"
                              r="8.72698"
                              fill="#FFA800"
                            ></circle>
                            <circle
                              cx="12.0028"
                              cy="8.7269"
                              r="7.09067"
                              fill="#FFE99D"
                            ></circle>
                            <path
                              d="M11.7334 4.59761C11.85 4.28582 12.291 4.28582 12.4076 4.59761L13.2976 6.9777C13.3482 7.11297 13.4747 7.2049 13.619 7.2112L16.1576 7.32213C16.4901 7.33666 16.6264 7.7561 16.3659 7.96333L14.3773 9.54523C14.2643 9.63513 14.216 9.78388 14.2546 9.92305L14.9336 12.3717C15.0225 12.6925 14.6657 12.9517 14.3881 12.768L12.2691 11.3656C12.1487 11.2859 11.9923 11.2859 11.8719 11.3656L9.7529 12.768C9.47531 12.9517 9.11852 12.6925 9.20746 12.3717L9.88644 9.92305C9.92503 9.78388 9.8767 9.63513 9.76368 9.54523L7.7751 7.96333C7.5146 7.7561 7.65088 7.33666 7.98344 7.32213L10.5221 7.2112C10.6663 7.2049 10.7929 7.11297 10.8434 6.9777L11.7334 4.59761Z"
                              fill="#FFA800"
                            ></path>
                          </svg>
                        </div>
                        <div className="group-label">
                          <span>Số tự động</span>
                          <span>Giao xe tận nơi</span>
                        </div>
                        <div className="location">
                          <p>
                            <i class="fa-solid fa-location-dot"></i> Quận Tân
                            Phú, Hồ Chí Minh
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>

                  <div className="col-xl-3 box-car__wrap">
                    <a href="#" className="box-car__link">
                      <div className="img-car">
                        <div className="fix-imgs fix-img">
                          <img
                            src="https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_t…2019/p/g/2021/07/21/18/X47TzLvUbd2ae0Ya3AMWqg.jpg"
                            alt=""
                          />
                        </div>
                        <div className="price-car">700k</div>
                      </div>
                      <div className="desc-car">
                        <div className="desc-car__name">
                          HONDA CITY 2019
                          <img src={iconProduct1} alt="" />
                        </div>
                        <div className="group-line n-rating">
                          <span className="star">5.0</span>
                          <i class="fa-solid fa-star icon-star"></i>
                          <span className="dot-car"> • </span>
                          <span className="ic-mr">141 chuyến</span>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.74373 14.1812L0 20.4535L4.36948 20.2293L6.35463 23.999L9.81785 18.1959C7.33642 17.5754 5.20562 16.1312 3.74373 14.1812Z"
                              fill="#FFA800"
                            ></path>
                            <path
                              d="M20.2329 14.1812C18.7834 16.1302 16.655 17.575 14.1816 18.2039L17.6518 23.999L19.6348 20.2413L23.9995 20.4648L20.2329 14.1812Z"
                              fill="#FFA800"
                            ></path>
                            <circle
                              cx="12.0004"
                              cy="8.72698"
                              r="8.72698"
                              fill="#FFA800"
                            ></circle>
                            <circle
                              cx="12.0028"
                              cy="8.7269"
                              r="7.09067"
                              fill="#FFE99D"
                            ></circle>
                            <path
                              d="M11.7334 4.59761C11.85 4.28582 12.291 4.28582 12.4076 4.59761L13.2976 6.9777C13.3482 7.11297 13.4747 7.2049 13.619 7.2112L16.1576 7.32213C16.4901 7.33666 16.6264 7.7561 16.3659 7.96333L14.3773 9.54523C14.2643 9.63513 14.216 9.78388 14.2546 9.92305L14.9336 12.3717C15.0225 12.6925 14.6657 12.9517 14.3881 12.768L12.2691 11.3656C12.1487 11.2859 11.9923 11.2859 11.8719 11.3656L9.7529 12.768C9.47531 12.9517 9.11852 12.6925 9.20746 12.3717L9.88644 9.92305C9.92503 9.78388 9.8767 9.63513 9.76368 9.54523L7.7751 7.96333C7.5146 7.7561 7.65088 7.33666 7.98344 7.32213L10.5221 7.2112C10.6663 7.2049 10.7929 7.11297 10.8434 6.9777L11.7334 4.59761Z"
                              fill="#FFA800"
                            ></path>
                          </svg>
                        </div>
                        <div className="group-label">
                          <span>Số tự động</span>
                          <span>Giao xe tận nơi</span>
                        </div>
                        <div className="location">
                          <p>
                            <i class="fa-solid fa-location-dot"></i> Quận Tân
                            Phú, Hồ Chí Minh
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>

        <div className="home-promo features__sect">
          <div className="container ex-container ">
            <h4 className="home-promo-title title-car">
              XE NỔI BẬT - XE CÓ TÀI XẾ
            </h4>
            {/* do co the thoi */}
            <Carousel variant="dark">
              <Carousel.Item>
                <div className="row">
                  <div className="col-xl-3 box-car__wrap">
                    <a href="#" className="box-car__link">
                      <div className="img-car">
                        <div className="fix-imgs fix-img">
                          <img
                            src="https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_t…2019/p/g/2021/07/21/18/X47TzLvUbd2ae0Ya3AMWqg.jpg"
                            alt=""
                          />
                        </div>
                        <div className="price-car">700k</div>
                      </div>
                      <div className="desc-car">
                        <div className="desc-car__name">
                          HONDA CITY 2019
                          <img src={iconProduct1} alt="" />
                        </div>
                        <div className="group-line n-rating">
                          <span className="star">5.0</span>
                          <i class="fa-solid fa-star icon-star"></i>
                          <span className="dot-car"> • </span>
                          <span className="ic-mr">141 chuyến</span>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.74373 14.1812L0 20.4535L4.36948 20.2293L6.35463 23.999L9.81785 18.1959C7.33642 17.5754 5.20562 16.1312 3.74373 14.1812Z"
                              fill="#FFA800"
                            ></path>
                            <path
                              d="M20.2329 14.1812C18.7834 16.1302 16.655 17.575 14.1816 18.2039L17.6518 23.999L19.6348 20.2413L23.9995 20.4648L20.2329 14.1812Z"
                              fill="#FFA800"
                            ></path>
                            <circle
                              cx="12.0004"
                              cy="8.72698"
                              r="8.72698"
                              fill="#FFA800"
                            ></circle>
                            <circle
                              cx="12.0028"
                              cy="8.7269"
                              r="7.09067"
                              fill="#FFE99D"
                            ></circle>
                            <path
                              d="M11.7334 4.59761C11.85 4.28582 12.291 4.28582 12.4076 4.59761L13.2976 6.9777C13.3482 7.11297 13.4747 7.2049 13.619 7.2112L16.1576 7.32213C16.4901 7.33666 16.6264 7.7561 16.3659 7.96333L14.3773 9.54523C14.2643 9.63513 14.216 9.78388 14.2546 9.92305L14.9336 12.3717C15.0225 12.6925 14.6657 12.9517 14.3881 12.768L12.2691 11.3656C12.1487 11.2859 11.9923 11.2859 11.8719 11.3656L9.7529 12.768C9.47531 12.9517 9.11852 12.6925 9.20746 12.3717L9.88644 9.92305C9.92503 9.78388 9.8767 9.63513 9.76368 9.54523L7.7751 7.96333C7.5146 7.7561 7.65088 7.33666 7.98344 7.32213L10.5221 7.2112C10.6663 7.2049 10.7929 7.11297 10.8434 6.9777L11.7334 4.59761Z"
                              fill="#FFA800"
                            ></path>
                          </svg>
                        </div>
                        <div className="group-label">
                          <span>Số tự động</span>
                          <span>Giao xe tận nơi</span>
                        </div>
                        <div className="location">
                          <p>
                            <i class="fa-solid fa-location-dot"></i> Quận Tân
                            Phú, Hồ Chí Minh
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-xl-3 box-car__wrap">
                    <a href="#" className="box-car__link">
                      <div className="img-car">
                        <div className="fix-imgs fix-img">
                          <img
                            src="https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_t…2019/p/g/2021/07/21/18/X47TzLvUbd2ae0Ya3AMWqg.jpg"
                            alt=""
                          />
                        </div>
                        <div className="price-car">700k</div>
                      </div>
                      <div className="desc-car">
                        <div className="desc-car__name">
                          HONDA CITY 2019
                          <img src={iconProduct1} alt="" />
                        </div>
                        <div className="group-line n-rating">
                          <span className="star">5.0</span>
                          <i class="fa-solid fa-star icon-star"></i>
                          <span className="dot-car"> • </span>
                          <span className="ic-mr">141 chuyến</span>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.74373 14.1812L0 20.4535L4.36948 20.2293L6.35463 23.999L9.81785 18.1959C7.33642 17.5754 5.20562 16.1312 3.74373 14.1812Z"
                              fill="#FFA800"
                            ></path>
                            <path
                              d="M20.2329 14.1812C18.7834 16.1302 16.655 17.575 14.1816 18.2039L17.6518 23.999L19.6348 20.2413L23.9995 20.4648L20.2329 14.1812Z"
                              fill="#FFA800"
                            ></path>
                            <circle
                              cx="12.0004"
                              cy="8.72698"
                              r="8.72698"
                              fill="#FFA800"
                            ></circle>
                            <circle
                              cx="12.0028"
                              cy="8.7269"
                              r="7.09067"
                              fill="#FFE99D"
                            ></circle>
                            <path
                              d="M11.7334 4.59761C11.85 4.28582 12.291 4.28582 12.4076 4.59761L13.2976 6.9777C13.3482 7.11297 13.4747 7.2049 13.619 7.2112L16.1576 7.32213C16.4901 7.33666 16.6264 7.7561 16.3659 7.96333L14.3773 9.54523C14.2643 9.63513 14.216 9.78388 14.2546 9.92305L14.9336 12.3717C15.0225 12.6925 14.6657 12.9517 14.3881 12.768L12.2691 11.3656C12.1487 11.2859 11.9923 11.2859 11.8719 11.3656L9.7529 12.768C9.47531 12.9517 9.11852 12.6925 9.20746 12.3717L9.88644 9.92305C9.92503 9.78388 9.8767 9.63513 9.76368 9.54523L7.7751 7.96333C7.5146 7.7561 7.65088 7.33666 7.98344 7.32213L10.5221 7.2112C10.6663 7.2049 10.7929 7.11297 10.8434 6.9777L11.7334 4.59761Z"
                              fill="#FFA800"
                            ></path>
                          </svg>
                        </div>
                        <div className="group-label">
                          <span>Số tự động</span>
                          <span>Giao xe tận nơi</span>
                        </div>
                        <div className="location">
                          <p>
                            <i class="fa-solid fa-location-dot"></i> Quận Tân
                            Phú, Hồ Chí Minh
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-xl-3 box-car__wrap">
                    <a href="#" className="box-car__link">
                      <div className="img-car">
                        <div className="fix-imgs fix-img">
                          <img
                            src="https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_t…2019/p/g/2021/07/21/18/X47TzLvUbd2ae0Ya3AMWqg.jpg"
                            alt=""
                          />
                        </div>
                        <div className="price-car">700k</div>
                      </div>
                      <div className="desc-car">
                        <div className="desc-car__name">
                          HONDA CITY 2019
                          <img src={iconProduct1} alt="" />
                        </div>
                        <div className="group-line n-rating">
                          <span className="star">5.0</span>
                          <i class="fa-solid fa-star icon-star"></i>
                          <span className="dot-car"> • </span>
                          <span className="ic-mr">141 chuyến</span>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.74373 14.1812L0 20.4535L4.36948 20.2293L6.35463 23.999L9.81785 18.1959C7.33642 17.5754 5.20562 16.1312 3.74373 14.1812Z"
                              fill="#FFA800"
                            ></path>
                            <path
                              d="M20.2329 14.1812C18.7834 16.1302 16.655 17.575 14.1816 18.2039L17.6518 23.999L19.6348 20.2413L23.9995 20.4648L20.2329 14.1812Z"
                              fill="#FFA800"
                            ></path>
                            <circle
                              cx="12.0004"
                              cy="8.72698"
                              r="8.72698"
                              fill="#FFA800"
                            ></circle>
                            <circle
                              cx="12.0028"
                              cy="8.7269"
                              r="7.09067"
                              fill="#FFE99D"
                            ></circle>
                            <path
                              d="M11.7334 4.59761C11.85 4.28582 12.291 4.28582 12.4076 4.59761L13.2976 6.9777C13.3482 7.11297 13.4747 7.2049 13.619 7.2112L16.1576 7.32213C16.4901 7.33666 16.6264 7.7561 16.3659 7.96333L14.3773 9.54523C14.2643 9.63513 14.216 9.78388 14.2546 9.92305L14.9336 12.3717C15.0225 12.6925 14.6657 12.9517 14.3881 12.768L12.2691 11.3656C12.1487 11.2859 11.9923 11.2859 11.8719 11.3656L9.7529 12.768C9.47531 12.9517 9.11852 12.6925 9.20746 12.3717L9.88644 9.92305C9.92503 9.78388 9.8767 9.63513 9.76368 9.54523L7.7751 7.96333C7.5146 7.7561 7.65088 7.33666 7.98344 7.32213L10.5221 7.2112C10.6663 7.2049 10.7929 7.11297 10.8434 6.9777L11.7334 4.59761Z"
                              fill="#FFA800"
                            ></path>
                          </svg>
                        </div>
                        <div className="group-label">
                          <span>Số tự động</span>
                          <span>Giao xe tận nơi</span>
                        </div>
                        <div className="location">
                          <p>
                            <i class="fa-solid fa-location-dot"></i> Quận Tân
                            Phú, Hồ Chí Minh
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>

                  <div className="col-xl-3 box-car__wrap">
                    <a href="#" className="box-car__link">
                      <div className="img-car">
                        <div className="fix-imgs fix-img">
                          <img
                            src="https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_t…2019/p/g/2021/07/21/18/X47TzLvUbd2ae0Ya3AMWqg.jpg"
                            alt=""
                          />
                        </div>
                        <div className="price-car">700k</div>
                      </div>
                      <div className="desc-car">
                        <div className="desc-car__name">
                          HONDA CITY 2019
                          <img src={iconProduct1} alt="" />
                        </div>
                        <div className="group-line n-rating">
                          <span className="star">5.0</span>
                          <i class="fa-solid fa-star icon-star"></i>
                          <span className="dot-car"> • </span>
                          <span className="ic-mr">141 chuyến</span>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.74373 14.1812L0 20.4535L4.36948 20.2293L6.35463 23.999L9.81785 18.1959C7.33642 17.5754 5.20562 16.1312 3.74373 14.1812Z"
                              fill="#FFA800"
                            ></path>
                            <path
                              d="M20.2329 14.1812C18.7834 16.1302 16.655 17.575 14.1816 18.2039L17.6518 23.999L19.6348 20.2413L23.9995 20.4648L20.2329 14.1812Z"
                              fill="#FFA800"
                            ></path>
                            <circle
                              cx="12.0004"
                              cy="8.72698"
                              r="8.72698"
                              fill="#FFA800"
                            ></circle>
                            <circle
                              cx="12.0028"
                              cy="8.7269"
                              r="7.09067"
                              fill="#FFE99D"
                            ></circle>
                            <path
                              d="M11.7334 4.59761C11.85 4.28582 12.291 4.28582 12.4076 4.59761L13.2976 6.9777C13.3482 7.11297 13.4747 7.2049 13.619 7.2112L16.1576 7.32213C16.4901 7.33666 16.6264 7.7561 16.3659 7.96333L14.3773 9.54523C14.2643 9.63513 14.216 9.78388 14.2546 9.92305L14.9336 12.3717C15.0225 12.6925 14.6657 12.9517 14.3881 12.768L12.2691 11.3656C12.1487 11.2859 11.9923 11.2859 11.8719 11.3656L9.7529 12.768C9.47531 12.9517 9.11852 12.6925 9.20746 12.3717L9.88644 9.92305C9.92503 9.78388 9.8767 9.63513 9.76368 9.54523L7.7751 7.96333C7.5146 7.7561 7.65088 7.33666 7.98344 7.32213L10.5221 7.2112C10.6663 7.2049 10.7929 7.11297 10.8434 6.9777L11.7334 4.59761Z"
                              fill="#FFA800"
                            ></path>
                          </svg>
                        </div>
                        <div className="group-label">
                          <span>Số tự động</span>
                          <span>Giao xe tận nơi</span>
                        </div>
                        <div className="location">
                          <p>
                            <i class="fa-solid fa-location-dot"></i> Quận Tân
                            Phú, Hồ Chí Minh
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div className="row">
                  <div className="col-xl-3 box-car__wrap">
                    <a href="#" className="box-car__link">
                      <div className="img-car">
                        <div className="fix-imgs fix-img">
                          <img
                            src="https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_t…2019/p/g/2021/07/21/18/X47TzLvUbd2ae0Ya3AMWqg.jpg"
                            alt=""
                          />
                        </div>
                        <div className="price-car">700k</div>
                      </div>
                      <div className="desc-car">
                        <div className="desc-car__name">
                          HONDA CITY 2019
                          <img src={iconProduct1} alt="" />
                        </div>
                        <div className="group-line n-rating">
                          <span className="star">5.0</span>
                          <i class="fa-solid fa-star icon-star"></i>
                          <span className="dot-car"> • </span>
                          <span className="ic-mr">141 chuyến</span>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.74373 14.1812L0 20.4535L4.36948 20.2293L6.35463 23.999L9.81785 18.1959C7.33642 17.5754 5.20562 16.1312 3.74373 14.1812Z"
                              fill="#FFA800"
                            ></path>
                            <path
                              d="M20.2329 14.1812C18.7834 16.1302 16.655 17.575 14.1816 18.2039L17.6518 23.999L19.6348 20.2413L23.9995 20.4648L20.2329 14.1812Z"
                              fill="#FFA800"
                            ></path>
                            <circle
                              cx="12.0004"
                              cy="8.72698"
                              r="8.72698"
                              fill="#FFA800"
                            ></circle>
                            <circle
                              cx="12.0028"
                              cy="8.7269"
                              r="7.09067"
                              fill="#FFE99D"
                            ></circle>
                            <path
                              d="M11.7334 4.59761C11.85 4.28582 12.291 4.28582 12.4076 4.59761L13.2976 6.9777C13.3482 7.11297 13.4747 7.2049 13.619 7.2112L16.1576 7.32213C16.4901 7.33666 16.6264 7.7561 16.3659 7.96333L14.3773 9.54523C14.2643 9.63513 14.216 9.78388 14.2546 9.92305L14.9336 12.3717C15.0225 12.6925 14.6657 12.9517 14.3881 12.768L12.2691 11.3656C12.1487 11.2859 11.9923 11.2859 11.8719 11.3656L9.7529 12.768C9.47531 12.9517 9.11852 12.6925 9.20746 12.3717L9.88644 9.92305C9.92503 9.78388 9.8767 9.63513 9.76368 9.54523L7.7751 7.96333C7.5146 7.7561 7.65088 7.33666 7.98344 7.32213L10.5221 7.2112C10.6663 7.2049 10.7929 7.11297 10.8434 6.9777L11.7334 4.59761Z"
                              fill="#FFA800"
                            ></path>
                          </svg>
                        </div>
                        <div className="group-label">
                          <span>Số tự động</span>
                          <span>Giao xe tận nơi</span>
                        </div>
                        <div className="location">
                          <p>
                            <i class="fa-solid fa-location-dot"></i> Quận Tân
                            Phú, Hồ Chí Minh
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-xl-3 box-car__wrap">
                    <a href="#" className="box-car__link">
                      <div className="img-car">
                        <div className="fix-imgs fix-img">
                          <img
                            src="https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_t…2019/p/g/2021/07/21/18/X47TzLvUbd2ae0Ya3AMWqg.jpg"
                            alt=""
                          />
                        </div>
                        <div className="price-car">700k</div>
                      </div>
                      <div className="desc-car">
                        <div className="desc-car__name">
                          HONDA CITY 2019
                          <img src={iconProduct1} alt="" />
                        </div>
                        <div className="group-line n-rating">
                          <span className="star">5.0</span>
                          <i class="fa-solid fa-star icon-star"></i>
                          <span className="dot-car"> • </span>
                          <span className="ic-mr">141 chuyến</span>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.74373 14.1812L0 20.4535L4.36948 20.2293L6.35463 23.999L9.81785 18.1959C7.33642 17.5754 5.20562 16.1312 3.74373 14.1812Z"
                              fill="#FFA800"
                            ></path>
                            <path
                              d="M20.2329 14.1812C18.7834 16.1302 16.655 17.575 14.1816 18.2039L17.6518 23.999L19.6348 20.2413L23.9995 20.4648L20.2329 14.1812Z"
                              fill="#FFA800"
                            ></path>
                            <circle
                              cx="12.0004"
                              cy="8.72698"
                              r="8.72698"
                              fill="#FFA800"
                            ></circle>
                            <circle
                              cx="12.0028"
                              cy="8.7269"
                              r="7.09067"
                              fill="#FFE99D"
                            ></circle>
                            <path
                              d="M11.7334 4.59761C11.85 4.28582 12.291 4.28582 12.4076 4.59761L13.2976 6.9777C13.3482 7.11297 13.4747 7.2049 13.619 7.2112L16.1576 7.32213C16.4901 7.33666 16.6264 7.7561 16.3659 7.96333L14.3773 9.54523C14.2643 9.63513 14.216 9.78388 14.2546 9.92305L14.9336 12.3717C15.0225 12.6925 14.6657 12.9517 14.3881 12.768L12.2691 11.3656C12.1487 11.2859 11.9923 11.2859 11.8719 11.3656L9.7529 12.768C9.47531 12.9517 9.11852 12.6925 9.20746 12.3717L9.88644 9.92305C9.92503 9.78388 9.8767 9.63513 9.76368 9.54523L7.7751 7.96333C7.5146 7.7561 7.65088 7.33666 7.98344 7.32213L10.5221 7.2112C10.6663 7.2049 10.7929 7.11297 10.8434 6.9777L11.7334 4.59761Z"
                              fill="#FFA800"
                            ></path>
                          </svg>
                        </div>
                        <div className="group-label">
                          <span>Số tự động</span>
                          <span>Giao xe tận nơi</span>
                        </div>
                        <div className="location">
                          <p>
                            <i class="fa-solid fa-location-dot"></i> Quận Tân
                            Phú, Hồ Chí Minh
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-xl-3 box-car__wrap">
                    <a href="#" className="box-car__link">
                      <div className="img-car">
                        <div className="fix-imgs fix-img">
                          <img
                            src="https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_t…2019/p/g/2021/07/21/18/X47TzLvUbd2ae0Ya3AMWqg.jpg"
                            alt=""
                          />
                        </div>
                        <div className="price-car">700k</div>
                      </div>
                      <div className="desc-car">
                        <div className="desc-car__name">
                          HONDA CITY 2019
                          <img src={iconProduct1} alt="" />
                        </div>
                        <div className="group-line n-rating">
                          <span className="star">5.0</span>
                          <i class="fa-solid fa-star icon-star"></i>
                          <span className="dot-car"> • </span>
                          <span className="ic-mr">141 chuyến</span>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.74373 14.1812L0 20.4535L4.36948 20.2293L6.35463 23.999L9.81785 18.1959C7.33642 17.5754 5.20562 16.1312 3.74373 14.1812Z"
                              fill="#FFA800"
                            ></path>
                            <path
                              d="M20.2329 14.1812C18.7834 16.1302 16.655 17.575 14.1816 18.2039L17.6518 23.999L19.6348 20.2413L23.9995 20.4648L20.2329 14.1812Z"
                              fill="#FFA800"
                            ></path>
                            <circle
                              cx="12.0004"
                              cy="8.72698"
                              r="8.72698"
                              fill="#FFA800"
                            ></circle>
                            <circle
                              cx="12.0028"
                              cy="8.7269"
                              r="7.09067"
                              fill="#FFE99D"
                            ></circle>
                            <path
                              d="M11.7334 4.59761C11.85 4.28582 12.291 4.28582 12.4076 4.59761L13.2976 6.9777C13.3482 7.11297 13.4747 7.2049 13.619 7.2112L16.1576 7.32213C16.4901 7.33666 16.6264 7.7561 16.3659 7.96333L14.3773 9.54523C14.2643 9.63513 14.216 9.78388 14.2546 9.92305L14.9336 12.3717C15.0225 12.6925 14.6657 12.9517 14.3881 12.768L12.2691 11.3656C12.1487 11.2859 11.9923 11.2859 11.8719 11.3656L9.7529 12.768C9.47531 12.9517 9.11852 12.6925 9.20746 12.3717L9.88644 9.92305C9.92503 9.78388 9.8767 9.63513 9.76368 9.54523L7.7751 7.96333C7.5146 7.7561 7.65088 7.33666 7.98344 7.32213L10.5221 7.2112C10.6663 7.2049 10.7929 7.11297 10.8434 6.9777L11.7334 4.59761Z"
                              fill="#FFA800"
                            ></path>
                          </svg>
                        </div>
                        <div className="group-label">
                          <span>Số tự động</span>
                          <span>Giao xe tận nơi</span>
                        </div>
                        <div className="location">
                          <p>
                            <i class="fa-solid fa-location-dot"></i> Quận Tân
                            Phú, Hồ Chí Minh
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>

                  <div className="col-xl-3 box-car__wrap">
                    <a href="#" className="box-car__link">
                      <div className="img-car">
                        <div className="fix-imgs fix-img">
                          <img
                            src="https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_t…2019/p/g/2021/07/21/18/X47TzLvUbd2ae0Ya3AMWqg.jpg"
                            alt=""
                          />
                        </div>
                        <div className="price-car">700k</div>
                      </div>
                      <div className="desc-car">
                        <div className="desc-car__name">
                          HONDA CITY 2019
                          <img src={iconProduct1} alt="" />
                        </div>
                        <div className="group-line n-rating">
                          <span className="star">5.0</span>
                          <i class="fa-solid fa-star icon-star"></i>
                          <span className="dot-car"> • </span>
                          <span className="ic-mr">141 chuyến</span>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.74373 14.1812L0 20.4535L4.36948 20.2293L6.35463 23.999L9.81785 18.1959C7.33642 17.5754 5.20562 16.1312 3.74373 14.1812Z"
                              fill="#FFA800"
                            ></path>
                            <path
                              d="M20.2329 14.1812C18.7834 16.1302 16.655 17.575 14.1816 18.2039L17.6518 23.999L19.6348 20.2413L23.9995 20.4648L20.2329 14.1812Z"
                              fill="#FFA800"
                            ></path>
                            <circle
                              cx="12.0004"
                              cy="8.72698"
                              r="8.72698"
                              fill="#FFA800"
                            ></circle>
                            <circle
                              cx="12.0028"
                              cy="8.7269"
                              r="7.09067"
                              fill="#FFE99D"
                            ></circle>
                            <path
                              d="M11.7334 4.59761C11.85 4.28582 12.291 4.28582 12.4076 4.59761L13.2976 6.9777C13.3482 7.11297 13.4747 7.2049 13.619 7.2112L16.1576 7.32213C16.4901 7.33666 16.6264 7.7561 16.3659 7.96333L14.3773 9.54523C14.2643 9.63513 14.216 9.78388 14.2546 9.92305L14.9336 12.3717C15.0225 12.6925 14.6657 12.9517 14.3881 12.768L12.2691 11.3656C12.1487 11.2859 11.9923 11.2859 11.8719 11.3656L9.7529 12.768C9.47531 12.9517 9.11852 12.6925 9.20746 12.3717L9.88644 9.92305C9.92503 9.78388 9.8767 9.63513 9.76368 9.54523L7.7751 7.96333C7.5146 7.7561 7.65088 7.33666 7.98344 7.32213L10.5221 7.2112C10.6663 7.2049 10.7929 7.11297 10.8434 6.9777L11.7334 4.59761Z"
                              fill="#FFA800"
                            ></path>
                          </svg>
                        </div>
                        <div className="group-label">
                          <span>Số tự động</span>
                          <span>Giao xe tận nơi</span>
                        </div>
                        <div className="location">
                          <p>
                            <i class="fa-solid fa-location-dot"></i> Quận Tân
                            Phú, Hồ Chí Minh
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div className="row">
                  <div className="col-xl-3 box-car__wrap">
                    <a href="#" className="box-car__link">
                      <div className="img-car">
                        <div className="fix-imgs fix-img">
                          <img
                            src="https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_t…2019/p/g/2021/07/21/18/X47TzLvUbd2ae0Ya3AMWqg.jpg"
                            alt=""
                          />
                        </div>
                        <div className="price-car">700k</div>
                      </div>
                      <div className="desc-car">
                        <div className="desc-car__name">
                          HONDA CITY 2019
                          <img src={iconProduct1} alt="" />
                        </div>
                        <div className="group-line n-rating">
                          <span className="star">5.0</span>
                          <i class="fa-solid fa-star icon-star"></i>
                          <span className="dot-car"> • </span>
                          <span className="ic-mr">141 chuyến</span>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.74373 14.1812L0 20.4535L4.36948 20.2293L6.35463 23.999L9.81785 18.1959C7.33642 17.5754 5.20562 16.1312 3.74373 14.1812Z"
                              fill="#FFA800"
                            ></path>
                            <path
                              d="M20.2329 14.1812C18.7834 16.1302 16.655 17.575 14.1816 18.2039L17.6518 23.999L19.6348 20.2413L23.9995 20.4648L20.2329 14.1812Z"
                              fill="#FFA800"
                            ></path>
                            <circle
                              cx="12.0004"
                              cy="8.72698"
                              r="8.72698"
                              fill="#FFA800"
                            ></circle>
                            <circle
                              cx="12.0028"
                              cy="8.7269"
                              r="7.09067"
                              fill="#FFE99D"
                            ></circle>
                            <path
                              d="M11.7334 4.59761C11.85 4.28582 12.291 4.28582 12.4076 4.59761L13.2976 6.9777C13.3482 7.11297 13.4747 7.2049 13.619 7.2112L16.1576 7.32213C16.4901 7.33666 16.6264 7.7561 16.3659 7.96333L14.3773 9.54523C14.2643 9.63513 14.216 9.78388 14.2546 9.92305L14.9336 12.3717C15.0225 12.6925 14.6657 12.9517 14.3881 12.768L12.2691 11.3656C12.1487 11.2859 11.9923 11.2859 11.8719 11.3656L9.7529 12.768C9.47531 12.9517 9.11852 12.6925 9.20746 12.3717L9.88644 9.92305C9.92503 9.78388 9.8767 9.63513 9.76368 9.54523L7.7751 7.96333C7.5146 7.7561 7.65088 7.33666 7.98344 7.32213L10.5221 7.2112C10.6663 7.2049 10.7929 7.11297 10.8434 6.9777L11.7334 4.59761Z"
                              fill="#FFA800"
                            ></path>
                          </svg>
                        </div>
                        <div className="group-label">
                          <span>Số tự động</span>
                          <span>Giao xe tận nơi</span>
                        </div>
                        <div className="location">
                          <p>
                            <i class="fa-solid fa-location-dot"></i> Quận Tân
                            Phú, Hồ Chí Minh
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-xl-3 box-car__wrap">
                    <a href="#" className="box-car__link">
                      <div className="img-car">
                        <div className="fix-imgs fix-img">
                          <img
                            src="https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_t…2019/p/g/2021/07/21/18/X47TzLvUbd2ae0Ya3AMWqg.jpg"
                            alt=""
                          />
                        </div>
                        <div className="price-car">700k</div>
                      </div>
                      <div className="desc-car">
                        <div className="desc-car__name">
                          HONDA CITY 2019
                          <img src={iconProduct1} alt="" />
                        </div>
                        <div className="group-line n-rating">
                          <span className="star">5.0</span>
                          <i class="fa-solid fa-star icon-star"></i>
                          <span className="dot-car"> • </span>
                          <span className="ic-mr">141 chuyến</span>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.74373 14.1812L0 20.4535L4.36948 20.2293L6.35463 23.999L9.81785 18.1959C7.33642 17.5754 5.20562 16.1312 3.74373 14.1812Z"
                              fill="#FFA800"
                            ></path>
                            <path
                              d="M20.2329 14.1812C18.7834 16.1302 16.655 17.575 14.1816 18.2039L17.6518 23.999L19.6348 20.2413L23.9995 20.4648L20.2329 14.1812Z"
                              fill="#FFA800"
                            ></path>
                            <circle
                              cx="12.0004"
                              cy="8.72698"
                              r="8.72698"
                              fill="#FFA800"
                            ></circle>
                            <circle
                              cx="12.0028"
                              cy="8.7269"
                              r="7.09067"
                              fill="#FFE99D"
                            ></circle>
                            <path
                              d="M11.7334 4.59761C11.85 4.28582 12.291 4.28582 12.4076 4.59761L13.2976 6.9777C13.3482 7.11297 13.4747 7.2049 13.619 7.2112L16.1576 7.32213C16.4901 7.33666 16.6264 7.7561 16.3659 7.96333L14.3773 9.54523C14.2643 9.63513 14.216 9.78388 14.2546 9.92305L14.9336 12.3717C15.0225 12.6925 14.6657 12.9517 14.3881 12.768L12.2691 11.3656C12.1487 11.2859 11.9923 11.2859 11.8719 11.3656L9.7529 12.768C9.47531 12.9517 9.11852 12.6925 9.20746 12.3717L9.88644 9.92305C9.92503 9.78388 9.8767 9.63513 9.76368 9.54523L7.7751 7.96333C7.5146 7.7561 7.65088 7.33666 7.98344 7.32213L10.5221 7.2112C10.6663 7.2049 10.7929 7.11297 10.8434 6.9777L11.7334 4.59761Z"
                              fill="#FFA800"
                            ></path>
                          </svg>
                        </div>
                        <div className="group-label">
                          <span>Số tự động</span>
                          <span>Giao xe tận nơi</span>
                        </div>
                        <div className="location">
                          <p>
                            <i class="fa-solid fa-location-dot"></i> Quận Tân
                            Phú, Hồ Chí Minh
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-xl-3 box-car__wrap">
                    <a href="#" className="box-car__link">
                      <div className="img-car">
                        <div className="fix-imgs fix-img">
                          <img
                            src="https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_t…2019/p/g/2021/07/21/18/X47TzLvUbd2ae0Ya3AMWqg.jpg"
                            alt=""
                          />
                        </div>
                        <div className="price-car">700k</div>
                      </div>
                      <div className="desc-car">
                        <div className="desc-car__name">
                          HONDA CITY 2019
                          <img src={iconProduct1} alt="" />
                        </div>
                        <div className="group-line n-rating">
                          <span className="star">5.0</span>
                          <i class="fa-solid fa-star icon-star"></i>
                          <span className="dot-car"> • </span>
                          <span className="ic-mr">141 chuyến</span>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.74373 14.1812L0 20.4535L4.36948 20.2293L6.35463 23.999L9.81785 18.1959C7.33642 17.5754 5.20562 16.1312 3.74373 14.1812Z"
                              fill="#FFA800"
                            ></path>
                            <path
                              d="M20.2329 14.1812C18.7834 16.1302 16.655 17.575 14.1816 18.2039L17.6518 23.999L19.6348 20.2413L23.9995 20.4648L20.2329 14.1812Z"
                              fill="#FFA800"
                            ></path>
                            <circle
                              cx="12.0004"
                              cy="8.72698"
                              r="8.72698"
                              fill="#FFA800"
                            ></circle>
                            <circle
                              cx="12.0028"
                              cy="8.7269"
                              r="7.09067"
                              fill="#FFE99D"
                            ></circle>
                            <path
                              d="M11.7334 4.59761C11.85 4.28582 12.291 4.28582 12.4076 4.59761L13.2976 6.9777C13.3482 7.11297 13.4747 7.2049 13.619 7.2112L16.1576 7.32213C16.4901 7.33666 16.6264 7.7561 16.3659 7.96333L14.3773 9.54523C14.2643 9.63513 14.216 9.78388 14.2546 9.92305L14.9336 12.3717C15.0225 12.6925 14.6657 12.9517 14.3881 12.768L12.2691 11.3656C12.1487 11.2859 11.9923 11.2859 11.8719 11.3656L9.7529 12.768C9.47531 12.9517 9.11852 12.6925 9.20746 12.3717L9.88644 9.92305C9.92503 9.78388 9.8767 9.63513 9.76368 9.54523L7.7751 7.96333C7.5146 7.7561 7.65088 7.33666 7.98344 7.32213L10.5221 7.2112C10.6663 7.2049 10.7929 7.11297 10.8434 6.9777L11.7334 4.59761Z"
                              fill="#FFA800"
                            ></path>
                          </svg>
                        </div>
                        <div className="group-label">
                          <span>Số tự động</span>
                          <span>Giao xe tận nơi</span>
                        </div>
                        <div className="location">
                          <p>
                            <i class="fa-solid fa-location-dot"></i> Quận Tân
                            Phú, Hồ Chí Minh
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>

                  <div className="col-xl-3 box-car__wrap">
                    <a href="#" className="box-car__link">
                      <div className="img-car">
                        <div className="fix-imgs fix-img">
                          <img
                            src="https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_t…2019/p/g/2021/07/21/18/X47TzLvUbd2ae0Ya3AMWqg.jpg"
                            alt=""
                          />
                        </div>
                        <div className="price-car">700k</div>
                      </div>
                      <div className="desc-car">
                        <div className="desc-car__name">
                          HONDA CITY 2019
                          <img src={iconProduct1} alt="" />
                        </div>
                        <div className="group-line n-rating">
                          <span className="star">5.0</span>
                          <i class="fa-solid fa-star icon-star"></i>
                          <span className="dot-car"> • </span>
                          <span className="ic-mr">141 chuyến</span>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.74373 14.1812L0 20.4535L4.36948 20.2293L6.35463 23.999L9.81785 18.1959C7.33642 17.5754 5.20562 16.1312 3.74373 14.1812Z"
                              fill="#FFA800"
                            ></path>
                            <path
                              d="M20.2329 14.1812C18.7834 16.1302 16.655 17.575 14.1816 18.2039L17.6518 23.999L19.6348 20.2413L23.9995 20.4648L20.2329 14.1812Z"
                              fill="#FFA800"
                            ></path>
                            <circle
                              cx="12.0004"
                              cy="8.72698"
                              r="8.72698"
                              fill="#FFA800"
                            ></circle>
                            <circle
                              cx="12.0028"
                              cy="8.7269"
                              r="7.09067"
                              fill="#FFE99D"
                            ></circle>
                            <path
                              d="M11.7334 4.59761C11.85 4.28582 12.291 4.28582 12.4076 4.59761L13.2976 6.9777C13.3482 7.11297 13.4747 7.2049 13.619 7.2112L16.1576 7.32213C16.4901 7.33666 16.6264 7.7561 16.3659 7.96333L14.3773 9.54523C14.2643 9.63513 14.216 9.78388 14.2546 9.92305L14.9336 12.3717C15.0225 12.6925 14.6657 12.9517 14.3881 12.768L12.2691 11.3656C12.1487 11.2859 11.9923 11.2859 11.8719 11.3656L9.7529 12.768C9.47531 12.9517 9.11852 12.6925 9.20746 12.3717L9.88644 9.92305C9.92503 9.78388 9.8767 9.63513 9.76368 9.54523L7.7751 7.96333C7.5146 7.7561 7.65088 7.33666 7.98344 7.32213L10.5221 7.2112C10.6663 7.2049 10.7929 7.11297 10.8434 6.9777L11.7334 4.59761Z"
                              fill="#FFA800"
                            ></path>
                          </svg>
                        </div>
                        <div className="group-label">
                          <span>Số tự động</span>
                          <span>Giao xe tận nơi</span>
                        </div>
                        <div className="location">
                          <p>
                            <i class="fa-solid fa-location-dot"></i> Quận Tân
                            Phú, Hồ Chí Minh
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>

        <div className="newspaper__sect">
          <div className="container ex-container ">
            <div className="news__sect">
              <div className="bg-news">
                <img
                  src="https://www.mioto.vn/static/media/news-car.5c3da7c3.png"
                  alt=""
                />
              </div>
              <h3 className="n-title">BÁO CHÍ NÓI VỀ CHÚNG TÔI </h3>
              <div className="news-wrapper">
                <a href="#">
                  <div className="news-item">
                    <img
                      src="https://www.mioto.vn/static/media/news-dantri.2d5c647f.svg"
                      alt=""
                    />
                  </div>
                </a>
                <a href="#">
                  <div className="news-item">
                    <img
                      src="	https://www.mioto.vn/static/media/news-vnExpress.7ee14294.svg"
                      alt=""
                    />
                  </div>
                </a>
                <a href="#">
                  <div className="news-item">
                    <img
                      src="https://www.mioto.vn/static/media/news-genk.897bac56.svg"
                      alt=""
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="down-app__sect">
          <div className="down-app-bg">
            <div className="container ex-container ">
              <div className="app-content">
                <h2>Ứng dụng cho điện thoại </h2>
                <p>Tải ngay ứng dụng tại App Store hoặc Google Play</p>
                <div className="store">
                  <a href="#" className="func-app">
                    <img
                      class="responsive-img"
                      src="data:image/png;base64,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"
                    ></img>
                  </a>

                  <a href="#" className="func-app">
                    <img
                      class="responsive-img"
                      src="data:image/png;base64,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"
                    ></img>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <img
            src="https://www.mioto.vn/static/media/phone-1.da4073d6.png"
            alt="down-app-1"
            className="down-app-1"
          />
          <img
            src="https://www.mioto.vn/static/media/phone-2.a4767029.png"
            alt="down-app-2"
            className="down-app-2"
          />
        </div>
      </div>
      <Footers />
    </>
  );
}

export default Home;
