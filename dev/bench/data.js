window.BENCHMARK_DATA = {
  "lastUpdate": 1601653933723,
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
          "id": "608d8bb67494eb092cc31a1a16799c8924348787",
          "message": "Add DateTimeFormat (#202)\n\n* Add DateTimeFormat\r\n\r\n* Add Preferences to Options and remove leftovers from Skeleton building\r\n\r\n* Add fixtures and data driven tests\r\n\r\n* Add docs and clean up the code\r\n\r\n* Clippy!\r\n\r\n* More clippy\r\n\r\n* More clippy\r\n\r\n* Remove some monads that are not needed anymore and remove all unwraps from src\r\n\r\n* Apply reviewers feedback\r\n\r\n* Apply reviewers feedback\r\n\r\n* Improve format_number to comply with UTS 35 and fix clippy\r\n\r\n* Improve pattern parsing\r\n\r\n* Switch parser pattern to Bytes\r\n\r\n* Apply feedback\r\n\r\n* Add an example",
          "timestamp": "2020-10-02T08:43:43-07:00",
          "tree_id": "5c46735e9831b6ac842fa35394e9977ee0c59005",
          "url": "https://github.com/unicode-org/icu4x/commit/608d8bb67494eb092cc31a1a16799c8924348787"
        },
        "date": 1601653931709,
        "tool": "cargo",
        "benches": [
          {
            "name": "langid/construct/langid",
            "value": 710,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "langid/construct/locale",
            "value": 1128,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "langid/to_string/langid",
            "value": 2157,
            "range": "± 515",
            "unit": "ns/iter"
          },
          {
            "name": "langid/to_string/locale",
            "value": 2116,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/struct/langid",
            "value": 15,
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
            "value": 2253,
            "range": "± 134",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/str/locale",
            "value": 2272,
            "range": "± 148",
            "unit": "ns/iter"
          },
          {
            "name": "langid/canonicalize/langid",
            "value": 3435,
            "range": "± 123",
            "unit": "ns/iter"
          },
          {
            "name": "langid/canonicalize/locale",
            "value": 5234,
            "range": "± 177",
            "unit": "ns/iter"
          },
          {
            "name": "locale/construct/locale",
            "value": 2497,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "locale/to_string/locale",
            "value": 3333,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "locale/compare/struct/locale",
            "value": 113,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "locale/compare/str/locale",
            "value": 3467,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "locale/canonicalize/locale",
            "value": 6908,
            "range": "± 125",
            "unit": "ns/iter"
          },
          {
            "name": "language_subtag_parse",
            "value": 329,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "script_subtag_parse",
            "value": 121,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "region_subtag_parse",
            "value": 130,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "variant_subtag_parse",
            "value": 251,
            "range": "± 9",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}