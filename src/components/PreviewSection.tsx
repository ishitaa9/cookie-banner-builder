import { useState } from "react";
import { Box, Button, Typography, Paper } from "@mui/material";
import { useBannerStore } from "../store/useBannerStore";

export default function PreviewSection() {
  const { config, hasAccepted, setHasAccepted, resetBanner } = useBannerStore();
  const [copied, setCopied] = useState(false);

  const generateCode = () => `
import React from "react";

export default function CookieBanner() {
  return (
    <div style={{
      backgroundColor: "${config.backgroundColor}",
      color: "${config.textColor}",
      padding: "1.5rem",
      borderRadius: "0.75rem",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
    }}>
      <h3 style={{ fontWeight: "600", fontSize: "1.125rem" }}>
        ${config.title}
      </h3>
      <p style={{ fontSize: "0.875rem", marginTop: "0.5rem" }}>
        ${config.description}
      </p>
      <div style={{ marginTop: "1rem", display: "flex", gap: "0.5rem" }}>
        <button style={{
          backgroundColor: "#10B981",
          color: "white",
          padding: "0.5rem 1rem",
          borderRadius: "0.5rem",
          fontSize: "0.875rem",
          border: "none"
        }}>
          ${config.acceptText}
        </button>
        <button style={{
          backgroundColor: "#D1D5DB",
          color: "#1F2937",
          padding: "0.5rem 1rem",
          borderRadius: "0.5rem",
          fontSize: "0.875rem",
          border: "none"
        }}>
          ${config.declineText}
        </button>
      </div>
    </div>
  );
}
`.trim();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generateCode());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 600,
        margin: "2rem auto",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        fontFamily: "'Roboto', sans-serif",
      }}
    >
      {/* Preview Box */}
      <Paper
        elevation={3}
        sx={{
          backgroundColor: config.backgroundColor,
          color: config.textColor,
          p: 3,
          borderRadius: 2,
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          userSelect: "none",
        }}
      >
        <Typography variant="h6" fontWeight={600}>
          {config.title}
        </Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          {config.description}
        </Typography>

        <Box sx={{ mt: 2, display: "flex", gap: 1, justifyContent: "flex-end" }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#10B981",
              "&:hover": { backgroundColor: "#0f9e6e" },
              color: "white",
              textTransform: "none",
              fontSize: "0.875rem",
              borderRadius: "0.5rem",
              px: 2,
            }}
            onClick={() => setHasAccepted(true)}
          >
            {config.acceptText}
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#D1D5DB",
              "&:hover": { backgroundColor: "#c4c9cd" },
              color: "#1F2937",
              textTransform: "none",
              fontSize: "0.875rem",
              borderRadius: "0.5rem",
              px: 2,
            }}
            onClick={() => setHasAccepted(false)}
          >
            {config.declineText}
          </Button>
        </Box>

        {/* Acceptance status message */}
        {hasAccepted !== null && (
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mt: 3, fontStyle: "italic", textAlign: "center" }}
          >
            {hasAccepted
              ? "✅ User has accepted cookies."
              : "❌ User has declined cookies."}
          </Typography>
        )}
      </Paper>

      {/* Buttons below preview */}
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
        <Button
          onClick={handleCopy}
          variant="contained"
          color="primary"
          size="medium"
          sx={{
            px: 4,
            py: 1.5,
            textTransform: "none",
            fontWeight: 600,
          }}
        >
          📋 {copied ? "Copied!" : "Copy JSX Code"}
        </Button>

        <Button
          onClick={resetBanner}
          variant="text"
          size="small"
          sx={{
            fontSize: "0.875rem",
            color: "text.secondary",
            ":hover": { textDecoration: "underline" },
            textTransform: "none",
            alignSelf: "center",
          }}
        >
          🔄 Reset Preview
        </Button>
      </Box>
    </Box>
  );
}
