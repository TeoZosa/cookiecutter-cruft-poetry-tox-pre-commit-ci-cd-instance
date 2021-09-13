window.BENCHMARK_DATA = {
  "lastUpdate": 1631547205645,
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
          "id": "469b2d722151c1125b58d133da61e92e6ea209a6",
          "message": "Merge pull request #329 from TeoZosa/dependabot/pip/hypothesis-6.21.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@eca744f",
          "timestamp": "2021-09-13T14:39:13Z",
          "tree_id": "accf806f68780b5fbcde42ab43d478f61f3d6517"
        },
        "date": 1631547202882,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 289.399900099857,
            "unit": "iter/sec",
            "range": "stddev: 0.00038604980629198507",
            "extra": "mean: 3.455426210081453 msec\nrounds: 119"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 838.2299306913126,
            "unit": "iter/sec",
            "range": "stddev: 0.0001405390722914827",
            "extra": "mean: 1.1929900894558503 msec\nrounds: 749"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1695.893893731102,
            "unit": "iter/sec",
            "range": "stddev: 0.00012067058766686383",
            "extra": "mean: 589.6595321774053 usec\nrounds: 808"
          }
        ]
      }
    ]
  }
}