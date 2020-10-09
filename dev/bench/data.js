window.BENCHMARK_DATA = {
  "lastUpdate": 1602202869023,
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
        "date": 1602202868356,
        "tool": "cargo",
        "benches": [
          {
            "name": "isize/smaller",
            "value": 33065,
            "range": "± 2198",
            "unit": "ns/iter"
          },
          {
            "name": "isize/larger",
            "value": 80206,
            "range": "± 5427",
            "unit": "ns/iter"
          },
          {
            "name": "to_string/908070605040302010",
            "value": 283,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "write_to/908070605040302010",
            "value": 142,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "from_string/1000000001",
            "value": 95,
            "range": "± 8",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}