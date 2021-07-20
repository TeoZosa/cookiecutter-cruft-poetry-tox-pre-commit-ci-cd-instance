window.BENCHMARK_DATA = {
  "lastUpdate": 1626790293468,
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
          "id": "267056b14f6720ed998b81798300d52dba873a17",
          "message": "Merge pull request #118 from TeoZosa/dependabot/pip/typer-cli-0.0.12",
          "timestamp": "2021-07-20T14:04:12Z",
          "tree_id": "3b14f229d134d3cef4e0bcbef6f7d2634e056b08"
        },
        "date": 1626790291958,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1051.0679755003525,
            "unit": "iter/sec",
            "range": "stddev: 0.00002100624512558184",
            "extra": "mean: 951.4132513874357 usec\nrounds: 541"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1545.791983079268,
            "unit": "iter/sec",
            "range": "stddev: 0.000019477826842799463",
            "extra": "mean: 646.9175742572861 usec\nrounds: 1313"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 11319.186367026281,
            "unit": "iter/sec",
            "range": "stddev: 0.000005357075133398218",
            "extra": "mean: 88.34557251509544 usec\nrounds: 1579"
          }
        ]
      }
    ]
  }
}