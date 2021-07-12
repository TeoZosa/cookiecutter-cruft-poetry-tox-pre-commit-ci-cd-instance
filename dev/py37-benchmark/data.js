window.BENCHMARK_DATA = {
  "lastUpdate": 1626119298524,
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
        "date": 1626119296329,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 957.714779810442,
            "unit": "iter/sec",
            "range": "stddev: 0.00016031183462976006",
            "extra": "mean: 1.0441522059395674 msec\nrounds: 505"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1343.6472295392475,
            "unit": "iter/sec",
            "range": "stddev: 0.00012792844872552513",
            "extra": "mean: 744.2429664688937 usec\nrounds: 1014"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8709.07229075855,
            "unit": "iter/sec",
            "range": "stddev: 0.000036497644074930176",
            "extra": "mean: 114.82279244152437 usec\nrounds: 1561"
          }
        ]
      }
    ]
  }
}