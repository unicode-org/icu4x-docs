window.BENCHMARK_DATA = {
  "lastUpdate": 1602202961709,
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
          "id": "52300b8339287ae8e029951675ed7c90725312fb",
          "message": "Adding testdata package. (#296)\n\n- Includes tooling to re-generate the testdata.",
          "timestamp": "2020-10-08T19:13:52-05:00",
          "tree_id": "da1cd6747a8517edd378c9e7b1291c1b3fd9c3d6",
          "url": "https://github.com/unicode-org/icu4x/commit/52300b8339287ae8e029951675ed7c90725312fb"
        },
        "date": 1602202960983,
        "tool": "cargo",
        "benches": [
          {
            "name": "langid/construct/langid",
            "value": 661,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "langid/construct/locale",
            "value": 1169,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "langid/to_string/langid",
            "value": 2222,
            "range": "± 138",
            "unit": "ns/iter"
          },
          {
            "name": "langid/to_string/locale",
            "value": 2244,
            "range": "± 135",
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
            "value": 2474,
            "range": "± 154",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/str/locale",
            "value": 2443,
            "range": "± 304",
            "unit": "ns/iter"
          },
          {
            "name": "langid/canonicalize/langid",
            "value": 3663,
            "range": "± 260",
            "unit": "ns/iter"
          },
          {
            "name": "langid/canonicalize/locale",
            "value": 6508,
            "range": "± 380",
            "unit": "ns/iter"
          },
          {
            "name": "locale/construct/locale",
            "value": 2614,
            "range": "± 213",
            "unit": "ns/iter"
          },
          {
            "name": "locale/to_string/locale",
            "value": 3525,
            "range": "± 275",
            "unit": "ns/iter"
          },
          {
            "name": "locale/compare/struct/locale",
            "value": 126,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "locale/compare/str/locale",
            "value": 3735,
            "range": "± 379",
            "unit": "ns/iter"
          },
          {
            "name": "locale/canonicalize/locale",
            "value": 7354,
            "range": "± 416",
            "unit": "ns/iter"
          },
          {
            "name": "language_subtag_parse",
            "value": 340,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "script_subtag_parse",
            "value": 128,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "region_subtag_parse",
            "value": 132,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "variant_subtag_parse",
            "value": 276,
            "range": "± 16",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}