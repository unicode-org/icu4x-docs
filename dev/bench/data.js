window.BENCHMARK_DATA = {
  "lastUpdate": 1602265046557,
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
          "id": "e0e3dec2353613dc1e41fcb925494b905f64ecbd",
          "message": "Add Unicode Set example (#302)",
          "timestamp": "2020-10-09T12:30:31-05:00",
          "tree_id": "818d2b58edadce125b1e8f540b1100bcfa454e6e",
          "url": "https://github.com/unicode-org/icu4x/commit/e0e3dec2353613dc1e41fcb925494b905f64ecbd"
        },
        "date": 1602265045823,
        "tool": "cargo",
        "benches": [
          {
            "name": "isize/smaller",
            "value": 30321,
            "range": "± 3007",
            "unit": "ns/iter"
          },
          {
            "name": "isize/larger",
            "value": 68858,
            "range": "± 6735",
            "unit": "ns/iter"
          },
          {
            "name": "to_string/908070605040302010",
            "value": 254,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "write_to/908070605040302010",
            "value": 122,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "from_string/1000000001",
            "value": 80,
            "range": "± 9",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}