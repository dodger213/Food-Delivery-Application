import { LoaderCircle } from "lucide-react";

export default function LoadingSpinner() {
  return (
    <div className="relative flex h-screen w-screen">
      <div className="bg-primary absolute top-0 h-[2px] w-screen ease-linear"></div>
      <div className="m-auto">
        <LoaderCircle className="text-primary size-10 animate-spin" />
      </div>
    </div>
  );
}
