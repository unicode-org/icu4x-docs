window.BENCHMARK_DATA = {
  "lastUpdate": 1602007390623,
  "repoUrl": "https://github.com/unicode-org/icu4x",
  "entries": {
    "Rust Benchmark": [
      {
        "commit": {
          "author": {
            "email": "zibi@braniecki.net",
            "name": "Zibi Braniecki",
            "username": "zbraniecki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "06aecd5931521296bfadf67bbb06d566065c29b6",
          "message": "Move icu_num_utils to utils/num (#303)\n\n* Move icu_num_utils to utils/num\r\n\r\n* Add github action\r\n\r\n* Rename to fixed-decimal\r\n\r\n* Fix a spelling",
          "timestamp": "2020-10-06T10:58:43-07:00",
          "tree_id": "fe427487b8c31ae1173938362e777287827f7928",
          "url": "https://github.com/unicode-org/icu4x/commit/06aecd5931521296bfadf67bbb06d566065c29b6"
        },
        "date": 1602007390258,
        "tool": "cargo",
        "benches": [
          {
            "name": "uniset/contains/best",
            "value": 10,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "uniset/contains/worst",
            "value": 9,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "uniset/contains_range/best",
            "value": 10,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "uniset/contains_range/worst",
            "value": 9,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}