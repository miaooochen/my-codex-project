const commonsImage = (title, width = 1280) =>
  `https://commons.wikimedia.org/wiki/Special:Redirect/file/${encodeURIComponent(title)}?width=${width}`;

const lifetourImage = (path) => `https://static.lifetour.info/${path}`;

const tripData = {
  title: "雲南心旅 8 日",
  groupCode: "KMG08CI26525K01",
  departureDate: "2026/05/25",
  duration: "8天7夜",
  departureCity: "高雄",
  route: "高雄 → 香港 → 昆明 → 大理 → 麗江 → 香格里拉 → 昆明 → 香港 → 高雄",
  price: {
    adult: "NT$48,800",
    childWithBed: "NT$48,800",
    childNoBed: "NT$45,800",
    singleRoom: "NT$57,800",
    deposit: "NT$15,000",
    permit: "台胞證正常件 NT$1,700"
  },
  includes: [
    "含團體保險與國內外機場稅",
    "全程三排椅遊覽車，座位較寬敞",
    "無購物站、無自費行程、不進景中店",
    "每日每人一瓶礦泉水、每日 1G 網卡"
  ],
  fit: [
    "想看自然風景與古城，不想趕太多購物點的旅客",
    "長輩同行、重視座位舒適度與每日資訊清楚的人",
    "可以接受部分高原地區與較長拉車日的旅客"
  ],
  highlights: [
    "洱海生態廊道搭音樂敞篷車巡遊，安排旅拍與短影片",
    "玉龍雪山、雲杉坪纜車、藍月谷，風景集中度高",
    "香格里拉秘境巴拉格宗大峽谷、回音壁棧道、巴拉村",
    "白沙雪山腳下下午茶、印象麗江秀、麗江御宴沉浸式晚宴"
  ],
  pace: [
    "第 2 天昆明到大理約 4.5 小時車程，屬較長移動日",
    "第 5 天麗江到香格里拉，再到巴拉格宗，當天移動較多",
    "第 7 天安排香格里拉飛昆明，減少回程長途拉車負擔",
    "整體節奏中等偏滿，建議每日早睡、多補水、少逞強"
  ],
  flights: [
    {
      day: "D1",
      airline: "華信航空",
      flightNo: "AE983",
      from: "高雄小港機場",
      to: "香港赤鱲角機場",
      depart: "2026/05/25 07:35",
      arrive: "2026/05/25 09:10"
    },
    {
      day: "D1",
      airline: "中國東方航空",
      flightNo: "MU9624",
      from: "香港赤鱲角機場",
      to: "昆明長水機場",
      depart: "2026/05/25 11:25",
      arrive: "2026/05/25 14:00"
    },
    {
      day: "D7",
      airline: "中國東方航空",
      flightNo: "MU5934",
      from: "迪慶香格里拉機場",
      to: "昆明長水機場",
      depart: "2026/05/31 09:05",
      arrive: "2026/05/31 10:50"
    },
    {
      day: "D8",
      airline: "中國東方航空",
      flightNo: "MU733",
      from: "昆明長水機場",
      to: "香港赤鱲角機場",
      depart: "2026/06/01 13:40",
      arrive: "2026/06/01 16:05"
    },
    {
      day: "D8",
      airline: "中華航空",
      flightNo: "CI936",
      from: "香港赤鱲角機場",
      to: "高雄小港機場",
      depart: "2026/06/01 20:40",
      arrive: "2026/06/01 22:10"
    }
  ],
  days: [
    {
      id: "d1",
      label: "D1",
      title: "高雄／香港／昆明",
      route: "高雄 → 香港 → 昆明",
      theme: "搭機移動日，抵達昆明後輕鬆參觀市區景點。",
      spots: [
        {
          name: "大觀公園",
          mapQuery: "昆明 大觀公園",
          type: "park",
          caption: "昆明代表性湖畔園林",
          image: commonsImage("大观公园入口_2025-09-20.jpg", 1280)
        },
        {
          name: "庾園",
          mapQuery: "昆明 庾園",
          type: "garden",
          caption: "園林散步，節奏輕鬆",
          image: commonsImage("昆明大观公园南园—庾园（庾家花园）旅游信息牌.jpg", 1280)
        }
      ],
      meals: {
        breakfast: "無",
        lunch: "依航司安排",
        dinner: "菌火鍋風味（人民幣 50 元）"
      },
      hotel: "西部智選假日酒店／華美達安可酒店或同級",
      care: [
        "第一天以移動為主，建議長輩穿好走鞋、上機前先備妥藥品。",
        "團體機票開立後無法退票，證件請再次確認。"
      ]
    },
    {
      id: "d2",
      label: "D2",
      title: "昆明 → 大理",
      route: "昆明 → 大理（車程約 350 公里，約 4.5 小時）",
      theme: "走白族村落、洱海風景線與大理古城，是拍照重點日。",
      spots: ["鳳陽邑村", "有風小院外拍", "洱海生態廊道", "音樂敞篷車巡遊", "大理古城", "五華樓", "洋人街"],
      meals: {
        breakfast: "酒店內用",
        lunch: "白族風味（人民幣 50 元）",
        dinner: "南澗跳菜（人民幣 50 元）"
      },
      hotel: "洱海公園萬達美華輕尚酒店／龐業雅閣酒店或同級",
      care: [
        "今天有較長車程，建議隨身帶小點心與暈車藥。",
        "洱海邊風較大，請帶薄外套。"
      ]
    },
    {
      id: "d3",
      label: "D3",
      title: "大理 → 沙溪古鎮 → 麗江",
      route: "大理 → 沙溪古鎮（約 2 小時）→ 麗江（約 1.5 小時）",
      theme: "古鎮與古城散步日，正式進入較高海拔區域。",
      spots: ["沙溪古鎮", "玉津橋", "古戲臺", "寺登街", "黑龍潭", "麗江古城", "四方街"],
      meals: {
        breakfast: "酒店內用",
        lunch: "古鎮風味（人民幣 60 元）",
        dinner: "納西風味＋篝火打跳（人民幣 60 元）"
      },
      hotel: "國際品牌 5★ 晶璽希爾頓酒店或同級",
      care: [
        "雲南日夜溫差約 12～15°C，晚上偏涼，要加件外套。",
        "麗江海拔較高，今天開始要多喝水、少快走、避免喝酒。"
      ]
    },
    {
      id: "d4",
      label: "D4",
      title: "麗江玉龍雪山景區",
      route: "麗江市區 ↔ 玉龍雪山景區",
      theme: "全團代表性最高的自然景觀日，也是高海拔重點日。",
      spots: ["玉龍雪山", "雲杉坪纜車", "雲杉坪棧道電瓶車", "藍月谷", "印象麗江秀", "玉水寨", "白沙下午茶", "麗江御宴"],
      meals: {
        breakfast: "飯店內用",
        lunch: "雪廚自助餐（人民幣 48 元）",
        dinner: "麗江御宴風味含換裝（人民幣 100 元）"
      },
      hotel: "國際品牌 5★ 晶璽希爾頓酒店或同級",
      care: [
        "若纜車停駛，可能改牦牛坪纜車，請依領隊安排。",
        "今天海拔高、走動多，長輩請放慢速度，不舒服就立刻告知領隊。"
      ]
    },
    {
      id: "d5",
      label: "D5",
      title: "麗江 → 香格里拉 → 巴拉格宗",
      route: "麗江 → 香格里拉（約 3 小時）→ 巴拉格宗（約 1.5 小時）",
      theme: "前往藏區風情路線，兼具文化體驗與峽谷景觀。",
      spots: ["土司莊園", "酥油茶製作／瑪尼石祈福／藏服換裝三選一", "香格里拉大峽谷", "千年菩提樹"],
      meals: {
        breakfast: "飯店內用",
        lunch: "土司宴（人民幣 60 元）",
        dinner: "生態餐（人民幣 50 元）"
      },
      hotel: "巴拉格宗藏式生態大酒店或同級",
      care: [
        "今天移動較長，請提早休息，保暖用品與帽子建議放隨身包。",
        "進入較高海拔區域，切勿勉強爬快、跑步或提重物。"
      ]
    },
    {
      id: "d6",
      label: "D6",
      title: "巴拉格宗景區 → 中甸",
      route: "巴拉格宗景區 → 中甸（約 1.5 小時）",
      theme: "香格里拉秘境核心景觀日，有高空棧道與藏文化景點。",
      spots: ["香巴拉天然佛塔", "回音壁高空玻璃景觀棧道", "巴拉村", "卓瑪拉康", "納帕海", "獨克宗古城", "月光廣場", "轉經筒"],
      meals: {
        breakfast: "酒店內用",
        lunch: "巴拉村合菜（人民幣 50 元）",
        dinner: "藏式風味（人民幣 60 元）"
      },
      hotel: "香格里拉華美達酒店／智選假日酒店或同級",
      care: [
        "有玻璃棧道與高海拔景觀點，怕高或體力較弱者可量力參加。",
        "納帕海與古城拍照點較多，請注意腳下與保暖。"
      ]
    },
    {
      id: "d7",
      label: "D7",
      title: "香格里拉 → 昆明",
      route: "香格里拉 → 昆明（搭國內段班機）",
      theme: "搭機回昆明，步調較輕鬆，安排城市散步。",
      spots: ["金殿", "金馬碧雞坊", "南強街"],
      meals: {
        breakfast: "飯店內用",
        lunch: "中式合菜（人民幣 50 元）",
        dinner: "滇菜風味（人民幣 100 元）"
      },
      hotel: "國際品牌準 5★ 昆明古滇皇冠假日酒店或同級",
      care: [
        "香格里拉回昆明的班機時間，需依出團前最終通知為準。",
        "今天可趁機整理行李、確認返台證件與託運規則。"
      ]
    },
    {
      id: "d8",
      label: "D8",
      title: "昆明／香港／高雄",
      route: "昆明 → 香港 → 高雄",
      theme: "回程日，上午安排官渡古鎮，之後前往機場返家。",
      spots: ["官渡古鎮"],
      meals: {
        breakfast: "酒店提供",
        lunch: "依航司安排",
        dinner: "依航司安排"
      },
      hotel: "溫暖的家",
      care: [
        "返程轉機時間較長，重要藥品與保暖衣物請放手提行李。",
        "集合與登機時間請全程跟著領隊走，避免分散。"
      ]
    }
  ],
  health: [
    "雲南屬高原型氣候，早晚溫差大，請備保暖外套、雨具與常用藥。",
    "麗江、香格里拉等地海拔較高，避免急走、跑步、提重物，出現頭暈喘不過氣要立刻休息。",
    "高海拔區域宜少飲酒、多喝水、多吃蔬果，若有慢性病請先詢問醫師。",
    "紫外線強，帽子、太陽眼鏡、防曬乳建議一定要帶。"
  ],
  expenses: [
    "隨團服務費建議每人每日 NT$300，交給領隊統籌。",
    "房間床頭小費：每天人民幣 10～15 元。",
    "行李小費：每件人民幣 10～15 元。",
    "按摩小費：人民幣 20～30 元。",
    "不含接送費、簽證費、個人洗衣電話費與房內自費飲品。"
  ],
  travelTips: [
    "中國部分飯店不提供一次性盥洗用品，牙刷、牙膏、拖鞋最好自備。",
    "氧氣瓶不能隨身或托運上飛機，如有需要請於當地購買並留意使用時機。",
    "大陸飯店加床常為折疊床或床墊，三人一室舒適度通常較低。",
    "遇到景區或纜車因天候調整，請以當地導遊與領隊安排為準。"
  ],
  utility: [
    "中國電壓 220V，部分飯店浴室提供 110V 插座。",
    "插座常見 2 孔圓形、2 孔扁形，建議自備轉接頭。",
    "團體贈送每日 1G 網卡，但若長時間傳照片或視訊，可能不夠用。",
    "證件與手機請分開收納，避免一路拿在手上遺失。"
  ],
  checklist: [
    "台胞證與護照資料確認完成",
    "慢性病藥、腸胃藥、止痛藥、暈車藥帶齊",
    "厚薄外套各一件，方便應付日夜溫差",
    "帽子、墨鏡、防曬乳、護唇膏帶齊",
    "防滑好走的鞋子已準備",
    "轉接頭、充電器、行動電源收好",
    "牙刷、牙膏、拖鞋等個人用品自備",
    "人民幣零錢與小費預先準備",
    "重要聯絡電話寫在紙本上備用",
    "手提行李放一套保暖衣物與常用藥"
  ]
};

