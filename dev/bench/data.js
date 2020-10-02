window.BENCHMARK_DATA = {
  "lastUpdate": 1601653687974,
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
        "date": 1601653687600,
        "tool": "cargo",
        "benches": [
          {
            "name": "uniset/contains/best",
            "value": 11,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "uniset/contains/worst",
            "value": 11,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "uniset/contains_range/best",
            "value": 10,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "uniset/contains_range/worst",
            "value": 11,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}