import { create } from 'zustand';
import axios from 'axios';

const useUserStore = create((set) => ({
	isLoading: false,
	user: null,

	setActiveUser: async (username) => {
		set({ isLoading: true });
		const result = await axios.get(
			`https://api.github.com/users/${username}`
		);
		const { data } = result;
		set({ isLoading: false, user: data });
	},
}));

export default useUserStore;
