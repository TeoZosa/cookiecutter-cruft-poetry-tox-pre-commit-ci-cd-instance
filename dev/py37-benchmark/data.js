window.BENCHMARK_DATA = {
  "lastUpdate": 1621453597767,
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
          "id": "f2ab290eaddebe3ce40f40872df8400942e9ab0b",
          "message": ":fire: Remove inactive Dependabot badge\n\nSee: dependabot/dependabot-core#1912\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@ed6b76c",
          "timestamp": "2021-05-19T19:41:18Z",
          "tree_id": "a747307a240e269c83a290ff448f0e45a92108bd",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/f2ab290eaddebe3ce40f40872df8400942e9ab0b"
        },
        "date": 1621453595878,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1040.8178735995536,
            "unit": "iter/sec",
            "range": "stddev: 0.00020171048061425707",
            "extra": "mean: 960.782885618221 usec\nrounds: 612"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1427.1671362181864,
            "unit": "iter/sec",
            "range": "stddev: 0.00020581865183300234",
            "extra": "mean: 700.6887803273513 usec\nrounds: 1352"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8945.628622772057,
            "unit": "iter/sec",
            "range": "stddev: 0.00004033065619757455",
            "extra": "mean: 111.786442537352 usec\nrounds: 2097"
          }
        ]
      }
    ]
  }
}