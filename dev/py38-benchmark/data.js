window.BENCHMARK_DATA = {
  "lastUpdate": 1630688449001,
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
          "id": "cae8b8bd4f773a760231e3d7e9955b9ef818be44",
          "message": ":bug: Fix `jupyter_notebook_project` logic updates\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@8a8f759",
          "timestamp": "2021-09-03T16:52:15Z",
          "tree_id": "39a6e288795af086f481b2ce68edc7cf72ccec8f"
        },
        "date": 1630688445972,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 310.8101749857439,
            "unit": "iter/sec",
            "range": "stddev: 0.000041337058819739024",
            "extra": "mean: 3.21739788617238 msec\nrounds: 123"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 908.0492923360142,
            "unit": "iter/sec",
            "range": "stddev: 0.000017672445560635475",
            "extra": "mean: 1.1012618020189595 msec\nrounds: 793"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1865.329421442451,
            "unit": "iter/sec",
            "range": "stddev: 0.00001308732920281619",
            "extra": "mean: 536.0983365751581 usec\nrounds: 719"
          }
        ]
      }
    ]
  }
}