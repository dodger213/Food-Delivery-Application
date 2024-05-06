import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Facebook, Twitter } from "lucide-react";

interface AuthCardProps  {
    children: React.ReactNode
    authTitle : string
   
}

export default function AuthCard({children, authTitle}: AuthCardProps) {
  return (
    <Card className="w-[450px]">
        <CardHeader>
          <CardTitle>{authTitle}</CardTitle>
          <CardDescription>
            By continuing, you agree to our User Agreement and acknowledge that you understand the Privacy Policy.
          </CardDescription>
        </CardHeader>
        <CardContent>
        <div className="flex items-center gap-10">
            <Button className="w-full" aria-label="Sign in with facebook">
              <Facebook />
            </Button>
            <Button className="w-full" aria-label="Sign in with facebook">
              <Twitter />
            </Button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex mt-4 justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>
          {children}
        </CardContent>
    </Card>
  )
}
