import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft, Gift, Wallet, CreditCard, Check, Sparkles } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

interface TokenData {
  code: string;
  discount: number;
  description: string;
}

const validTokens: TokenData[] = [
  { code: 'CLEAN10', discount: 10, description: '₹10 off on your booking' },
  { code: 'CLEAN20', discount: 20, description: '₹20 off on your booking' },
  { code: 'CLEAN100', discount: 100, description: '₹100 off on your booking' }
];

const Booking = () => {
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  const [tokenCode, setTokenCode] = useState('');
  const [walletBalance, setWalletBalance] = useState(0);
  const [appliedToken, setAppliedToken] = useState<TokenData | null>(null);
  const [usedWalletAmount, setUsedWalletAmount] = useState(0);
  const [showTokenSuccess, setShowTokenSuccess] = useState(false);
  const [showWalletSuccess, setShowWalletSuccess] = useState(false);
  
  const packageId = searchParams.get('package');
  const packageName = searchParams.get('name') || 'Selected Package';
  const packagePrice = parseInt(searchParams.get('price')?.replace(/[^0-9]/g, '') || '599');

  useEffect(() => {
    // Load wallet balance from localStorage
    const savedBalance = localStorage.getItem('jharkhandTourismWalletBalance');
    if (savedBalance) {
      setWalletBalance(parseInt(savedBalance));
    }
  }, []);

  const saveWalletBalance = (balance: number) => {
    localStorage.setItem('jharkhandTourismWalletBalance', balance.toString());
    setWalletBalance(balance);
  };

  const applyToken = () => {
    const token = validTokens.find(t => t.code.toLowerCase() === tokenCode.toLowerCase());
    if (token) {
      setAppliedToken(token);
      setShowTokenSuccess(true);
      setTimeout(() => setShowTokenSuccess(false), 2000);
      toast({
        title: "Token Applied Successfully!",
        description: `${token.description} has been applied to your booking.`,
      });
    } else {
      toast({
        title: "Invalid Token",
        description: "Please enter a valid token code (CLEAN10, CLEAN20, or CLEAN100).",
        variant: "destructive"
      });
    }
    setTokenCode('');
  };

  const applyWalletBalance = () => {
    const maxUsable = Math.min(walletBalance, packagePrice);
    if (maxUsable > 0) {
      setUsedWalletAmount(maxUsable);
      setShowWalletSuccess(true);
      setTimeout(() => setShowWalletSuccess(false), 2000);
      toast({
        title: "Wallet Balance Applied!",
        description: `₹${maxUsable} from your wallet has been applied.`,
      });
    } else {
      toast({
        title: "Insufficient Balance",
        description: "Your wallet balance is insufficient for this booking.",
        variant: "destructive"
      });
    }
  };

  const totalDiscount = (appliedToken?.discount || 0) + usedWalletAmount;
  const finalAmount = Math.max(0, packagePrice - totalDiscount);

  const handleProceedToPayment = () => {
    if (usedWalletAmount > 0) {
      saveWalletBalance(walletBalance - usedWalletAmount);
    }
    toast({
      title: "Booking Confirmed!",
      description: `Your ${packageName} booking for ₹${finalAmount} has been confirmed.`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20 pb-12 bg-gradient-to-br from-tourism-sand to-tourism-ocean/10">
        <div className="container mx-auto px-4">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-tourism-ocean hover:text-tourism-ocean/80 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Packages
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Complete Your Booking
          </h1>
          <p className="text-lg text-muted-foreground">
            Secure your adventure with our flexible payment options
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          {/* Booking Summary */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="w-5 h-5" />
                Booking Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg">{packageName}</h3>
                  <p className="text-sm text-muted-foreground">Package ID: {packageId || '001'}</p>
                </div>
                <Badge variant="secondary">Premium</Badge>
              </div>
              
              <div className="space-y-3 pt-4 border-t">
                <div className="flex justify-between">
                  <span>Package Price</span>
                  <span className="font-medium">₹{packagePrice}</span>
                </div>
                
                {appliedToken && (
                  <div className="flex justify-between text-tourism-forest">
                    <span className="flex items-center gap-1">
                      <Gift className="w-4 h-4" />
                      Token Discount ({appliedToken.code})
                    </span>
                    <span>-₹{appliedToken.discount}</span>
                  </div>
                )}
                
                {usedWalletAmount > 0 && (
                  <div className="flex justify-between text-tourism-ocean">
                    <span className="flex items-center gap-1">
                      <Wallet className="w-4 h-4" />
                      Wallet Balance Used
                    </span>
                    <span>-₹{usedWalletAmount}</span>
                  </div>
                )}
                
                <div className="border-t pt-3 flex justify-between items-center text-lg font-bold">
                  <span>Total Amount</span>
                  <span className="text-primary">₹{finalAmount}</span>
                </div>
              </div>
              
              <Button 
                className="w-full bg-primary hover:bg-primary/90" 
                size="lg"
                onClick={handleProceedToPayment}
              >
                Proceed to Payment
              </Button>
            </CardContent>
          </Card>

          {/* Discounts & Wallet */}
          <div className="space-y-6">
            
            {/* Token Redemption */}
            <Card className="relative overflow-hidden">
              {showTokenSuccess && (
                <div className="absolute inset-0 bg-tourism-forest/10 flex items-center justify-center z-10 animate-fade-in">
                  <div className="text-center">
                    <Sparkles className="w-8 h-8 text-tourism-forest mx-auto mb-2 animate-bounce" />
                    <p className="text-tourism-forest font-semibold">Token Applied!</p>
                  </div>
                </div>
              )}
              
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gift className="w-5 h-5 text-tourism-sunset" />
                  Redeem Token
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Have a discount token? Enter it here to save money on your booking!
                </p>
                
                <div className="flex gap-2">
                  <Input
                    placeholder="Enter token code (e.g., CLEAN10)"
                    value={tokenCode}
                    onChange={(e) => setTokenCode(e.target.value.toUpperCase())}
                    className="flex-1"
                  />
                  <Button 
                    onClick={applyToken}
                    disabled={!tokenCode || !!appliedToken}
                    variant="outline"
                    className="px-6"
                  >
                    Apply Token
                  </Button>
                </div>
                
                {appliedToken && (
                  <div className="flex items-center gap-2 text-tourism-forest bg-tourism-forest/10 p-3 rounded-lg">
                    <Check className="w-4 h-4" />
                    <span className="text-sm font-medium">
                      {appliedToken.description} applied successfully!
                    </span>
                  </div>
                )}
                
                <div className="text-xs text-muted-foreground">
                  Valid tokens: CLEAN10 (₹10 off), CLEAN20 (₹20 off), CLEAN100 (₹100 off)
                </div>
              </CardContent>
            </Card>

            {/* Wallet Balance */}
            <Card className="relative overflow-hidden">
              {showWalletSuccess && (
                <div className="absolute inset-0 bg-tourism-ocean/10 flex items-center justify-center z-10 animate-fade-in">
                  <div className="text-center">
                    <Sparkles className="w-8 h-8 text-tourism-ocean mx-auto mb-2 animate-bounce" />
                    <p className="text-tourism-ocean font-semibold">Wallet Applied!</p>
                  </div>
                </div>
              )}
              
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wallet className="w-5 h-5 text-tourism-ocean" />
                  Jharkhand Tourism Wallet
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-tourism-ocean/5 rounded-lg">
                  <span className="text-sm font-medium">Available Balance</span>
                  <span className="text-lg font-bold text-tourism-ocean">₹{walletBalance}</span>
                </div>
                
                <div className="flex gap-2">
                  <Input
                    type="number"
                    placeholder="Add balance"
                    onChange={(e) => {
                      const newBalance = parseInt(e.target.value) || 0;
                      if (newBalance >= 0) saveWalletBalance(newBalance);
                    }}
                    className="flex-1"
                  />
                  <Button 
                    onClick={applyWalletBalance}
                    disabled={walletBalance <= 0 || usedWalletAmount > 0}
                    variant="outline"
                    className="px-6"
                  >
                    Use Wallet
                  </Button>
                </div>
                
                {usedWalletAmount > 0 && (
                  <div className="flex items-center gap-2 text-tourism-ocean bg-tourism-ocean/10 p-3 rounded-lg">
                    <Check className="w-4 h-4" />
                    <span className="text-sm font-medium">
                      ₹{usedWalletAmount} wallet balance applied!
                    </span>
                  </div>
                )}
                
                <div className="text-xs text-muted-foreground">
                  Sync your Jharkhand Tourism wallet balance to use virtual cash for discounts
                </div>
              </CardContent>
            </Card>

            {/* Total Savings */}
            {totalDiscount > 0 && (
              <Card className="border-tourism-forest/20 bg-tourism-forest/5">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <Sparkles className="w-8 h-8 text-tourism-forest mx-auto mb-2" />
                    <h3 className="text-lg font-bold text-tourism-forest mb-1">
                      You're Saving ₹{totalDiscount}!
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Great job on finding these amazing deals!
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
            
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Booking;