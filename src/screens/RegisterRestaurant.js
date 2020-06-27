import React, { Component } from 'react';
// import Navbar from '../components/Navbar';
import Navbar2 from '../components/Navbar2';
import Footer from '../components/Footer';
import { signUp } from '../config/firebase';

import 'bootstrap/dist/css/bootstrap.css';
import '../App.css'

export default class RegisterRestaurant extends Component {
    constructor() {
        super()
        this.state = {
            registerFormError: "",
            userProfileImageLable: "Choose image",
            userName: "",
            userEmail: "",
            userPassword: "",
            userConfirmPassword: false,
            userCity: "",
            userCountry: "",
            userGender: "Male",
            userAge: "",
            userProfileImage: null,
            userTNC: false,
            showError: false,
            userLoginEmail: "",
            userLoginPassword: "",
        }
        this.handleUserName = this.handleUserName.bind(this);
        this.handleUserEmail = this.handleUserEmail.bind(this);
        this.handleUserPassword = this.handleUserPassword.bind(this);
        this.handleUserConfirmPassword = this.handleUserConfirmPassword.bind(this);
        this.handleUserCity = this.handleUserCity.bind(this);
        this.handleUserCountry = this.handleUserCountry.bind(this);
        this.handleUserAge = this.handleUserAge.bind(this);
        this.handleCreateAccountBtn = this.handleCreateAccountBtn.bind(this);
        this.handleUserProfileImage = this.handleUserProfileImage.bind(this);
        this.handleUserTNC = this.handleUserTNC.bind(this);
        this.handleUserGender = this.handleUserGender.bind(this);
    }

    handleUserName(e) {
        const userName = e;
        const userNameFormate = /^([A-Za-z.\s_-]).{5,}$/;
        if (userName.match(userNameFormate)) {
            this.setState({
                showError: false,
                registerFormError: "",
                userName: userName,
            });
        } else {
            this.setState({
                showError: true,
                registerFormError: "Tên không hợp lệ.",
                userName: "",
            });
        }
    }

    handleUserEmail(e) {
        const userEmail = e;
        const userEmailFormate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (userEmail.match(userEmailFormate)) {
            this.setState({
                showError: false,
                registerFormError: "",
                userEmail: userEmail,
            });
        } else {
            this.setState({
                showError: true,
                registerFormError: "Địa chỉ không hợp lệ.",
                userEmail: ""
            });
        }
    }

