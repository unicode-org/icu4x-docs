window.BENCHMARK_DATA = {
  "lastUpdate": 1601666181901,
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
          "id": "256eeeb342faec75c24026bbe65d8dce4bb8caab",
          "message": "Fix name category for one pluralrules test. (#288)",
          "timestamp": "2020-10-02T12:07:10-07:00",
          "tree_id": "fcd3e7b86ca0b35b7549ec00d6fc81d161765b62",
          "url": "https://github.com/unicode-org/icu4x/commit/256eeeb342faec75c24026bbe65d8dce4bb8caab"
        },
        "date": 1601666181201,
        "tool": "cargo",
        "benches": [
          {
            "name": "langid/construct/langid",
            "value": 672,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "langid/construct/locale",
            "value": 1044,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "langid/to_string/langid",
            "value": 2084,
            "range": "± 153",
            "unit": "ns/iter"
          },
          {
            "name": "langid/to_string/locale",
            "value": 2099,
            "range": "± 158",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/struct/langid",
            "value": 15,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/struct/locale",
            "value": 15,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/str/langid",
            "value": 2154,
            "range": "± 249",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/str/locale",
            "value": 2138,
            "range": "± 310",
            "unit": "ns/iter"
          },
          {
            "name": "langid/canonicalize/langid",
            "value": 3194,
            "range": "± 325",
            "unit": "ns/iter"
          },
          {
            "name": "langid/canonicalize/locale",
            "value": 5017,
            "range": "± 346",
            "unit": "ns/iter"
          },
          {
            "name": "locale/construct/locale",
            "value": 2317,
            "range": "± 202",
            "unit": "ns/iter"
          },
          {
            "name": "locale/to_string/locale",
            "value": 3103,
            "range": "± 226",
            "unit": "ns/iter"
          },
          {
            "name": "locale/compare/struct/locale",
            "value": 104,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "locale/compare/str/locale",
            "value": 3302,
            "range": "± 341",
            "unit": "ns/iter"
          },
          {
            "name": "locale/canonicalize/locale",
            "value": 6487,
            "range": "± 630",
            "unit": "ns/iter"
          },
          {
            "name": "language_subtag_parse",
            "value": 321,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "script_subtag_parse",
            "value": 113,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "region_subtag_parse",
            "value": 122,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "variant_subtag_parse",
            "value": 246,
            "range": "± 23",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}