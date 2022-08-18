import React from "react";

const Password = () => {
    return (
        <div>
            <div class="col-12">
                <input type="password" class="form-control" placeholder="Password" />
            </div>
            <br />
            <div class="col-12">
                <input type="password" class="form-control" placeholder=" Confirm Password" />
            </div>
            <br />
            <div class="col-12">
                <div class="mt-1 form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck" />
                    <label class="form-check-label" for="gridCheck">I read and agree to the <a href="url">Terms & Condtions</a></label>
                </div>
            </div>
            <div class="col-6 mt-3 mx-auto text-center ">
                <button type="submit" class="btn btn-primary">Create an account</button>
            </div>
        </div>
    );
}

export default Password;