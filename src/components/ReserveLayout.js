import { useState } from "react";
import { Button, Checkbox, Form, Input,Select, Segmented, DatePickerProps,DatePicker, Space } from 'antd';
import { Link } from 'react-router-dom';

function disabledDate(current) {
    // Can not select days before today and today
    return current && current.valueOf() < Date.now();
}

function ReserveLayout({ product }) {
    const [spend, setSpend] = useState(1);

    return (
        <div className="row justify-content-center ReserveLayout">
        <div className="col-xl-10">
            
            <div className="card border-0">
            <div className="col-lg-8 reserve-header">
                <h1 className="align-center reserve-title">預約系統</h1>
                <p className="align-center reserve-subtitle">
                ＊因應疫情，若該清潔地址於下列情況，FML家事服務保留暫停服務權益：該地址居住/生活者於14日內有出入境、有呼吸道症狀、確診/居家隔離等情事。<br/><br/>
                ＊若為時間或坪數計價者，請填寫下方服務時間、服務坪數估價
                </p>

            </div>
            <div className="card-body p-0">


            {/* ⁛◈▣◊⋚⋛⩊〓⁖ ∷ */}
            <div className="row no-gutters">
                <form>
                    {/* 基本資料 */}
                    <div className="align-center">
                        <h3 className="h4 font-weight-bold">∷ 基本資料 ∷</h3>
                    </div>

                    <span className="reserve-form">
                    <div className="col-lg-5">
                        <div className="left-layout">
                            {/* <div className="mb-5">
                                <h3 className="h4 font-weight-bold text-theme">Login</h3>
                            </div> */}

                            {/* <h6 className="h5 mb-0">Welcome back!</h6>
                            <p className="text-muted mt-2 mb-5">Enter your email address and password to access admin panel.</p> */}

                            
                                <div className="form-group">
                                <span className="required">*</span><label for="exampleInputEmail1">姓名</label>
                                    <input type="text" className="form-control" required />
                                </div>
                                {/* <div className="form-group mb-5">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                </div>
                                <button type="submit" className="btn btn-theme">Login</button>
                                <a href="#l" className="forgot-link float-right text-primary">Forgot password?</a>
                                 */}
                        </div>
                    </div>
                    <div className="col-lg-5 ">
                        <div className="right-layout">
                            {/* <div className="mb-5">
                                <h3 className="h4 font-weight-bold text-theme">Login</h3>
                            </div> */}

                            {/* <h6 className="h5 mb-0">Welcome back!</h6>
                            <p className="text-muted mt-2 mb-5">Enter your email address and password to access admin panel.</p> */}

                            
                                <div className="form-group">
                                <span className="required">*</span><label for="exampleInputEmail1">手機號碼</label>
                                    <input type="email" className="form-control" required/>
                                </div>
                                {/* <div className="form-group mb-5">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                </div>
                                <button type="submit" className="btn btn-theme">Login</button>
                                <a href="#l" className="forgot-link float-right text-primary">Forgot password?</a>
                                */}
                        </div> 
                    </div>
                    </span>


                    <span className="reserve-form">
                    <div className="col-lg-10">
                        <div className="email-layout">
                            {/* <div className="mb-5">
                                <h3 className="h4 font-weight-bold text-theme">Login</h3>
                            </div> */}

                            {/* <h6 className="h5 mb-0">Welcome back!</h6>
                            <p className="text-muted mt-2 mb-5">Enter your email address and password to access admin panel.</p> */}

                            
                                <div className="form-group">
                                <span className="required">*</span><label for="exampleInputEmail1">電子信箱</label>
                                    <input type="email" className="form-control form-control-long" required/>
                                </div>
                                {/* <div className="form-group mb-5">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                </div>
                                <button type="submit" className="btn btn-theme">Login</button>
                                <a href="#l" className="forgot-link float-right text-primary">Forgot password?</a>
                                 */}
                        </div>
                    </div>
                    </span>

                    
                    {/* 預約內容 */}
                    <div className="align-center">
                        <h3 className="h4 font-weight-bold">∷ 預約內容 ∷</h3>
                    </div>

                    <span className="reserve-form">
                    <div className="col-lg-5">
                        <div className="left-layout">
                            {/* <div className="mb-5">
                                <h3 className="h4 font-weight-bold text-theme">Login</h3>
                            </div> */}

                            {/* <h6 className="h5 mb-0">Welcome back!</h6>
                            <p className="text-muted mt-2 mb-5">Enter your email address and password to access admin panel.</p> */}

                            
                                <div className="form-group">
                                <span className="required">*</span><label for="exampleInputEmail1">服務地址</label>
                                    {/* <input type="email" className="form-control" id="exampleInputEmail1" /> */}
                                    <select className="form-select form-control" aria-label="Default select example">
                                        <option selected>請選擇縣市</option>
                                        <option value="1">臺北市</option>
                                        <option value="2">新北市</option>
                                        <option value="3">桃園市</option>
                                        <option value="4">新竹市</option>
                                        <option value="5">高雄市</option>
                                        <option value="6">臺中市</option>
                                    </select>
                                </div>
                                 <div className="form-group label-test">
                                    <label for="exampleInputPassword1">服務類別與項目</label>
                                    <input value={product.category} type="text" className="form-control" readonly />
                                    {/* 室內清潔/居家收納/除蟲除塵蟎/抓漏堵塞/門窗裝修 */}
                                </div>

                                <div className="form-group label-test">
                                    <label for="exampleInputPassword1">服務坪數 (填寫數字)</label>
                                    <input type="text" className="form-control" placeholder="坪" onChange={(e)=>{setSpend(e.target.value)}}/>
                                </div>

                                <div className="form-group label-test total-layout">
                                <span className="required">*</span><label for="exampleInputPassword1">預約日期：</label>
                                    <Space direction="vertical">
                                        <DatePicker onChange={(date) => console.log(date)} disabledDate={disabledDate}/>
                                    </Space>
                                    {/* <input type="text" className="form-control" id="exampleInputEmail1" placeholder="坪"/> */}
                                </div>

                                {/*
                                <button type="submit" className="btn btn-theme">Login</button>
                                <a href="#l" className="forgot-link float-right text-primary">Forgot password?</a>
                                 */}
                        </div>
                    </div>
                    <div className="col-lg-5 ">
                        <div className="right-layout">
                            {/* <div className="mb-5">
                                <h3 className="h4 font-weight-bold text-theme">Login</h3>
                            </div> */}

                            {/* <h6 className="h5 mb-0">Welcome back!</h6>
                            <p className="text-muted mt-2 mb-5">Enter your email address and password to access admin panel.</p> */}

                            
                                <div className="form-group">
                                    <label for="exampleInputEmail1"></label>
                                    <input type="email" className="form-control" placeholder="地址" required/>
                                </div>
                                <div className="form-group label-test">
                                <label for="exampleInputPassword1"><b><u>以{product.hour}計價.ᐟ.ᐟ</u></b></label>
                                    <input value={product.name} type="text" className="form-control" readonly />
                                    {/* 室內清潔/居家收納/除蟲除塵蟎/抓漏堵塞/門窗裝修 */}
                                </div>

                                <div className="form-group label-test">
                                    <label for="exampleInputPassword1">服務時間 (填寫數字)</label>
                                    <input type="text" className="form-control" placeholder="小時" onChange={(e)=>{setSpend(e.target.value)}}/>
                                </div>

                                {/* <div className="form-group label-test">
                                    <label for="exampleInputPassword1"></label>
                                </div> */}

                                <div className="form-group label-test total-layout">
                                    <label for="exampleInputPassword1">估計金額：</label>
                                    <label for="exampleInputPassword1">NT${product.price * spend}元</label>
                                    {/* <input type="text" className="form-control" id="exampleInputEmail1" placeholder="坪"/> */}
                                </div>

                                {/* 
                                <button type="submit" className="btn btn-theme">Login</button>
                                <a href="#l" className="forgot-link float-right text-primary">Forgot password?</a>
                                */}
                        </div> 
                    </div>
                    </span>

                    <span className="reserve-form">
                    <div className="col-lg-10">
                        <div className="center-layout">
                    <Link to="/ResultPage" className="btn btn-primary btn-block confirm-button">送出預約</Link>
                    </div></div></span>
                </form>
            </div>

            </div>
            </div>


            <p className="text-muted text-center mt-3 mb-0"></p>


        </div>
    </div>
    );
}

export default ReserveLayout;


