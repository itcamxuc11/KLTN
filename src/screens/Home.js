import React, { Component } from 'react';
// import Navbar from '../components/Navbar';
import Navbar2 from '../components/Navbar2';
import Footer from '../components/Footer';

import 'bootstrap/dist/css/bootstrap.css';
import '../App.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Home extends Component {
  constructor() {
    super()
    this.state = {
      homeSearchBarText: "",
    }
    this.handleSearchBar = this.handleSearchBar.bind(this);
  }

  handleSearchBar() {
    const { homeSearchBarText } = this.state
    if (homeSearchBarText) {
      this.props.history.push('/restaurants', this.state.homeSearchBarText)
    }
  }

  handleOrderNowBtn() {
    this.props.history.push('/restaurants')
  }

  render() {
    return (
      <div>
        {/* Home Navbar Section */}
        <div className="container-fluid home-cont1">
          <div className="">
            {/* <Navbar history={this.props.history} /> */}
            <Navbar2 history={this.props.history} />
            <div className="container home-cont1-text">
              <h2 className="text-uppercase text-white text-center mb-4"><strong>Good Morning! <br />Let's explore good food near you</strong></h2>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                    <input type="text" className="form-control text-uppercase" id="searchText" placeholder="Your address" onChange={(e) => { this.setState({ homeSearchBarText: e.target.value }) }} />
                  </div>
                  <div className="col-lg-2 col-md-2 col-sm-12">
                    <button type="button" className="btn btn-warning mb-2 text-uppercase btn-block rounded-0" onClick={this.handleSearchBar}><b>Tìm</b></button>
                  </div>
                </div>
              </div>
              <div className="container text-white text-center mt-4">
                <div className="col-lg-7 col-md-8 col-sm-12 mx-auto">
                  <img style={{ width: "95%" }} alt="" src={require("../assets/images/options-img.png")} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Home Number section */}
        <div className="container-fluid py-2 bg-warning">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <p className="my-3 text-lg-right text-md-right text-center text-white"><b className="mr-2 h5">18.000</b>Cửa hàng</p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <p className="my-3 text-center text-white"><b className="mr-2 h5">9000</b>Shipper</p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <p className="my-3 text-lg-left text-md-left text-center text-white"><b className="mr-2 h5">1.123.455</b>Người sử dụng</p>
            </div>
          </div>
        </div>

        {/* Home How it work section */}
        <div className="container-fluid text-center py-4">
          <div className="py-4">
            <h2 className="h2 text-uppercase">How It Works</h2>
            <p>Easy.</p>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-4 col-md-4 px-5">
                <span className="round-border my-4">
                  <img alt="Choose A Tasty Dish" src={require("../assets/images/how-to-work3.png")} />
                </span>
                <h3 className="h3 mb-4">Chọn món</h3>
              </div>
              <div className="col-12 col-lg-4 col-md-4 px-5">
                <span className="round-border my-4">
                  <img alt="Pick Up Or Delivery" src={require("../assets/images/how-to-work1.png")} />
                </span>
                <h3 className="h3 mb-4">Giao hàng</h3>
              </div>
              <div className="col-12 col-lg-4 col-md-4 px-5">
                <span className="round-border my-4">
                  <img alt="Choose A Restaurant" src={require("../assets/images/how-to-work2.png")} />
                </span>
                <h3 className="h3 mb-4">Thưởng thức tại nhà</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Home Order now section */}
        <div className="container-fluid text-center py-5 home-cont3">
          <p className="h1 text-uppercase text-white mt-5 mb-3">Hãy đặt hàng để phòng chóng Covid 19</p>
          <p className="text-white mb-3">Dù diễn biến khó lường nhưng chúng tôi luôn phục vụ bạn.</p>
          <button type="button" className="btn btn-warning text-uppercase mb-5" onClick={() => this.handleOrderNowBtn()}><b>Order Now</b></button>
        </div>

        {/* Home Featured restaurant section */}
        <div className="container-fluid py-5">
          <div className="py-4">
            <h2 className="h2 text-uppercase text-center">Cửa hàng nổi bật</h2>
            <p className="text-center">Giá rẻ và ngon nhất.</p>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
                <div className="container res-shadow res-border">
                  <div className="row p-3">
                    <div className="col-lg-4 col-md-4 col-sm-12 text-center border p-2">
                      <img style={{ width: "70%" }} alt="Natural Healthy Food" src={require("../assets/images/listing-logo03.png")} />
                    </div>
                    <div style={{ position: "relative" }} className="col-lg-8 col-md-8 col-sm-12 py-2">
                      <h5 className="mb-1">Giả khát Lucacu</h5>
                      <p className="mb-2"><small>Redbul , Sting, Mì gói</small></p>
                      <p>
                        <small className="">
                          <FontAwesomeIcon icon="star" className="rating mr-1" />
                          <FontAwesomeIcon icon="star" className="rating mr-1" />
                          <FontAwesomeIcon icon="star" className="rating mr-1" />
                          <FontAwesomeIcon icon="star" className="rating mr-1" />
                          <FontAwesomeIcon icon="star" className="rating mr-1" />
                        </small>
                        <small>(1) Review</small>
                      </p>
                      <span style={{ position: "absolute", top: 5, right: 5 }}><FontAwesomeIcon icon="heart" className="text-success mr-1" /></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
                <div className="container res-shadow res-border">
                  <div className="row p-3">
                    <div className="col-lg-4 col-md-4 col-sm-12 text-center border p-2">
                      <img style={{ width: "70%" }} alt="Natural Healthy Food" src={require("../assets/images/listing-logo03.png")} />
                    </div>
                    <div style={{ position: "relative" }} className="col-lg-8 col-md-8 col-sm-12 py-2">
                      <h5 className="mb-1">Giả khát Lucacu</h5>
                      <p className="mb-2"><small>Redbul , Sting, Mì gói</small></p>
                      <p>
                        <small className="">
                          <FontAwesomeIcon icon="star" className="rating mr-1" />
                          <FontAwesomeIcon icon="star" className="rating mr-1" />
                          <FontAwesomeIcon icon="star" className="rating mr-1" />
                          <FontAwesomeIcon icon="star" className="rating mr-1" />
                          <FontAwesomeIcon icon="star" className="rating mr-1" />
                        </small>
                        <small>(1) Review</small>
                      </p>
                      <span style={{ position: "absolute", top: 5, right: 5 }}><FontAwesomeIcon icon="heart" className="text-success mr-1" /></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Home Footer */}
        <Footer />
      </div>
    );
  }
}

export default Home;