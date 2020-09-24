window.BENCHMARK_DATA = {
  "lastUpdate": 1600968032700,
  "repoUrl": "https://github.com/unicode-org/icu4x",
  "entries": {
    "Rust Benchmark": [
      {
        "commit": {
          "author": {
            "email": "evanp1999@gmail.com",
            "name": "Evan P",
            "username": "EvanJP"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "25e3dc8453632176e593b5c5fd5d9b02d28350c0",
          "message": "Uniset contains bugfix (#269)\n\nResolves #268 with an off-by-one error",
          "timestamp": "2020-09-24T12:12:13-05:00",
          "tree_id": "687c9357120007ff38a00e49f4fc0515b79ca019",
          "url": "https://github.com/unicode-org/icu4x/commit/25e3dc8453632176e593b5c5fd5d9b02d28350c0"
        },
        "date": 1600968032298,
        "tool": "cargo",
        "benches": [
          {
            "name": "langid/construct/langid",
            "value": 685,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "langid/construct/locale",
            "value": 1122,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "langid/to_string/langid",
            "value": 2075,
            "range": "± 143",
            "unit": "ns/iter"
          },
          {
            "name": "langid/to_string/locale",
            "value": 1995,
            "range": "± 104",
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
            "value": 16,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/str/langid",
            "value": 2265,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/str/locale",
            "value": 2244,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "langid/canonicalize/langid",
            "value": 3419,
            "range": "± 164",
            "unit": "ns/iter"
          },
          {
            "name": "langid/canonicalize/locale",
            "value": 5363,
            "range": "± 170",
            "unit": "ns/iter"
          },
          {
            "name": "locale/construct/locale",
            "value": 2503,
            "range": "± 123",
            "unit": "ns/iter"
          },
          {
            "name": "locale/to_string/locale",
            "value": 3400,
            "range": "± 123",
            "unit": "ns/iter"
          },
          {
            "name": "locale/compare/struct/locale",
            "value": 119,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "locale/compare/str/locale",
            "value": 3550,
            "range": "± 132",
            "unit": "ns/iter"
          },
          {
            "name": "locale/canonicalize/locale",
            "value": 7300,
            "range": "± 295",
            "unit": "ns/iter"
          },
          {
            "name": "language_subtag_parse",
            "value": 331,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "script_subtag_parse",
            "value": 116,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "region_subtag_parse",
            "value": 123,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "variant_subtag_parse",
            "value": 262,
            "range": "± 10",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}