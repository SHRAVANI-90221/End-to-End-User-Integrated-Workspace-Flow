"use client";

import { useState } from "react";

export default function Home() {
  const [selectedFolder, setSelectedFolder] = useState("All Documents");

  const folders = [
    "All Documents",
    "Agreements",
    "Compliance",
    "Reports",
    "Disclosures",
  ];

  const documents = [
    {
      name: "Master Service Agreement.pdf",
      type: "PDF",
      permission: "Confidential",
      date: "Sep 28, 2026",
    },
    {
      name: "Compliance Report.pdf",
      type: "PDF",
      permission: "Restricted",
      date: "Sep 26, 2026",
    },
    {
      name: "Financial Report.pdf",
      type: "PDF",
      permission: "Internal Only",
      date: "Sep 24, 2026",
    },
    {
      name: "Company Disclosure.pdf",
      type: "PDF",
      permission: "Public",
      date: "Sep 20, 2026",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      {/* Header */}
      <header className="border-b bg-white px-8 py-5">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Glynac Virtual Data Room</h1>
            <p className="mt-1 text-sm text-slate-500">
              Secure document management & compliance workspace
            </p>
          </div>

          <button className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700">
            + Upload
          </button>
        </div>
      </header>

      {/* Main Layout */}
      <div className="flex min-h-[calc(100vh-100px)]">
        {/* Sidebar */}
        <aside className="w-64 border-r bg-white p-5">
          <p className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-400">
            Folders
          </p>

          <div className="space-y-2">
            {folders.map((folder) => (
              <button
                key={folder}
                onClick={() => setSelectedFolder(folder)}
                className={`w-full rounded-lg px-4 py-3 text-left text-sm font-medium transition ${
                  selectedFolder === folder
                    ? "bg-blue-50 text-blue-700"
                    : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                📁 {folder}
              </button>
            ))}
          </div>

          <div className="mt-10 rounded-xl bg-slate-50 p-4">
            <p className="text-xs font-semibold text-slate-500">
              STORAGE
            </p>
            <div className="mt-3 h-2 rounded-full bg-slate-200">
              <div className="h-2 w-[42%] rounded-full bg-blue-600" />
            </div>
            <p className="mt-2 text-xs text-slate-500">
              4.2 GB of 10 GB used
            </p>
          </div>
        </aside>

        {/* Document Area */}
        <section className="flex-1 p-7">
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center gap-2 text-sm text-slate-500">
            <span>VDR</span>
            <span>/</span>
            <span className="font-semibold text-slate-900">
              {selectedFolder}
            </span>
          </div>

          {/* Search + Sort */}
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold">{selectedFolder}</h2>
              <p className="mt-1 text-sm text-slate-500">
                {documents.length} documents
              </p>
            </div>

            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Search documents..."
                className="w-64 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-blue-500"
              />

              <button className="rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium">
                Sort ↕
              </button>
            </div>
          </div>

          {/* Document List */}
          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
            {documents.map((document, index) => (
              <div
                key={document.name}
                className={`flex items-center justify-between px-5 py-4 hover:bg-slate-50 ${
                  index !== documents.length - 1
                    ? "border-b border-slate-100"
                    : ""
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-red-50 text-xl">
                    📄
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold">
                      {document.name}
                    </h3>
                    <p className="mt-1 text-xs text-slate-400">
                      {document.type} • Updated {document.date}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
                    {document.permission}
                  </span>

                  <button className="text-sm font-semibold text-blue-600 hover:text-blue-800">
                    Preview →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}