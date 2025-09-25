import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold text-foreground">404</h1>
        <p className="text-xl text-muted-foreground">Oops! Page not found</p>
        <Button 
          onClick={() => window.location.href = '/'}
          className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90"
        >
          Return to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