const storageKey = "yunnan-trip-checklist";
const summaryCards = document.querySelector("#summaryCards");
const highlightList = document.querySelector("#highlightList");
const includedList = document.querySelector("#includedList");
const paceList = document.querySelector("#paceList");
const priceBox = document.querySelector("#priceBox");
const dayPicker = document.querySelector("#dayPicker");
const scheduleList = document.querySelector("#scheduleList");
const flightList = document.querySelector("#flightList");
const hotelList = document.querySelector("#hotelList");
const healthList = document.querySelector("#healthList");
const expenseList = document.querySelector("#expenseList");
const travelTipsList = document.querySelector("#travelTipsList");
const utilityList = document.querySelector("#utilityList");
const checklistGrid = document.querySelector("#checklistGrid");
const resetChecklist = document.querySelector("#resetChecklist");

const spotDetails = {
  大觀公園: { mapQuery: "昆明 大觀公園", type: "park", caption: "昆明代表性湖畔園林" },
  庾園: { mapQuery: "昆明 庾園", type: "garden", caption: "園林散步，節奏輕鬆" },
  鳳陽邑村: {
    mapQuery: "大理 凤阳邑村",
    type: "village",
    caption: "白族村落與田園風景",
    image: commonsImage("大理古城 - 航拍 - 全景 - 2024-10-13.jpg")
  },
  有風小院外拍: {
    mapQuery: "大理 凤阳邑村 有风小院",
    type: "courtyard",
    caption: "適合拍照留念的小院場景",
    image: lifetourImage("eWeb_lifetour/IMGDB/001518/001541/00131290.JPG/900x-")
  },
  洱海生態廊道: {
    mapQuery: "大理 洱海生态廊道",
    type: "lake",
    caption: "洱海邊最舒服的散步線",
    image: commonsImage("洱海-洱海公园一带10.jpg")
  },
  音樂敞篷車巡遊: {
    mapQuery: "大理 洱海生态廊道",
    type: "roadtrip",
    caption: "沿洱海巡遊，風景一路看",
    image: commonsImage("大理才村的洱海 01.jpg")
  },
  大理古城: {
    mapQuery: "大理古城",
    type: "oldtown",
    caption: "大理最熱門古城區",
    image: commonsImage("大理古城.JPG")
  },
  五華樓: {
    mapQuery: "大理 五华楼",
    type: "tower",
    caption: "古城核心地標",
    image: commonsImage("大理古城.JPG")
  },
  洋人街: {
    mapQuery: "大理 洋人街",
    type: "street",
    caption: "古城商街，好逛好拍",
    image: commonsImage("大理古城 - 航拍 - 全景 - 2024-10-13.jpg")
  },
  沙溪古鎮: {
    mapQuery: "剑川 沙溪古镇",
    type: "oldtown",
    caption: "茶馬古道上的靜謐古鎮",
    image: commonsImage("剑川沙溪古镇.jpg")
  },
  玉津橋: {
    mapQuery: "沙溪古镇 玉津桥",
    type: "bridge",
    caption: "沙溪最經典的老橋景色",
    image: commonsImage("沙溪玉津桥 2025-09-27.jpg")
  },
  古戲臺: {
    mapQuery: "沙溪古镇 古戏台",
    type: "stage",
    caption: "古鎮歷史感很強的戲臺",
    image: commonsImage("剑川沙溪古镇 07.jpg")
  },
  寺登街: {
    mapQuery: "沙溪古镇 寺登街",
    type: "street",
    caption: "老街散步區，店鋪集中",
    image: commonsImage("剑川沙溪古镇.jpg")
  },
  黑龍潭: {
    mapQuery: "丽江 黑龙潭",
    type: "park",
    caption: "看雪山倒影的經典點",
    image: commonsImage("丽江黑龙潭公园.JPG")
  },
  麗江古城: {
    mapQuery: "丽江古城",
    type: "oldtown",
    caption: "納西風情古城區",
    image: commonsImage("世界文化遗产丽江古城.JPG")
  },
  四方街: {
    mapQuery: "丽江古城 四方街",
    type: "square",
    caption: "古城最熱鬧的中心",
    image: commonsImage("丽江古城 - panoramio (5).jpg")
  },
  玉龍雪山: {
    mapQuery: "玉龙雪山",
    type: "mountain",
    caption: "麗江代表雪山景點",
    image: lifetourImage("eWeb_lifetour//eWeb_lifetour/IMGDB/001518/001541/00062158.jpg/900x-")
  },
  雲杉坪纜車: {
    mapQuery: "玉龙雪山 云杉坪索道",
    type: "cablecar",
    caption: "進入雪山景區的重要路線",
    image: lifetourImage("eWeb_lifetour//eWeb_lifetour/IMGDB/001518/001541/00129360.JPG/900x-")
  },
  雲杉坪棧道電瓶車: {
    mapQuery: "玉龙雪山 云杉坪",
    type: "mountain",
    caption: "高山草甸步道與接駁",
    image: lifetourImage("eWeb_lifetour//eWeb_lifetour/IMGDB/001518/001541/00129360.JPG/900x-")
  },
  藍月谷: {
    mapQuery: "玉龙雪山 蓝月谷",
    type: "lake",
    caption: "藍綠色湖水非常好拍",
    image: lifetourImage("eWeb_lifetour//eWeb_lifetour/IMGDB/001518/001541/00038471.JPG/900x-")
  },
  印象麗江秀: {
    mapQuery: "玉龙雪山 印象丽江",
    type: "show",
    caption: "雪山腳下大型戶外表演",
    image: lifetourImage("eWeb_lifetour//eWeb_lifetour/IMGDB/001518/001541/00068014.JPG/900x-")
  },
  玉水寨: {
    mapQuery: "丽江 玉水寨",
    type: "temple",
    caption: "納西文化與水景園區",
    image: lifetourImage("eWeb_lifetour//eWeb_lifetour/IMGDB/001518/001541/00062158.jpg/900x-")
  },
  白沙下午茶: {
    mapQuery: "丽江 白沙古镇",
    type: "cafe",
    caption: "雪山腳下慢慢坐著看景",
    image: commonsImage("白沙古镇 04.jpg")
  },
  麗江御宴: {
    mapQuery: "丽江 御宴",
    type: "banquet",
    caption: "沉浸式晚宴體驗",
    image: commonsImage("世界文化遗产丽江古城.JPG")
  },
  土司莊園: {
    mapQuery: "香格里拉 土司庄园",
    type: "manor",
    caption: "藏式風情體驗地點",
    image: commonsImage("云南香格里拉独克宗古城4.JPG")
  },
  "酥油茶製作／瑪尼石祈福／藏服換裝三選一": {
    mapQuery: "香格里拉 土司庄园",
    type: "culture",
    caption: "藏文化互動體驗活動",
    image: commonsImage("云南香格里拉独克宗古城1.JPG")
  },
  香格里拉大峽谷: {
    mapQuery: "香格里拉大峡谷 巴拉格宗",
    type: "canyon",
    caption: "峽谷地形壯觀，視野開闊",
    image: lifetourImage("eWeb_lifetour//eWeb_lifetour/IMGDB/001518/001541/00130454.JPG/900x-")
  },
  千年菩提樹: {
    mapQuery: "巴拉格宗 千年菩提树",
    type: "tree",
    caption: "景區內知名靜心景點",
    image: lifetourImage("eWeb_lifetour//eWeb_lifetour/IMGDB/001518/001541/00130454.JPG/900x-")
  },
  香巴拉天然佛塔: {
    mapQuery: "巴拉格宗 香巴拉天然佛塔",
    type: "temple",
    caption: "香格里拉秘境代表景點",
    image: lifetourImage("eWeb_lifetour//eWeb_lifetour/IMGDB/001518/001541/00130454.JPG/900x-")
  },
  回音壁高空玻璃景觀棧道: {
    mapQuery: "巴拉格宗 回音壁高空玻璃栈道",
    type: "skywalk",
    caption: "高空棧道，視野刺激遼闊",
    image: lifetourImage("eWeb_lifetour//eWeb_lifetour/IMGDB/001518/001541/00130450.JPG/900x-")
  },
  巴拉村: {
    mapQuery: "巴拉格宗 巴拉村",
    type: "village",
    caption: "雪山腳下的藏族村落",
    image: lifetourImage("eWeb_lifetour//eWeb_lifetour/IMGDB/001518/001541/00130454.JPG/900x-")
  },
  卓瑪拉康: {
    mapQuery: "巴拉格宗 卓玛拉康",
    type: "temple",
    caption: "藏式宗教文化景點",
    image: lifetourImage("eWeb_lifetour//eWeb_lifetour/IMGDB/001518/001541/00130454.JPG/900x-")
  },
  納帕海: {
    mapQuery: "香格里拉 纳帕海",
    type: "lake",
    caption: "高原濕地與草原景色",
    image: commonsImage("纳帕海.jpg")
  },
  獨克宗古城: {
    mapQuery: "香格里拉 独克宗古城",
    type: "oldtown",
    caption: "香格里拉最有名古城區",
    image: commonsImage("独克宗古城 - 北门街巷道 - 2025-05-08.jpg")
  },
  月光廣場: {
    mapQuery: "香格里拉 月光广场",
    type: "square",
    caption: "古城周邊重要廣場",
    image: commonsImage("云南香格里拉独克宗古城4.JPG")
  },
  轉經筒: {
    mapQuery: "香格里拉 世界最大转经筒",
    type: "tower",
    caption: "獨克宗經典地標",
    image: commonsImage("香格里拉的转经筒 - panoramio.jpg")
  },
  金殿: {
    mapQuery: "昆明 金殿",
    type: "temple",
    caption: "昆明知名道教古建築",
    image: commonsImage("Golden Temple Kunming 2.jpg")
  },
  金馬碧雞坊: {
    mapQuery: "昆明 金马碧鸡坊",
    type: "gate",
    caption: "昆明城市地標牌坊",
    image: commonsImage("金马碧鸡坊.jpg")
  },
  南強街: {
    mapQuery: "昆明 南强街",
    type: "street",
    caption: "夜間散步與覓食街區",
    image: commonsImage("中国云南省昆明 金马碧鸡坊 - panoramio.jpg")
  },
  官渡古鎮: {
    mapQuery: "昆明 官渡古镇",
    type: "oldtown",
    caption: "昆明返程前的古鎮散步點",
    image: commonsImage("官渡古镇牌坊.jpg")
  }
};

