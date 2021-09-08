window.BENCHMARK_DATA = {
  "lastUpdate": 1631120707428,
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
          "id": "0559e55630b03db013f3a7cde137a3353621e4f9",
          "message": ":cookie: :memo: Mark ADR documentation component as optional\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@648d262",
          "timestamp": "2021-09-08T16:55:38Z",
          "tree_id": "3f2e03c84bf888a1cf3e9fbbd6cf11ebf5823397"
        },
        "date": 1631120703526,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 319.57674760121523,
            "unit": "iter/sec",
            "range": "stddev: 0.00007021124535772011",
            "extra": "mean: 3.1291387984455388 msec\nrounds: 129"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 909.4882902173005,
            "unit": "iter/sec",
            "range": "stddev: 0.00003904023431662451",
            "extra": "mean: 1.0995193789257847 msec\nrounds: 797"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1998.2852914812372,
            "unit": "iter/sec",
            "range": "stddev: 0.00002685432773502881",
            "extra": "mean: 500.4290449732259 usec\nrounds: 756"
          }
        ]
      }
    ]
  }
}