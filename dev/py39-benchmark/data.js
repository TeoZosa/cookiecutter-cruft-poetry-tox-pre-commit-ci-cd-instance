window.BENCHMARK_DATA = {
  "lastUpdate": 1627567426157,
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
          "id": "db1ddeafb8de124264c58d28df4591add715bd48",
          "message": "Merge pull request #137 from TeoZosa/dependabot/pip/typer-cli-0.0.12",
          "timestamp": "2021-07-29T13:57:40Z",
          "tree_id": "51cc8d8a268b237e81d35e4f9822d85bbff81bc7"
        },
        "date": 1627567424231,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1240.911467100052,
            "unit": "iter/sec",
            "range": "stddev: 0.00001683410308594978",
            "extra": "mean: 805.8592627376954 usec\nrounds: 628"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1809.26198658651,
            "unit": "iter/sec",
            "range": "stddev: 0.000016419452841673627",
            "extra": "mean: 552.7115516789669 usec\nrounds: 1519"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 14558.36007280472,
            "unit": "iter/sec",
            "range": "stddev: 0.000003994682461471751",
            "extra": "mean: 68.68905529188127 usec\nrounds: 1899"
          }
        ]
      }
    ]
  }
}