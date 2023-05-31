import axiosClient from "./axiosClient";

const recruitmentApi = {
  async getAvailableJob(profileId, params) {
    const availableJob = await axiosClient.get(
      `/api/Recruitment/${profileId}/ListAvailableRecruitmentForAuthor`,
      {
        params,
      }
    );

    return {
      items: availableJob.data.items,
      pagination: {
        page: params.PageIndex,
        limit: params.PageSize,
        total: availableJob.data.totalCount,
      },
    };
  },
  async getClosedJob(profileId, params) {
    const closedJob = await axiosClient.get(
      `/api/Recruitment/${profileId}/ListClosedRecruitmentForAuthor`,
      {
        params,
      }
    );

    return {
      items: closedJob.data.items,
      pagination: {
        page: params.PageIndex,
        limit: params.PageSize,
        total: closedJob.data.totalCount,
      },
    };
  },
  async getApplicants(profileId) {
    const number = await axiosClient.get(
      `/api/Recruitment/GetNumberOfApplicants/${profileId}`
    );

    return number;
  },
  async updateRecruitment(recruitmentId, data) {
    const url = `/api/Recruitment/UpdateRecruitment/${recruitmentId}`;
    return axiosClient.put(url, data);
  },
};

export default recruitmentApi;
