import { useBannerStore } from "../store/useBannerStore";

const themes = [
  {
    name: "Light",
    backgroundColor: "#ffffff",
    textColor: "#000000",
  },
  {
    name: "Dark",
    backgroundColor: "#1f2937",
    textColor: "#f9fafb",
  },
  {
    name: "Ocean",
    backgroundColor: "#0ea5e9",
    textColor: "#ffffff",
  },
  {
    name: "Warning",
    backgroundColor: "#bb2124",
    textColor: "#000000",
  },
];

export default function ThemePresets() {
  const { setConfig } = useBannerStore();

  const applyTheme = (theme: typeof themes[number]) => {
    setConfig({
      backgroundColor: theme.backgroundColor,
      textColor: theme.textColor,
    });
  };

  return (
    <div className="mt-4 space-y-2">
      <p className="text-sm text-gray-600">🎨 Quick Theme Presets:</p>
      <div className="flex flex-wrap gap-2">
        {themes.map((theme) => (
          <button
            key={theme.name}
            onClick={() => applyTheme(theme)}
            className="px-3 py-1 text-xs rounded border hover:bg-gray-100"
            style={{
              backgroundColor: theme.backgroundColor,
              color: theme.textColor,
              borderColor: "#ccc",
            }}
          >
            {theme.name}
          </button>
        ))}
      </div>
    </div>
  );
}