const artThemes = {
  park: { sky: "#dff2e5", ground: "#7cb16f", accent: "#4f7d48", deco: "garden" },
  garden: { sky: "#eef1d5", ground: "#99b15e", accent: "#6c7d38", deco: "garden" },
  village: { sky: "#f4e7d0", ground: "#c48759", accent: "#8a5b3d", deco: "village" },
  courtyard: { sky: "#f8ead7", ground: "#d08b62", accent: "#8c4f2d", deco: "village" },
  lake: { sky: "#d8f1f8", ground: "#5c9ec9", accent: "#2d6d96", deco: "lake" },
  roadtrip: { sky: "#f7e5c7", ground: "#e09c57", accent: "#885129", deco: "road" },
  oldtown: { sky: "#f7eadf", ground: "#b57a53", accent: "#7a4930", deco: "town" },
  tower: { sky: "#efe6ff", ground: "#8c7ad2", accent: "#5a4e9f", deco: "tower" },
  street: { sky: "#fce8d4", ground: "#dd8a4a", accent: "#9f4f27", deco: "town" },
  bridge: { sky: "#dff3f6", ground: "#6c9aa6", accent: "#395d66", deco: "bridge" },
  stage: { sky: "#fde3d8", ground: "#d76f55", accent: "#863727", deco: "stage" },
  square: { sky: "#f8e6cb", ground: "#d5a15b", accent: "#84592f", deco: "town" },
  mountain: { sky: "#ddeffd", ground: "#6f97b5", accent: "#3b5d78", deco: "mountain" },
  cablecar: { sky: "#d9ebff", ground: "#6f8fbd", accent: "#3a537a", deco: "cable" },
  show: { sky: "#1f314f", ground: "#b86843", accent: "#f0c45c", deco: "show" },
  temple: { sky: "#f3e5cf", ground: "#c28f4f", accent: "#8d5620", deco: "temple" },
  cafe: { sky: "#f8eadf", ground: "#d3a27b", accent: "#7c4c2c", deco: "cafe" },
  banquet: { sky: "#40263b", ground: "#b05f53", accent: "#f0d0a4", deco: "show" },
  manor: { sky: "#efe1d2", ground: "#b37f54", accent: "#734628", deco: "village" },
  culture: { sky: "#efe0f7", ground: "#9d6da8", accent: "#63396c", deco: "temple" },
  canyon: { sky: "#f7e2d1", ground: "#c77b4d", accent: "#7a4426", deco: "canyon" },
  tree: { sky: "#ecf2d3", ground: "#7aa85d", accent: "#4c7039", deco: "tree" },
  skywalk: { sky: "#ddecff", ground: "#7f9bc0", accent: "#4c6487", deco: "bridge" },
  gate: { sky: "#f8e4d8", ground: "#d78055", accent: "#93411d", deco: "gate" }
};

