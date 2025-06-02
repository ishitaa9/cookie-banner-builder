import React from "react";
import PreviewSection from "./PreviewSection";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row">
      <aside className="w-full lg:w-1/3 p-6 bg-white border-r border-gray-200 shadow-md">
        {/* <h2 className="text-xl font-semibold mb-4">Settings</h2> */}
        {children}
      </aside>

      <main className="w-full lg:w-2/3 p-6 flex items-center justify-center">
        <div className="w-full max-w-xl" id="preview-area">
          <p className="text-gray-400 italic text-sm text-center">
            <PreviewSection />
          </p>
        </div>
      </main>
    </div>
  );
}
