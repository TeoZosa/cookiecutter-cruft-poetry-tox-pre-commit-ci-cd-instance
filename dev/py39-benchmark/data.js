window.BENCHMARK_DATA = {
  "lastUpdate": 1626097801594,
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
        "date": 1626097799628,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1240.7794046593156,
            "unit": "iter/sec",
            "range": "stddev: 0.00001757991248077063",
            "extra": "mean: 805.9450344234018 usec\nrounds: 581"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1834.005767650707,
            "unit": "iter/sec",
            "range": "stddev: 0.000017722164901232186",
            "extra": "mean: 545.2545557045672 usec\nrounds: 1490"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 14664.665417821761,
            "unit": "iter/sec",
            "range": "stddev: 0.000004287439789905704",
            "extra": "mean: 68.1911227776608 usec\nrounds: 1800"
          }
        ]
      }
    ]
  }
}