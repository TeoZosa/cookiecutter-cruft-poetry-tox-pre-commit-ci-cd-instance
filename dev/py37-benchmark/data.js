window.BENCHMARK_DATA = {
  "lastUpdate": 1627395136278,
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
          "id": "c0d0d4fd9bd7f249494765ca9f3fb496657b79b1",
          "message": "Merge pull request #133 from TeoZosa/dependabot/pip/sphinx-autoapi-1.8.2",
          "timestamp": "2021-07-27T13:38:34Z",
          "tree_id": "c7214abb42f656b79dc2098999554d50872bfda5"
        },
        "date": 1627395134361,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1215.0381215170598,
            "unit": "iter/sec",
            "range": "stddev: 0.000016942767250854163",
            "extra": "mean: 823.0194446503705 usec\nrounds: 542"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1748.3481232717925,
            "unit": "iter/sec",
            "range": "stddev: 0.000019850471360292908",
            "extra": "mean: 571.9684693736153 usec\nrounds: 1453"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13537.674501987061,
            "unit": "iter/sec",
            "range": "stddev: 0.000004967799430025993",
            "extra": "mean: 73.86793055581443 usec\nrounds: 1800"
          }
        ]
      }
    ]
  }
}