const createSpotArt = (spotName, type = "oldtown") => {
  const theme = artThemes[type] || artThemes.oldtown;
  const baseShapes = {
    mountain: `
      <polygon points="0,92 52,38 100,92" fill="${theme.accent}" opacity="0.95"/>
      <polygon points="64,92 120,26 176,92" fill="${theme.ground}" opacity="0.9"/>
      <polygon points="106,92 154,48 212,92" fill="${theme.accent}" opacity="0.8"/>
      <rect x="0" y="92" width="260" height="38" fill="#f8f3ea" opacity="0.45"/>
    `,
    lake: `
      <circle cx="208" cy="28" r="14" fill="#fff7cf" />
      <path d="M0 84 C42 76, 72 92, 112 84 S182 74, 260 82 L260 130 L0 130 Z" fill="${theme.ground}" />
      <path d="M0 90 C40 84, 94 98, 148 90 S210 82, 260 88 L260 130 L0 130 Z" fill="${theme.accent}" opacity="0.92" />
    `,
    town: `
      <rect x="22" y="52" width="48" height="34" rx="3" fill="${theme.accent}" />
      <polygon points="16,54 46,32 76,54" fill="${theme.ground}" />
      <rect x="96" y="44" width="58" height="42" rx="3" fill="${theme.ground}" />
      <polygon points="88,46 125,22 164,46" fill="${theme.accent}" />
      <rect x="176" y="58" width="34" height="28" rx="3" fill="${theme.accent}" />
      <polygon points="170,60 193,42 216,60" fill="${theme.ground}" />
      <rect x="0" y="86" width="260" height="44" fill="#f7eddc" opacity="0.42"/>
    `,
    village: `
      <polygon points="0,84 52,42 102,84" fill="${theme.accent}" />
      <rect x="18" y="56" width="64" height="30" fill="${theme.ground}" />
      <polygon points="106,86 148,48 188,86" fill="${theme.ground}" />
      <rect x="122" y="60" width="48" height="26" fill="${theme.accent}" />
      <rect x="0" y="86" width="260" height="44" fill="#f8efe5" opacity="0.42"/>
    `,
    bridge: `
      <circle cx="50" cy="26" r="12" fill="#fff6ce" />
      <path d="M0 92 C38 84, 82 92, 124 88 S198 84, 260 92 L260 130 L0 130 Z" fill="${theme.ground}" />
      <path d="M34 82 Q82 38 130 82" stroke="${theme.accent}" stroke-width="10" fill="none" />
      <line x1="42" y1="82" x2="124" y2="82" stroke="${theme.accent}" stroke-width="8" />
    `,
    temple: `
      <polygon points="60,52 126,28 192,52" fill="${theme.accent}" />
      <rect x="74" y="52" width="104" height="36" rx="3" fill="${theme.ground}" />
      <rect x="116" y="64" width="18" height="24" fill="${theme.accent}" />
      <rect x="0" y="88" width="260" height="42" fill="#f8f2e8" opacity="0.42"/>
    `,
    tower: `
      <rect x="108" y="34" width="44" height="52" rx="4" fill="${theme.accent}" />
      <polygon points="100,36 130,16 160,36" fill="${theme.ground}" />
      <rect x="96" y="86" width="68" height="10" rx="3" fill="${theme.ground}" />
      <rect x="0" y="96" width="260" height="34" fill="#f7eee1" opacity="0.42"/>
    `,
    road: `
      <circle cx="44" cy="26" r="11" fill="#fff4be" />
      <path d="M112 34 C134 48, 150 74, 146 130 L114 130 C120 86, 104 58, 88 44 Z" fill="${theme.accent}" />
      <rect x="0" y="96" width="260" height="34" fill="#f7efe5" opacity="0.4"/>
    `,
    stage: `
      <rect x="52" y="52" width="156" height="34" rx="5" fill="${theme.accent}" />
      <path d="M52 52 Q130 8 208 52" fill="${theme.ground}" />
      <circle cx="76" cy="70" r="4" fill="#fff3d1" />
      <circle cx="130" cy="70" r="4" fill="#fff3d1" />
      <circle cx="184" cy="70" r="4" fill="#fff3d1" />
    `,
    cable: `
      <line x1="18" y1="36" x2="242" y2="36" stroke="${theme.accent}" stroke-width="5" />
      <line x1="120" y1="36" x2="108" y2="62" stroke="${theme.accent}" stroke-width="3" />
      <rect x="90" y="62" width="36" height="22" rx="4" fill="${theme.ground}" />
      <polygon points="0,100 54,46 102,100" fill="${theme.accent}" opacity="0.95"/>
      <polygon points="92,100 146,40 202,100" fill="${theme.ground}" opacity="0.92"/>
    `,
    cafe: `
      <circle cx="48" cy="28" r="12" fill="#fff3d0" />
      <rect x="46" y="56" width="120" height="28" rx="6" fill="${theme.ground}" />
      <rect x="62" y="44" width="22" height="12" rx="4" fill="${theme.accent}" />
      <rect x="90" y="44" width="22" height="12" rx="4" fill="${theme.accent}" />
      <rect x="118" y="44" width="22" height="12" rx="4" fill="${theme.accent}" />
    `,
    canyon: `
      <path d="M0 96 L42 48 L82 96 L114 38 L146 96 L192 26 L236 96 L260 96 L260 130 L0 130 Z" fill="${theme.accent}" />
      <path d="M0 106 Q84 88 132 98 T260 104 L260 130 L0 130 Z" fill="${theme.ground}" opacity="0.95" />
    `,
    tree: `
      <circle cx="120" cy="46" r="26" fill="${theme.ground}" />
      <circle cx="146" cy="58" r="20" fill="${theme.accent}" />
      <circle cx="98" cy="60" r="18" fill="${theme.accent}" />
      <rect x="114" y="66" width="18" height="26" rx="4" fill="#7a5631" />
      <rect x="0" y="92" width="260" height="38" fill="#f3efdf" opacity="0.4"/>
    `,
    gate: `
      <rect x="72" y="46" width="18" height="42" fill="${theme.accent}" />
      <rect x="170" y="46" width="18" height="42" fill="${theme.accent}" />
      <rect x="84" y="42" width="98" height="12" rx="3" fill="${theme.ground}" />
      <rect x="96" y="58" width="74" height="10" rx="3" fill="${theme.ground}" />
      <rect x="0" y="94" width="260" height="36" fill="#f7eee1" opacity="0.42"/>
    `
  };

  const shapes = baseShapes[theme.deco] || baseShapes.town;
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 130" role="img" aria-label="${spotName}">
      <defs>
        <linearGradient id="bg" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stop-color="${theme.sky}" />
          <stop offset="100%" stop-color="#fffaf2" />
        </linearGradient>
      </defs>
      <rect width="260" height="130" rx="22" fill="url(#bg)" />
      ${shapes}
      <rect x="14" y="14" width="98" height="24" rx="12" fill="rgba(255,255,255,0.72)" />
      <text x="24" y="31" font-size="14" font-family="Noto Sans TC, PingFang TC, sans-serif" fill="${theme.accent}">
        ${spotName.slice(0, 8)}
      </text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
};

