import app from "./src/app.js";

const PORT = 5000;

// Server ERROR HANDER
app.use((err, req, res, next) => {
  const statusCode = err.status || 500;
  const errorMessage = err.message || err || "Server Error!";
  return res.status(statusCode).json({
    sucess: false,
    message: errorMessage,
  });
});

app.listen(PORT, async () => {
  console.log(`App is running on http://localhost:${PORT}`);
});
