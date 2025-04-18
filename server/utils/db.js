// db.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qfyqijedkquglifyqqls.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFmeXFpamVka3F1Z2xpZnlxcWxzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ5MDAyNzIsImV4cCI6MjA2MDQ3NjI3Mn0.ssIE50ofhOz31_Fc6kTcpR_I2cZf8cgZo3D9VNLz0Us";

const db = createClient(supabaseUrl, supabaseKey);

export default db;
