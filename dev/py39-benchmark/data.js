window.BENCHMARK_DATA = {
  "lastUpdate": 1631108066659,
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
          "id": "bf3b8c817aa4375158b8fdba9ed1e7dc60b070cd",
          "message": "Merge pull request #322 from TeoZosa/dependabot/pip/hypothesis-6.19.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@12f7528",
          "timestamp": "2021-09-08T13:23:44Z",
          "tree_id": "40dec9c97cdce7a34050e96b3b3489ce65f6cd43"
        },
        "date": 1631108063997,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 236.40335804961023,
            "unit": "iter/sec",
            "range": "stddev: 0.0007336762672476797",
            "extra": "mean: 4.230058355559171 msec\nrounds: 90"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 692.7838889010242,
            "unit": "iter/sec",
            "range": "stddev: 0.00032042162874801333",
            "extra": "mean: 1.4434515813962105 msec\nrounds: 559"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1351.9022980706684,
            "unit": "iter/sec",
            "range": "stddev: 0.00036380445458482905",
            "extra": "mean: 739.6984245289941 usec\nrounds: 636"
          }
        ]
      }
    ]
  }
}