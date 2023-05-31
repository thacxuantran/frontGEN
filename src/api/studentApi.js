import axiosClient from "./axiosClient";

const studentApi = {
  getRecruitmentInDetail(id) {
    const url = `/api/Recruitment/RecruitmentInDetailForStudent/${id}`;
    return axiosClient.get(url);
  },
  getRecruitmentInDetailNoState(id) {
    const url = `/api/Recruitment/RecruitmentInDetailForStudentNoState/${id}`;
    return axiosClient.get(url);
  },
  getRecruiterProfileDetail(id) {
    const url = `/api/Recruiter/profileRecruiter/${id}`;
    return axiosClient.get(url);
  },
  getListRecruitmentForAuthor(id, limit, page) {
    const url = `/api/Recruitment/${id}/ListAvailableRecruitmentForAuthor?PageIndex=${limit}&PageSize=${page}`;
    return axiosClient.get(url);
  },
  getSimilarRecruitmentsForStudent(index, size) {
    const url = `/api/Recruitment/GetAllRecruitmentPaging?PageIndex=${index}&PageSize=${size}`;
    return axiosClient.get(url);
  },
  getRecruitmentInDetailForAuthor(authorId, recruitmentId) {
    const url = `/api/Recruitment/RecruitmentInDetailForAuthor/${authorId}/${recruitmentId}`;
    return axiosClient.get(url);
  },
  getRecruitmentInDetailForUpdate(authorId, recruitmentId) {
    const url = `/api/Recruitment/RecruitmentInDetailForUpdate/${authorId}/${recruitmentId}`;
    return axiosClient.get(url);
  },
  async getAppliedRecruitment(studentId, index, size) {
    const url = `api/Student/viewAppliedRecruitment/${studentId}?PageIndex=${index}&PageSize=${size}`;
    return await axiosClient.get(url);
  },
  async getSavedRecruitment(studentId, index, size) {
    const url = `api/Student/viewSavedRecruitment/${studentId}?PageIndex=${index}&PageSize=${size}`;
    return await axiosClient.get(url);
  },
  checkSubcription(studentId, recruiterId) {
    const url = `api/Subscription/isSubscribe?S_ProfileID=${studentId}&R_ProfileID=${recruiterId}`;
    return axiosClient.get(url);
  },
  getListCandidate(recruitmentId, index, size) {
    const url = `api/Recruitment/ListCandidates/${recruitmentId}?PageIndex=${index}&PageSize=${size}`;
    return axiosClient.get(url);
  },
  async getFollowedCompany(studentId, index, size) {
    const url = `api/Student/viewSubcribedCompany/${studentId}?PageIndex=${index}&PageSize=${size}`;
    return await axiosClient.get(url);
  },
  async savedRercruitment(data) {
    const url = `api/Application/saveRercruitment`;
    return await axiosClient.post(url, data);
  },
  async unSavedRercruitment(data) {
    const url = `api/Application/unSaveRercruitment`;
    return await axiosClient.post(url, data);
  },
  async applyRercruitment(data) {
    const url = `api/Application/apply`;
    return await axiosClient.post(url, data);
  },

  async cancelApplyRecruitment(data) {
    const url = `api/Application/cancel`;
    return await axiosClient.post(url, data);
  },

  subscribeRecruiter(data) {
    const url = `api/Subscription/subscribe`;
    return axiosClient.post(url, data);
  },
  unsubscribeRecruiter(S_ProfileID, R_ProfileID) {
    const url = `api/Subscription/unsubscribe?S_ProfileID=${S_ProfileID}&R_ProfileID=${R_ProfileID}`;
    return axiosClient.delete(url);
  },

  async unSubRercruiter(s_id, r_id) {
    const url = `api/Subscription/unsubscribe?S_ProfileID=${s_id}&R_ProfileID=${r_id}`;
    return await axiosClient.delete(url);
  },
  getDetailStudent(s_id) {
    const url = `api/Application/viewCandidate?S_ProfileID=${s_id}`;
    return axiosClient.get(url);
  },
  async getAllRecruitmentPaging(params) {
    // Fetch product list + count
    const recruitmentList = await axiosClient.get(
      "/api/Recruitment/GetAllRecruitmentPaging",
      {
        params,
      }
    );

    return {
      items: recruitmentList.data.items,
      pagination: {
        page: params.PageIndex,
        limit: params.PageSize,
        total: recruitmentList.data.totalCount,
      },
    };
  },
  async getRecruitmentStudentApplied(sId, params) {
    const recruitmentApplied = await axiosClient.get(
      `/api/Student/viewAppliedRecruitment/${sId}`,
      {
        params,
      }
    );
    return {
      items: recruitmentApplied.data.items,
      pagination: {
        page: params.PageIndex,
        limit: params.PageSize,
        total: recruitmentApplied.data.totalCount,
      },
    };
  },
  closeRecruitment(recruitmentId) {
    const url = `/api/Recruitment/CloseRecruitment/${recruitmentId}`;
    return axiosClient.put(url);
  },
  async updatePersonalInformation(data) {
    const url = `api/Student/UpdatePersonalInfo`;
    return await axiosClient.post(url, data);
  },
  async updateOverview(data) {
    const url = `api/Student/UpdateOverview`;
    return await axiosClient.put(url, data);
  },
  async createExperience(data) {
    const url = `api/Student/CreateExperience`;
    return await axiosClient.post(url, data);
  },
  async updateExperience(data) {
    const url = `api/Student/UpdateExperience`;
    return await axiosClient.put(url, data);
  },
  async createEducation(data) {
    const url = `api/Student/CreateEducation`;
    return await axiosClient.post(url, data);
  },
  async updateEducation(data) {
    const url = `api/Student/UpdateEducation`;
    return await axiosClient.put(url, data);
  },
  async createCertificate(data) {
    const url = `api/Student/CreateCertificate`;
    return await axiosClient.post(url, data);
  },
  async updateCertificate(data) {
    const url = `api/Student/UpdateCertificate`;
    return await axiosClient.put(url, data);
  },
  async updateStatus(data) {
    const url = `api/Student/UpdateStatusOpenJob`;
    return await axiosClient.put(url, data);
  },
  async createSkills(data) {
    const url = `api/Student/CreateSkillList`;
    return await axiosClient.post(url, data);
  },
  async createLanguages(data) {
    const url = `api/Student/CreateLanguageList`;
    return await axiosClient.post(url, data);
  },
  deleteRecruitment(recruitmentId) {
    const url = `/api/Recruitment/DeleteRecruitment/${recruitmentId}`;
    return axiosClient.delete(url);
  },
  getAvailableRecruitmentForInviting(authorId, studentId) {
    const url = `/api/Recruitment/GetAvailableRecruitmentToInvite/${authorId}/${studentId}`;
    return axiosClient.get(url);
  },
  inviteStudentToRecruitment(S_profileID, Recruitment_ID) {
    const url = `/api/Application/InviteStudentToRecruitment?S_profileID=${S_profileID}&Recruitment_ID=${Recruitment_ID}`;
    return axiosClient.put(url);
  },
  deleteEducation(studentId, edu_id) {
    const url = `/api/Student/DeleteEducation?studentId=${studentId}&educationId=${edu_id}`;
    return axiosClient.delete(url);
  },
  deleteExperience(studentId, ex_id) {
    const url = `/api/Student/DeleteExperience?studentId=${studentId}&experienceId=${ex_id}`;
    return axiosClient.delete(url);
  },
  deleteCertificate(studentId, cert_id) {
    const url = `/api/Student/DeleteCertificate?studentId=${studentId}&certId=${cert_id}`;
    return axiosClient.delete(url);
  },
  getStudentProfileDetail(id) {
    const url = `/api/Student/InfomationStudentProfile/${id}`;
    return axiosClient.get(url);
  },
  uploadCV(data) {
    const url = `/api/Student/uploadresume`;
    return axiosClient.post(url, data);
  },
  uploadProfile(data, id) {
    const url = `/api/Student/updateStudentProfile/${id}`;
    return axiosClient.put(url, data);
  },
  checkConditionBeforeCreating(role, authorId) {
    const url = `/api/Recruitment/CheckConditionBeforeCreateRecruitment?role=${role}&authorId=${authorId}`;
    return axiosClient.get(url);
  },
  sendEmail(data) {
    const url = `/Mail/send`;
    return axiosClient.post(url, data);
  },
  deleteCV(id, studentId) {
    const url = `/api/Student/deleteresume?id=${id}&studentId=${studentId}`
    return axiosClient.delete(url);
  }
};

export default studentApi;
