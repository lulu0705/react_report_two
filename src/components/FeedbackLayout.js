import { useState } from "react";
import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';
// import asterisks from '../../public/images/asterisks.svg';

// https://bbbootstrap.com/snippets/bootstrap-doctors-appointment-form-30336544
// https://bbbootstrap.com/snippets/payment-form-banner-image-66486588

// https://www.bootdey.com/snippets/view/login-with-overlay-image#html
function FeedbackLayout() {
    return (
        <div className="mt-5 mb-5 d-flex justify-content-center feedback-container">
        <div className=" px-1 py-4 Feedback-card feedback-layout">
        <div className="card-img">
            <img src="images/feedback_image.png" alt="Mobirise" media-simple="true"/>
        </div>
        <form className="Feedback-card-body">

            <h6 className="Feedback-card-title mb-3">
                {/* <span className="required">*</span> */}
                選擇意見回饋分類
            </h6>
            
            <div className="d-flex flex-row"> 
                <label className="radio mr-1"> 
                    <input type="radio" name="add" value="anz" checked /> 
                    <span> 預約評價 </span> 
                </label> 
                
                <label className="radio"> 
                    <input type="radio" name="add" value="add" /> 
                    <span> 平台問題 </span> 
                </label> 
            </div>
            <h6 className="information mt-4">填寫服務評價或平台問題，謝謝您。</h6>
            <div className="row">
                <div className="col-sm-12">
                    <div className="form-group">
                        <input className="form-control" type="text" placeholder="姓名" required /> 
                        </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <div className="form-group">
                        <div className="input-group"> 
                        <input className="form-control" type="text" placeholder="電子郵件" required /> 
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <div className="form-group">
                        <div className="input-group"> 
                        {/* <input className="form-control" type="text" placeholder="Email ID" />  */}
                        <textarea className="form-textarea" name="mytext" rows="6" cols="40"  placeholder="回饋內容" required></textarea>
                        </div>
                    </div>
                </div>
            </div>

            <button className="btn btn-primary btn-block confirm-button">送出</button>
        </form>
        </div>
        </div>
    );
}

export default FeedbackLayout;


