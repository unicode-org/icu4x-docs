window.BENCHMARK_DATA = {
  "lastUpdate": 1600967806120,
  "repoUrl": "https://github.com/unicode-org/icu4x",
  "entries": {
    "Rust Benchmark": [
      {
        "commit": {
          "author": {
            "email": "evanp1999@gmail.com",
            "name": "Evan P",
            "username": "EvanJP"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "25e3dc8453632176e593b5c5fd5d9b02d28350c0",
          "message": "Uniset contains bugfix (#269)\n\nResolves #268 with an off-by-one error",
          "timestamp": "2020-09-24T12:12:13-05:00",
          "tree_id": "687c9357120007ff38a00e49f4fc0515b79ca019",
          "url": "https://github.com/unicode-org/icu4x/commit/25e3dc8453632176e593b5c5fd5d9b02d28350c0"
        },
        "date": 1600967805749,
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
            "value": 10,
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
            "value": 10,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}