import axiosClient from "./axiosClient";

const recruiterApi = {
  getCity() {
    const url = `/api/Recruitment/GetCity`;
    return axiosClient.get(url);
  },
  createRecruitment(data) {
    const url = "/api/Recruitment/CreateNewRecruitment";
    return axiosClient.post(url, data);
  },
  getRecruiterProfileDetail(id) {
    const url = `/api/Recruiter/profileRecruiter/${id}`;
    return axiosClient.get(url);
  },
  updateRecruiterInfomartion(id, data) {
    const url = `/api/Recruiter/updateInformationRecruiter/${id}`;
    return axiosClient.put(url, data);
  },
  updateOverall(id, data) {
    const url = `/api/Recruiter/updateOverall/${id}`;
    return axiosClient.put(url, data);
  },
  updateProfile(id, data) {
    const url = `/api/Recruiter/updateProfile/${id}`;
    return axiosClient.put(url, data);
  },
};

export default recruiterApi;
