// 実行：k6 run tests/performance/load.js
//
// ローカル負荷テスト実測（最大 1000 VUs）
// - HTTPリクエスト: 43,859
// - HTTP失敗率: 0.00%
// - 平均レスポンスタイム: 2.37ms
// - p95レスポンスタイム: 5.83ms
// - 最大レスポンスタイム: 216.02ms
// - スループット: 約 619 req/s
// - 1000 VUs到達時も全43,859リクエスト成功

import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  stages: [
    { duration: "10s", target: 100 },
    { duration: "10s", target: 500 },
    { duration: "20s", target: 1000 },
    { duration: "20s", target: 1000 },
    { duration: "10s", target: 0 },
  ],

  thresholds: {
    http_req_failed: ["rate<0.01"],
    http_req_duration: ["p(95)<1000"],
  },
};

export default function loadTest() {
  const response = http.get("http://localhost:3000");

  check(response, {
    "status is 200": (res) => res.status === 200,
  });

  sleep(1);
}
