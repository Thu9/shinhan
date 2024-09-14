interface Part1_3Data {
  name: string;
  range: string;
  rank: string;
  earnings: number;
  emoji: number;
  contents: string;
}
export const part1_3Data: Part1_3Data[] = [
  {
    name: "김*희",
    range: "20대 여성 직장인",
    rank: "파트너스",
    earnings: 914000,
    emoji: 1,
    contents:
      "학생 때 부모님이 들어놓은 보험이 있는데 매달 20만 원씩 나가고 있어요. 그래서 보험 리모델링을 알아봤는데 남을 못 믿어서 그냥 제가 해보기로 했어요! 휴.. 진작할 걸 그랬어요!! 쓸데없는 보장 다 없애고 보험료도 확 줄고 부수익까지 얻으니까 본업보다 여기에 더 관심이 가더라고요? 원래 제 보험 점검만 하려고 했는데 부모님 보험도 한 번 점검해 보려고요.",
  },
  {
    name: "이*영",
    range: "30대 중반 직장인",
    rank: "파트너스",
    earnings: 931000,
    emoji: 2,
    contents:
      "평범한 회사원으로 5시부터 8시까지 매일 하루에 3시간으로 월 평균 100만원 소득이 올라갔어요~ 요즘 잡체인지까지 고민을 하고 있어요!!",
  },
  {
    name: "강*우",
    range: "30대 초반 무직",
    rank: "매니저",
    earnings: 3010000,
    emoji: 3,
    contents:
      "10대부터 30대 초반까지 주방 조리사로 종사하며 월급이 제자리 걸음이라 신한 매니저를 지원하게 되었고 처음엔 N잡을 생각하고 들어왔는데 파트너와 매니저를 둘 다 할 수 있어 신한에서 N잡으로 이제는 큰 안정감과 시간적 + 경제적 여유를 만끽하고 있습니다!",
  },
  {
    name: "김*주",
    range: "40대 초반 주부",
    rank: "파트너스",
    earnings: 763000,
    emoji: 4,
    contents:
      "출산 후 어느 회사도 저를 받아주지 않았습니다. 육아를 하면서도 월수입 100~200만원 이상 소득을 올릴 수 있었고 내가 나의 스케줄을 조정하며 주도적인 삶을 살며 원하는 만큼 벌 수 있는 신한 파트너스 너무 좋아요! 경력 단절된 제가 신한이라는 대기업에서 일할 수 있어서 너무 좋아요~ 애사심이 뿜뿜!",
  },
  {
    name: "최*근",
    range: "20대 초반 학생",
    rank: "파트너스",
    earnings: 1803000,
    emoji: 5,
    contents:
      "교육을 듣고 알려주시는 대로 따라 해서 보험료도 절감하고 방학 때 가족끼리 좋은 시간 보내고 왔어요. 부모님이 너무 행복해 하셨어요. 대학 동기한테 자랑했더니 자기도 하고 싶다고 하네요 ㅎㅎ",
  },
  {
    name: "김*태",
    range: "30대 중반",
    rank: "매니저",
    earnings: 1110300,
    emoji: 6,
    contents:
      "5년 동안 정말 어둡고 미래가 보이지 않던 고시 생활을 정리하고 월급 300만원을 넘기기 힘들었는데, 신한 매니저로 입사하게 되어 현재 월 수령액이 2배 이상이라 너무 풍족한 삶을 누리고 있습니다.",
  },
  {
    name: "홍*섭",
    range: "20대 후반",
    rank: "매니저",
    earnings: 1630540,
    emoji: 1,
    contents:
      "10년 동안 영업인으로 살아왔지만 매월 불안정한 소득으로 미래가 불투명했는데, 신한 매니저로 입사 후 안정적인 월 소득으로 인생을 설계해 나가고 있습니다. 안정감이 주는 행복 너무 좋습니다 짱짱!",
  },
];

interface Part2Data {
  job: string;
  earnings: number;
  emoji: string;
}
export const part2Data: Part2Data[] = [
  {
    job: "직장인",
    earnings: 120,
    emoji: "worker",
  },
  {
    job: "주부",
    earnings: 116,
    emoji: "house-wife",
  },
  {
    job: "자영업자",
    earnings: 120,
    emoji: "self-employed",
  },
  {
    job: "기타",
    earnings: 120,
    emoji: "etc",
  },
];

