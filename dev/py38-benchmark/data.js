window.BENCHMARK_DATA = {
  "lastUpdate": 1629733348377,
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
          "id": "4b8a04803517c49492e734b63f8f869ca1772960",
          "message": "Merge pull request #299 from TeoZosa/dependabot/pip/tox-3.24.3\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@d42a220",
          "timestamp": "2021-08-23T15:03:45Z",
          "tree_id": "de5f460f0f345effcec799d7724ff7a5b38f6dae"
        },
        "date": 1629733345828,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 279.7896475381948,
            "unit": "iter/sec",
            "range": "stddev: 0.00039027266444897213",
            "extra": "mean: 3.574113655736628 msec\nrounds: 122"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 817.1835052409898,
            "unit": "iter/sec",
            "range": "stddev: 0.00020290368286711262",
            "extra": "mean: 1.223715351064382 msec\nrounds: 752"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1617.2065291667325,
            "unit": "iter/sec",
            "range": "stddev: 0.00013139263265506127",
            "extra": "mean: 618.3502119022802 usec\nrounds: 689"
          }
        ]
      }
    ]
  }
}