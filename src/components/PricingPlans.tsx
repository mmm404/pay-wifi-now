import { Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Plan {
  id: string;
  duration: string;
  price: number;
  popular?: boolean;
}

interface PricingPlansProps {
  onSelectPlan: (plan: Plan) => void;
  selectedPlan?: Plan;
}

const plans: Plan[] = [
  { id: "1hr", duration: "1 Hour", price: 10 },
  { id: "3hr", duration: "3 Hours", price: 20, popular: true },
  { id: "1day", duration: "1 Day", price: 50 }
];

const PricingPlans = ({ onSelectPlan, selectedPlan }: PricingPlansProps) => {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold text-center mb-6">Choose Your Plan</h2>
      <div className="space-y-4">
        {plans.map((plan) => (
          <Card 
            key={plan.id} 
            className={`cursor-pointer transition-all duration-200 hover:shadow-wifi ${
              selectedPlan?.id === plan.id 
                ? 'ring-2 ring-wifi-primary bg-wifi-primary/5' 
                : 'hover:ring-1 hover:ring-wifi-primary/50'
            } ${plan.popular ? 'relative' : ''}`}
            onClick={() => onSelectPlan(plan)}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-price-gradient text-white px-3 py-1 rounded-full text-xs font-medium">
                  Most Popular
                </span>
              </div>
            )}
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-wifi-gradient rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{plan.duration}</h3>
                    <p className="text-sm text-muted-foreground">Internet access</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-wifi-primary">
                    {plan.price} <span className="text-sm font-normal">bob</span>
                  </div>
                  {selectedPlan?.id === plan.id && (
                    <CheckCircle className="w-6 h-6 text-wifi-success ml-auto mt-1" />
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default PricingPlans;