window.BENCHMARK_DATA = {
  "lastUpdate": 1602188763439,
  "repoUrl": "https://github.com/unicode-org/icu4x",
  "entries": {
    "Rust Benchmark": [
      {
        "commit": {
          "author": {
            "email": "dminor@mozilla.com",
            "name": "Dan Minor",
            "username": "dminor"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "51928c963c1a92983b7b0adcc7954a668abb86e9",
          "message": "Implement Debug for LanguageIdentifier and Locale using to_string (#294) (#300)\n\n* Implement Debug for LanguageIdentifier and Locale using to_string (#294)\r\n\r\n* Address review feedback\r\n\r\n* Avoid intermediate string",
          "timestamp": "2020-10-08T13:19:13-07:00",
          "tree_id": "8753455a6de10d5e814d2b299db89a461e012d38",
          "url": "https://github.com/unicode-org/icu4x/commit/51928c963c1a92983b7b0adcc7954a668abb86e9"
        },
        "date": 1602188762743,
        "tool": "cargo",
        "benches": [
          {
            "name": "isize/smaller",
            "value": 29318,
            "range": "± 3040",
            "unit": "ns/iter"
          },
          {
            "name": "isize/larger",
            "value": 68102,
            "range": "± 7033",
            "unit": "ns/iter"
          },
          {
            "name": "to_string/908070605040302010",
            "value": 254,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "write_to/908070605040302010",
            "value": 127,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "from_string/1000000001",
            "value": 77,
            "range": "± 6",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}