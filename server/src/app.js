import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './database';
import routes from './routes/index.routes';
const multer = require('multer');
const path = require('path');

const { errors } = require('celebrate');

dotenv.config();

const app = express();

app.use(helmet());

app.use(cors());

app.use(express.json({ limit: '1mb' }));

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) =>
  res.status(200).json({ message: 'Server Up and Running' })
);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log(req);
    cb(null, './src/images');
  },
  filename: (req, file, cb) => {
    // cb(null, 'hello.jpg');
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post('/api/upload', upload.single('file'), (req, res) => {
  res.status(200).json('File has been uploaded');
});

const update = multer({ storage: storage });
app.put('/api/update', update.single('file'), (req, res) => {
  res.status(200).json('File has been updated');
});

app.use('/images', express.static(path.join(__dirname, '/images')));

app.use('/api', routes);
app.use(errors());

connectDB();

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server successfully started on port ${port}`);
});
