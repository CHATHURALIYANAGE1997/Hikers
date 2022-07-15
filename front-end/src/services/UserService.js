import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:3000";
const EMPLOYEE_API_BASE_URL1 = "http://localhost:3000/home";

class UserService {

    homeview(){
        return axios.get(EMPLOYEE_API_BASE_URL1);
    }
}

export default new UserService()