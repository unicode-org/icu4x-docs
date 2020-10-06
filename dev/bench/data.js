window.BENCHMARK_DATA = {
  "lastUpdate": 1601993283661,
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
          "id": "b100859a1e2ff1b89193c2cdbb484c199c56b591",
          "message": "Limit magnitudes of From<FixedDecimal> for PluralOperands to prevent overflow. (#293)",
          "timestamp": "2020-10-06T09:00:53-05:00",
          "tree_id": "c35333acdb2bc40b4c33803746a627f1be729b44",
          "url": "https://github.com/unicode-org/icu4x/commit/b100859a1e2ff1b89193c2cdbb484c199c56b591"
        },
        "date": 1601993282968,
        "tool": "cargo",
        "benches": [
          {
            "name": "isize/smaller",
            "value": 32122,
            "range": "± 2040",
            "unit": "ns/iter"
          },
          {
            "name": "isize/larger",
            "value": 76253,
            "range": "± 3430",
            "unit": "ns/iter"
          },
          {
            "name": "to_string/908070605040302010",
            "value": 294,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "write_to/908070605040302010",
            "value": 133,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "from_string/1000000001",
            "value": 86,
            "range": "± 3",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}