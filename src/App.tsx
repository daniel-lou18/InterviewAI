import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Interview from "./pages/Interview";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Interview />
    </QueryClientProvider>
  );
}
