import { Button } from "@/components/ui/button";
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Skeleton } from "@/components/ui/skeleton";
import useDebounce from "@/hooks/useDebounce";
import { cn } from "@/lib/utils";
import { SearchApi } from "@/services/api";
import { useQuery } from "@tanstack/react-query";
import { SearchIcon } from "lucide-react";
import { useState } from "react";


export default function SearchCommand() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const debounceValue = useDebounce(query, 500)

  const {data: searchData, isLoading:loading} = useQuery({
    queryKey: ['search'],
    queryFn: () => SearchApi(debounceValue)
  })

  return (
    <>
      <Button variant={"outline"} onClick={() => setOpen(true)}>
        <SearchIcon className="mr-2" size={16} />
        <span>Search here...</span>
        <abbr
          title="Control"
          className="border px-1.5 py-0.5 bg-secondary text-xs font-medium shadow-sm disabled:opacity-50 rounded select-none no-underline ml-10"
        >
          Ctrl K
        </abbr>
      </Button>
      <CommandDialog
        open={open}
        onOpenChange={(open) => {
          setOpen(open);
          if (!open) {
            setQuery("");
          }
        }}
      >
        <CommandInput placeholder="Search your food here..." value={query} onValueChange={setQuery} />
        <CommandList>
        <CommandEmpty
            className={cn(loading ? "hidden" : "py-6 text-center text-sm")}
          >
            No results found.
          </CommandEmpty>
          {loading ? (
            <div className="space-y-1 overflow-hidden px-1 py-2">
              <Skeleton className="h-12 w-20 rounded-sm" />
              <Skeleton className="h-4 rounded-sm" />
              <Skeleton className="h-4 rounded-sm" />
            </div>
          ) : (
            <CommandGroup>
              {searchData?.map((group) => (
                <CommandItem key={group?.name} className="h-fit flex justify-between mr-20" value={group.name}>
                  <img src={group?.image} alt={group.name} className="h-12 w-20" />

                  <span className="truncate font-bold">{group?.name}</span>

                  <span className="text-primary font-bold">$ {group?.price}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          )}
        </CommandList>
      </CommandDialog>
    </>
  )
}
