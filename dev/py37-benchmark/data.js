window.BENCHMARK_DATA = {
  "lastUpdate": 1630688501670,
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
        "date": 1630688498629,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 264.0184469104918,
            "unit": "iter/sec",
            "range": "stddev: 0.0002171892019466936",
            "extra": "mean: 3.787614129625657 msec\nrounds: 108"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 767.182904488062,
            "unit": "iter/sec",
            "range": "stddev: 0.00012360942468325073",
            "extra": "mean: 1.3034701296782623 msec\nrounds: 748"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1537.5089029340506,
            "unit": "iter/sec",
            "range": "stddev: 0.00008751922669680402",
            "extra": "mean: 650.4027378909387 usec\nrounds: 702"
          }
        ]
      }
    ]
  }
}