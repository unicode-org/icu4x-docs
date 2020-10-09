window.BENCHMARK_DATA = {
  "lastUpdate": 1602264438397,
  "repoUrl": "https://github.com/unicode-org/icu4x",
  "entries": {
    "Rust Benchmark": [
      {
        "commit": {
          "author": {
            "email": "hsivonen@hsivonen.fi",
            "name": "Henri Sivonen",
            "username": "hsivonen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "005dfbbe1595a5f19eed6f99b39c8d3c46527c44",
          "message": "Document license header requirements in CONTRIBUTING.md (#252)",
          "timestamp": "2020-10-09T12:20:13-05:00",
          "tree_id": "d02e24e4a0b72e0ded4a3fc89a15d5d74982b8d3",
          "url": "https://github.com/unicode-org/icu4x/commit/005dfbbe1595a5f19eed6f99b39c8d3c46527c44"
        },
        "date": 1602264436320,
        "tool": "cargo",
        "benches": [
          {
            "name": "isize/smaller",
            "value": 34319,
            "range": "± 1858",
            "unit": "ns/iter"
          },
          {
            "name": "isize/larger",
            "value": 82081,
            "range": "± 10126",
            "unit": "ns/iter"
          },
          {
            "name": "to_string/908070605040302010",
            "value": 293,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "write_to/908070605040302010",
            "value": 140,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "from_string/1000000001",
            "value": 90,
            "range": "± 3",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}