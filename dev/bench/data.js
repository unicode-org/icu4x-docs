window.BENCHMARK_DATA = {
  "lastUpdate": 1601613822718,
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
          "id": "8ddae047ea363f6752d0d7b996f71139a10f6c93",
          "message": "Scope out subbenchmarks to optional features (#286)",
          "timestamp": "2020-10-01T21:37:27-07:00",
          "tree_id": "5ee69cf09d17353894e316262bc5e06432fd0051",
          "url": "https://github.com/unicode-org/icu4x/commit/8ddae047ea363f6752d0d7b996f71139a10f6c93"
        },
        "date": 1601613822332,
        "tool": "cargo",
        "benches": [
          {
            "name": "isize/smaller",
            "value": 29243,
            "range": "± 1325",
            "unit": "ns/iter"
          },
          {
            "name": "isize/larger",
            "value": 70922,
            "range": "± 3485",
            "unit": "ns/iter"
          },
          {
            "name": "to_string/908070605040302010",
            "value": 252,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "write_to/908070605040302010",
            "value": 127,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "from_string/1000000001",
            "value": 83,
            "range": "± 3",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}