import axiosClient from './axiosClient';

const searchApi = {
	async searchRecruitment(params) {
		const recruitmentSearch = await axiosClient.get(
			'/auth/Search/search/recruitment',
			{
				params,
			}
		);

		return {
			items: recruitmentSearch.data.data,
			optionFilter: recruitmentSearch.data.facets,
			pagination: {
				page: params['data.pageIndex'],
				limit: params['data.pageSize'],
				total: recruitmentSearch.data.totalCount,
			},
		};
	},
	async searchCandidate(params) {
		const candidateSearch = await axiosClient.get(
			'/auth/Search/search/student',
			{
				params,
			}
		);

		return {
			items: candidateSearch.data.data.items,
			pagination: {
				page: params['data.pageIndex'],
				limit: params['data.pageSize'],
				total: candidateSearch.data.data.totalCount,
			},
		};
	},
};

export default searchApi;
