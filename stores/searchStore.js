import { create } from 'zustand';
import axios from 'axios';

const useSearchStore = create((set, get) => ({
	isLoading: false,
	searchText: '',
	users: [],

	searchUsers: async (searchText = get().searchText) => {
		set({ isLoading: true });
		const result = await axios.get(
			`https://api.github.com/search/users?q=${searchText}`
		);
		const {
			data: { items },
		} = result;
		set({ isLoading: false, users: items });
	},
	setSearchText: (searchText) => set({ searchText }),
}));

export default useSearchStore;
