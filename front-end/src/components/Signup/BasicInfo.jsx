import React from "react";

const BasicInfo = () => {
    return (
        <div class="signupform-box  row g-3">
          
            <div class="col-md-6">
                <input type="text" class="form-control" placeholder="First name" aria-label="First name" />
            </div>
            <div class="col-md-6">
                <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" />
            </div>
            <div class="col-12">
                <input type="email" class="form-control" placeholder="Email-Address" />
            </div>
            <div class="col-12">
                <input type="text" class="form-control" placeholder="NIC Number / Passport Number" />
            </div>
        </div>
    );
}

export default BasicInfo;