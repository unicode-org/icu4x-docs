window.BENCHMARK_DATA = {
  "lastUpdate": 1602011544401,
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
          "id": "6d6bcea21678159d29f26c5bd02bb9ce420001b4",
          "message": "Rename DummyDateTime to MockDateTime (#301)",
          "timestamp": "2020-10-06T12:07:56-07:00",
          "tree_id": "36cc98d8a7b2070c26e35fe8b3f68d59f10d2a09",
          "url": "https://github.com/unicode-org/icu4x/commit/6d6bcea21678159d29f26c5bd02bb9ce420001b4"
        },
        "date": 1602011543729,
        "tool": "cargo",
        "benches": [
          {
            "name": "uniset/contains/best",
            "value": 11,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "uniset/contains/worst",
            "value": 9,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "uniset/contains_range/best",
            "value": 10,
            "range": "± 1",
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