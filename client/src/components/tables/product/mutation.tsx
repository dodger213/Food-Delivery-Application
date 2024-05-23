import { Deleteproduct, EnableDisable } from "@/services/admin.api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function UseProductenableDisabled() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => EnableDisable(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["all-products"] });
    },
  });
}

export function UseDeleteProduct() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => Deleteproduct(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["all-products"] });
    },
  });
}
