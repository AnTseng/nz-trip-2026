const DATA = {
  "tripName": "2026 紐西蘭南島自駕",
  "tripType": "順時針",
  "duration": "2026/2/13 - 3/3 (15天南島 + 4天飛機 = 19天)",
  "currency": {
    "usd_to_twd": 30.81,
    "nzd_to_twd": 17.69
  },
  "flights": {
    "kaohsiung": {
      "outbound": [
        { "from": "KHH 高雄", "to": "HKG 香港", "flight": "CX423", "depart": "13:15 2/13", "arrive": "15:00 2/13", "duration": "1h45m" },
        { "from": "HKG 香港", "to": "MEL 墨爾本", "flight": "CX135", "depart": "19:05 2/13", "arrive": "07:10 2/14", "duration": "9h05m", "transit": "4h05m" },
        { "from": "MEL 墨爾本", "to": "CHC 基督城", "flight": "QF167", "depart": "09:10 2/14", "arrive": "14:30 2/14", "duration": "3h20m", "transit": "2h00m" }
      ],
      "inbound": [
        { "from": "CHC 基督城", "to": "HKG 香港", "flight": "CX126", "depart": "14:20 3/2", "arrive": "21:55 3/2", "duration": "11h35m" },
        { "from": "HKG 香港", "to": "KHH 高雄", "flight": "CX424", "depart": "10:45 3/3", "arrive": "12:15 3/3", "duration": "1h30m", "transit": "12h50m" }
      ],
      "totalCost": "115,641 TWD / 3人 = 38,547 TWD/人"
    },
    "taipei": {
      "outbound": [
        { "from": "TPE 桃園", "to": "HKG 香港", "flight": "CX495", "depart": "13:20 2/13", "arrive": "15:25 2/13", "duration": "2h05m" },
        { "from": "HKG 香港", "to": "MEL 墨爾本", "flight": "CX135", "depart": "19:05 2/13", "arrive": "07:10 2/14", "duration": "9h05m", "transit": "3h40m" },
        { "from": "MEL 墨爾本", "to": "CHC 基督城", "flight": "QF167", "depart": "09:10 2/14", "arrive": "14:30 2/14", "duration": "3h20m", "transit": "2h00m" }
      ],
      "inbound": [
        { "from": "CHC 基督城", "to": "HKG 香港", "flight": "CX126", "depart": "14:20 3/2", "arrive": "20:55 3/2", "duration": "11h35m" },
        { "from": "HKG 香港", "to": "TPE 桃園", "flight": "CX408", "depart": "22:55 3/2", "arrive": "00:35 3/3", "duration": "1h40m", "transit": "2h00m" }
      ]
    }
  },
  "drivingTips": {
    "note": "第一次右駕，注意左側通行",
    "drivingHours": "建議 9:00-17:00",
    "timeMultiplier": "Google Maps估計時間 x 1.2~1.5倍",
    "speedLimit": {
      "highway": "100km/h",
      "campervan": "90km/h",
      "town": "50km/h"
    },
    "dailyTarget": "200-300km (4-5小時車程)",
    "campervanLength": "7.6m",
    "importantRoutes": [
      "露營車不能走 Crown Range Rd，需改走 State Hwy 6",
      "94號公路 (Te Anau-Milford) 被稱為紐西蘭最美公路",
      "80號公路為庫克山公路",
      "73號公路 Hokitika→Christchurch"
    ]
  },
  "checklist": [
    { "item": "機票", "done": true },
    { "item": "簽證 NZETA + IVL", "done": true },
    { "item": "NZTD 紐西蘭入境卡", "done": true },
    { "item": "信用卡PIN碼", "done": true },
    { "item": "租車租六人座", "done": true },
    { "item": "Bookme 預訂活動", "done": false },
    { "item": "直升機冰河健行預訂", "done": false },
    { "item": "跳傘預訂", "done": false },
    { "item": "Camper Mate 訂營地", "done": false },
    { "item": "建立超市列表", "done": false },
    { "item": "觀星行程預訂", "done": false }
  ],
  "tips": {
    "campervan": {
      "bookingRef": "TNE435650-1",
      "pickupTime": "08:00",
      "departTime": "09:00",
      "totalCost": "9785 NZD",
      "length": "7.6m"
    },
    "supermarket": "PAK'nSAVE Moorhouse - 購買車程中早餐/午餐/零食",
    "sandfly_warning": "Thunder Creek Falls、Hokitika Gorge Walk、Blue Pools 有沙蚊(沙蠅)，已排除"
  },
  "days": [
    {
      "day": 0,
      "date": "2/13",
      "weekday": "五",
      "title": "台灣 → 香港",
      "route": "台灣 → 香港 → 墨爾本(飛機上)",
      "km": 0,
      "driveTime": "0",
      "activities": [
        {
          "name": "高雄→香港→墨爾本→基督城",
          "type": "移動",
          "time": "全天",
          "hours": "CX423 13:15→15:00 / CX135 19:05→07:10+1 / QF167 09:10→14:30",
          "facilities": [],
          "description": "高雄出發經香港轉機至墨爾本，再轉機至基督城",
          "mapLink": "",
          "notes": "費用 115,641 TWD / 3人 = 38,547 TWD/人",
          "cancelled": false
        },
        {
          "name": "桃園→香港→墨爾本→基督城",
          "type": "移動",
          "time": "全天",
          "hours": "CX495 13:20→15:25 / CX135 19:05→07:10+1 / QF167 09:10→14:30",
          "facilities": [],
          "description": "桃園出發經香港轉機至墨爾本，再轉機至基督城",
          "mapLink": "",
          "notes": "",
          "cancelled": false
        }
      ],
      "accommodation": {
        "name": "飛機上",
        "notes": "",
        "price": ""
      },
      "driveNotes": ""
    },
    {
      "day": 1,
      "date": "2/14",
      "weekday": "六",
      "title": "香港 → 基督城",
      "route": "墨爾本 → 基督城(飛機) → 市區",
      "km": 0,
      "driveTime": "0",
      "activities": [
        {
          "name": "抵達墨爾本，轉機至基督城",
          "type": "移動",
          "time": "07:10-14:30",
          "hours": "MEL 09:10 → CHC 14:30",
          "facilities": [],
          "description": "墨爾本轉機抵達基督城",
          "mapLink": "",
          "notes": "",
          "cancelled": false
        },
        {
          "name": "基督城植物園 Christchurch Botanic Garden",
          "type": "景點",
          "time": "1.5hr",
          "hours": "7am-9pm",
          "facilities": ["停車場", "廁所"],
          "description": "基督城市區大型植物園",
          "mapLink": "",
          "notes": "",
          "cancelled": false
        },
        {
          "name": "PAK'nSAVE Moorhouse 採購",
          "type": "作業",
          "time": "1hr",
          "hours": "",
          "facilities": ["停車場"],
          "description": "購買車程中早餐/午餐/零食",
          "mapLink": "",
          "notes": "紐西蘭最便宜的連鎖超市",
          "cancelled": false
        },
        {
          "name": "Christchurch 市區住宿",
          "type": "住宿",
          "time": "",
          "hours": "",
          "facilities": [],
          "description": "",
          "mapLink": "",
          "notes": "",
          "cancelled": false
        }
      ],
      "accommodation": {
        "name": "Christchurch 市區住宿",
        "notes": "",
        "price": ""
      },
      "driveNotes": ""
    },
    {
      "day": 2,
      "date": "2/15",
      "weekday": "日",
      "title": "基督城 → 蒂卡波",
      "route": "Christchurch → Tekapo (8號公路)",
      "km": 230,
      "driveTime": "3hr",
      "activities": [
        {
          "name": "取露營車",
          "type": "作業",
          "time": "1hr",
          "hours": "08:00 租借，09:00 出發",
          "facilities": [],
          "description": "Booking Reference TNE435650-1，金額 9785 NZD",
          "mapLink": "",
          "notes": "08:00 取車，預計 09:00 出發",
          "cancelled": false
        },
        {
          "name": "Christchurch → Tekapo 移動",
          "type": "移動",
          "time": "3hr (分段)",
          "hours": "",
          "facilities": [],
          "description": "230km，走8號公路",
          "mapLink": "",
          "notes": "",
          "cancelled": false
        },
        {
          "name": "艾士伯頓莊園 Ashburton Domain",
          "type": "景點",
          "time": "1.5hr",
          "hours": "",
          "facilities": ["停車場", "廁所"],
          "description": "占地37公頃的公園，中途休息點 (距 Christchurch 90km / 1hr)",
          "mapLink": "",
          "notes": "中途休息用",
          "cancelled": false
        },
        {
          "name": "費爾利麵包房 Fairlie Bakehouse",
          "type": "吃喝",
          "time": "30mins",
          "hours": "",
          "facilities": ["路邊停車"],
          "description": "推薦培根鮭魚鹹派，距 Ashburton Domain 100km / 1hr20mins",
          "mapLink": "",
          "notes": "培根鮭魚鹹派必點",
          "cancelled": false
        },
        {
          "name": "羊駝農場 Alpine Alpacas Fairlie",
          "type": "景點",
          "time": "1.5hr",
          "hours": "星期日 10:00-17:00",
          "facilities": ["停車場"],
          "description": "需先官網預約的羊駝農場",
          "mapLink": "maps.app.goo.gl/Fnv...tksc18",
          "notes": "需先官網預約",
          "cancelled": false
        },
        {
          "name": "三溪工藝古董商店 Burkes Pass - Three Creeks",
          "type": "景點",
          "time": "1hr",
          "hours": "",
          "facilities": ["路邊停車", "廁所"],
          "description": "從1950年代加油站轉型的工藝古董商店",
          "mapLink": "",
          "notes": "",
          "cancelled": false
        },
        {
          "name": "狗窩角落 Dog Kennel Corner",
          "type": "景點",
          "time": "10mins",
          "hours": "",
          "facilities": ["路邊停車"],
          "description": "路邊觀景點，可望向南阿爾卑斯山",
          "mapLink": "",
          "notes": "",
          "cancelled": false
        }
      ],
      "accommodation": {
        "name": "Tekapo - Lakes Edge Holiday Park",
        "notes": "",
        "price": "140 USD/night"
      },
      "driveNotes": "8號公路前往 Tekapo"
    },
    {
      "day": 3,
      "date": "2/16",
      "weekday": "一",
      "title": "蒂卡波",
      "route": "Tekapo 周邊",
      "km": 0,
      "driveTime": "0",
      "activities": [
        {
          "name": "善良牧羊人教堂 Church of the Good Shepherd",
          "type": "景點",
          "time": "30mins",
          "hours": "夏季 09:00-17:00",
          "facilities": ["付費廁所", "停車場"],
          "description": "蒂卡波湖畔經典教堂",
          "mapLink": "",
          "notes": "遊客禁止進入教堂內部",
          "cancelled": false
        },
        {
          "name": "蒂卡波湖步道 Lake Tekapo Walkway",
          "type": "景點",
          "time": "1hr",
          "hours": "",
          "facilities": [],
          "description": "5公里湖畔步道",
          "mapLink": "",
          "notes": "",
          "cancelled": false
        },
        {
          "name": "約翰山步道 Mt. John Walkway",
          "type": "景點",
          "time": "1.5-2hr",
          "hours": "",
          "facilities": [],
          "description": "8.2公里環型步道，最快45分鐘到山頂",
          "mapLink": "",
          "notes": "",
          "cancelled": false
        },
        {
          "name": "天文咖啡廳 Astro Cafe",
          "type": "吃喝",
          "time": "30mins",
          "hours": "",
          "facilities": ["廁所", "停車場"],
          "description": "位於約翰山頂的咖啡廳",
          "mapLink": "",
          "notes": "開車上山過路費 NZD$8 / Card only",
          "cancelled": false
        },
        {
          "name": "觀星行程 Mt. John Observatory - Night Sky Tours",
          "type": "景點",
          "time": "2hr",
          "hours": "夜間",
          "facilities": [],
          "description": "國際暗空保育區觀星行程",
          "mapLink": "",
          "notes": "TODO: 購買行程",
          "cancelled": false
        },
        {
          "name": "炸魚薯條 The Better Batter NZ",
          "type": "吃喝",
          "time": "30mins",
          "hours": "12:30-19:30",
          "facilities": [],
          "description": "炸魚薯條外帶",
          "mapLink": "",
          "notes": "",
          "cancelled": false
        }
      ],
      "accommodation": {
        "name": "Tekapo - Lakes Edge Holiday Park",
        "notes": "",
        "price": "140 USD/night"
      },
      "driveNotes": ""
    },
    {
      "day": 4,
      "date": "2/17",
      "weekday": "二",
      "title": "蒂卡波 → 庫克山",
      "route": "Tekapo → Mt. Cook (80號公路/庫克山公路)",
      "km": 105,
      "driveTime": "1.5hr",
      "activities": [
        {
          "name": "Tekapo → Mt. Cook 移動",
          "type": "移動",
          "time": "1.5hr (分段)",
          "hours": "",
          "facilities": [],
          "description": "105km，走80號公路(庫克山公路)",
          "mapLink": "",
          "notes": "",
          "cancelled": false
        },
        {
          "name": "Irishman Creek Station Gate House",
          "type": "景點",
          "time": "10mins",
          "hours": "",
          "facilities": ["路邊停車"],
          "description": "路邊拍照景點",
          "mapLink": "",
          "notes": "",
          "cancelled": false
        },
        {
          "name": "Lake Pukaki Viewpoint",
          "type": "景點",
          "time": "30mins",
          "hours": "",
          "facilities": ["路邊停車", "廁所"],
          "description": "普卡基湖觀景台",
          "mapLink": "",
          "notes": "",
          "cancelled": false
        },
        {
          "name": "遊客中心 Punatahu Visitor Center",
          "type": "景點",
          "time": "1hr",
          "hours": "10:00-16:30",
          "facilities": ["停車場", "廁所"],
          "description": "有賣鮭魚，很好吃",
          "mapLink": "",
          "notes": "有賣鮭魚好吃",
          "cancelled": false
        },
        {
          "name": "紐西蘭高山薰衣草農場 NZ Alpine Lavender",
          "type": "景點",
          "time": "30mins",
          "hours": "10:00-16:00",
          "facilities": ["停車場", "廁所"],
          "description": "薰衣草農場，有薰衣草冰淇淋",
          "mapLink": "",
          "notes": "薰衣草冰淇淋 10 NZD",
          "cancelled": false
        },
        {
          "name": "彼得景觀台 Peter's Lookout",
          "type": "景點",
          "time": "30mins",
          "hours": "",
          "facilities": ["停車場", "廁所"],
          "description": "眺望庫克山方向的觀景台",
          "mapLink": "",
          "notes": "",
          "cancelled": false
        },
        {
          "name": "Aoraki Mt Cook Scenic Lookout",
          "type": "景點",
          "time": "20mins",
          "hours": "",
          "facilities": ["停車場"],
          "description": "庫克山觀景台",
          "mapLink": "",
          "notes": "",
          "cancelled": false
        },
        {
          "name": "Mt. Cook Rd Lookout",
          "type": "景點",
          "time": "15mins",
          "hours": "",
          "facilities": ["路邊停車"],
          "description": "庫克山公路觀景點",
          "mapLink": "",
          "notes": "",
          "cancelled": false
        }
      ],
      "accommodation": {
        "name": "Mt. Cook - Glentanner Park Centre",
        "notes": "",
        "price": ""
      },
      "driveNotes": "80號公路(庫克山公路)"
    },
    {
      "day": 5,
      "date": "2/18",
      "weekday": "三",
      "title": "庫克山",
      "route": "Mt. Cook 周邊",
      "km": 0,
      "driveTime": "0",
      "activities": [
        {
          "name": "Sealy Tarns Track",
          "type": "景點",
          "time": "4hr",
          "hours": "",
          "facilities": ["停車場"],
          "description": "4.5公里來回約4小時的步道",
          "mapLink": "",
          "notes": "",
          "cancelled": false
        },
        {
          "name": "Hooker Valley Track",
          "type": "景點",
          "time": "3hr",
          "hours": "",
          "facilities": ["停車場"],
          "description": "胡克谷步道",
          "mapLink": "",
          "notes": "第二座吊橋關閉整修中，2026/5月完工",
          "cancelled": true
        },
        {
          "name": "Tasman Glacier",
          "type": "景點",
          "time": "3hr",
          "hours": "出發 08:45 或 10:45 / 回程 11:45 或 13:45",
          "facilities": [],
          "description": "塔斯曼冰河遊覽",
          "mapLink": "",
          "notes": "可選出發 08:45 或 10:45",
          "cancelled": false
        },
        {
          "name": "塔斯曼湖步道 Tasman Lake Track",
          "type": "景點",
          "time": "1.5hr",
          "hours": "",
          "facilities": ["停車場", "廁所"],
          "description": "3.5公里來回1.5小時",
          "mapLink": "",
          "notes": "",
          "cancelled": false
        },
        {
          "name": "Pukaki Canal Road",
          "type": "景點",
          "time": "30mins",
          "hours": "",
          "facilities": [],
          "description": "拍照景點，距 Mt. Cook 60km / 44mins",
          "mapLink": "",
          "notes": "",
          "cancelled": false
        }
      ],
      "accommodation": {
        "name": "Mt. Cook - Glentanner Park Centre",
        "notes": "",
        "price": ""
      },
      "driveNotes": ""
    },
    {
      "day": 6,
      "date": "2/19",
      "weekday": "四",
      "title": "庫克山 → 皇后鎮",
      "route": "Mt. Cook → Queenstown (8號公路 & 80號公路)",
      "km": 210,
      "driveTime": "3hr",
      "activities": [
        {
          "name": "Mt. Cook → Queenstown 移動",
          "type": "移動",
          "time": "3hr (分段)",
          "hours": "",
          "facilities": [],
          "description": "210km，走8號公路 & 80號公路",
          "mapLink": "",
          "notes": "",
          "cancelled": false
        },
        {
          "name": "The Wrinkly Rams 餐廳",
          "type": "吃喝",
          "time": "30mins",
          "hours": "07:00-16:00",
          "facilities": ["停車場", "廁所"],
          "description": "中途用餐",
          "mapLink": "",
          "notes": "",
          "cancelled": false
        },
        {
          "name": "石灰石峭壁 Clay Cliffs",
          "type": "景點",
          "time": "1hr",
          "hours": "",
          "facilities": ["停車場"],
          "description": "壯觀石灰石峭壁，需走碎石路段20分鐘",
          "mapLink": "",
          "notes": "(Opt) 碎石路段20分鐘才到",
          "cancelled": false
        },
        {
          "name": "林迪斯隘口景觀台 Lindis Pass Viewpoint",
          "type": "景點",
          "time": "20mins",
          "hours": "",
          "facilities": ["路邊停車"],
          "description": "海拔971公尺的隘口觀景台",
          "mapLink": "",
          "notes": "",
          "cancelled": false
        },
        {
          "name": "The Stoaker Room Cromwell",
          "type": "吃喝",
          "time": "1hr",
          "hours": "12:00-21:00",
          "facilities": [],
          "description": "橡木桶燒烤餐廳",
          "mapLink": "",
          "notes": "",
          "cancelled": false
        },
        {
          "name": "克倫威爾水果小鎮 Cromwell",
          "type": "景點",
          "time": "1hr",
          "hours": "",
          "facilities": [],
          "description": "Heritage Precinct、Mrs Jones Fruit Stall",
          "mapLink": "",
          "notes": "",
          "cancelled": false
        },
        {
          "name": "自助採櫻桃 PYO Cherries",
          "type": "景點",
          "time": "1hr",
          "hours": "8:00-18:00",
          "facilities": ["停車場", "廁所"],
          "description": "產季12月至2月，2月底可能已過季",
          "mapLink": "",
          "notes": "產季12月至2月",
          "cancelled": false
        },
        {
          "name": "咆哮梅格瞭望台 Roaring Meg Lookout",
          "type": "景點",
          "time": "10mins",
          "hours": "",
          "facilities": ["停車場"],
          "description": "路邊觀景台",
          "mapLink": "",
          "notes": "",
          "cancelled": false
        },
        {
          "name": "Devil's Staircase Lookout Point",
          "type": "景點",
          "time": "20mins",
          "hours": "",
          "facilities": ["路邊停車"],
          "description": "魔鬼階梯觀景點",
          "mapLink": "",
          "notes": "",
          "cancelled": false
        }
      ],
      "accommodation": {
        "name": "Queenstown - Hampshire Holiday Parks / Queenstown Top 10",
        "notes": "",
        "price": ""
      },
      "driveNotes": "8號公路 & 80號公路"
    },
    {
      "day": 7,
      "date": "2/20",
      "weekday": "五",
      "title": "皇后鎮 → 神奇峽灣",
      "route": "Queenstown → Te Anau → Doubtful Sound (94號公路)",
      "km": 180,
      "driveTime": "2.5hr",
      "activities": [
        {
          "name": "Queenstown → Te Anau 移動",
          "type": "移動",
          "time": "2hr",
          "hours": "",
          "facilities": [],
          "description": "前往蒂阿瑙",
          "mapLink": "",
          "notes": "",
          "cancelled": false
        },
        {
          "name": "Lake Te Anau 湖畔步道",
          "type": "景點",
          "time": "30mins",
          "hours": "",
          "facilities": [],
          "description": "蒂阿瑙湖畔散步",
          "mapLink": "",
          "notes": "",
          "cancelled": false
        },
        {
          "name": "Te Anau Bird Sanctuary",
          "type": "景點",
          "time": "30mins",
          "hours": "",
          "facilities": ["停車場", "廁所"],
          "description": "可看到南秧雞 Takahe",
          "mapLink": "",
          "notes": "南秧雞 Takahe 必看",
          "cancelled": false
        },
        {
          "name": "Miles Better Pie",
          "type": "吃喝",
          "time": "30mins",
          "hours": "08:00-15:00",
          "facilities": [],
          "description": "鹹派 $5-7 NZD",
          "mapLink": "",
          "notes": "",
          "cancelled": false
        },
        {
          "name": "94 Hwy - 2905 Lookout",
          "type": "景點",
          "time": "10mins",
          "hours": "",
          "facilities": ["路邊停車"],
          "description": "94號公路上的觀景點",
          "mapLink": "",
          "notes": "",
          "cancelled": false
        },
        {
          "name": "Wilderness Scientific Reserve",
          "type": "景點",
          "time": "10mins",
          "hours": "",
          "facilities": ["停車場", "廁所"],
          "description": "600公尺來回10分鐘的短步道",
          "mapLink": "",
          "notes": "",
          "cancelled": false
        },
        {
          "name": "Alpine Centre Cafe & Bar",
          "type": "吃喝",
          "time": "30mins",
          "hours": "08:00-20:00",
          "facilities": ["停車場", "廁所"],
          "description": "咖啡廳",
          "mapLink": "",
          "notes": "",
          "cancelled": false
        },
        {
          "name": "Ristorante Pizzeria Paradiso",
          "type": "吃喝",
          "time": "1hr",
          "hours": "",
          "facilities": [],
          "description": "正宗義大利窯烤披薩",
          "mapLink": "",
          "notes": "",
          "cancelled": false
        },
        {
          "name": "Te Anau → Doubtful Sound 移動",
          "type": "移動",
          "time": "20mins",
          "hours": "",
          "facilities": [],
          "description": "20km，94號公路(紐西蘭最美公路)",
          "mapLink": "",
          "notes": "",
          "cancelled": false
        }
      ],
      "accommodation": {
        "name": "RealNZ Doubtful Sound Cruises 郵輪過夜船",
        "notes": "費用 3226.2 + 手續費 = 3274.59 NZD",
        "price": "3274.59 NZD"
      },
      "driveNotes": "94號公路(紐西蘭最美公路)"
    },
    {
      "day": 8,
      "date": "2/21",
      "weekday": "六",
      "title": "神奇峽灣 → 皇后鎮",
      "route": "Doubtful Sound → Queenstown",
      "km": 180,
      "driveTime": "2.5hr",
      "activities": [
        {
          "name": "Doubtful Sound → Queenstown 移動",
          "type": "移動",
          "time": "2.5hr",
          "hours": "",
          "facilities": [],
          "description": "12:15 下船後返回 Queenstown",
          "mapLink": "",
          "notes": "12:15 下船",
          "cancelled": false
        },
        {
          "name": "Fergburger / Fergbaker",
          "type": "吃喝",
          "time": "30mins",
          "hours": "8:00-16:30",
          "facilities": [],
          "description": "CNN全世界最好吃漢堡，豬肉>牛肉，五花肉蘋果派",
          "mapLink": "",
          "notes": "豬肉口味優於牛肉，五花肉蘋果派推薦",
          "cancelled": false
        },
        {
          "name": "Queenstown Bay Beach",
          "type": "景點",
          "time": "30mins",
          "hours": "",
          "facilities": [],
          "description": "Lake Wakatipu 湖畔海灘",
          "mapLink": "",
          "notes": "",
          "cancelled": false
        },
        {
          "name": "Queenstown Wharf Walk 湖畔步道",
          "type": "景點",
          "time": "1hr",
          "hours": "",
          "facilities": [],
          "description": "沿湖畔步道漫步，欣賞夕陽",
          "mapLink": "",
          "notes": "適合看夕陽",
          "cancelled": false
        }
      ],
      "accommodation": {
        "name": "Queenstown - Hampshire Holiday Parks",
        "notes": "",
        "price": ""
      },
      "driveNotes": "12:15 下船後開回皇后鎮"
    },
    {
      "day": 9,
      "date": "2/22",
      "weekday": "日",
      "title": "皇后鎮",
      "route": "Queenstown 周邊",
      "km": 0,
      "driveTime": "0",
      "activities": [
        {
          "name": "天際纜車與溜溜車 Skyline Gondola & Luge",
          "type": "景點",
          "time": "2hr",
          "hours": "Gondola 09:30-21:00 / Luge 10:00-19:00",
          "facilities": ["廁所"],
          "description": "搭纜車上山後玩溜溜車，Luge無限次",
          "mapLink": "",
          "notes": "Luge 無限次",
          "cancelled": false
        },
        {
          "name": "溫泉池 Onsen Hot Pools",
          "type": "景點",
          "time": "1hr",
          "hours": "9:00-22:00",
          "facilities": ["停車場", "廁所"],
          "description": "山景溫泉池",
          "mapLink": "",
          "notes": "",
          "cancelled": false
        },
        {
          "name": "鹿園高地 Deer Park Heights",
          "type": "景點",
          "time": "2.5hr",
          "hours": "",
          "facilities": [],
          "description": "山上動物園，可近距離接觸動物",
          "mapLink": "",
          "notes": "建議提早幾天預定；天氣不好不要上去，路陡會變泥巴；帶兩元硬幣買飼料",
          "cancelled": false
        }
      ],
      "accommodation": {
        "name": "Queenstown",
        "notes": "",
        "price": ""
      },
      "driveNotes": ""
    },
    {
      "day": 10,
      "date": "2/23",
      "weekday": "一",
      "title": "皇后鎮（格萊諾基）",
      "route": "Queenstown → Glenorchy → Queenstown",
      "km": 120,
      "driveTime": "2hr (來回)",
      "activities": [
        {
          "name": "Paradise 日出",
          "type": "景點",
          "time": "1hr",
          "hours": "日出時間",
          "facilities": [],
          "description": "人間仙境，距 Queenstown 60km / 1hr",
          "mapLink": "",
          "notes": "需早起",
          "cancelled": false
        },
        {
          "name": "格萊諾基碼頭 Glenorchy Wharf",
          "type": "景點",
          "time": "30mins",
          "hours": "",
          "facilities": [],
          "description": "低調小鎮風景壯麗，距 Queenstown 60km / 1hr",
          "mapLink": "",
          "notes": "",
          "cancelled": false
        },
        {
          "name": "Glenorchy 騎馬",
          "type": "景點",
          "time": "2hr",
          "hours": "08:00-17:30",
          "facilities": [],
          "description": "Lighthorse Adventures Horse Treks 上午場",
          "mapLink": "",
          "notes": "需預訂上午場",
          "cancelled": false
        },
        {
          "name": "潟湖步道 Glenorchy Lagoon Walkway",
          "type": "景點",
          "time": "2hr",
          "hours": "",
          "facilities": ["停車場", "廁所"],
          "description": "5.3公里約2小時步道",
          "mapLink": "",
          "notes": "",
          "cancelled": false
        },
        {
          "name": "皇后鎮花園 Queenstown Garden",
          "type": "景點",
          "time": "2hr",
          "hours": "",
          "facilities": ["停車場", "廁所"],
          "description": "皇后鎮市區花園",
          "mapLink": "",
          "notes": "",
          "cancelled": false
        },
        {
          "name": "奇異鳥生態園 Kiwi Birdlife Park",
          "type": "景點",
          "time": "1hr",
          "hours": "15:00-16:00",
          "facilities": [],
          "description": "觀賞奇異鳥，可縮短為1小時",
          "mapLink": "",
          "notes": "新增景點，15:00-16:00",
          "cancelled": false
        },
        {
          "name": "Fergburger",
          "type": "吃喝",
          "time": "30mins",
          "hours": "16:00-16:30",
          "facilities": [],
          "description": "CNN全世界最好吃漢堡",
          "mapLink": "",
          "notes": "平日下午人少",
          "cancelled": false
        }
      ],
      "accommodation": {
        "name": "Queenstown - Driftaway Queenstown",
        "notes": "",
        "price": ""
      },
      "driveNotes": ""
    },
    {
      "day": 11,
      "date": "2/24",
      "weekday": "二",
      "title": "皇后鎮 → 瓦納卡",
      "route": "Queenstown → Arrowtown → Wanaka (State Hwy 6)",
      "km": 75,
      "driveTime": "1.5hr",
      "activities": [
        {
          "name": "Queenstown → Wanaka 移動",
          "type": "移動",
          "time": "1.5hr (分段)",
          "hours": "",
          "facilities": [],
          "description": "75km，注意露營車不能走 Crown Range Rd，需改走 State Hwy 6",
          "mapLink": "",
          "notes": "露營車不能走 Crown Range Rd!",
          "cancelled": false
        },
        {
          "name": "箭鎮烘焙房 Arrowtown Bakery",
          "type": "吃喝",
          "time": "30mins",
          "hours": "07:00-15:00",
          "facilities": [],
          "description": "紐西蘭國民美食鹹派",
          "mapLink": "",
          "notes": "",
          "cancelled": false
        },
        {
          "name": "巴塔哥尼亞巧克力 Patagonia Chocolates",
          "type": "吃喝",
          "time": "30mins",
          "hours": "9:00-18:00",
          "facilities": ["廁所"],
          "description": "創始店在 Arrowtown",
          "mapLink": "",
          "notes": "",
          "cancelled": false
        },
        {
          "name": "箭河步道 Arrow River Trail",
          "type": "景點",
          "time": "1hr",
          "hours": "",
          "facilities": [],
          "description": "魔戒首部曲取景地，5公里來回1小時",
          "mapLink": "",
          "notes": "魔戒首部曲取景地",
          "cancelled": false
        },
        {
          "name": "Feehly Hill Scenic Reserve",
          "type": "景點",
          "time": "40mins",
          "hours": "",
          "facilities": ["路邊停車"],
          "description": "1.6公里來回40分鐘的短步道",
          "mapLink": "",
          "notes": "",
          "cancelled": false
        },
        {
          "name": "黑斯湖步道 Lake Hayes Walkway",
          "type": "景點",
          "time": "2hr",
          "hours": "",
          "facilities": ["停車場", "廁所"],
          "description": "8公里來回2小時的湖畔步道",
          "mapLink": "",
          "notes": "",
          "cancelled": false
        },
        {
          "name": "Arrow Junction Lookout Point",
          "type": "景點",
          "time": "30mins",
          "hours": "",
          "facilities": ["路邊停車"],
          "description": "觀景點",
          "mapLink": "",
          "notes": "",
          "cancelled": false
        },
        {
          "name": "Cardrona Hotel",
          "type": "景點",
          "time": "1hr",
          "hours": "",
          "facilities": [],
          "description": "歷史酒店",
          "mapLink": "",
          "notes": "",
          "cancelled": false
        },
        {
          "name": "卡德羅納胸罩圍牆 Cardrona Bra Fence",
          "type": "景點",
          "time": "10mins",
          "hours": "",
          "facilities": [],
          "description": "紐西蘭有名的胸罩圍牆景點",
          "mapLink": "",
          "notes": "",
          "cancelled": false
        }
      ],
      "accommodation": {
        "name": "Wanaka - Wanaka TOP 10 Holiday Park",
        "notes": "",
        "price": ""
      },
      "driveNotes": "露營車不能走 Crown Range Rd，需改走 State Hwy 6"
    },
    {
      "day": 12,
      "date": "2/25",
      "weekday": "三",
      "title": "瓦納卡",
      "route": "Wanaka 周邊",
      "km": 0,
      "driveTime": "0",
      "activities": [
        {
          "name": "Lake Wanaka Hiking - Roy's Peak",
          "type": "景點",
          "time": "5-6hr",
          "hours": "",
          "facilities": [],
          "description": "瓦納卡湖健行，可選 Roy's Peak",
          "mapLink": "",
          "notes": "選一條步道",
          "cancelled": false
        },
        {
          "name": "Lake Wanaka Cruise 遊湖",
          "type": "景點",
          "time": "3hr",
          "hours": "09:00-12:00",
          "facilities": [],
          "description": "瓦納卡湖遊船",
          "mapLink": "",
          "notes": "(Opt) 可選擇",
          "cancelled": false
        },
        {
          "name": "瓦納卡薰衣草農場",
          "type": "景點",
          "time": "1hr",
          "hours": "9:00-17:00",
          "facilities": ["停車場", "廁所"],
          "description": "薰衣草農場",
          "mapLink": "",
          "notes": "成人 $15 NZD",
          "cancelled": false
        },
        {
          "name": "瓦納卡戰爭紀念碑",
          "type": "景點",
          "time": "20mins",
          "hours": "",
          "facilities": ["停車場"],
          "description": "戰爭紀念碑",
          "mapLink": "",
          "notes": "",
          "cancelled": false
        },
        {
          "name": "瓦納卡湖畔 & 孤獨樹 That Wanaka Tree",
          "type": "景點",
          "time": "30mins",
          "hours": "",
          "facilities": ["停車場", "廁所"],
          "description": "網紅孤獨樹打卡點",
          "mapLink": "",
          "notes": "",
          "cancelled": false
        }
      ],
      "accommodation": {
        "name": "Wanaka",
        "notes": "",
        "price": ""
      },
      "driveNotes": ""
    },
    {
      "day": 13,
      "date": "2/26",
      "weekday": "四",
      "title": "瓦納卡（跳傘）",
      "route": "Wanaka",
      "km": 0,
      "driveTime": "0",
      "activities": [
        {
          "name": "跳傘 Skydive Wanaka",
          "type": "景點",
          "time": "3-3.5hr",
          "hours": "",
          "facilities": [],
          "description": "含報到、解說、交通約3-3.5小時",
          "mapLink": "",
          "notes": "TODO: 預訂跳傘",
          "cancelled": false
        },
        {
          "name": "Mt Iron Track",
          "type": "景點",
          "time": "1.5hr",
          "hours": "",
          "facilities": ["停車場"],
          "description": "下午輕鬆步道，可俯瞰瓦納卡湖",
          "mapLink": "",
          "notes": "新增，下午輕鬆行程",
          "cancelled": false
        }
      ],
      "accommodation": {
        "name": "Wanaka",
        "notes": "",
        "price": ""
      },
      "driveNotes": ""
    },
    {
      "day": 14,
      "date": "2/27",
      "weekday": "五",
      "title": "瓦納卡 → 福克斯冰河",
      "route": "Wanaka → Fox Glacier (西海岸6號公路)",
      "km": 260,
      "driveTime": "4hr",
      "activities": [
        {
          "name": "Wanaka → Fox Glacier 移動",
          "type": "移動",
          "time": "4hr (分段)",
          "hours": "",
          "facilities": [],
          "description": "260km，西海岸6號公路：雙湖景公路→翠綠雨林→海岸線",
          "mapLink": "",
          "notes": "",
          "cancelled": false
        },
        {
          "name": "哈威亞湖觀景台 Lake Hawea Lookout / The Neck",
          "type": "景點",
          "time": "30mins",
          "hours": "",
          "facilities": ["路邊停車"],
          "description": "雙湖交界觀景台",
          "mapLink": "",
          "notes": "",
          "cancelled": false
        },
        {
          "name": "Haast Pass Lookout",
          "type": "景點",
          "time": "1hr",
          "hours": "",
          "facilities": ["路邊停車"],
          "description": "哈斯特隘口觀景點",
          "mapLink": "",
          "notes": "(Opt) 可選擇",
          "cancelled": false
        },
        {
          "name": "Thunder Creek Falls",
          "type": "景點",
          "time": "30mins",
          "hours": "",
          "facilities": ["停車場"],
          "description": "瀑布步道",
          "mapLink": "",
          "notes": "沙蚊(沙蠅)嚴重，已排除",
          "cancelled": true
        },
        {
          "name": "Blue Pools",
          "type": "景點",
          "time": "1hr",
          "hours": "",
          "facilities": ["停車場"],
          "description": "藍色水潭步道",
          "mapLink": "",
          "notes": "沙蚊(沙蠅)嚴重，已排除",
          "cancelled": true
        },
        {
          "name": "咆哮比利瀑布 Roaring Billy Falls",
          "type": "景點",
          "time": "1hr",
          "hours": "",
          "facilities": [],
          "description": "雨林步道20分鐘即達瀑布",
          "mapLink": "",
          "notes": "已排除",
          "cancelled": true
        },
        {
          "name": "哈斯特遊客中心 Haast Visitor Center",
          "type": "景點",
          "time": "30mins",
          "hours": "09:00-16:30",
          "facilities": ["停車場", "廁所"],
          "description": "遊客資訊中心",
          "mapLink": "",
          "notes": "",
          "cancelled": false
        },
        {
          "name": "鮭魚農場餐廳 Salmon Farm Cafe",
          "type": "吃喝",
          "time": "1hr",
          "hours": "8:00-16:00",
          "facilities": ["停車場"],
          "description": "鮭魚農場附設餐廳",
          "mapLink": "",
          "notes": "",
          "cancelled": false
        },
        {
          "name": "Minnehaha Walk",
          "type": "景點",
          "time": "30mins",
          "hours": "",
          "facilities": [],
          "description": "1.2公里30分鐘短步道",
          "mapLink": "",
          "notes": "",
          "cancelled": false
        },
        {
          "name": "Gillespie Beach",
          "type": "景點",
          "time": "30mins",
          "hours": "",
          "facilities": ["廁所"],
          "description": "海灘 + 露營地",
          "mapLink": "",
          "notes": "",
          "cancelled": false
        }
      ],
      "accommodation": {
        "name": "Fox Glacier",
        "notes": "",
        "price": ""
      },
      "driveNotes": "西海岸6號公路：雙湖景公路→翠綠雨林→海岸線"
    },
    {
      "day": 15,
      "date": "2/28",
      "weekday": "六",
      "title": "福克斯冰河 → 霍基蒂卡",
      "route": "Fox Glacier → Hokitika",
      "km": 160,
      "driveTime": "2.5hr",
      "activities": [
        {
          "name": "Fox Glacier Lookout",
          "type": "景點",
          "time": "30mins",
          "hours": "",
          "facilities": ["路邊停車"],
          "description": "福克斯冰河觀景台",
          "mapLink": "",
          "notes": "",
          "cancelled": false
        },
        {
          "name": "直升機冰河健行 Fox Glacier Heli-Hiking",
          "type": "景點",
          "time": "4hr",
          "hours": "D4: 08:50 (12:50結束) / D3: 11:50 (15:50結束)",
          "facilities": [],
          "description": "直升機飛上冰河後健行，NT$12,626",
          "mapLink": "",
          "notes": "TODO: 預訂直升機冰河健行",
          "cancelled": false
        },
        {
          "name": "馬松森湖 Lake Matheson",
          "type": "景點",
          "time": "2hr",
          "hours": "",
          "facilities": ["停車場", "廁所"],
          "description": "環湖2小時簡易步道，鏡面湖景",
          "mapLink": "",
          "notes": "",
          "cancelled": false
        },
        {
          "name": "梅普里卡湖 Lake Mapourika",
          "type": "景點",
          "time": "30mins",
          "hours": "",
          "facilities": [],
          "description": "清晨或傍晚湖面如鏡",
          "mapLink": "",
          "notes": "",
          "cancelled": false
        },
        {
          "name": "伊安特湖 Lake Ianthe",
          "type": "景點",
          "time": "30mins",
          "hours": "",
          "facilities": ["停車場", "廁所"],
          "description": "有露營地的湖泊",
          "mapLink": "",
          "notes": "",
          "cancelled": false
        },
        {
          "name": "Hokitika Gorge Walk",
          "type": "景點",
          "time": "1hr",
          "hours": "",
          "facilities": ["停車場"],
          "description": "霍基蒂卡峽谷步道",
          "mapLink": "",
          "notes": "沙蚊(沙蠅)嚴重，已排除",
          "cancelled": true
        },
        {
          "name": "霍基蒂卡海灘 & 標誌 Hokitika Beach Sign",
          "type": "景點",
          "time": "30mins",
          "hours": "",
          "facilities": ["停車場", "廁所"],
          "description": "樹枝拼成的地標 + Sunset Point",
          "mapLink": "",
          "notes": "",
          "cancelled": false
        },
        {
          "name": "螢火蟲幽谷小徑 Glow Worm Dell",
          "type": "景點",
          "time": "30mins",
          "hours": "天黑後",
          "facilities": ["停車場"],
          "description": "免費看螢火蟲的步道",
          "mapLink": "",
          "notes": "關閉手機螢幕和手電筒，保持安靜",
          "cancelled": false
        }
      ],
      "accommodation": {
        "name": "Hokitika - Hokitika's Kiwi Holiday Park and Motels",
        "notes": "",
        "price": ""
      },
      "driveNotes": ""
    },
    {
      "day": 16,
      "date": "3/1",
      "weekday": "日",
      "title": "霍基蒂卡 → 基督城",
      "route": "Hokitika → Christchurch (73號公路)",
      "km": 250,
      "driveTime": "4hr",
      "activities": [
        {
          "name": "Hokitika → Christchurch 移動",
          "type": "移動",
          "time": "4hr (分段)",
          "hours": "",
          "facilities": [],
          "description": "250km，走73號公路",
          "mapLink": "",
          "notes": "",
          "cancelled": false
        },
        {
          "name": "奧蒂拉瞭望台 Otira Viaduct Lookout",
          "type": "景點",
          "time": "10mins",
          "hours": "",
          "facilities": ["停車場"],
          "description": "高架橋觀景台",
          "mapLink": "",
          "notes": "",
          "cancelled": false
        },
        {
          "name": "亞瑟隘口國家公園 Arthur's Pass",
          "type": "景點",
          "time": "2-3hr",
          "hours": "08:30-16:30",
          "facilities": ["停車場", "廁所"],
          "description": "國家公園，選一條步道",
          "mapLink": "",
          "notes": "選一條步道",
          "cancelled": false
        },
        {
          "name": "紐西蘭巨石陣 Castle Hill",
          "type": "景點",
          "time": "1hr",
          "hours": "",
          "facilities": [],
          "description": "距基督城1-1.5hr，環狀步道1.5km約1hr",
          "mapLink": "",
          "notes": "注意偷竊",
          "cancelled": false
        },
        {
          "name": "還車",
          "type": "作業",
          "time": "30mins",
          "hours": "14:20前",
          "facilities": [],
          "description": "基督城還露營車",
          "mapLink": "",
          "notes": "14:20 前還車，不是飛機時間。飛機是 3/2 的 14:20",
          "cancelled": false
        }
      ],
      "accommodation": {
        "name": "Christchurch",
        "notes": "",
        "price": ""
      },
      "driveNotes": "73號公路，注意 Castle Hill 偷竊問題"
    },
    {
      "day": 17,
      "date": "3/2",
      "weekday": "一",
      "title": "基督城 → 香港",
      "route": "基督城 → 香港(飛機)",
      "km": 0,
      "driveTime": "0",
      "activities": [
        {
          "name": "基督城→香港",
          "type": "移動",
          "time": "11h35m",
          "hours": "CX126 14:20→21:55(高雄) / 20:55(台北)",
          "facilities": [],
          "description": "基督城飛往香港",
          "mapLink": "",
          "notes": "高雄線抵達 21:55，台北線抵達 20:55",
          "cancelled": false
        }
      ],
      "accommodation": {
        "name": "飛機上 / 香港機場",
        "notes": "高雄線需過夜等隔天航班",
        "price": ""
      },
      "driveNotes": ""
    },
    {
      "day": 18,
      "date": "3/3",
      "weekday": "二",
      "title": "香港 → 高雄/桃園",
      "route": "香港 → 台灣(飛機)",
      "km": 0,
      "driveTime": "0",
      "activities": [
        {
          "name": "香港→高雄",
          "type": "移動",
          "time": "1h30m",
          "hours": "CX424 10:45→12:15",
          "facilities": [],
          "description": "香港飛高雄",
          "mapLink": "",
          "notes": "",
          "cancelled": false
        },
        {
          "name": "香港→桃園",
          "type": "移動",
          "time": "1h40m",
          "hours": "CX408 22:55→00:35+1 (3/2晚出發)",
          "facilities": [],
          "description": "香港飛桃園，3/2晚間航班",
          "mapLink": "",
          "notes": "台北線是 3/2 晚上 22:55 出發，3/3 凌晨 00:35 抵達",
          "cancelled": false
        }
      ],
      "accommodation": {
        "name": "家",
        "notes": "旅程結束",
        "price": ""
      },
      "driveNotes": ""
    }
  ]
};
