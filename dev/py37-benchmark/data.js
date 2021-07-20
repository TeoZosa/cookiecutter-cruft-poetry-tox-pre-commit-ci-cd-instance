window.BENCHMARK_DATA = {
  "lastUpdate": 1626790249489,
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
        "date": 1626790248154,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1140.7098166844685,
            "unit": "iter/sec",
            "range": "stddev: 0.00010003814787111851",
            "extra": "mean: 876.6471414321227 usec\nrounds: 601"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1647.4042246885786,
            "unit": "iter/sec",
            "range": "stddev: 0.00006034529724569752",
            "extra": "mean: 607.0155612166393 usec\nrounds: 1315"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13454.269931638788,
            "unit": "iter/sec",
            "range": "stddev: 0.000012240054738651355",
            "extra": "mean: 74.32584637301056 usec\nrounds: 1751"
          }
        ]
      }
    ]
  }
}