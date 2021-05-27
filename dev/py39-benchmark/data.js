window.BENCHMARK_DATA = {
  "lastUpdate": 1622121916836,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action",
            "username": "actions-user"
          },
          "distinct": true,
          "id": "68274f94374b1f8572cf2f910507a2b0917cd3c3",
          "message": "Merge pull request #187 from TeoZosa/dependabot/pip/importlib-metadata-4.2.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@91fe094",
          "timestamp": "2021-05-27T13:18:47Z",
          "tree_id": "4ff7af7f821cd5b6c8e22a3664dbb88003bd8ba0",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/68274f94374b1f8572cf2f910507a2b0917cd3c3"
        },
        "date": 1622121914906,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1100.6851828970725,
            "unit": "iter/sec",
            "range": "stddev: 0.00007098499237562025",
            "extra": "mean: 908.5249947382205 usec\nrounds: 570"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1529.3104228841516,
            "unit": "iter/sec",
            "range": "stddev: 0.00009794146841112024",
            "extra": "mean: 653.8894818450813 usec\nrounds: 1432"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 10020.424320563572,
            "unit": "iter/sec",
            "range": "stddev: 0.000041262225409402094",
            "extra": "mean: 99.79617309696499 usec\nrounds: 1866"
          }
        ]
      }
    ]
  }
}