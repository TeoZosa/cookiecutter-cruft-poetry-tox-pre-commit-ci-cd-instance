window.BENCHMARK_DATA = {
  "lastUpdate": 1626119275946,
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
          "id": "cb2c8c69fda1e5e562efb488898d867f07fa2da5",
          "message": "Merge pull request #87 from TeoZosa/dependabot/pip/typer-cli-0.0.12",
          "timestamp": "2021-07-12T19:41:27Z",
          "tree_id": "7744dd759477f447783a5534fb975cf060200a85"
        },
        "date": 1626119273995,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1058.8713376978258,
            "unit": "iter/sec",
            "range": "stddev: 0.000020445299108417394",
            "extra": "mean: 944.4018025591075 usec\nrounds: 547"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1556.226162765541,
            "unit": "iter/sec",
            "range": "stddev: 0.000017980732929236542",
            "extra": "mean: 642.5801235875115 usec\nrounds: 1327"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 11358.286277391284,
            "unit": "iter/sec",
            "range": "stddev: 0.000004636870625408646",
            "extra": "mean: 88.04145058313104 usec\nrounds: 1629"
          }
        ]
      }
    ]
  }
}