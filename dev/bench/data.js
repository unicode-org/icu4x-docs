window.BENCHMARK_DATA = {
  "lastUpdate": 1602011691699,
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
        "date": 1602011690966,
        "tool": "cargo",
        "benches": [
          {
            "name": "isize/smaller",
            "value": 34223,
            "range": "± 2946",
            "unit": "ns/iter"
          },
          {
            "name": "isize/larger",
            "value": 77522,
            "range": "± 4712",
            "unit": "ns/iter"
          },
          {
            "name": "to_string/908070605040302010",
            "value": 300,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "write_to/908070605040302010",
            "value": 141,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "from_string/1000000001",
            "value": 88,
            "range": "± 5",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}