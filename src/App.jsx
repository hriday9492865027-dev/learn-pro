import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import SubjectsPage from "./pages/SubjectsPage";
import LessonPage from "./pages/LessonPage";
import RoadmapPage from "./pages/RoadmapPage";
import PlaygroundPage from "./pages/PlaygroundPage";
import PracticePage from "./pages/PracticePage";
import QuizPage from "./pages/QuizPage";
import DashboardPage from "./pages/DashboardPage";
import ProfilePage from "./pages/ProfilePage";

const globalCSS = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { background: #080a14; color: #fff; font-family: 'Inter', sans-serif; min-height: 100vh; }
  @keyframes float1 { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(30px,-40px) scale(1.05); } }
  @keyframes float2 { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(-20px,30px) scale(0.95); } }
  @keyframes float3 { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(20px,-20px) scale(1.08); } }
  ::-webkit-scrollbar { width: 6px; } ::-webkit-scrollbar-track { background: #080a14; } ::-webkit-scrollbar-thumb { background: rgba(139,92,246,0.3); border-radius: 3px; }
`;

export default function App() {
  const [page, setPage] = useState("home");
  const [selectedSubject, setSelectedSubject] = useState(null);

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = globalCSS;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const renderPage = () => {
    switch (page) {
      case "home": return <HomePage setPage={setPage} />;
      case "subjects": return <SubjectsPage setPage={setPage} setSelectedSubject={setSelectedSubject} />;
      case "lesson": return <LessonPage subject={selectedSubject} setPage={setPage} />;
      case "roadmap": return <RoadmapPage />;
      case "playground": return <PlaygroundPage />;
      case "practice": return <PracticePage />;
      case "quiz": return <QuizPage />;
      case "dashboard": return <DashboardPage />;
      case "profile": return <ProfilePage />;
      default: return <HomePage setPage={setPage} />;
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "#080a14" }}>
      <Navbar page={page} setPage={setPage} />
      <main>{renderPage()}</main>
    </div>
  );
}
