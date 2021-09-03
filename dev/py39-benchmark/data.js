window.BENCHMARK_DATA = {
  "lastUpdate": 1630688524864,
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
        "date": 1630688521421,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 273.37192537109564,
            "unit": "iter/sec",
            "range": "stddev: 0.00023133944823369715",
            "extra": "mean: 3.658020108109217 msec\nrounds: 111"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 771.3129960630155,
            "unit": "iter/sec",
            "range": "stddev: 0.00012883235082399532",
            "extra": "mean: 1.296490536402554 msec\nrounds: 673"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1558.2573939272218,
            "unit": "iter/sec",
            "range": "stddev: 0.00014665035232820523",
            "extra": "mean: 641.7425028093305 usec\nrounds: 712"
          }
        ]
      }
    ]
  }
}