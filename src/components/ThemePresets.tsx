import { Box, Button, Typography } from "@mui/material";
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
    <Box
      sx={{
        maxWidth: 600,
        margin: "20px auto",
        padding: 2,
        bgcolor: "#fafafa",
        borderRadius: 3,
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
        fontFamily: "'Roboto', sans-serif",
      }}
    >
      <Typography variant="subtitle2" color="text.secondary" mb={1}>
        🎨 Quick Theme Presets:
      </Typography>

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
        {themes.map((theme) => (
          <Button
            key={theme.name}
            onClick={() => applyTheme(theme)}
            variant="outlined"
            size="small"
            sx={{
              backgroundColor: theme.backgroundColor,
              color: theme.textColor,
              borderColor: "#ccc",
              textTransform: "none",
              fontWeight: 600,
              ":hover": {
                bgcolor: theme.backgroundColor,
                filter: "brightness(85%)",
              },
            }}
          >
            {theme.name}
          </Button>
        ))}
      </Box>
    </Box>
  );
}
