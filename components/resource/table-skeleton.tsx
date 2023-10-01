import { Skeleton } from "~/components/ui/skeleton";

const TableSkeleton = () => {
  return (
    <div className="flex flex-col gap-6 p-4">
      {[...new Array(5)].map((_, j) => (
        <div key={j} className="flex gap-4">
          {[...new Array(5)].map((_a, i) => (
            <Skeleton key={i} className="h-[24px] w-full rounded-sm" />
          ))}
        </div>
      ))}
    </div>
  );
};

export default TableSkeleton;
