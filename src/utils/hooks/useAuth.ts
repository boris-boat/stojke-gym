import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "../supabase";

// Define User Type
type User = {
  id: string;
  email: string;
};

// Define Auth Response Type
type AuthResponse = {
  user: User | null;
  error?: string;
};

// Fetch the current user session
const getUserSession = async (): Promise<User | null> => {
  const { data, error } = await supabase.auth.getSession();
  if (error || !data.session) return null;
  return data.session.user;
};

// Hook for authentication
export const useAuth = () => {
  const queryClient = useQueryClient();

  // Fetch user session
  const { data: user, isLoading } = useQuery<User | null>({
    queryKey: ["authUser"],
    queryFn: getUserSession,
  });

  // Login Mutation
  const loginMutation = useMutation<AuthResponse, Error, { email: string; password: string }>({
    mutationFn: async ({ email, password }) => {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      console.log(data,error);
      if (error) throw new Error(error.message);
      return { user: data.user };
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["authUser"]);
    },
  });

  // Logout Mutation
  const logoutMutation = useMutation<void, Error>({
    mutationFn: async () => {
      const { error } = await supabase.auth.signOut();
      if (error) throw new Error(error.message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["authUser"]);
    },
  });
  // Create User Mutation
  const createUserMutation = useMutation({
    mutationFn: async ({ email, password }) => {
      const { data, error } = await supabase.auth.signUp({ email, password });
      if (error) throw new Error(error.message);
      return { user: data.user };
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["authUser"]);
    },
  });
  return {
    user,
    isLoading,
    login: loginMutation.mutate,
    logout: logoutMutation.mutate,
    createUserMutation: createUserMutation.mutate,
  };
};
