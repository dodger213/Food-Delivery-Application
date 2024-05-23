import {
    ColumnDef,
    ColumnFiltersState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    SortingState,
    useReactTable
  } from "@tanstack/react-table";
  
  import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
  import { Button } from "@/components/ui/button";
  import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";
  import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
  import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
  import { Input } from "@/components/ui/input";
  import React from "react";
  
  interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
    filterName: string
  }
  
  export function DataTable<TData, TValue>({ columns, data, filterName }: DataTableProps<TData, TValue>) {
  
    const [sorting, setSorting] = React.useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
    const [columnVisibility, setColumnVisibility] = React.useState({});
    const [rowSelection, setRowSelection] = React.useState({});
  
    const table = useReactTable({
      data,
      columns,
      onSortingChange: setSorting,
      onColumnFiltersChange: setColumnFilters,
      getCoreRowModel: getCoreRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      getSortedRowModel: getSortedRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
      onColumnVisibilityChange: setColumnVisibility,
      onRowSelectionChange: setRowSelection,
      state: {
        sorting,
        columnFilters,
        columnVisibility,
        rowSelection,
      },
    });
  
    return (
      <>
      <div className="flex justify-between py-3">
          <div>
            <Input
              placeholder={`Filter ${filterName}...`}
              value={table.getColumn(`${filterName}`) ?.getFilterValue() as string ?? ""}
              onChange={(event) =>
                table.getColumn(`${filterName}`)?.setFilterValue(event.target.value)
              }
              className="max-w-sm"
            />
          </div>
          <div className="space-x-4">
         
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-auto">
                Columns
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  )
                })}
            </DropdownMenuContent>
          </DropdownMenu>
          </div>
        </div>
      <div className="w-full rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="mb-10 flex items-center justify-end px-2">
          <div className="flex items-center space-x-6 pt-2 lg:space-x-8">
            <div className="flex items-center space-x-2">
              <p className="text-sm font-medium">Rows per page</p>
              <Select
                value={`${table.getState().pagination.pageSize}`}
                onValueChange={(value) => {
                  table.setPageSize(Number(value));
                }}
              >
                <SelectTrigger className="h-8 w-[70px]">
                  <SelectValue
                    placeholder={table.getState().pagination.pageSize}
                  />
                </SelectTrigger>
                <SelectContent side="top">
                  {[10, 20, 30, 40, 50].map((pageSize) => (
                    <SelectItem key={pageSize} value={`${pageSize}`}>
                      {pageSize}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
      <div className="flex w-[100px] items-center justify-center text-sm font-medium">
       Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
     </div>
     <div className="flex items-center space-x-2">
       <Button
         variant="outline"
         className="hidden size-8 p-0 lg:flex"
         onClick={() => table.setPageIndex(0)}
         disabled={!table.getCanPreviousPage()}
       >
         <span className="sr-only">Go to first page</span>
         <ChevronLeft />
       </Button>
       <Button
         variant="outline"
         className="size-8 p-0"
         onClick={() => table.previousPage()}
         disabled={!table.getCanPreviousPage()}
       >
         <span className="sr-only">Go to previous page</span>
         <ChevronsLeft />
       </Button>
       <Button
         variant="outline"
         className="size-8 p-0"
         onClick={() => table.nextPage()}
         disabled={!table.getCanNextPage()}
       >
         <span className="sr-only">Go to next page</span>
         <ChevronRight />
       </Button>
       <Button
         variant="outline"
         className="hidden size-8 p-0 lg:flex"
         onClick={() => table.setPageIndex(table.getPageCount() - 1)}
         disabled={!table.getCanNextPage()}
       >
         <span className="sr-only">Go to last page</span>
         <ChevronsRight />
       </Button>
     </div>
     </div>
     </div>
     </>
    );
  }
  