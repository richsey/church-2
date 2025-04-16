import mysql from "mysql2/promise";

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "church_db",
  dateStrings: "date",
});
db.getConnection()
  .then(() => {
    console.log("Connected to the database successfully.");
  })
  .catch((err) => {
    console.error("Failed to connect to the database:", err.message);
  });

export default db;
