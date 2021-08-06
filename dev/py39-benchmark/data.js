window.BENCHMARK_DATA = {
  "lastUpdate": 1628293776651,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "e86321c065ffa8065b9ebf6fbd008987c1198448",
          "message": "Merge pull request #147 from TeoZosa/dependabot/pip/typer-cli-0.0.12",
          "timestamp": "2021-08-06T23:40:27Z",
          "tree_id": "c54c718e02c46654c9bc9965df27b3da7e89690c"
        },
        "date": 1628293774011,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1155.6201997339886,
            "unit": "iter/sec",
            "range": "stddev: 0.00008212039594272862",
            "extra": "mean: 865.3362066794863 usec\nrounds: 479"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1731.8011066914985,
            "unit": "iter/sec",
            "range": "stddev: 0.00006271364046634873",
            "extra": "mean: 577.4335148165136 usec\nrounds: 1451"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13134.057244205884,
            "unit": "iter/sec",
            "range": "stddev: 0.000007519771850885019",
            "extra": "mean: 76.13793524778127 usec\nrounds: 1776"
          }
        ]
      }
    ]
  }
}