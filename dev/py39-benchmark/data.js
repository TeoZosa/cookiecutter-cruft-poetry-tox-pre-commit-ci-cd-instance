window.BENCHMARK_DATA = {
  "lastUpdate": 1612159797590,
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
          "id": "729b80187da2cd5eb1f82fb182d362b93484746a",
          "message": ":sparkles: Add `icontract` benchmarks\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@a22cb4c",
          "timestamp": "2021-02-01T06:05:05Z",
          "tree_id": "c8bdeea48830f9eb909405a8bbf30c1ec082989a",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/729b80187da2cd5eb1f82fb182d362b93484746a"
        },
        "date": 1612159796717,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 955.6122861182538,
            "unit": "iter/sec",
            "range": "stddev: 0.00013723961361847468",
            "extra": "mean: 1.0464495010440389 msec\nrounds: 479"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1342.0988656496886,
            "unit": "iter/sec",
            "range": "stddev: 0.00013471632237882218",
            "extra": "mean: 745.1015909442082 usec\nrounds: 1259"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 9344.293426923437,
            "unit": "iter/sec",
            "range": "stddev: 0.00003919492901840286",
            "extra": "mean: 107.01718731549347 usec\nrounds: 1356"
          }
        ]
      }
    ]
  }
}