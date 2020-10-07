window.BENCHMARK_DATA = {
  "lastUpdate": 1602083939561,
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
          "id": "c08d490c92c0187ee5504b8505d5fac7387d8675",
          "message": "Fix parsing of datetime data with variable numbering system. (#309)\n\n- Adds better error handling that reveals the JSON file with a parse error.",
          "timestamp": "2020-10-07T10:14:22-05:00",
          "tree_id": "f41d71416781609796330dedd4bb13b2bdb380fa",
          "url": "https://github.com/unicode-org/icu4x/commit/c08d490c92c0187ee5504b8505d5fac7387d8675"
        },
        "date": 1602083939158,
        "tool": "cargo",
        "benches": [
          {
            "name": "uniset/contains/best",
            "value": 10,
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
            "value": 10,
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