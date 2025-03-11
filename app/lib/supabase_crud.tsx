import { createClient } from "@supabase/supabase-js";
const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL,
  process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY
);
const TABLE_NAME = "sampleTable";
export const getRecord = async () => {
  const { data, error } = await supabase.from("sampletable").select("*"); // Exact match

  console.log("Supabase response:", { data, error });

  if (error) {
    console.error("Error:", error.message);
    return { data: null, error };
  }
  return { data, error: null };
};
