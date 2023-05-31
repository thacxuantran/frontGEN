import axiosClient from "./axiosClient";

const adminApi = {
  getListVerificationRequest(index, size) {
    const url = `/api/Admin/GetAllCompanyVerificationRequest?PageIndex=${index}&PageSize=${size}`;
    return axiosClient.get(url);
  },
  approveVerificationRequest(recruiterId) {
    const url = `/api/Admin/ApproveCompanyVerificationRequest/${recruiterId}`;
    return axiosClient.put(url);
  },
  rejectVerificationRequest(recruiterId) {
    const url = `/api/Admin/RejectCompanyVerificationRequest/${recruiterId}`;
    return axiosClient.put(url);
  },
};

export default adminApi;
