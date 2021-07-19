window.BENCHMARK_DATA = {
  "lastUpdate": 1626703747085,
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
          "id": "a65ca5bde544a7954d9f55255216a5d4f96cf223",
          "message": "Merge pull request #249 from TeoZosa/dependabot/pip/emoji-1.4.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@1ba6dd7",
          "timestamp": "2021-07-19T13:49:19Z",
          "tree_id": "de83dfeaa4602dcff4ecfbbcb48b10574e2c6fbe"
        },
        "date": 1626703743928,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1287.965774278877,
            "unit": "iter/sec",
            "range": "stddev: 0.00001698062628488197",
            "extra": "mean: 776.4181471047963 usec\nrounds: 639"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1895.4733702300214,
            "unit": "iter/sec",
            "range": "stddev: 0.000014400949026115002",
            "extra": "mean: 527.5726980425195 usec\nrounds: 1583"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13739.190432282592,
            "unit": "iter/sec",
            "range": "stddev: 0.0000038087465392435376",
            "extra": "mean: 72.7844922834993 usec\nrounds: 1879"
          }
        ]
      }
    ]
  }
}