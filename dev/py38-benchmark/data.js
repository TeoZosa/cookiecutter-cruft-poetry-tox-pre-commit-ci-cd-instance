window.BENCHMARK_DATA = {
  "lastUpdate": 1626097785129,
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
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "7868e51a709918bcb56fed58fc862bfeec5a0381",
          "message": "Merge pull request #243 from TeoZosa/dependabot/pip/sphinx-4.1.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@7ec19e7",
          "timestamp": "2021-07-12T13:40:17Z",
          "tree_id": "d55bc00609dadd6ba47d61aa04509d097a44cdcd"
        },
        "date": 1626097783422,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1273.0048295372835,
            "unit": "iter/sec",
            "range": "stddev: 0.00009303966727351745",
            "extra": "mean: 785.5429742269584 usec\nrounds: 582"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1914.4152769004288,
            "unit": "iter/sec",
            "range": "stddev: 0.0000703377415790556",
            "extra": "mean: 522.3527058450293 usec\nrounds: 1574"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 14428.732644450847,
            "unit": "iter/sec",
            "range": "stddev: 0.000011743306155575054",
            "extra": "mean: 69.30615630920228 usec\nrounds: 1561"
          }
        ]
      }
    ]
  }
}