import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Auth from "./pages/Auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import CompleteProfile from "./pages/CompleteProfile";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import OwnerDashboard from "./pages/OwnerDashboard";
import Project from "./pages/Project";
import Projects from "./pages/Projects";
import { DarkModeProvider } from "./context/DarkModeContext";
import OwnerPageLayout from "./features/Owner/OwnerPageLayout";
import { SidebarStatusProvider } from "./context/SidebarStatusContext";
import FreelancerPageLayout from "./features/Freelancer/FreelancerPageLayout";
import FreelancerDashboard from "./pages/FreelancerDashboard";
import Proposals from "./pages/Proposals";
import SubmittedProjects from "./pages/SubmittedProjects";
import ProtectedRoute from "./ui/ProtectedRoute";
const queryClient = new QueryClient();
function App() {
  return (
    <div>
      <SidebarStatusProvider>
        <DarkModeProvider>
          <QueryClientProvider client={queryClient}>
            <Toaster />
            <Routes>
              <Route path="/auth" element={<Auth />} />
              <Route path="/complete-Profile" element={<CompleteProfile />} />
              <Route
                path="/owner"
                element={
                  <ProtectedRoute>
                    <OwnerPageLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate to={"dashboard"} replace />} />
                <Route path="dashboard" element={<OwnerDashboard />} />
                <Route path="projects" element={<Projects />} />
                <Route path="projects/:id" element={<Project />} />
              </Route>
              <Route
                path="/freelancer"
                element={
                  <ProtectedRoute>
                    <FreelancerPageLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate to={"dashboard"} replace />} />
                <Route path="dashboard" element={<FreelancerDashboard />} />
                <Route path="proposals" element={<Proposals />} />
                <Route path="projects" element={<SubmittedProjects />} />
              </Route>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </QueryClientProvider>
        </DarkModeProvider>
      </SidebarStatusProvider>
    </div>
  );
}

export default App;
