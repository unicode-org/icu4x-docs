window.BENCHMARK_DATA = {
  "lastUpdate": 1601702317189,
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
          "id": "d3a6cd1651e9720fbd883cfa44d78906586213ad",
          "message": "Improve performance of From<FixedDecimal> for PluralOperands (#289)",
          "timestamp": "2020-10-03T00:10:13-05:00",
          "tree_id": "58b364f428c486bc366cd4364fa31063b2899079",
          "url": "https://github.com/unicode-org/icu4x/commit/d3a6cd1651e9720fbd883cfa44d78906586213ad"
        },
        "date": 1601702316453,
        "tool": "cargo",
        "benches": [
          {
            "name": "langid/construct/langid",
            "value": 726,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "langid/construct/locale",
            "value": 1160,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "langid/to_string/langid",
            "value": 2169,
            "range": "± 160",
            "unit": "ns/iter"
          },
          {
            "name": "langid/to_string/locale",
            "value": 2153,
            "range": "± 144",
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
            "value": 2425,
            "range": "± 203",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/str/locale",
            "value": 2359,
            "range": "± 166",
            "unit": "ns/iter"
          },
          {
            "name": "langid/canonicalize/langid",
            "value": 3547,
            "range": "± 161",
            "unit": "ns/iter"
          },
          {
            "name": "langid/canonicalize/locale",
            "value": 5518,
            "range": "± 665",
            "unit": "ns/iter"
          },
          {
            "name": "locale/construct/locale",
            "value": 2550,
            "range": "± 164",
            "unit": "ns/iter"
          },
          {
            "name": "locale/to_string/locale",
            "value": 3408,
            "range": "± 381",
            "unit": "ns/iter"
          },
          {
            "name": "locale/compare/struct/locale",
            "value": 116,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "locale/compare/str/locale",
            "value": 3541,
            "range": "± 220",
            "unit": "ns/iter"
          },
          {
            "name": "locale/canonicalize/locale",
            "value": 7306,
            "range": "± 497",
            "unit": "ns/iter"
          },
          {
            "name": "language_subtag_parse",
            "value": 337,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "script_subtag_parse",
            "value": 133,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "region_subtag_parse",
            "value": 132,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "variant_subtag_parse",
            "value": 267,
            "range": "± 26",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}