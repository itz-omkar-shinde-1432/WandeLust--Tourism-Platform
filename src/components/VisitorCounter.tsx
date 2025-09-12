import React, { useState, useEffect } from 'react';
import { Users, TrendingUp, Globe } from 'lucide-react';

const VisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState(0);
  const [todayVisitors, setTodayVisitors] = useState(0);
  const [onlineUsers, setOnlineUsers] = useState(0);

  useEffect(() => {
    // Simulate visitor counter
    const baseCount = 45672;
    const today = new Date().getDate();
    const simulatedTotal = baseCount + (today * 127) + Math.floor(Math.random() * 50);
    const simulatedToday = Math.floor(Math.random() * 200) + 50;
    const simulatedOnline = Math.floor(Math.random() * 25) + 5;

    // Animate counter
    let current = 0;
    const increment = simulatedTotal / 100;
    const timer = setInterval(() => {
      current += increment;
      if (current >= simulatedTotal) {
        setVisitorCount(simulatedTotal);
        clearInterval(timer);
      } else {
        setVisitorCount(Math.floor(current));
      }
    }, 30);

    setTodayVisitors(simulatedToday);
    setOnlineUsers(simulatedOnline);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col sm:flex-row gap-6 text-center sm:text-left">
      <div className="flex items-center gap-2">
        <div className="flex items-center justify-center w-8 h-8 bg-tourism-ocean/10 rounded-full">
          <Users className="w-4 h-4 text-tourism-ocean" />
        </div>
        <div>
          <p className="text-xs text-muted-foreground uppercase tracking-wide">Total Visitors</p>
          <p className="font-bold text-lg">{visitorCount.toLocaleString()}</p>
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <div className="flex items-center justify-center w-8 h-8 bg-tourism-forest/10 rounded-full">
          <TrendingUp className="w-4 h-4 text-tourism-forest" />
        </div>
        <div>
          <p className="text-xs text-muted-foreground uppercase tracking-wide">Today</p>
          <p className="font-bold text-lg">{todayVisitors}</p>
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <div className="flex items-center justify-center w-8 h-8 bg-tourism-sunset/10 rounded-full relative">
          <Globe className="w-4 h-4 text-tourism-sunset" />
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-tourism-forest rounded-full animate-pulse"></div>
        </div>
        <div>
          <p className="text-xs text-muted-foreground uppercase tracking-wide">Online Now</p>
          <p className="font-bold text-lg">{onlineUsers}</p>
        </div>
      </div>
    </div>
  );
};

export default VisitorCounter;