//functions deal with api
// import { config_url } from "../config"
// import axios from "axios"
import { apiClient } from "./api-client"
export async function sendDataToRegester(values) {
    try {
          const options= {
          method: 'post',
          url: `/auth/signup`,
          data: {
            name: values.name,
            email:values.email,
            phone:values.phone,
            password:values.password,
            rePassword:values.rePassword,
          }
        }
        const response = await apiClient.request(options)
        console.log(response)  
        return response      
    } catch (error) {
         console.log(error);
        throw error;
    };


}

export async function sendDataToLogin(values) {
    try {
      const options= {
      method: 'post',
      url: '/auth/signin',
      data: {
      email:values.email,
      password:values.password,
      }
    }
    const response = await apiClient.request(options)
    console.log(response)
    return response;

    } catch (error) {
        console.log(error)
        throw error
    }
}

export async function sendDataToForgetPassword(values) {
    try {
      const options= {
      method: 'post',
      url: '/auth/forgotPasswords',
      data: {
      email:values.email,
      }
    }
    const response = await apiClient.request(options)
    console.log(response)
    return response;

    } catch (error) {
        console.log(error)
        throw error
    }
}

export async function sendDataToVerifyCode(values) {
    try {
      const options= {
      method: 'post',
      url: '/auth/verifyResetCode',
      data: {
      resetCode:values.resetCode,
      }
    }
    const response = await apiClient.request(options)
    console.log(response)
    return response;

    } catch (error) {
        console.log(error)
        throw error
    }
}
export async function sendDataToResetPassword(values) {
    try {
      const options= {
      method: 'PUT',
      url: '/auth/resetPassword',
      data: {
      email:values.email,
      newPassword:values.newPassword,

      }
    }
    const response = await apiClient.request(options)
    console.log(response)
    return response;

    } catch (error) {
        console.log(error)
        throw error
    }
}