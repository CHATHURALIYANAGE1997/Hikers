import * as React from 'react';
import './hotelpayments.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const PaymentHistory = () => {

    return (
        <div className="d-flex flex-column details-address pt-3">
            <div className="d-flex flex-row">
                <div className="input-group w-75 justify-content-center mb-3 ml-auto mr-auto">
                    <div className="form-outline w-75 mr-auto ml-auto">
                        <input type="search" id="form1" className="form-control history-input" placeholder="Search" />
                    </div>
                    <button type="button" className="btn btn-primary history-search-btn">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Visitor</th>
                        <th scope="col">Crowd</th>
                        <th scope="col">Room type</th>
                        <th scope="col">Payment</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">12th April 2022</th>
                        <td>Mr. Saman Kumara</td>
                        <td>
                            <div>Adults : 02</div>
                            <div>Child : 02</div>
                        </td>
                        <td>Double room x 02</td>
                        <td>LKR 10, 000</td>
                    </tr>
                    <tr>
                        <th scope="row">15th May 2022</th>
                        <td>Mr. Janitha Keshan</td>
                        <td>
                            <div>Adults : 04</div>
                            <div>Child : 03</div>
                        </td>
                        <td>
                            <div>Double room x 02</div>
                            <div>Single room x 03</div>
                            </td>
                        <td>LKR 26, 200</td>
                    </tr>
                    <tr>
                        <th scope="row">18th June 2022</th>
                        <td>Mr. Chathura Liyanage</td>
                        <td>
                            <div>Adults : 02</div>
                            <div>Child : 02</div>
                        </td>
                        <td>Double room</td>
                        <td>LKR 10, 000</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default PaymentHistory;