window.BENCHMARK_DATA = {
  "lastUpdate": 1602189458337,
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
          "id": "1eae2560a2b48329aa5b77968e27b91191ae9183",
          "message": "Add icu-locale macros (#220)\n\n* Add icu-locale macros\r\n\r\n* Add docs and improve langid variants handling in the macro.\r\n\r\n* Apply feedback\r\n\r\n* Specify in docs that we are performing syntax canonicalization.",
          "timestamp": "2020-10-08T13:33:37-07:00",
          "tree_id": "f988ef166aea8f58e8f1ffe281c48e330d3eb367",
          "url": "https://github.com/unicode-org/icu4x/commit/1eae2560a2b48329aa5b77968e27b91191ae9183"
        },
        "date": 1602189457950,
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
            "value": 10,
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
            "value": 10,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}