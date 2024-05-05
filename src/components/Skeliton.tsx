import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonDemo() {
  return (
    <div className="flex flex-col items-start space-y-4">
      <Skeleton className="h-14 w-72" />
      <Skeleton className="h-14 w-72" />
      <Skeleton className="h-14 w-72" />
      <Skeleton className="h-14 w-72" />
      <Skeleton className="h-10 w-32" />
    </div>
  );
}
