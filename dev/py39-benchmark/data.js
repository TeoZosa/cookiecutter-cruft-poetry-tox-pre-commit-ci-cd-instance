window.BENCHMARK_DATA = {
  "lastUpdate": 1626119229368,
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
        "date": 1626119227623,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1244.7201974665527,
            "unit": "iter/sec",
            "range": "stddev: 0.000017985644962893468",
            "extra": "mean: 803.3934068358133 usec\nrounds: 585"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1822.1980620495215,
            "unit": "iter/sec",
            "range": "stddev: 0.000016319399498643877",
            "extra": "mean: 548.7877639795356 usec\nrounds: 1538"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 14696.756877015163,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037831602607304307",
            "extra": "mean: 68.04222240104818 usec\nrounds: 1866"
          }
        ]
      }
    ]
  }
}