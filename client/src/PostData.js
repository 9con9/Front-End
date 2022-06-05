
const postList = [
  {
    "no": 5,
    "title": "[공지] 리셀뷰어 이용 금지 관련 사전 안내",
    "content": "리셀뷰어는 더 쾌적한 거래를 위해 2022.06.11 부터 새롭게 개편됩니다. 이전 사이트는 사용할 수 없습니다.",
    "createDate": "2022-06-09",

  },
  {
    "no": 4,
    "title": "리셀뷰어 서버 점검 안내 (6/3 13:30 ~ 6/10 13:00)",
    "content": "서버 시스템을 제공하기 위해 내부 서버 점검이 진행됩니다.",
    "createDate": "2022-06-03",

  },
  {
    "no": 3,
    "title": "사기꾼 예방 방지하는 방법",
    "content": "이슈페이지에 존재하는 리셀뷰어 이미지를 클릭하여 판매자의 정보를 확인하고 거래하세요.",
    "createDate": "2022-05-24",
  },
  {
    "no": 2,
    "title": "계정 도용 시 신고 방식",
    "content": "사이버안전지킴이 (https://www.police.go.kr/www/security/cyber.jsp)를 통해 피해 내용과 함께 로그인 기록을 제출",
    "createDate": "2022-05-24",

  },
  {
    "no": 1,
    "title": "리셀뷰어는 어떤 사이트인가요?",
    "content": "리셀뷰어(Resell Viewer)는 3사 사이트(중고나라, 번개장터, 당근마켓)의 중고 매물을 조회하여 직접 가격 비교하며 구매할 수 있는 사이트입니다.",
    "createDate": "2022-05-20",
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