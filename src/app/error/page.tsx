import { ErrorMessage } from "@/components/ErrorMessage";
import { SignInButton } from "@/components/SignInButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ErrorPage = () => {
  return (
    <div className="px-5 flex items-center justify-center min-h-screen">
      <div className="space-y-4">
        <h1 className="text-7xl leading-none font-bold">500</h1>
        <ErrorMessage />
        <p className="text-sm text-muted-foreground">
          Please try to login again or contact the administrator Or go back to
          the home page
        </p>
        <div className="flex items-center flex-wrap gap-4">
          <SignInButton />
          <Button variant="outline" size="lg">
            <Link href="/">Go back to the home page</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