const normalizeSpot = (spot) => {
  if (typeof spot !== "string") {
    return {
      ...spot,
      image: spot.image || createSpotArt(spot.name, spot.type),
      mapHref:
        spot.mapHref ||
        `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(spot.mapQuery || spot.name)}`
    };
  }

  const detail = spotDetails[spot] || {};

  return {
    name: spot,
    type: detail.type || "oldtown",
    caption: detail.caption || "點開地圖可直接看位置",
    mapQuery: detail.mapQuery || spot,
    image: detail.image || createSpotArt(spot, detail.type),
    mapHref: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(detail.mapQuery || spot)}`
  };
};

const renderBulletList = (element, items) => {
  element.innerHTML = items.map((item) => `<li>${item}</li>`).join("");
};

const summaryItems = [
  { label: "出發日期", value: tripData.departureDate },
  { label: "旅遊天數", value: tripData.duration },
  { label: "成人團費", value: tripData.price.adult },
  { label: "主要路線", value: "昆明・大理・麗江・香格里拉" }
];

summaryCards.innerHTML = summaryItems
  .map(
    (item) => `
      <article class="summary-card">
        <span class="label">${item.label}</span>
        <strong>${item.value}</strong>
      </article>
    `
  )
  .join("");

priceBox.innerHTML = `
  <span class="label">成人團費</span>
  <strong>${tripData.price.adult}</strong>
`;

renderBulletList(highlightList, tripData.highlights);
renderBulletList(includedList, [
  ...tripData.includes,
  `訂金：${tripData.price.deposit}`,
  `兒童不佔床：${tripData.price.childNoBed}`,
  `指定單人房：${tripData.price.singleRoom}`,
  tripData.price.permit
]);
renderBulletList(paceList, tripData.pace);
renderBulletList(healthList, tripData.health);
renderBulletList(expenseList, tripData.expenses);
renderBulletList(travelTipsList, tripData.travelTips);
renderBulletList(utilityList, tripData.utility);

dayPicker.innerHTML = tripData.days
  .map(
    (day, index) => `
      <button class="day-chip${index === 0 ? " is-active" : ""}" type="button" data-day-target="${day.id}">
        ${day.label}
      </button>
    `
  )
  .join("");

scheduleList.innerHTML = tripData.days
  .map(
    (day) => `
      <article class="day-card" id="${day.id}">
        <div class="day-card__top">
          <div>
            <span class="day-badge">${day.label}</span>
            <h3>${day.title}</h3>
            <p class="route">${day.route}</p>
          </div>
          <div class="care-box">
            <span class="label">今天重點</span>
            <span class="value">${day.theme}</span>
          </div>
        </div>

        <div class="day-grid">
          <div class="stack">
            <div class="day-spotlight">
              <span class="label">景點安排</span>
              <span class="muted">點卡片可直接打開地圖看位置</span>
              <div class="spot-gallery">
                ${day.spots
                  .map(normalizeSpot)
                  .map(
                    (spot) => `
                      <a class="spot-card" href="${spot.mapHref}" target="_blank" rel="noopener noreferrer">
                        <img class="spot-card__image" src="${spot.image}" alt="${spot.name}" loading="lazy" decoding="async" referrerpolicy="no-referrer" />
                        <span class="spot-card__name">${spot.name}</span>
                        <span class="spot-card__caption">${spot.caption}</span>
                        <span class="spot-card__cta">看地圖位置</span>
                      </a>
                    `
                  )
                  .join("")}
              </div>
            </div>
            <div class="meal-box stack">
              <div>
                <span class="label">早餐</span>
                <span class="value">${day.meals.breakfast}</span>
              </div>
              <div>
                <span class="label">午餐</span>
                <span class="value">${day.meals.lunch}</span>
              </div>
              <div>
                <span class="label">晚餐</span>
                <span class="value">${day.meals.dinner}</span>
              </div>
            </div>
          </div>

          <div class="stack">
            <div class="care-box">
              <span class="label">住宿</span>
              <span class="value">${day.hotel}</span>
            </div>
            <div class="care-box">
              <span class="label">長輩提醒</span>
              <ul class="plain-list">
                ${day.care.map((item) => `<li>${item}</li>`).join("")}
              </ul>
            </div>
          </div>
        </div>
      </article>
    `
  )
  .join("");

flightList.innerHTML = tripData.flights
  .map(
    (flight) => `
      <article class="flight-card">
        <div class="hotel-card__title">
          <strong>${flight.day}｜${flight.airline} ${flight.flightNo}</strong>
          <span class="muted">${flight.depart.split(" ")[0]}</span>
        </div>
        <p><span class="label">出發</span><span class="value">${flight.from}｜${flight.depart}</span></p>
        <p><span class="label">抵達</span><span class="value">${flight.to}｜${flight.arrive}</span></p>
      </article>
    `
  )
  .join("");

hotelList.innerHTML = tripData.days
  .map(
    (day) => `
      <article class="hotel-card">
        <div class="hotel-card__title">
          <strong>${day.label}｜${day.title}</strong>
        </div>
        <p class="muted">${day.hotel}</p>
      </article>
    `
  )
  .join("");

const loadChecklistState = () => {
  try {
    return JSON.parse(localStorage.getItem(storageKey) || "[]");
  } catch {
    return [];
  }
};

const saveChecklistState = (state) => {
  localStorage.setItem(storageKey, JSON.stringify(state));
};

const renderChecklist = () => {
  const saved = loadChecklistState();

  checklistGrid.innerHTML = tripData.checklist
    .map(
      (item, index) => `
        <article class="checklist-card">
          <label>
            <input type="checkbox" data-check-index="${index}" ${saved.includes(index) ? "checked" : ""} />
            <span>${item}</span>
          </label>
        </article>
      `
    )
    .join("");
};

renderChecklist();

document.addEventListener("change", (event) => {
  const target = event.target;

  if (!(target instanceof HTMLInputElement)) {
    return;
  }

  if (!target.matches("[data-check-index]")) {
    return;
  }

  const index = Number(target.dataset.checkIndex);
  const saved = new Set(loadChecklistState());

  if (target.checked) {
    saved.add(index);
  } else {
    saved.delete(index);
  }

  saveChecklistState([...saved]);
});

document.addEventListener("click", (event) => {
  const target = event.target;

  if (!(target instanceof HTMLElement)) {
    return;
  }

  const jumpTarget = target.closest("[data-jump]");

  if (jumpTarget instanceof HTMLElement) {
    const selector = jumpTarget.dataset.jump;
    const section = selector ? document.querySelector(selector) : null;

    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  const dayTarget = target.closest("[data-day-target]");

  if (dayTarget instanceof HTMLElement) {
    const selector = dayTarget.dataset.dayTarget;
    const section = selector ? document.querySelector(`#${selector}`) : null;

    document.querySelectorAll(".day-chip").forEach((chip) => chip.classList.remove("is-active"));
    dayTarget.classList.add("is-active");

    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }

  const mapCard = target.closest(".spot-card");

  if (mapCard instanceof HTMLAnchorElement) {
    event.preventDefault();
    const href = mapCard.getAttribute("href");

    if (href) {
      const opened = window.open(href, "_blank", "noopener,noreferrer");

      if (!opened) {
        window.location.assign(href);
      }
    }
  }

});

resetChecklist.addEventListener("click", () => {
  localStorage.removeItem(storageKey);
  renderChecklist();
});
