window.BENCHMARK_DATA = {
  "lastUpdate": 1621725323706,
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
          "id": "f8e1c9e851e8ed587e55682aae268d5fe1ec9b39",
          "message": ":art: Reorganize dependencies into respective sections\n\nMirroring metaproject README organization.\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@354d29b",
          "timestamp": "2021-05-22T23:08:28Z",
          "tree_id": "c518fccdb54c6e35c7be412f9acbb72c93f79b19",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/f8e1c9e851e8ed587e55682aae268d5fe1ec9b39"
        },
        "date": 1621725322449,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 935.3195827234885,
            "unit": "iter/sec",
            "range": "stddev: 0.00017202500082402273",
            "extra": "mean: 1.0691532803025179 msec\nrounds: 528"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1255.641508931067,
            "unit": "iter/sec",
            "range": "stddev: 0.00029204159748589474",
            "extra": "mean: 796.4056563017771 usec\nrounds: 1222"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 7908.703831206918,
            "unit": "iter/sec",
            "range": "stddev: 0.00007615070753796911",
            "extra": "mean: 126.44296983964736 usec\nrounds: 1691"
          }
        ]
      }
    ]
  }
}