import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingBag, Users, Package, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <ShoppingBag className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold">ShopMaker</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link to="/register">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold tracking-tight">
            Build Your Dream <span className="text-primary">Online Shop</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Create a beautiful, modern e-commerce store with our powerful shop maker. 
            Start selling in minutes, not weeks.
          </p>
          
          <div className="flex items-center justify-center space-x-4">
            <Link to="/register">
              <Button size="lg" className="text-lg px-8 py-6">
                Start Building Now
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Sign In
              </Button>
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <Card className="text-center">
            <CardHeader>
              <Package className="h-12 w-12 text-primary mx-auto" />
              <CardTitle>Product Management</CardTitle>
              <CardDescription>
                Easily add, edit, and organize your products with our intuitive interface
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="text-center">
            <CardHeader>
              <Users className="h-12 w-12 text-primary mx-auto" />
              <CardTitle>Customer Management</CardTitle>
              <CardDescription>
                Track orders, manage customers, and provide excellent service
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="text-center">
            <CardHeader>
              <TrendingUp className="h-12 w-12 text-primary mx-auto" />
              <CardTitle>Analytics & Insights</CardTitle>
              <CardDescription>
                Get detailed insights about your sales, customers, and performance
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Index;
