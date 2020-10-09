window.BENCHMARK_DATA = {
  "lastUpdate": 1602265271619,
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
          "id": "98f89ff9735a08379ef34d8c56d14e7aaddbf084",
          "message": "Reorder constructor arguments in PluralRules to align with DateTimeFormat. (#305)",
          "timestamp": "2020-10-09T12:32:47-05:00",
          "tree_id": "e8ae0451070d5049e6e4f1c15ae5d3ada78371e3",
          "url": "https://github.com/unicode-org/icu4x/commit/98f89ff9735a08379ef34d8c56d14e7aaddbf084"
        },
        "date": 1602265271164,
        "tool": "cargo",
        "benches": [
          {
            "name": "langid/construct/langid",
            "value": 630,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "langid/construct/locale",
            "value": 1117,
            "range": "± 315",
            "unit": "ns/iter"
          },
          {
            "name": "langid/to_string/langid",
            "value": 2016,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "langid/to_string/locale",
            "value": 2066,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/struct/langid",
            "value": 17,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/struct/locale",
            "value": 17,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/str/langid",
            "value": 2275,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/str/locale",
            "value": 2274,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "langid/canonicalize/langid",
            "value": 3446,
            "range": "± 147",
            "unit": "ns/iter"
          },
          {
            "name": "langid/canonicalize/locale",
            "value": 5848,
            "range": "± 250",
            "unit": "ns/iter"
          },
          {
            "name": "locale/construct/locale",
            "value": 2589,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "locale/to_string/locale",
            "value": 3304,
            "range": "± 157",
            "unit": "ns/iter"
          },
          {
            "name": "locale/compare/struct/locale",
            "value": 115,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "locale/compare/str/locale",
            "value": 3492,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "locale/canonicalize/locale",
            "value": 7015,
            "range": "± 294",
            "unit": "ns/iter"
          },
          {
            "name": "language_subtag_parse",
            "value": 337,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "script_subtag_parse",
            "value": 122,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "region_subtag_parse",
            "value": 121,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "variant_subtag_parse",
            "value": 260,
            "range": "± 11",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}