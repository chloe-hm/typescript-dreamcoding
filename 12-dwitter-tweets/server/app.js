import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import tweetsRouter from './router/tweets.js';

const app = express();
const port = 8080

// 미들웨어
// express.json 미들웨어를 사용 (REST API -> Body)
app.use(express.json());
// 동일하게 body를 자동으로 파싱해준다 (HTML Form -> Body)
app.use(express.urlencoded({extended: false}));

// 자동으로 서버로부터 헤더를 설정해줘 cors에러 방지
app.use(cors());

// 특정한 도메인에서만 볼 수 있도록 옵션값 넣어줌
// app.use(
//   cors({
// 	origin: ['http://localhost:3000']
// 	})
// );

// req안에 있는 쿠키값 보고싶다면 미들웨어 설정 해야한다. 
app.use(cookieParser())

// 공통적으로 보안에 필요한 헤더를 추가
app.use(helmet());

// 웹서버에 들어오는 요청을 로그로 볼 수 있음
// app.use(morgan('combined')); 
app.use(morgan('tiny')); 

// 어떤 경로에 대해 처리해 줄건지
// 처리하는 라우트에는 tweets라는 경로가 있다.
// tweetsRouter 그 이하에 관련된 아이들은 저 폴더에 있음 
app.use('/tweets', tweetsRouter);
// app.use('/auth', authRouter); 
// 등등 

// 무슨 역할?
// app.set('trust proxy', 1);
app.use((req, res, next) => {
  res.sendStatus(404);
});

app.use((error, req, res, next) => {
  console.error(error);
  res.sendStatus(500);
});

// 해당 port실행 
app.listen(port);
