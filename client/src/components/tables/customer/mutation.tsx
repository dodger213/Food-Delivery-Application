
import { BlockUnBlockUser, Deleteuser } from "@/services/admin.api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function UseBlockUnBlockUser() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => BlockUnBlockUser(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["all-users"] });
    },
  });
}

export function UseDeleteUser() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => Deleteuser(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["all-users"] });
    },
  });
}