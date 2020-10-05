window.BENCHMARK_DATA = {
  "lastUpdate": 1601931429452,
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
          "id": "554b3b5669a54b7694ceea49730e71bef4c5998d",
          "message": "Reorganize PluralRules benchmarks (#295)",
          "timestamp": "2020-10-05T13:49:29-07:00",
          "tree_id": "6ae9a99fa1b888b3cb8e41b674d3c99cff4a5698",
          "url": "https://github.com/unicode-org/icu4x/commit/554b3b5669a54b7694ceea49730e71bef4c5998d"
        },
        "date": 1601931429087,
        "tool": "cargo",
        "benches": [
          {
            "name": "langid/construct/langid",
            "value": 700,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "langid/construct/locale",
            "value": 1147,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "langid/to_string/langid",
            "value": 1922,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "langid/to_string/locale",
            "value": 1950,
            "range": "± 45",
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
            "value": 15,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/str/langid",
            "value": 2174,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/str/locale",
            "value": 2078,
            "range": "± 134",
            "unit": "ns/iter"
          },
          {
            "name": "langid/canonicalize/langid",
            "value": 3168,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "langid/canonicalize/locale",
            "value": 5023,
            "range": "± 172",
            "unit": "ns/iter"
          },
          {
            "name": "locale/construct/locale",
            "value": 2158,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "locale/to_string/locale",
            "value": 2762,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "locale/compare/struct/locale",
            "value": 126,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "locale/compare/str/locale",
            "value": 3046,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "locale/canonicalize/locale",
            "value": 6083,
            "range": "± 203",
            "unit": "ns/iter"
          },
          {
            "name": "language_subtag_parse",
            "value": 310,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "script_subtag_parse",
            "value": 94,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "region_subtag_parse",
            "value": 103,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "variant_subtag_parse",
            "value": 241,
            "range": "± 10",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}