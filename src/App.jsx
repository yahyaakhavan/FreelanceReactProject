import { Route, Routes } from "react-router-dom";
import "./App.css";
import Auth from "./pages/Auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import CompleteProfile from "./pages/CompleteProfile";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import PageLayout from "./ui/PageLayout";
import Owner from "./pages/Owner";
const queryClient = new QueryClient();
function App() {
  return (
    <div className="container xl:max-w-screen-xl">
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/complete-Profile" element={<CompleteProfile />} />
          <Route element={<PageLayout />}>
            <Route path="/owner" element={<Owner />} />
          </Route>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;
