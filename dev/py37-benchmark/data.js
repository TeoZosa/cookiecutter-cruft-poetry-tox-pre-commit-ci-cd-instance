window.BENCHMARK_DATA = {
  "lastUpdate": 1621452183593,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action",
            "username": "actions-user"
          },
          "distinct": true,
          "id": "5283162bd4bcc9730fc2fb6d53494fb16bdc65c7",
          "message": ":memo: Add docstrings to `conftest.py`\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@f5a07b8",
          "timestamp": "2021-05-19T19:17:48Z",
          "tree_id": "9bb456976ce38356f614e5c7790f8d8c2b96955a",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/5283162bd4bcc9730fc2fb6d53494fb16bdc65c7"
        },
        "date": 1621452182084,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1014.5033850516525,
            "unit": "iter/sec",
            "range": "stddev: 0.00022654638299248803",
            "extra": "mean: 985.7039559794923 usec\nrounds: 409"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1508.4672573891144,
            "unit": "iter/sec",
            "range": "stddev: 0.00015545696212331512",
            "extra": "mean: 662.9245647206292 usec\nrounds: 1321"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 10255.500729635767,
            "unit": "iter/sec",
            "range": "stddev: 0.00014732100399610486",
            "extra": "mean: 97.50864695570218 usec\nrounds: 1674"
          }
        ]
      }
    ]
  }
}