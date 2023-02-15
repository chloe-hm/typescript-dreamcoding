import express from 'express';
import 'express-async-errors';

// 라우터를 사용하면 좀 더 모듈성 있게 작성할 수 있다.
// app.js에선 어떤어떤걸 쓰는지 큰그림으로 볼 수 있음

const router = express.Router();

let tweets = [
  {
    id: '1',
    text: 'express 재미따링!',
    createdAt: Date.now().toString(),
    name: 'Tony',
    username: 'tony',
    url: 'https://ccimg.hellomarket.com/images/2021/member_profile/06/30/18/2701505_5293560_1.jpeg?size=s4',
  },
  {
    id: '2',
    text: '즐거운 회사 눈누난나',
    createdAt: Date.now().toString(),
    name: 'Heana',
    username: 'heana',
  },
    {
    id: '3',
    text: '집들이 언제 할까요? 몸만 오세요 다들~~',
    createdAt: Date.now().toString(),
    name: 'Shapiro',
    username: 'shapiro',
    url:"http://ccimg.hellomarket.com/images/2023/item/02/15/12/0018179_5139002_1.jpg?size=s6"
  },
];

// GET /tweets
// GET /tweets?username=:username
router.get('/', (req, res, next) => {
  const username = req.query.username;
  const data = username
    ? tweets.filter((t) => t.username === username)
    : tweets;
  res.status(200).json(data);
});

// GET /tweets/:id
router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  const tweet = tweets.find((t) => t.id === id);
  if (tweet) {
    res.status(200).json(tweet);
  } else {
    res.status(404).json({ message: `Tweet id(${id}) not found` });
  }
});

// POST /tweeets
router.post('/', (req, res, next) => {
  const { text, name, username } = req.body;
  const tweet = {
    id: Date.now().toString(),
    text,
    createdAt: new Date(),
    name,
    username,
  };
  tweets = [tweet, ...tweets];
  res.status(201).json(tweet);
});

// PUT /tweets/:id
router.put('/:id', (req, res, next) => {
  const id = req.params.id;
  const text = req.body.text;
  const tweet = tweets.find((tweet) => tweet.id === id);
  if (tweet) {
    tweet.text = text;
    res.status(200).json(tweet);
  } else {
    res.status(404).json({ message: `Tweet id(${id}) not found` });
  }
});

// DELETE /tweets/:id
router.delete('/:id', (req, res, next) => {
  const id = req.params.id;
  tweets = tweets.filter((tweet) => tweet.id !== id);
  res.sendStatus(204);
});

// test
router.post('/', (req, res, next) => {
  const { data } = req.body;
  console.log("🌸 ~ data", data)

  const aaa = {
    url:"/login"
  }
  res.status(201).json(aaa);
});


export default router;
