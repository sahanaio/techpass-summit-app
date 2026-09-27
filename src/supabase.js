import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ziclilekntphixxkbvsx.supabase.co";
const supabaseKey = "sb_publishable_HdDS_22wU_SM1VlZkk3loA_rU5lHm3n"; 

export const supabase = createClient(supabaseUrl, supabaseKey);