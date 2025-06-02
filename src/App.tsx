// import React from "react";
import Layout from "./components/Layout";
import ConfigForm from "./components/ConfigForm";
import ThemePresets from "./components/ThemePresets";

export default function App() {
  return (
    <Layout>
      <ConfigForm />
      <ThemePresets />
    </Layout>
  );
}
