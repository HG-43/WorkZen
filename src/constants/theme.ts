export type ThemeType = 'light' | 'dark';

export const themes = {
  light: {
    colors: {
      primary: "#4F46E5",      // indigo
      secondary: "#0F172A",    // dark slate
      bg: "#F8FAFC",           // light gray background
      card: "#FFFFFF",         // white card
      text: "#0F172A",         // dark text
      textSecondary: "#64748B", // muted text
      border: "#E2E8F0",       // light border
      hover: "#F1F5F9",        // hover background
      success: "#10B981",
      warning: "#F59E0B",
      danger: "#EF4444",
      info: "#06B6D4"
    }
  },
  dark: {
    colors: {
      primary: "#6366F1",      // indigo (lighter for dark mode)
      secondary: "#F8FAFC",    // light slate
      bg: "#0F172A",           // dark background
      card: "#1E293B",         // dark card
      text: "#F8FAFC",         // light text
      textSecondary: "#94A3B8", // muted text
      border: "#334155",       // dark border
      hover: "#1E293B",        // hover background
      success: "#34D399",
      warning: "#FBBF24",
      danger: "#F87171",
      info: "#22D3EE"
    }
  }
};

export const theme = themes.light; // default export for backward compatibility