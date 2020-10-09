window.BENCHMARK_DATA = {
  "lastUpdate": 1602265566941,
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
          "id": "8d3c8d5efcb1736f2b91128dc2af472266ed5e7d",
          "message": "Error cleanup: standard pattern for I/O errors and enum naming (#312)",
          "timestamp": "2020-10-09T12:37:47-05:00",
          "tree_id": "53b3569a025953b25de54a1638619fdac04f0365",
          "url": "https://github.com/unicode-org/icu4x/commit/8d3c8d5efcb1736f2b91128dc2af472266ed5e7d"
        },
        "date": 1602265566564,
        "tool": "cargo",
        "benches": [
          {
            "name": "langid/construct/langid",
            "value": 611,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "langid/construct/locale",
            "value": 1045,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "langid/to_string/langid",
            "value": 2107,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "langid/to_string/locale",
            "value": 2161,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/struct/langid",
            "value": 16,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/struct/locale",
            "value": 16,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/str/langid",
            "value": 2309,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/str/locale",
            "value": 2278,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "langid/canonicalize/langid",
            "value": 3331,
            "range": "± 187",
            "unit": "ns/iter"
          },
          {
            "name": "langid/canonicalize/locale",
            "value": 5190,
            "range": "± 286",
            "unit": "ns/iter"
          },
          {
            "name": "locale/construct/locale",
            "value": 2556,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "locale/to_string/locale",
            "value": 3414,
            "range": "± 184",
            "unit": "ns/iter"
          },
          {
            "name": "locale/compare/struct/locale",
            "value": 121,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "locale/compare/str/locale",
            "value": 3517,
            "range": "± 154",
            "unit": "ns/iter"
          },
          {
            "name": "locale/canonicalize/locale",
            "value": 6994,
            "range": "± 436",
            "unit": "ns/iter"
          },
          {
            "name": "language_subtag_parse",
            "value": 329,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "script_subtag_parse",
            "value": 129,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "region_subtag_parse",
            "value": 119,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "variant_subtag_parse",
            "value": 254,
            "range": "± 15",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}