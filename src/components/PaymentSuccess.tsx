import { CheckCircle, Wifi, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Plan {
  id: string;
  duration: string;
  price: number;
}

interface PaymentSuccessProps {
  plan: Plan;
  phoneNumber: string;
  onNewPayment: () => void;
}

const PaymentSuccess = ({ plan, phoneNumber, onNewPayment }: PaymentSuccessProps) => {
  return (
    <div className="text-center">
      <div className="inline-flex items-center justify-center w-20 h-20 bg-wifi-success/10 rounded-full mb-6">
        <CheckCircle className="w-12 h-12 text-wifi-success" />
      </div>
      
      <h2 className="text-2xl font-bold text-foreground mb-2">Payment Successful!</h2>
      <p className="text-muted-foreground mb-8">Your WiFi access has been activated</p>

      <Card className="shadow-card-custom mb-6">
        <CardContent className="p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Wifi className="w-5 h-5 text-wifi-primary" />
                <span className="text-sm text-muted-foreground">Network</span>
              </div>
              <span className="font-medium">wifi@10</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-wifi-primary" />
                <span className="text-sm text-muted-foreground">Duration</span>
              </div>
              <span className="font-medium">{plan.duration}</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-5 h-5 text-center text-wifi-primary font-bold">bob</span>
                <span className="text-sm text-muted-foreground">Amount Paid</span>
              </div>
              <span className="font-medium">{plan.price} bob</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-5 h-5 text-center text-wifi-primary font-bold">📱</span>
                <span className="text-sm text-muted-foreground">Phone</span>
              </div>
              <span className="font-medium">{phoneNumber}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="bg-wifi-success/10 rounded-lg p-4 mb-6">
        <p className="text-sm text-wifi-success font-medium">
          ✓ Your device is now connected to the internet
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          Access will expire after {plan.duration.toLowerCase()}
        </p>
      </div>

      <Button 
        onClick={onNewPayment}
        variant="outline"
        className="border-wifi-primary text-wifi-primary hover:bg-wifi-primary hover:text-white"
      >
        Buy More Time
      </Button>
    </div>
  );
};

export default PaymentSuccess;