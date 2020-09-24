window.BENCHMARK_DATA = {
  "lastUpdate": 1600968151511,
  "repoUrl": "https://github.com/unicode-org/icu4x",
  "entries": {
    "Rust Benchmark": [
      {
        "commit": {
          "author": {
            "email": "filmil@gmail.com",
            "name": "Filip Filmar",
            "username": "filmil"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f49fdbece75590675fb1c70057c7257251e2fd2e",
          "message": "Feature use suggestions added to the style guide (#247)\n\nAdds specific instructions about hiding new dependencies or debug code\r\nbehind new features.\r\n\r\nCloses #219",
          "timestamp": "2020-09-24T10:17:29-07:00",
          "tree_id": "052149a264936cd6539d120dcc147b4bfea4cf85",
          "url": "https://github.com/unicode-org/icu4x/commit/f49fdbece75590675fb1c70057c7257251e2fd2e"
        },
        "date": 1600968150795,
        "tool": "cargo",
        "benches": [
          {
            "name": "isize/smaller",
            "value": 29985,
            "range": "± 1817",
            "unit": "ns/iter"
          },
          {
            "name": "isize/larger",
            "value": 76419,
            "range": "± 5512",
            "unit": "ns/iter"
          },
          {
            "name": "to_string/908070605040302010",
            "value": 288,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "write_to/908070605040302010",
            "value": 129,
            "range": "± 7",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}