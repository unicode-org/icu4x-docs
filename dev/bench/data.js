window.BENCHMARK_DATA = {
  "lastUpdate": 1602084061789,
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
        "date": 1602084059827,
        "tool": "cargo",
        "benches": [
          {
            "name": "isize/smaller",
            "value": 30389,
            "range": "± 2496",
            "unit": "ns/iter"
          },
          {
            "name": "isize/larger",
            "value": 72274,
            "range": "± 5490",
            "unit": "ns/iter"
          },
          {
            "name": "to_string/908070605040302010",
            "value": 242,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "write_to/908070605040302010",
            "value": 128,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "from_string/1000000001",
            "value": 72,
            "range": "± 4",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}