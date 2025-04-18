import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qfyqijedkquglifyqqls.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFmeXFpamVka3F1Z2xpZnlxcWxzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ5MDAyNzIsImV4cCI6MjA2MDQ3NjI3Mn0.ssIE50ofhOz31_Fc6kTcpR_I2cZf8cgZo3D9VNLz0Us";

const db = createClient(supabaseUrl, supabaseKey);

// Check connection status
const checkConnection = async () => {
  try {
    const { data, error } = await db
      .from("your_table_name")
      .select("*")
      .limit(1); // Try fetching a small piece of data

    if (error) {
      throw error;
    }

    console.log("Connection successful:", data);
    // Success message
    alert("Successfully connected to Supabase!");
  } catch (error) {
    console.error("Connection failed:", error);
    // Error message
    alert(`Failed to connect to Supabase: ${error.message}`);
  }
};

// Call the function to check connection status
checkConnection();

export default db;
