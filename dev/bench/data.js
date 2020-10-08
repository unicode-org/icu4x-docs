window.BENCHMARK_DATA = {
  "lastUpdate": 1602188596001,
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
        "date": 1602188595314,
        "tool": "cargo",
        "benches": [
          {
            "name": "uniset/contains/best",
            "value": 8,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "uniset/contains/worst",
            "value": 9,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "uniset/contains_range/best",
            "value": 8,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "uniset/contains_range/worst",
            "value": 9,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}