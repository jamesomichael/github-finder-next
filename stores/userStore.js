import { create } from 'zustand';
import axios from 'axios';

const useUserStore = create((set) => ({
	isLoading: false,
	user: {},
	repos: [],

	setActiveUser: async (username) => {
		set({ isLoading: true, repos: [] });
		const userResponse = await axios.get(
			`https://api.github.com/users/${username}`
		);
		const { data: userData } = userResponse;
		const reposResponse = await axios.get(
			`https://api.github.com/users/${username}/repos?per_page=30&sort=updated:asc`
		);
		const { data: reposData } = reposResponse;
		set({ isLoading: false, user: userData, repos: reposData });
	},
}));

export default useUserStore;
