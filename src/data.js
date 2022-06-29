let data = [
    {
        ask : '모임이 끝난 후, 같이 놀던 사람과 집 가는 경로가 겹친다면?',
        ans : ['잘 걸렸다 함께 가는 내내 신나게 떠든다', '화장실 간다는 핑계로 먼저 보내버린다 집 가는 길은 쉬어야 한다구!']
    },
    {
        ask : '너랑 나랑은 진짜 안 맞는 것 같아’ 에 대한 당신의 반응은?',
        ans : ['엥 왜?', '그렁그렁..왜..?']
    },
    {
        ask : '혼자 뉴욕으로 떠난 당신의 여행 스타일은?',
        ans : ['발길 닿는대로 가다 보면 자유의 여신상도 보고 월스트리트도 가보고 하는거지 뭐~ 스테이크 가게 예약? 웨이팅 하지 뭐~', '9AM - 기상 후 간단한 조식 및 외출준비, 10AM -타임스퀘어에서 뮤지컬 예매 후 지하철로 여행 전 부터 미리 예약해둔 스테이크 가게로 이동(소요시간 총 30분)']
    },
    {
        ask : '비행기를 타기 전 어떤 쪽에 가까운지?',
        ans : ['코로나도 끝났는데 주스 주나?', '비행기 갑자기 추락하면 어떡하지.. 추락하면 난 무인도로 떨어지나? 무인도에 떨어지면 어떻게 살아나가지.. 지금 내가 가지고 있는 게 물이랑.. 식량은 충분할까..? 탈출하면 유튜브 각인데.. 생존 인터뷰에선 뭐라고 말하지?']
    },
    {
        ask : '친구들과의 약속, 갑자기 취소 되었다?',
        ans : ['아쉽다.. 시간 되는 친구 없는지 열심히 카톡을 돌려보자', ' 은근히 좋다 허둥지둥 침대에 누워 이 기분을 만끽한다']
    },
    {
        ask : '당신의 방 상태는 어떤가?',
        ans : ['아 엄마 어지른거 아니라고~ 내 나름 순서와 질서가 있다고~', '(정리 잘해서 잔소리 안들음)']
    },
    {
        ask : '애인과 함께 차를 타고 영화를 보러 간 당신, 이 중 제일 가까운 것은?',
        ans : ['주차 하고 올라와 시대적 배경이 2008년도? 왠지 연출이 저렇더라니.. 어 이 OST는 누가 부른거지?내가 가서 영화표 뽑아놓을게', '왜 혼자 올라가? 같이 주차하고 올라가 혼자서는 심심하잖아!']
    },
    {
        ask : '범죄도시2를 본 당신의 머릿속은?',
        ans : ['손석구 존잘.. 연기를 너무 잘해서 그런가 몰입도 장난 아니다', '시대적 배경이 2008년도? 왠지 연출이 저렇더라니.. 어 이 OST는 누가 부른거지?']
    },
    {
        ask : '어떤 쪽이 더 편한가?',
        ans : ['왁자지껄 다수의 모임', '1대 1의 편안한 만남']
    },
    {
        ask : '1분동안 아무 생각을 안 할 수 있는가?(한번 직접 해보셈)',
        ans : ['ㅇㅅㅇ..(진짜로 안하기 가능)', '생각을 하지말라고? 눈을 감고.. 마음 속을 싹 비우자.. 머릿 속도 비우고.. 지우개로 머릿속을 지우는 상상을 하면서 생각을 하지말아보자.. (하면서 계속 생각 중)']
    },
    {
        ask : '급 만나자는 친구의 약속, 당신의 반응은?',
        ans : ['ㅡㅡ미리미리 말해야지 안 나가', '급약속 죠-하!']
    },
    {
        ask : '방학 내내 알바를 해서 아이패드를 샀다고 자랑하는 친구에게 해줄 반응은?',
        ans : ['아이패드 시리즈 뭐 삼? 얼마 모음요?', '두달내내 모은거야? 고생 많았어ㅠㅠ 완전 기분 좋겠다!']
    },
    {
        ask : '요리는 만드는 당신의 모습은?',
        ans : ['자 레시피를 보자.. 티스푼으로 한숟갈.. 버터 500g.. 저울에 재보자', '시는 내 손맛을 무시하지마라 !!! 내 직감이 곧 백종원이다!!!!']
    },
    {
        ask : '당신이 글을 쓴다면 어떤 종류를 쓸 것 같은가?',
        ans : ['칼럼이나 사건 사고 현장을 설명하는 뉴스 기사', '내가 바로 한국의 조앤 롤링이다 해리포터 비켜 반지의 제왕 비켜!!!!!!!!']
    },
    {
        ask : '노래를 들을 때 더 좋아하는 것은?',
        ans : ['멜로디', '가사']
    },
    {
        ask : '시험 기간.. 도저히 공부가 안된다',
        ans : ['효율적인 암기 방법은 뭐가 있을까? 출제 확률이 높은 범위를 찾아보자', '나는 왜.. 시험을 보아야하는가? 시험이란 무엇인가.. 무엇을 위해 시험은 존재하나.. 내가 교수가 된다면 시험을 없애겠다..']
    },
    {
        ask : '주중 야근으로 힘들었던 당신.. 주말을 어떻게 보낼 것인가?',
        ans : ['평일 내내 회사(실내)에 박혀있었는데 주말엔 친구들과 캠핑이다 !!!!!!!!!', '평일 내내 회사(집 밖)에 박혀있었는데 주말엔 집콕이다 !!!!!!!!']
    },
    {
        ask : '여행가기 전날 당신의 모습은?',
        ans : ['들떠서 후딱 집을 꾸리고 잠에 든다', '누워서 할 수 있는 상상(내일 뭐먹지,, 낼 날씨는,,,)은 다 하다가 잔다']
    },
    {
        ask : '친구와 자신의 친구가 근처에 있다며 같이 놀자고 한다면?',
        ans : ['니 친구가 내 친구지 불러 불러~', 'ㅡㅡ']
    },
    {
        ask : '약속에 30분이나 지각한 친구.. 어떤 사과가 당신의 마음을 풀게 한 것인지?',
        ans : ['갑자기 지하철이 고장나서 멈춰서 계속 기다리다가 늦었지 뭐야 진짜 미안..', '미안해 ㅠㅠ 대가리 박을까? 무릎 꿇을까? 많이 기다렸지 미안해 ㅠㅠ']
    },
    {
        ask : '당신은 모임에서 입에 단내가 나도록 떠드는 편인지, 귀에서 피날 때까지 들어주는 편인지?',
        ans : ['전자', '후자']
    }
    
]

export default data;