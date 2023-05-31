import axiosClient from "./axiosClient";

const userApi = {
  signup(data) {
    const url = "/auth/account/register";
    return axiosClient.post(url, data);
  },
  login(data) {
    const url = "/auth/account/login";
    return axiosClient.post(url, data);
  },
  loginGoogle(data) {
    const url = "/auth/account/googlelogin";
    return axiosClient.post(url, data);
  },
  confirmEmail(token, userId) {
    const url = `/auth/account/confirmemail?token=${token}&userId=${userId}`;
    return axiosClient.get(url);
  },
  forgotPassword(data) {
    const url = "/auth/account/forgotpassword";
    return axiosClient.post(url, data);
  },
  resetPassword(token, userId, newPassword) {
    const url = `/auth/account/resetpass?token=${token}&userId=${userId}&newPassword=${newPassword}`;
    return axiosClient.get(url);
  },
  getAccount(accountId) {
    const url = `/auth/account/getAccount?accountId=${accountId}`;
    return axiosClient.get(url);
  },
  changePassword(data) {
    const url = `/auth/account/ChangePass`;
    return axiosClient.put(url, data);
  },
};

export default userApi;
