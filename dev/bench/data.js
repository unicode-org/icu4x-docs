window.BENCHMARK_DATA = {
  "lastUpdate": 1600665076820,
  "repoUrl": "https://github.com/unicode-org/icu4x",
  "entries": {
    "Rust Benchmark": [
      {
        "commit": {
          "author": {
            "email": "elango@google.com",
            "name": "Elango",
            "username": "echeran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2831539d93c41d208b66b10a5893425d24f42772",
          "message": "Continuous benchmarking (#197)",
          "timestamp": "2020-09-20T22:06:44-07:00",
          "tree_id": "07e252752ecf785cf988aca8aa49aaef17ded29f",
          "url": "https://github.com/unicode-org/icu4x/commit/2831539d93c41d208b66b10a5893425d24f42772"
        },
        "date": 1600665076450,
        "tool": "cargo",
        "benches": [
          {
            "name": "isize/smaller",
            "value": 30742,
            "range": "± 1897",
            "unit": "ns/iter"
          },
          {
            "name": "isize/larger",
            "value": 74822,
            "range": "± 8032",
            "unit": "ns/iter"
          },
          {
            "name": "to_string/908070605040302010",
            "value": 276,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "write_to/908070605040302010",
            "value": 154,
            "range": "± 11",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}