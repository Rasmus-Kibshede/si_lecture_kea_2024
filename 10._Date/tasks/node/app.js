import express from "express";

const app = express();

app.get("/date", (req, res) => {
  res.send({ date: new Date() });
});

// const fetchDate = async () => {
//     const jeff_resposne = await fetch("https://8672-195-249-146-100.ngrok-free.app/datetime");
//     const jeff_result = await jeff_resposne.json();

//     const joarchim_resposne = await fetch("https://a4e4-195-249-146-101.ngrok-free.app/");
//     const joarchim_result = await joarchim_resposne.json();

// const dates = [
//     {"jeff": jeff_result},
//     {"joarchim": joarchim_result}
// ]

//     console.log(dates);
// }

// fetchDate();

const PORT = process.env.PORT || 8080;
app.listen(PORT, () =>
  console.log(`The server: \x1b[36mhttp://127.0.0.1:${PORT}`)
);
