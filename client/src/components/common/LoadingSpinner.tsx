import { LoaderCircle } from "lucide-react";

export default function LoadingSpinner() {
  return (
    <div className="relative flex h-screen w-screen">
      <div className="absolute top-0 w-screen bg-primary h-[2px] ease-linear"></div>
      <div className="m-auto">
        <LoaderCircle className="animate-spin text-primary h-10 w-10" />
      </div>
    </div>
  );
}
