
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "@/context/AppContext";

// Layout
import Layout from "@/components/layout/Layout";

// Pages
import Dashboard from "@/pages/Dashboard";
import NewOrder from "@/pages/NewOrder";
import AutoOrders from "@/pages/AutoOrders";
import OrdersHistory from "@/pages/OrdersHistory";
import PaymentHistory from "@/pages/PaymentHistory";
import TopUpAccount from "@/pages/TopUpAccount";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AppProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route path="order/new" element={<NewOrder />} />
              <Route path="orders/auto" element={<AutoOrders />} />
              <Route path="orders/history" element={<OrdersHistory />} />
              <Route path="payments/history" element={<PaymentHistory />} />
              <Route path="account/topup" element={<TopUpAccount />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
