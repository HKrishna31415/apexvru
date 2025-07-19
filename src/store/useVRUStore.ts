import { create } from 'zustand';
import { Part } from '../components/Technology/types';

export interface VRUStoreState {
  selectedPart: Part | null;
  isSidebarOpen: boolean;
  cameraFocus: [number, number, number];
  cameraPosition: [number, number, number];
  isXRayMode: boolean;
}

interface VRUStoreActions {
  toggleSidebar: () => void;
  openSidebar: () => void;
  closeSidebar: () => void;
  selectPart: (part: Part) => void;
  setCameraFocus: (focus: [number, number, number]) => void;
  setCameraPosition: (position: [number, number, number]) => void;
  toggleXRayMode: () => void;
}

export const useVRUStore = create<VRUStoreState & VRUStoreActions>((set) => ({
  selectedPart: null,
  isSidebarOpen: false,
  cameraFocus: [0, 0, 0],
  cameraPosition: [0, 2, 8],
  isXRayMode: true,

  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  openSidebar: () => set({ isSidebarOpen: true }),
  closeSidebar: () => set({
    isSidebarOpen: false,
    selectedPart: null,
    cameraFocus: [0, 0, 0],
    cameraPosition: [0, 2, 8]
  }),
  selectPart: (part: Part) => set((state) => {
    const cameraPosition: [number, number, number] = part.focusPoint
      ? [part.focusPoint[0], part.focusPoint[1] + 1, part.focusPoint[2] + 4]
      : state.cameraPosition;

    return {
      selectedPart: part,
      isSidebarOpen: true,
      cameraFocus: part.focusPoint || state.cameraFocus,
      cameraPosition,
    };
  }),
  setCameraFocus: (focus: [number, number, number]) => set((state) => {
    if (state.cameraFocus[0] === focus[0] && state.cameraFocus[1] === focus[1] && state.cameraFocus[2] === focus[2]) {
      return {};
    }
    return { cameraFocus: focus };
  }),
  setCameraPosition: (position: [number, number, number]) => set((state) => {
    if (state.cameraPosition[0] === position[0] && state.cameraPosition[1] === position[1] && state.cameraPosition[2] === position[2]) {
      return {};
    }
    return { cameraPosition: position };
  }),
  toggleXRayMode: () => set((state) => ({ isXRayMode: !state.isXRayMode }))
}));