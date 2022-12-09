import c1 from 'assets/images/products/MyRecommend-1.jpg'
import c2 from 'assets/images/products/MyRecommend-2.jpg'
import c3 from 'assets/images/products/MyRecommend-3.jpg'

export const categories = [
  {
    name: 'body record',
    jp: '自分のカラダの記録',
    img: c1,
    position: '20px',
    size: '380px 240px',
  },
  {
    name: 'my exercise',
    jp: '自分のカラダの記録',
    img: c2,
    position: '-10px',
    size: '350px 268px',
  },
  {
    name: 'my diary',
    jp: '自分のカラダの記録',
    img: c3,
    position: 'top right -60px',
    size: 'cover',
  },
]

export const bodyRecords = [
  {
    date: new Date('6/1/2022'),
    value: 10,
  },
  {
    date: new Date('7/1/2022'),
    value: 9,
  },
  {
    date: new Date('8/1/2022'),
    value: 6,
  },
  {
    date: new Date('9/1/2022'),
    value: 6,
  },
  {
    date: new Date('10/1/2022'),
    value: 6,
  },
  {
    date: new Date('11/1/2022'),
    value: 6,
  },
  {
    date: new Date('12/1/2022'),
    value: 12,
  },
  {
    date: new Date('1/1/2023'),
    value: 1,
  },
  {
    date: new Date('2/1/2023'),
    value: 2,
  },
  {
    date: new Date('3/1/2023'),
    value: 3,
  },
  {
    date: new Date('4/1/2023'),
    value: 4,
  },
  {
    date: new Date('5/1/2023'),
    value: 5,
  },
]

export const myExercises = Array(20).fill({
  name: '家事全般（立位・軽い）',
  kcal: 26,
})

export const myDiary = Array(8).fill({
  time: new Date(),
  line: '私の日記の記録が一部表示されます。',
  desc:
    'テキストテキストテキストテキストテキストテキストテキ' +
    'ストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
})
