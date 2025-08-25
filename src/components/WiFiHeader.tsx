import { Wifi } from "lucide-react";

const WiFiHeader = () => {
  return (
    <header className="text-center mb-8">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-wifi-gradient rounded-full mb-4 shadow-wifi">
        <Wifi className="w-8 h-8 text-white" />
      </div>
      <h1 className="text-2xl font-bold text-foreground mb-2">Connect to WiFi</h1>
      <div className="bg-card rounded-lg p-3 shadow-card-custom inline-block">
        <p className="text-sm text-muted-foreground">Network:</p>
        <p className="font-semibold text-wifi-primary text-lg">wifi@10</p>
      </div>
    </header>
  );
};

export default WiFiHeader;