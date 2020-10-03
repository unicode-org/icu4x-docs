window.BENCHMARK_DATA = {
  "lastUpdate": 1601702217043,
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
        "date": 1601702216605,
        "tool": "cargo",
        "benches": [
          {
            "name": "isize/smaller",
            "value": 34838,
            "range": "± 1646",
            "unit": "ns/iter"
          },
          {
            "name": "isize/larger",
            "value": 82711,
            "range": "± 153",
            "unit": "ns/iter"
          },
          {
            "name": "to_string/908070605040302010",
            "value": 308,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "write_to/908070605040302010",
            "value": 145,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "from_string/1000000001",
            "value": 94,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}