    handleUserPassword(e) {
        const userPassword = e;
        const userPasswordFormate = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,}/;
        if (userPassword.match(userPasswordFormate)) {
            this.setState({
                showError: false,
                registerFormError: "",
                userPassword: userPassword,
            });
        } else {
            this.setState({
                showError: true,
                registerFormError: "Mật khẩu bao gồm chữ hoa và chữ thường và dài hơn 10 ký tự.",
                userPassword: "",
            });
        }
    }

    handleUserConfirmPassword(e) {
        const userConfirmPassword = e;
        const { userPassword } = this.state;
        if (userConfirmPassword.match(userPassword)) {
            this.setState({
                showError: false,
                registerFormError: "",
                userConfirmPassword: true,
            });
        } else {
            this.setState({
                showError: true,
                registerFormError: "Nhâp lại mật khẩu không khớp",
                userConfirmPassword: false,
            });
        }
    }

    handleUserCity(e) {
        const userCity = e;
        const userCityFormate = /^([A-Za-z.\s_-]).{5,}$/;
        if (userCity.match(userCityFormate)) {
            this.setState({
                showError: false,
                registerFormError: "",
                userCity: userCity,
            });
        } else {
            this.setState({
                showError: true,
                registerFormError: "Tên thành phố không hợp lệ.",
                userCity: "",
            });
        }
    }

    handleUserCountry(e) {
        const userCountry = e;
        const userCountryFormate = /^([A-Za-z.\s_-]).{5,}$/;
        if (userCountry.match(userCountryFormate)) {
            this.setState({
                showError: false,
                registerFormError: "",
                userCountry: userCountry,
            });
        } else {
            this.setState({
                showError: true,
                registerFormError: "Địa chỉ không hợp lệ.",
                userCountry: "",
            });
        }
    }

    handleUserGender(e) {
        this.setState({
            userGender: e.target.value,
        })
    }

    handleUserAge(e) {
        const userAge = e;
        if (userAge > 0 && userAge < 101) {
            this.setState({
                showError: false,
                registerFormError: "",
                userAge: userAge,
            });
        } else {
            this.setState({
                showError: true,
                registerFormError: "Please enter a valid age.",
                userAge: "",
            });
        }
    }

    handleUserProfileImage(e) {
        if (e.target.files[0] != null) {
            this.setState({
                showError: false,
                registerFormError: "",
                userProfileImageLable: e.target.files[0].name,
                userProfileImage: e.target.files[0]
            });
        } else {
            this.setState({
                showError: true,
                registerFormError: "Chọn hình đại diện.",
                userProfileImageLable: "Choose file...",
                userProfileImage: "",
            });
        }
    }

    handleUserTNC() {
        const { userTNC } = this.state
        if (!userTNC) {
            this.setState({
                userTNC: true,
                showError: false,
                registerFormError: "",
            })
        } else {
            this.setState({
                userTNC: false,
                showError: true,
                registerFormError: "Chấp nhận điều khoản sử dụng dịch vụ.",
            })
        }
    }

    async handleCreateAccountBtn() {
        const { userName, userEmail, userPassword, userConfirmPassword, userCity, userCountry, userGender, userAge, userProfileImage, userTNC } = this.state;

        // const whiteSpaces = /^(?!\s*$)[-a-zA-Z0-9_:,.' ']{1,100}$/;
        const userNameFormate = /^([A-Za-z.\s_-]).{5,}$/;
        const userEmailFormate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const userPasswordFormate = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,}/;
        const userCountryFormate = /^([A-Za-z.\s_-]).{5,}$/;
        const userCityFormate = /^([A-Za-z.\s_-]).{5,}$/;

        if (!userName.match(userNameFormate)) {
            this.setState({
                showError: true,
                registerFormError: "Tên không hợp lệ.",
            });
        } else if (!userEmail.match(userEmailFormate)) {
            this.setState({
                showError: true,
                registerFormError: "email không hợp lệ.",
                userEmail: ""
            });
        } else if (!userPassword.match(userPasswordFormate)) {
            this.setState({
                showError: true,
                registerFormError: "Mật khẩu bao gồm chữ hoa, chữ thường và dài hơn 10 ký tự",
                userPassword: "",
            });
        } else if (!userConfirmPassword) {
            this.setState({
                showError: true,
                registerFormError: "Xác nhận mật khẩu không khớp.",
                userConfirmPassword: false,
            });
        } else if (!userCity.match(userCityFormate)) {
            this.setState({
                showError: true,
                registerFormError: "Tên thành phố không hợp lệ.",
                userCity: "",
            });
        } else if (!userCountry.match(userCountryFormate)) {
            this.setState({
                showError: true,
                registerFormError: "Đại chỉ không hợp lệ.",
                userCountry: "",
            });
        } else if (!(userAge > 0 && userAge < 101)) {
            this.setState({
                showError: true,
                registerFormError: "Please enter a valid age.",
                userAge: "",
            });
        } else if (userProfileImage == null) {
            this.setState({
                showError: true,
                registerFormError: "Chọn hình đại diện.",
                userProfileImageLable: "Chọn file ...",
                userProfileImage: "",
            });
        } else if (!userTNC) {
            this.setState({
                userTNC: false,
                showError: true,
                registerFormError: "Chấp nhận điều khoản sử dụng dịch vụ.",
            })
        } else {
            // console.log(userName, userEmail, userPassword, userConfirmPassword, userCity, userCountry, userGender, userAge, userProfileImage, userTNC)
            const userDetails = {
                userName: userName,
                userEmail: userEmail,
                userPassword: userPassword,
                userCity: userCity,
                userCountry: userCountry,
                userGender: userGender,
                userAge: userAge,
                userProfileImage: userProfileImage,
                isRestaurant: true,
                propsHistory: this.props.history,
                typeOfFood: ['Tee', 'Chicken', 'abcxyz']
            }
            try {
                const signUpReturn = await signUp(userDetails)
                // console.log(signUpReturn)
            } catch (error) {
                console.log("Error in Register Restaurant => ",error)
            }
        }
    }

    render() {
        const { showError, registerFormError, userProfileImageLable, userTNC, userGender } = this.state;
        return (
            <div>
                <div className="container-fluid register-cont1">
                    <div className="">
                        {/* <Navbar history={this.props.history} /> */}
                        <Navbar2 history={this.props.history} />
                        <div className="container register-cont1-text">
                            <h1 className="text-uppercase text-white text-center mb-4"><strong>Register User And Add Restaurant</strong></h1>
                        </div>
                    </div>
                </div>
                <div className="container-fluid py-5 bg-light">
                    <div className="col-lg-6 col-md-6 col-sm-12 mx-auto bg-white shadow p-4">
                        <h2 className="text-center mb-4">Register Restaurant</h2>
                        <form action="javascript:void(0)">
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="userFullName">Tên</label>
                                    <input type="text" className="form-control" id="userName" placeholder="Full Name" onKeyUp={(e) => this.handleUserName(e.target.value)} />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="userEmail">Email</label>
                                    <input type="email" className="form-control" id="userEmail" placeholder="Email" onKeyUp={(e) => this.handleUserEmail(e.target.value)} />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="userPassword">Mật khẩu</label>
                                    <input type="password" className="form-control" id="userPassword" placeholder="Password" onKeyUp={(e) => this.handleUserPassword(e.target.value)} />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="userConfirmPassword">Nhập lại mật khẩu</label>
                                    <input type="password" className="form-control" id="userConfirmPassword" placeholder="Password" onKeyUp={(e) => this.handleUserConfirmPassword(e.target.value)} />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="userCity">Thành phố</label>
                                    <input type="text" className="form-control" id="userCity" onKeyUp={(e) => this.handleUserCity(e.target.value)} />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="userCountry">Địa chỉ</label>
                                    <input type="text" className="form-control" id="userCountry" onKeyUp={(e) => this.handleUserCountry(e.target.value)} />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <label htmlFor="userGender">Giới tính</label>
                                    <select id="userGender" className="form-control" value={userGender} onChange={this.handleUserGender}>
                                        <option defaultValue>Nam</option>
                                        <option>Nữ</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-2">
                                    <label htmlFor="userAge">Tuổi</label>
                                    <input type="number" className="form-control" id="userAge" onKeyUp={(e) => this.handleUserAge(e.target.value)} />
                                </div>
                                <div className="form-group col-md-6">
                                    <p className="mb-2">Hình đại diện</p>
                                    <div className="custom-file">
                                        <input type="file" className="custom-file-input" id="userProfileImage" onChange={this.handleUserProfileImage} />
                                        <label className="custom-file-label" htmlFor="userProfileImage">{userProfileImageLable}</label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="userTNC" defaultChecked={userTNC} onChange={this.handleUserTNC} />
                                    <label className="custom-control-label" htmlFor="userTNC">Chấp nhận điều khoản sử dụng dịch vụ</label>
                                </div>
                            </div>
                            <p className="text-danger">{showError ? registerFormError : null}</p>
                            <button type="submit" className="btn btn-warning text-uppercase mb-3" onClick={this.handleCreateAccountBtn}><b>Create an Account</b></button>
                        </form>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}