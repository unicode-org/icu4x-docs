window.BENCHMARK_DATA = {
  "lastUpdate": 1601993122448,
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
        "date": 1601993121813,
        "tool": "cargo",
        "benches": [
          {
            "name": "uniset/contains/best",
            "value": 11,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "uniset/contains/worst",
            "value": 11,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "uniset/contains_range/best",
            "value": 11,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "uniset/contains_range/worst",
            "value": 11,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}