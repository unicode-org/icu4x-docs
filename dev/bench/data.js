window.BENCHMARK_DATA = {
  "lastUpdate": 1602202705414,
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
          "id": "52300b8339287ae8e029951675ed7c90725312fb",
          "message": "Adding testdata package. (#296)\n\n- Includes tooling to re-generate the testdata.",
          "timestamp": "2020-10-08T19:13:52-05:00",
          "tree_id": "da1cd6747a8517edd378c9e7b1291c1b3fd9c3d6",
          "url": "https://github.com/unicode-org/icu4x/commit/52300b8339287ae8e029951675ed7c90725312fb"
        },
        "date": 1602202705010,
        "tool": "cargo",
        "benches": [
          {
            "name": "uniset/contains/best",
            "value": 13,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "uniset/contains/worst",
            "value": 13,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "uniset/contains_range/best",
            "value": 13,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "uniset/contains_range/worst",
            "value": 13,
            "range": "± 1",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}