window.BENCHMARK_DATA = {
  "lastUpdate": 1602265973663,
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
          "id": "0f7661f692fb6acea4363e4159032497323ed8dd",
          "message": "Adding more languages to testdata. (#313)",
          "timestamp": "2020-10-09T12:44:37-05:00",
          "tree_id": "99223729152d0ae5239e352cf3d5267a7bc08929",
          "url": "https://github.com/unicode-org/icu4x/commit/0f7661f692fb6acea4363e4159032497323ed8dd"
        },
        "date": 1602265973213,
        "tool": "cargo",
        "benches": [
          {
            "name": "langid/construct/langid",
            "value": 775,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "langid/construct/locale",
            "value": 1206,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "langid/to_string/langid",
            "value": 2180,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "langid/to_string/locale",
            "value": 2182,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/struct/langid",
            "value": 19,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/struct/locale",
            "value": 19,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/str/langid",
            "value": 2435,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/str/locale",
            "value": 2436,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "langid/canonicalize/langid",
            "value": 3611,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "langid/canonicalize/locale",
            "value": 5469,
            "range": "± 195",
            "unit": "ns/iter"
          },
          {
            "name": "locale/construct/locale",
            "value": 2594,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "locale/to_string/locale",
            "value": 3300,
            "range": "± 202",
            "unit": "ns/iter"
          },
          {
            "name": "locale/compare/struct/locale",
            "value": 136,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "locale/compare/str/locale",
            "value": 3355,
            "range": "± 211",
            "unit": "ns/iter"
          },
          {
            "name": "locale/canonicalize/locale",
            "value": 6950,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "language_subtag_parse",
            "value": 359,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "script_subtag_parse",
            "value": 115,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "region_subtag_parse",
            "value": 120,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "variant_subtag_parse",
            "value": 286,
            "range": "± 5",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}