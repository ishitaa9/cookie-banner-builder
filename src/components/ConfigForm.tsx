import React from "react";
import { Box, TextField, Typography, InputLabel } from "@mui/material";
import { useBannerStore } from "../store/useBannerStore";

export default function ConfigForm() {
  const { config, setConfig } = useBannerStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setConfig({ [name]: value });
  };

  return (
    <Box
      sx={{
        maxWidth: 600,
        margin: "40px auto",
        backgroundColor: "#fafafa",
        padding: 4,
        borderRadius: 3,
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        display: "flex",
        flexDirection: "column",
        gap: 3,
        fontFamily: "'Roboto', sans-serif",
      }}
    >
      <Typography variant="h4" fontWeight={700} color="#222">
        Customize Cookie Banner
      </Typography>

      <TextField
        label="Title"
        name="title"
        value={config.title}
        onChange={handleChange}
        fullWidth
        variant="outlined"
        size="medium"
      />

      <TextField
        label="Description"
        name="description"
        value={config.description}
        onChange={handleChange}
        multiline
        rows={4}
        fullWidth
        variant="outlined"
        size="medium"
      />

      <TextField
        label="Accept Button Text"
        name="acceptText"
        value={config.acceptText}
        onChange={handleChange}
        fullWidth
        variant="outlined"
        size="medium"
      />

      <TextField
        label="Decline Button Text"
        name="declineText"
        value={config.declineText}
        onChange={handleChange}
        fullWidth
        variant="outlined"
        size="medium"
      />

      <Box display="flex" gap={2} mt={2}>
        <Box flex={1}>
          <InputLabel shrink sx={{ color: "#555", fontWeight: 600, mb: 1 }}>
            Background Color
          </InputLabel>
          <input
            type="color"
            name="backgroundColor"
            value={config.backgroundColor}
            onChange={handleChange}
            style={{
              width: "100%",
              height: 40,
              borderRadius: 6,
              border: "1px solid #ccc",
              cursor: "pointer",
            }}
          />
        </Box>

        <Box flex={1}>
          <InputLabel shrink sx={{ color: "#555", fontWeight: 600, mb: 1 }}>
            Text Color
          </InputLabel>
          <input
            type="color"
            name="textColor"
            value={config.textColor}
            onChange={handleChange}
            style={{
              width: "100%",
              height: 40,
              borderRadius: 6,
              border: "1px solid #ccc",
              cursor: "pointer",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
