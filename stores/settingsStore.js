import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useSettingsStore = create(
	persist(
		(set) => ({
			darkMode: true,
			setDarkMode: (darkMode) => set({ darkMode }),
		}),
		{
			name: 'github-finder-settings',
		}
	)
);

export default useSettingsStore;
