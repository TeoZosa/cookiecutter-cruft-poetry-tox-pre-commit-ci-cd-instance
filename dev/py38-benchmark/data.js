window.BENCHMARK_DATA = {
  "lastUpdate": 1627567434043,
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
        "date": 1627567431605,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1260.6377701572019,
            "unit": "iter/sec",
            "range": "stddev: 0.000016687405223893128",
            "extra": "mean: 793.2492772093443 usec\nrounds: 588"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1852.9581669996314,
            "unit": "iter/sec",
            "range": "stddev: 0.000021096700198013617",
            "extra": "mean: 539.6775911132584 usec\nrounds: 1553"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13733.22634473033,
            "unit": "iter/sec",
            "range": "stddev: 0.000005702369780672902",
            "extra": "mean: 72.81610124948656 usec\nrounds: 1600"
          }
        ]
      }
    ]
  }
}