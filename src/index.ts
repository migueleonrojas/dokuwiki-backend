import express from "express";
import cors from "cors";
import routes from './routes/index.route';
import sequelizeConnect from './database/mssql';


const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors({
  origin: "http://localhost:8081",
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes.allRoutes);


const connectDB = async () => {

  try {
    await sequelizeConnect.sequelize.authenticate();
    console.log('Connection has been established successfully.');
  }
  catch (error) {
    console.log(error);
  }

}


app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server is Running on PORT ${PORT}.`);

});
