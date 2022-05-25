
const postList = [
  {
    "no": 1,
    "title": "공지사항 1",
    "content": "첫번째 공지사항입니다.",
    "createDate": "2022-05-06",

  },
  {
    "no": 2,
    "title": "공지사항 2",
    "content": "두번째 게시글 내용입니다.",
    "createDate": "2022-05-13",

  },
  {
    "no": 3,
    "title": "공지사항 3",
    "content": "세번째 게시글 내용입니다.",
    "createDate": "2022-05-20",
  },
  {
    "no": 4,
    "title": "공지사항 4",
    "content": "네번째 게시글 내용입니다.",
    "createDate": "2022-05-24",

  },
  {
    "no": 5,
    "title": "공지사항 5",
    "content": "다섯번째 게시글 내용입니다.",
    "createDate": "2022-05-26",
  },
];

const getPostByNo = no => {
  const array = postList.filter(x => x.no == no);
  if (array.length == 1) {
    return array[0];
  }
  return null;
}

export {
  postList,
  getPostByNo
};