window.BENCHMARK_DATA = {
  "lastUpdate": 1602265476769,
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
          "id": "8d3c8d5efcb1736f2b91128dc2af472266ed5e7d",
          "message": "Error cleanup: standard pattern for I/O errors and enum naming (#312)",
          "timestamp": "2020-10-09T12:37:47-05:00",
          "tree_id": "53b3569a025953b25de54a1638619fdac04f0365",
          "url": "https://github.com/unicode-org/icu4x/commit/8d3c8d5efcb1736f2b91128dc2af472266ed5e7d"
        },
        "date": 1602265476387,
        "tool": "cargo",
        "benches": [
          {
            "name": "isize/smaller",
            "value": 29234,
            "range": "± 1028",
            "unit": "ns/iter"
          },
          {
            "name": "isize/larger",
            "value": 70053,
            "range": "± 3488",
            "unit": "ns/iter"
          },
          {
            "name": "to_string/908070605040302010",
            "value": 259,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "write_to/908070605040302010",
            "value": 129,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "from_string/1000000001",
            "value": 79,
            "range": "± 2",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}