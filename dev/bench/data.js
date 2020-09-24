window.BENCHMARK_DATA = {
  "lastUpdate": 1600967825659,
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
        "date": 1600967825237,
        "tool": "cargo",
        "benches": [
          {
            "name": "isize/smaller",
            "value": 31304,
            "range": "± 841",
            "unit": "ns/iter"
          },
          {
            "name": "isize/larger",
            "value": 73848,
            "range": "± 1801",
            "unit": "ns/iter"
          },
          {
            "name": "to_string/908070605040302010",
            "value": 292,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "write_to/908070605040302010",
            "value": 134,
            "range": "± 2",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}