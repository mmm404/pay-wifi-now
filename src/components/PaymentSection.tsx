import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Smartphone, Shield, ArrowRight } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface Plan {
  id: string;
  duration: string;
  price: number;
}

interface PaymentSectionProps {
  selectedPlan: Plan;
  onPayment: (phoneNumber: string) => void;
}

const PaymentSection = ({ selectedPlan, onPayment }: PaymentSectionProps) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = async () => {
    if (!phoneNumber || phoneNumber.length < 10) {
      toast({
        title: "Invalid Phone Number",
        description: "Please enter a valid M-Pesa phone number",
        variant: "destructive"
      });
      return;
    }

    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      onPayment(phoneNumber);
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <section>
      <Card className="shadow-card-custom">
        <CardContent className="p-6">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-wifi-success/10 rounded-full mb-3">
              <Smartphone className="w-6 h-6 text-wifi-success" />
            </div>
            <h3 className="text-lg font-semibold">Pay with M-Pesa</h3>
            <p className="text-sm text-muted-foreground">
              {selectedPlan.duration} • {selectedPlan.price} bob
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <Label htmlFor="phone" className="text-sm font-medium">
                M-Pesa Phone Number
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="0700000000"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="mt-1"
              />
            </div>

            <div className="bg-muted/50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-4 h-4 text-wifi-success" />
                <span className="text-sm font-medium">Secure Payment</span>
              </div>
              <p className="text-xs text-muted-foreground">
                You will receive an M-Pesa prompt on your phone. Enter your PIN to complete the payment.
              </p>
            </div>

            <Button 
              onClick={handlePayment}
              disabled={isProcessing || !phoneNumber}
              className="w-full bg-wifi-gradient hover:opacity-90 text-white font-medium py-3"
            >
              {isProcessing ? (
                "Processing Payment..."
              ) : (
                <>
                  Pay {selectedPlan.price} bob
                  <ArrowRight className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default PaymentSection;