import { create } from 'zustand';
import axios from 'axios';

const useSearchStore = create((set) => ({
	isLoading: false,
	users: [],

	searchUsers: async (text) => {
		set({ isLoading: true });
		const result = await axios.get(
			`https://api.github.com/search/users?q=${text}`
		);
		const {
			data: { items },
		} = result;
		set({ isLoading: false, users: items });
	},
}));

export default useSearchStore;