interface Part5Data {
  job: string;
  count: number;
}

export const part5_1Data: Part5Data[] = [
  {
    job: "직장인",
    count: 412,
  },
  {
    job: "주부",
    count: 570,
  },
  {
    job: "자영업자",
    count: 299,
  },
  {
    job: "기타",
    count: 219,
  },
];

export const part5_2Data: Part5Data[] = [
  {
    job: "직장인",
    count: 210,
  },
  {
    job: "주부",
    count: 665,
  },
  {
    job: "자영업자",
    count: 516,
  },
  {
    job: "기타",
    count: 402,
  },
];

interface Part6Data {
  name: string;
  job: string;
  title: string;
  contents: string;
}

export const part6_1Data: Part6Data[] = [
  {
    name: "강*우",
    job: "30대 초반",
    title: "<span>10대부터 주방 조리사</span>에서 신한 매니저로",
    contents:
      "10대 부터 30대초반까지 주방 조리사로 종사하며 월급이 제자리 걸음이라 신한 매니저를 지원하게 되었고 처음엔 N잡을 생각하고 들어왔는데 파트너와 매니저를 둘다 수 있기 때문에 신한에서 <span>N잡</span>으로 이제는 <span>큰 안정감과 시간적 + 경제적 여유를 만끽</span>하고 있습니다!",
  },
  {
    name: "김*태",
    job: "30대 중반",
    title: "한없이 <span>어둡던 고시생활 5년</span>을 마치고",
    contents:
      "5년 정말 어둡고 미래가 보이지 않던 고시생활을 정리하고 월급 300만원을 넘기기 힘들었는데 신한 매니저로 입사하게 되어 현재 <span>월 수령액의 2배 이상 수령 중</span>이라 너무 <span>풍족한 삶</span>을 누리고 있습니다.",
  },
  {
    name: "홍*섭",
    job: "20대 후반",
    title: "<span>10년 동안의 영업인</span>의 불안감을 떨치고",
    contents:
      "10년 동안 영업인으로 살아왔지만 매월 불안정한 소득으로 미래가 불투명 했는데신한 매니저로 입사 후 <span>안정적인 월 소득</span>으로 인생을 설계해 나가고 있습니다.<br/> <span>안정감이 주는 행복</span> 너무 좋습니다 짱짱!!",
  },
];
export const part6_2Data: Part6Data[] = [
  {
    name: "최*근",
    job: "20대 초반 학생",
    title:
      "우리 가족 <span>보험 점검</span>하고 가족끼리 <span>해외여행</span>",
    contents:
      "교육을 듣고 알려주시는 대로 따라 해서 <span>보험료도 절감</span>하고 <span>방학때 가족끼리 좋은 시간</span>보내고 왔어요. 부모님이 너무 행복해 하셨어요! 대학 동기한테 자랑했더니 자기도 하고 싶다고 하네요 ㅎㅎ",
  },
  {
    name: "이*영",
    job: "30대 중반 직장인",
    title: "<span>N잡</span>으로 <span>하루에 3시간</span> 너무 든든해요~",
    contents:
      "평범한 회사원으로 5시부터 8시까지 매일 <span>하루에 3시간</span>으로 <span>월 평균 100만원 소득</span>이 올라갔어요~ 요즘 잡체인지까지 고민을 하고 있어요!!",
  },
  {
    name: "김*주",
    job: "40대 초반 주부",
    title: "<span>경력 단절 엄마</span>에서 대기업에서 일할 수 있어 감사",
    contents:
      "출산을 하고 어느 회사도 저를 받아주지 않았습니다. <span>육아를 하면서도 월수입 100~200만원 이상 소득</span>을 올릴 수 있었고 내가 나의 스케쥴을 조정하면서 주도적인 삶을 살고 <span>하는 만큼 벌수 있는 신한파트너스</span> 너무 너무 좋아요!! 경력 단절된 제가 신한이라는 대기업에서 일할 수 있어서 너무 좋아요~ 애사심이 뿜뿜!!",
  },
];
