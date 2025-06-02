import { useState } from "react";
import { useBannerStore } from "../store/useBannerStore";

export default function ExportCode() {
  const { config, resetBanner } = useBannerStore();
  const [copied, setCopied] = useState(false);

  const generateCode = () => {
    return `
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
  };

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
    <div className="mt-8 text-center">
      <button
        onClick={handleCopy}
        className="px-6 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition"
      >
        📋 {copied ? "Copied!" : "Copy JSX Code"}
      </button>
      <div className="mt-4">
        <button
          onClick={resetBanner}
          className="text-xs text-gray-500 hover:underline"
        >
          🔄 Reset Preview
        </button>
      </div>
    </div>
  );
}
