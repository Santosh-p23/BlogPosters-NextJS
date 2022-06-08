import axios from 'axios';

const register = async (user) => {

    const response = await axios.post('http://localhost:5000/api/users/', user);
    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
}

const login = async (user) => {
    const response = await axios.post('http://localhost:5000/api/users/login/', user);
    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
}

const logout = async()=>{
    localStorage.removeItem('user')
}

const authService = { 
    register,
    login,
    logout
}

export default authService; 