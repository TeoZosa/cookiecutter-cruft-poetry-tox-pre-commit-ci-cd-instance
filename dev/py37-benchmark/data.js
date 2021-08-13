window.BENCHMARK_DATA = {
  "lastUpdate": 1628866086876,
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
          "id": "7560bba639e012332b1edb621c230abbf73ff5a8",
          "message": "Merge pull request #161 from TeoZosa/dependabot/pip/matplotlib-3.4.3",
          "timestamp": "2021-08-13T14:23:28Z",
          "tree_id": "5b68aff2a4903d69bc27ea12f7cc479963a1489c"
        },
        "date": 1628866083183,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 245.94600855291947,
            "unit": "iter/sec",
            "range": "stddev: 0.0006734408355411897",
            "extra": "mean: 4.065933030927123 msec\nrounds: 97"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 724.2705221849798,
            "unit": "iter/sec",
            "range": "stddev: 0.00017089645234194195",
            "extra": "mean: 1.38069957200964 msec\nrounds: 736"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1396.9327078679064,
            "unit": "iter/sec",
            "range": "stddev: 0.00046375837768258723",
            "extra": "mean: 715.854095453365 usec\nrounds: 660"
          }
        ]
      }
    ]
  }
}