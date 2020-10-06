window.BENCHMARK_DATA = {
  "lastUpdate": 1602007507965,
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
        "date": 1602007507540,
        "tool": "cargo",
        "benches": [
          {
            "name": "isize/smaller",
            "value": 32999,
            "range": "± 1759",
            "unit": "ns/iter"
          },
          {
            "name": "isize/larger",
            "value": 79365,
            "range": "± 298",
            "unit": "ns/iter"
          },
          {
            "name": "to_string/908070605040302010",
            "value": 288,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "write_to/908070605040302010",
            "value": 140,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "from_string/1000000001",
            "value": 91,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}