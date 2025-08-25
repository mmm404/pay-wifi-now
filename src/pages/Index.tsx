import { useState } from "react";
import WiFiHeader from "@/components/WiFiHeader";
import PricingPlans from "@/components/PricingPlans";
import PaymentSection from "@/components/PaymentSection";
import PaymentSuccess from "@/components/PaymentSuccess";
import { toast } from "@/hooks/use-toast";

interface Plan {
  id: string;
  duration: string;
  price: number;
}

const Index = () => {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [paymentComplete, setPaymentComplete] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSelectPlan = (plan: Plan) => {
    setSelectedPlan(plan);
  };

  const handlePayment = (phone: string) => {
    setPhoneNumber(phone);
    setPaymentComplete(true);
    toast({
      title: "Payment Processed",
      description: `M-Pesa payment of ${selectedPlan?.price} bob successful!`,
    });
  };

  const handleNewPayment = () => {
    setSelectedPlan(null);
    setPaymentComplete(false);
    setPhoneNumber("");
  };

  if (paymentComplete && selectedPlan) {
    return (
      <div className="min-h-screen bg-background py-8 px-4">
        <div className="max-w-md mx-auto">
          <PaymentSuccess 
            plan={selectedPlan}
            phoneNumber={phoneNumber}
            onNewPayment={handleNewPayment}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-md mx-auto">
        <WiFiHeader />
        
        <PricingPlans 
          onSelectPlan={handleSelectPlan}
          selectedPlan={selectedPlan}
        />
        
        {selectedPlan && (
          <PaymentSection 
            selectedPlan={selectedPlan}
            onPayment={handlePayment}
          />
        )}
      </div>
    </div>
  );
};

export default Index;
