window.BENCHMARK_DATA = {
  "lastUpdate": 1631121964781,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "3f3febe98748c27bdf9f94c8e2a0308d616bfa93",
          "message": ":cookie: :memo: Remove redundant qualifiers for CI/CD tools\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@c7e30fc",
          "timestamp": "2021-09-08T17:18:31Z",
          "tree_id": "81eb59eebeb15e4c4941ad57d458f0968f8eee9b"
        },
        "date": 1631121962174,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 372.478551366946,
            "unit": "iter/sec",
            "range": "stddev: 0.000028626816031645282",
            "extra": "mean: 2.6847183450701655 msec\nrounds: 142"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1054.8331543884854,
            "unit": "iter/sec",
            "range": "stddev: 0.000017399413980099737",
            "extra": "mean: 948.017225131425 usec\nrounds: 955"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2287.3713595351887,
            "unit": "iter/sec",
            "range": "stddev: 0.000011044646565092828",
            "extra": "mean: 437.1830554891654 usec\nrounds: 847"
          }
        ]
      }
    ]
  }
}