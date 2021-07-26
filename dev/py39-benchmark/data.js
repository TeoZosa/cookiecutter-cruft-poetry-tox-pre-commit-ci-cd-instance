window.BENCHMARK_DATA = {
  "lastUpdate": 1627309740790,
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
          "id": "856c87cce4c0468667cdb14ac770109d105ed0dc",
          "message": "Merge pull request #256 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/dot-github/workflows/pip-21.2.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@c3b4c8c",
          "timestamp": "2021-07-26T14:02:16Z",
          "tree_id": "1c53879950cde9b812d70905737973b9b8f1f6ce"
        },
        "date": 1627309737907,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 897.8863777603593,
            "unit": "iter/sec",
            "range": "stddev: 0.0002780745517877242",
            "extra": "mean: 1.1137266638283871 msec\nrounds: 470"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1203.5328588190837,
            "unit": "iter/sec",
            "range": "stddev: 0.0003144957878768701",
            "extra": "mean: 830.8871608052383 usec\nrounds: 1194"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8491.002834807494,
            "unit": "iter/sec",
            "range": "stddev: 0.00009191076079051569",
            "extra": "mean: 117.77171901305482 usec\nrounds: 1783"
          }
        ]
      }
    ]
  }
}