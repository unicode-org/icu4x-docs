window.BENCHMARK_DATA = {
  "lastUpdate": 1602264503336,
  "repoUrl": "https://github.com/unicode-org/icu4x",
  "entries": {
    "Rust Benchmark": [
      {
        "commit": {
          "author": {
            "email": "hsivonen@hsivonen.fi",
            "name": "Henri Sivonen",
            "username": "hsivonen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "005dfbbe1595a5f19eed6f99b39c8d3c46527c44",
          "message": "Document license header requirements in CONTRIBUTING.md (#252)",
          "timestamp": "2020-10-09T12:20:13-05:00",
          "tree_id": "d02e24e4a0b72e0ded4a3fc89a15d5d74982b8d3",
          "url": "https://github.com/unicode-org/icu4x/commit/005dfbbe1595a5f19eed6f99b39c8d3c46527c44"
        },
        "date": 1602264502882,
        "tool": "cargo",
        "benches": [
          {
            "name": "langid/construct/langid",
            "value": 731,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "langid/construct/locale",
            "value": 1148,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "langid/to_string/langid",
            "value": 2061,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "langid/to_string/locale",
            "value": 2060,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/struct/langid",
            "value": 18,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/struct/locale",
            "value": 18,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/str/langid",
            "value": 2385,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/str/locale",
            "value": 2383,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "langid/canonicalize/langid",
            "value": 3437,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "langid/canonicalize/locale",
            "value": 5194,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "locale/construct/locale",
            "value": 2464,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "locale/to_string/locale",
            "value": 3146,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "locale/compare/struct/locale",
            "value": 129,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "locale/compare/str/locale",
            "value": 3204,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "locale/canonicalize/locale",
            "value": 6573,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "language_subtag_parse",
            "value": 341,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "script_subtag_parse",
            "value": 109,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "region_subtag_parse",
            "value": 114,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "variant_subtag_parse",
            "value": 272,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}