import {create} from 'zustand';

export const useDrawer = create<{
  open: boolean;
  setOpen: (shouldOpen: boolean) => void;
  toggle: () => void;
}>(set => ({
  open: true,
  setOpen: (shouldOpen: boolean) => set({open: shouldOpen}),
  toggle: () => set(state => ({open: !state.open})),
}));
