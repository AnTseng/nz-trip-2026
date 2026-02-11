// 模組化行程資料入口
import { TRIP_INFO } from './modules/tripInfo.js';
import { FLIGHTS } from './modules/flights.js';
import { WEATHER_INFO } from './modules/weatherInfo.js';
import { DRIVING_TIPS } from './modules/drivingTips.js';
import { PACKING_LIST } from './modules/packingList.js';
import { TIPS } from './modules/tips.js';
import { DAYS } from './modules/days.js';
import { SCHEDULES } from './modules/schedules.js';
import { FOOD } from './modules/food.js';

// 組合成全域 DATA 物件
const DATA = {
  tripName: TRIP_INFO.tripName,
  tripType: TRIP_INFO.tripType,
  duration: TRIP_INFO.duration,
  currency: TRIP_INFO.currency,
  flights: FLIGHTS,
  weatherInfo: WEATHER_INFO,
  drivingTips: DRIVING_TIPS,
  packingList: PACKING_LIST,
  tips: TIPS,
  days: DAYS,
  schedules: SCHEDULES,
  food: FOOD
};

// 為了讓 index.html 可以繼續使用，將 DATA 暴露到全域
window.DATA = DATA;
