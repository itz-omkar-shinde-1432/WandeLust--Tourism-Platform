import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Wallet, Plus } from 'lucide-react';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator
} from '@/components/ui/dropdown-menu';

const WalletBalance = () => {
  const [balance, setBalance] = useState(0);
  const [recentTransactions, setRecentTransactions] = useState([
    { id: 1, type: 'token', amount: -10, description: 'CLEAN10 token used', date: '2024-01-15' },
    { id: 2, type: 'wallet', amount: -50, description: 'Booking payment', date: '2024-01-14' },
    { id: 3, type: 'credit', amount: 100, description: 'Wallet top-up', date: '2024-01-13' }
  ]);

  useEffect(() => {
    // Load balance from localStorage
    const savedBalance = localStorage.getItem('jharkhandTourismWalletBalance');
    if (savedBalance) {
      setBalance(parseInt(savedBalance));
    }
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2 relative">
          <Wallet className="w-4 h-4" />
          <Badge variant="secondary" className="px-2 py-1 text-xs font-medium">
            ₹{balance}
          </Badge>
          {balance > 0 && (
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-tourism-forest rounded-full animate-pulse"></div>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-64 bg-background/95 backdrop-blur-sm">
        <DropdownMenuLabel className="flex items-center justify-between">
          <span>Wallet Balance</span>
          <span className="text-lg font-bold text-tourism-ocean">₹{balance}</span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        
        <div className="p-2">
          <Button size="sm" className="w-full mb-2 bg-gradient-primary text-white">
            <Plus className="w-4 h-4 mr-2" />
            Add Money
          </Button>
        </div>
        
        {recentTransactions.length > 0 && (
          <>
            <DropdownMenuSeparator />
            <DropdownMenuLabel className="text-xs text-muted-foreground">Recent Activity</DropdownMenuLabel>
            {recentTransactions.slice(0, 3).map((transaction) => (
              <DropdownMenuItem key={transaction.id} className="flex-col items-start p-3">
                <div className="flex justify-between w-full">
                  <span className="text-sm">{transaction.description}</span>
                  <span className={`text-sm font-medium ${
                    transaction.amount < 0 ? 'text-destructive' : 'text-tourism-forest'
                  }`}>
                    {transaction.amount < 0 ? '' : '+'}₹{Math.abs(transaction.amount)}
                  </span>
                </div>
                <span className="text-xs text-muted-foreground">{transaction.date}</span>
              </DropdownMenuItem>
            ))}
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default WalletBalance;