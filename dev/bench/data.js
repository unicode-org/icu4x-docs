window.BENCHMARK_DATA = {
  "lastUpdate": 1600721821687,
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
          "id": "b3891597b1e4e0e9e78a1679f0596229957a173b",
          "message": "Add PluralRules example (#249)\n\n* Add PluralRules example\r\n\r\n* Apply feedback",
          "timestamp": "2020-09-21T13:52:22-07:00",
          "tree_id": "69eedd85c39c57e56d3a75a076149489950214da",
          "url": "https://github.com/unicode-org/icu4x/commit/b3891597b1e4e0e9e78a1679f0596229957a173b"
        },
        "date": 1600721821053,
        "tool": "cargo",
        "benches": [
          {
            "name": "isize/smaller",
            "value": 29858,
            "range": "± 1858",
            "unit": "ns/iter"
          },
          {
            "name": "isize/larger",
            "value": 69387,
            "range": "± 4694",
            "unit": "ns/iter"
          },
          {
            "name": "to_string/908070605040302010",
            "value": 290,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "write_to/908070605040302010",
            "value": 125,
            "range": "± 6",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}