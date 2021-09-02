window.BENCHMARK_DATA = {
  "lastUpdate": 1630623509929,
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
          "id": "a55d79da4c39957555827124f7b922b7c8f6d23d",
          "message": ":construction_worker: Specify test instance parameter: `adr_documentation_support`\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@ff874fe",
          "timestamp": "2021-09-02T22:48:13Z",
          "tree_id": "d343604245c67d541c72835894ed63df761b5250"
        },
        "date": 1630623507125,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 325.02868952108213,
            "unit": "iter/sec",
            "range": "stddev: 0.00010028838410029061",
            "extra": "mean: 3.0766514841304113 msec\nrounds: 126"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 944.64371172405,
            "unit": "iter/sec",
            "range": "stddev: 0.00007084545976975744",
            "extra": "mean: 1.0586001765416089 msec\nrounds: 810"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2005.134066169703,
            "unit": "iter/sec",
            "range": "stddev: 0.000031620657607547815",
            "extra": "mean: 498.71976985072376 usec\nrounds: 743"
          }
        ]
      }
    ]
  }
}