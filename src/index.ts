import express from "express";
import cors from "cors";
import routes from './routes/index.route';
import sequelizeConnect from './database/mssql';
import fileUpload from 'express-fileupload';
import path from 'path';


const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors({
  origin: "*",
}));
/* 
  app.use(express.static('d:/INETPUB/wwwroot/dokuwiki-backend/dist/images'));
  app.use(express.static('d:/INETPUB/wwwroot/dokuwiki-backend/dist/files'));
  EN EL SERVIDOR ESTA ASI
*/
app.use(express.static(path.join(path.resolve(__dirname, 'images')).replace(/\\/g,'/')));
app.use(express.static(path.join(path.resolve(__dirname, 'files')).replace(/\\/g,'/')));
app.use(fileUpload());
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
