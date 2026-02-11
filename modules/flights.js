export const FLIGHTS = {
  "kaohsiung": {
    "outbound": [
      { "from": "KHH 高雄", "to": "HKG 香港", "flight": "CX423", "depart": "13:15 2/13", "arrive": "15:00 2/13", "duration": "1h45m", "fromTerminal": "T1", "toTerminal": "T1" },
      { "from": "HKG 香港", "to": "MEL 墨爾本", "flight": "CX135", "depart": "19:05 2/13", "arrive": "07:10 2/14", "duration": "9h05m", "transit": "4h05m", "fromTerminal": "T1", "toTerminal": "T2" },
      { "from": "MEL 墨爾本", "to": "CHC 基督城", "flight": "QF167", "depart": "09:10 2/14", "arrive": "14:30 2/14", "duration": "3h20m", "transit": "2h00m", "fromTerminal": "T2" }
    ],
    "inbound": [
      { "from": "CHC 基督城", "to": "HKG 香港", "flight": "CX126", "depart": "14:20 3/2", "arrive": "21:55 3/2", "duration": "11h35m", "toTerminal": "T1" },
      { "from": "HKG 香港", "to": "KHH 高雄", "flight": "CX424", "depart": "10:45 3/3", "arrive": "12:15 3/3", "duration": "1h30m", "transit": "12h50m", "fromTerminal": "T1", "toTerminal": "T1" }
    ],
    "totalCost": "115,641 TWD / 3人 = 38,547 TWD/人"
  },
  "taipei": {
    "outbound": [
      { "from": "TPE 桃園", "to": "HKG 香港", "flight": "CX495", "depart": "13:20 2/13", "arrive": "15:25 2/13", "duration": "2h05m", "fromTerminal": "T1", "toTerminal": "T1" },
      { "from": "HKG 香港", "to": "MEL 墨爾本", "flight": "CX135", "depart": "19:05 2/13", "arrive": "07:10 2/14", "duration": "9h05m", "transit": "3h40m", "fromTerminal": "T1", "toTerminal": "T2" },
      { "from": "MEL 墨爾本", "to": "CHC 基督城", "flight": "QF167", "depart": "09:10 2/14", "arrive": "14:30 2/14", "duration": "3h20m", "transit": "2h00m", "fromTerminal": "T2" }
    ],
    "inbound": [
      { "from": "CHC 基督城", "to": "HKG 香港", "flight": "CX126", "depart": "14:20 3/2", "arrive": "20:55 3/2", "duration": "11h35m", "toTerminal": "T1" },
      { "from": "HKG 香港", "to": "TPE 桃園", "flight": "CX408", "depart": "22:55 3/2", "arrive": "00:35 3/3", "duration": "1h40m", "transit": "2h00m", "fromTerminal": "T1", "toTerminal": "T1" }
    ]
  }
};
