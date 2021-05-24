window.BENCHMARK_DATA = {
  "lastUpdate": 1621816399476,
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
          "id": "64228b3bb885f15548453b6a3b16adde285ac82f",
          "message": ":memo: :cookie: Note required repository secrets for related features\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@9ac75a6",
          "timestamp": "2021-05-24T00:26:57Z",
          "tree_id": "7d84d351de185978855569b3b9994649b08403cc",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/64228b3bb885f15548453b6a3b16adde285ac82f"
        },
        "date": 1621816398112,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1214.4040676561199,
            "unit": "iter/sec",
            "range": "stddev: 0.00007237115878188201",
            "extra": "mean: 823.4491522496842 usec\nrounds: 578"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1742.434264992899,
            "unit": "iter/sec",
            "range": "stddev: 0.000016389105239014943",
            "extra": "mean: 573.9097423018569 usec\nrounds: 1494"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13313.888123910114,
            "unit": "iter/sec",
            "range": "stddev: 0.000005720755594373948",
            "extra": "mean: 75.10953905374362 usec\nrounds: 1690"
          }
        ]
      }
    ]
  }
}