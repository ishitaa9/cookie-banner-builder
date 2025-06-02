import { create } from "zustand";

export type BannerState = {
  config: {
    title: string;
    description: string;
    acceptText: string;
    declineText: string;
    backgroundColor: string;
    textColor: string;
  };
  hasAccepted: boolean | null; // null = not decided, true/false = decision made
  setConfig: (newConfig: Partial<BannerState["config"]>) => void;
  setHasAccepted: (value: boolean) => void;
  resetBanner: () => void;
};

// 🆕 Include the new state and actions
export const useBannerStore = create<BannerState>((set) => ({
  config: {
    title: "We use cookies 🍪",
    description: "This website uses cookies to enhance the user experience.",
    acceptText: "Accept",
    declineText: "Decline",
    backgroundColor: "#ffffff",
    textColor: "#000000",
  },
  hasAccepted: null,
  setConfig: (newConfig) =>
    set((state) => ({
      config: { ...state.config, ...newConfig },
    })),
  setHasAccepted: (value) => set(() => ({ hasAccepted: value })),
  resetBanner: () =>
    set(() => ({
      hasAccepted: null,
    })),
}));