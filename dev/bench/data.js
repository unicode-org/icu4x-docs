window.BENCHMARK_DATA = {
  "lastUpdate": 1601931369905,
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
          "id": "554b3b5669a54b7694ceea49730e71bef4c5998d",
          "message": "Reorganize PluralRules benchmarks (#295)",
          "timestamp": "2020-10-05T13:49:29-07:00",
          "tree_id": "6ae9a99fa1b888b3cb8e41b674d3c99cff4a5698",
          "url": "https://github.com/unicode-org/icu4x/commit/554b3b5669a54b7694ceea49730e71bef4c5998d"
        },
        "date": 1601931369527,
        "tool": "cargo",
        "benches": [
          {
            "name": "isize/smaller",
            "value": 31933,
            "range": "± 1424",
            "unit": "ns/iter"
          },
          {
            "name": "isize/larger",
            "value": 76028,
            "range": "± 4403",
            "unit": "ns/iter"
          },
          {
            "name": "to_string/908070605040302010",
            "value": 271,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "write_to/908070605040302010",
            "value": 134,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "from_string/1000000001",
            "value": 84,
            "range": "± 5",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}