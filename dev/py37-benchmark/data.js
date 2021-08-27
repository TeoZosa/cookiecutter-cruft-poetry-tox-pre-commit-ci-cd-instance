window.BENCHMARK_DATA = {
  "lastUpdate": 1630078586487,
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
          "id": "a1e9c3798037aeb20cfcb8cbbe30a3d0bc7d73f9",
          "message": "Merge pull request #304 from TeoZosa/dependabot/pip/importlib-metadata-4.7.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@dbe3336",
          "timestamp": "2021-08-27T14:32:45Z",
          "tree_id": "7a7b277feba47a81384faeb8dd09a2d4cce8b854"
        },
        "date": 1630078583930,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 272.1250327943569,
            "unit": "iter/sec",
            "range": "stddev: 0.000738755277426819",
            "extra": "mean: 3.674781366974399 msec\nrounds: 109"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 788.2489472035678,
            "unit": "iter/sec",
            "range": "stddev: 0.00028092427344107593",
            "extra": "mean: 1.2686347422951227 msec\nrounds: 714"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1527.6985458636036,
            "unit": "iter/sec",
            "range": "stddev: 0.00038878090919394493",
            "extra": "mean: 654.5794016153252 usec\nrounds: 742"
          }
        ]
      }
    ]
  }
}