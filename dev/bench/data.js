window.BENCHMARK_DATA = {
  "lastUpdate": 1601702064041,
  "repoUrl": "https://github.com/unicode-org/icu4x",
  "entries": {
    "Rust Benchmark": [
      {
        "commit": {
          "author": {
            "email": "sffc@google.com",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d3a6cd1651e9720fbd883cfa44d78906586213ad",
          "message": "Improve performance of From<FixedDecimal> for PluralOperands (#289)",
          "timestamp": "2020-10-03T00:10:13-05:00",
          "tree_id": "58b364f428c486bc366cd4364fa31063b2899079",
          "url": "https://github.com/unicode-org/icu4x/commit/d3a6cd1651e9720fbd883cfa44d78906586213ad"
        },
        "date": 1601702063349,
        "tool": "cargo",
        "benches": [
          {
            "name": "uniset/contains/best",
            "value": 9,
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