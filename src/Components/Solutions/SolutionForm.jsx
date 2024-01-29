import React from 'react';
import Country from '../../Requests/Country';

export default function SolutionForm() {
    return (
        <form action="">
            <div className='solution-cols'>
                <label htmlFor="firstName">First Name<b>*</b></label>
                <input type="text" id="firstName" />
            </div>
            <div className='solution-cols'>
                <label htmlFor="lastName">Last Name<b>*</b></label>
                <input type="text" id="lastName" />
            </div>
            <div className='solution-cols'>
                <label htmlFor="email">Email<b>*</b></label>
                <input type="email" id="email" />
            </div>
            <div className='solution-cols'>
                <label htmlFor="phoneNumber">Phone Number<b>*</b></label>
                <input type="text" id="phoneNumber" />
            </div>
            <div className='solution-cols'>
                <label htmlFor="companyName">Company Name<b>*</b></label>
                <input type="text" id="companyName" />
            </div>
            <div className='solution-cols'>
                <label htmlFor="country">Country<b>*</b></label>
                <Country />
            </div>
            <div className="solution-cols">
                <label htmlFor="">Type of Certificates<b>*</b></label>
                <ul>
                    <li role='checkbox'>
                        <input type="checkbox" id="publicSslTls" />
                        <label htmlFor="publicSslTls">Public SSL/TLS</label>
                    </li>
                    <li role='checkbox'>
                        <input type="checkbox" id="privateCA" />
                        <label htmlFor="privateCA">Private CA</label>
                    </li>
                    <li role='checkbox'>
                        <input type="checkbox" id="codeSigning" />
                        <label htmlFor="codeSigning">Code Signing</label>
                    </li>
                    <li role='checkbox'>
                        <input type="checkbox" id="emailDoc" />
                        <label htmlFor="emailDoc">Email & Doc Signing</label>
                    </li>
                    <li role='checkbox'>
                        <input type="checkbox" id="microsoftCa" />
                        <label htmlFor="microsoftCa">Microsoft CA</label>
                    </li>
                    <li role='checkbox'>
                        <input type="checkbox" id="iotDevice" />
                        <label htmlFor="iotDevice">IoT & Device</label>
                    </li>
                    <li role='checkbox'>
                        <input type="checkbox" id="matterIot" />
                        <label htmlFor="matterIot">Matter IoT</label>
                    </li>
                    <li role='checkbox'>
                        <input type="checkbox" id="matterIot" />
                        <label htmlFor="matterIot">Client</label>
                    </li>
                </ul>
            </div>
            <div className="solution-cols">
                <label htmlFor="numCertificate"></label>
                <select name="Number certificate" id="numCertificate">
                    <option value="">Please Select</option>
                    <option value="">{'<10'}</option>
                    <option value="">10 to 99</option>
                    <option value="">100 to 999</option>
                    <option value="">1000 to 9999</option>
                    <option value="">10000 +</option>
                </select>
            </div>
            <div className="solution-cols">
                <label htmlFor="helpCenter">How can We Help You?<b>*</b></label>
                <textarea name="Help Center" id="helpCenter"></textarea>
            </div>
            <button className='solution-submit' type='submit'>Submit</button>
        </form>
    );
}
