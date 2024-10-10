import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Interview from "./pages/Interview";
import { Provider as StoreProvider } from "react-redux";
import { store } from "./store/store";

const queryClient = new QueryClient();

export default function App() {
  return (
    <StoreProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <Interview />
      </QueryClientProvider>
    </StoreProvider>
  );
}
