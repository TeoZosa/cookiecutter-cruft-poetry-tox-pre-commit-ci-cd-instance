window.BENCHMARK_DATA = {
  "lastUpdate": 1612147076236,
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
          "id": "8a1dd8640a0346550b08a1b32f34754672ffc172",
          "message": ":sparkles: Add `icontract` benchmarks\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@f8b7975",
          "timestamp": "2021-02-01T02:29:59Z",
          "tree_id": "2a10251c9d32f99f67e46d7a51b5923abe139351",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/8a1dd8640a0346550b08a1b32f34754672ffc172"
        },
        "date": 1612146906176,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 918.2423649661366,
            "unit": "iter/sec",
            "range": "stddev: 0.00020899128640206887",
            "extra": "mean: 1.089037097560706 msec\nrounds: 451"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1307.075375500865,
            "unit": "iter/sec",
            "range": "stddev: 0.00021428762955933914",
            "extra": "mean: 765.066819208345 usec\nrounds: 1062"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 9428.208978257084,
            "unit": "iter/sec",
            "range": "stddev: 0.00002450288257491429",
            "extra": "mean: 106.06468336734531 usec\nrounds: 1497"
          }
        ]
      },
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
          "id": "b30ed7019da7c6cf10759fc1a5056182b174a069",
          "message": ":sparkles: Add `icontract` benchmarks\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@e7a67d1",
          "timestamp": "2021-02-01T02:33:07Z",
          "tree_id": "46f00833b8c7d07f4c0ac4e8cd26e27a47d09498",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/b30ed7019da7c6cf10759fc1a5056182b174a069"
        },
        "date": 1612147075211,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1003.6799428787266,
            "unit": "iter/sec",
            "range": "stddev: 0.00016691682849968753",
            "extra": "mean: 996.3335494498657 usec\nrounds: 455"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1511.8979381477607,
            "unit": "iter/sec",
            "range": "stddev: 0.00010759943186816472",
            "extra": "mean: 661.4203080567123 usec\nrounds: 1266"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13046.663847109137,
            "unit": "iter/sec",
            "range": "stddev: 0.0000061762896085371875",
            "extra": "mean: 76.64794707051325 usec\nrounds: 1587"
          }
        ]
      }
    ]
  }
}