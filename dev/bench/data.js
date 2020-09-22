window.BENCHMARK_DATA = {
  "lastUpdate": 1600742786596,
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
          "id": "ab00f54f6ce0fd898a6f8a6d70e77a24926a3dcd",
          "message": "Add subset of dates data to DataProvider (#256)\n\n* Add subset of dates data to DataProvider\r\n\r\n* Apply feedback\r\n\r\n* Make some fields mandatory\r\n\r\n* Make StandAlone Widths optional\r\n\r\n* Make short width optional as per UTS 35\r\n\r\n* Readd skipping if short width is none\r\n\r\n* Re-add default to empty values for Invariant",
          "timestamp": "2020-09-21T19:38:12-07:00",
          "tree_id": "2f153a1b7be0f292f81c5eb52d1028935339ebaa",
          "url": "https://github.com/unicode-org/icu4x/commit/ab00f54f6ce0fd898a6f8a6d70e77a24926a3dcd"
        },
        "date": 1600742785963,
        "tool": "cargo",
        "benches": [
          {
            "name": "langid/construct/langid",
            "value": 639,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "langid/construct/locale",
            "value": 1094,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "langid/to_string/langid",
            "value": 1979,
            "range": "± 158",
            "unit": "ns/iter"
          },
          {
            "name": "langid/to_string/locale",
            "value": 1945,
            "range": "± 164",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/struct/langid",
            "value": 15,
            "range": "± 1",
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
            "value": 2073,
            "range": "± 329",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/str/locale",
            "value": 2227,
            "range": "± 232",
            "unit": "ns/iter"
          },
          {
            "name": "langid/canonicalize/langid",
            "value": 3210,
            "range": "± 295",
            "unit": "ns/iter"
          },
          {
            "name": "langid/canonicalize/locale",
            "value": 5113,
            "range": "± 481",
            "unit": "ns/iter"
          },
          {
            "name": "locale/construct/locale",
            "value": 2409,
            "range": "± 257",
            "unit": "ns/iter"
          },
          {
            "name": "locale/to_string/locale",
            "value": 3277,
            "range": "± 445",
            "unit": "ns/iter"
          },
          {
            "name": "locale/compare/struct/locale",
            "value": 118,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "locale/compare/str/locale",
            "value": 3137,
            "range": "± 315",
            "unit": "ns/iter"
          },
          {
            "name": "locale/canonicalize/locale",
            "value": 6306,
            "range": "± 1576",
            "unit": "ns/iter"
          },
          {
            "name": "language_subtag_parse",
            "value": 301,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "script_subtag_parse",
            "value": 111,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "region_subtag_parse",
            "value": 114,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "variant_subtag_parse",
            "value": 236,
            "range": "± 28",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}