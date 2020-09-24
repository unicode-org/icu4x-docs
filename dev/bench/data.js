window.BENCHMARK_DATA = {
  "lastUpdate": 1600968374357,
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
        "date": 1600968373678,
        "tool": "cargo",
        "benches": [
          {
            "name": "langid/construct/langid",
            "value": 717,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "langid/construct/locale",
            "value": 1151,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "langid/to_string/langid",
            "value": 2146,
            "range": "± 140",
            "unit": "ns/iter"
          },
          {
            "name": "langid/to_string/locale",
            "value": 2142,
            "range": "± 173",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/struct/langid",
            "value": 16,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/struct/locale",
            "value": 17,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/str/langid",
            "value": 2332,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/str/locale",
            "value": 2344,
            "range": "± 135",
            "unit": "ns/iter"
          },
          {
            "name": "langid/canonicalize/langid",
            "value": 3568,
            "range": "± 225",
            "unit": "ns/iter"
          },
          {
            "name": "langid/canonicalize/locale",
            "value": 5419,
            "range": "± 340",
            "unit": "ns/iter"
          },
          {
            "name": "locale/construct/locale",
            "value": 2532,
            "range": "± 159",
            "unit": "ns/iter"
          },
          {
            "name": "locale/to_string/locale",
            "value": 3463,
            "range": "± 224",
            "unit": "ns/iter"
          },
          {
            "name": "locale/compare/struct/locale",
            "value": 125,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "locale/compare/str/locale",
            "value": 3481,
            "range": "± 190",
            "unit": "ns/iter"
          },
          {
            "name": "locale/canonicalize/locale",
            "value": 7198,
            "range": "± 593",
            "unit": "ns/iter"
          },
          {
            "name": "language_subtag_parse",
            "value": 345,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "script_subtag_parse",
            "value": 125,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "region_subtag_parse",
            "value": 130,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "variant_subtag_parse",
            "value": 265,
            "range": "± 12",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}