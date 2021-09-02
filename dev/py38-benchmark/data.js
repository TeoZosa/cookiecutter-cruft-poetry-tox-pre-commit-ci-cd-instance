window.BENCHMARK_DATA = {
  "lastUpdate": 1630618685896,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "f12bd549d6bf855a7753b86498aa1d5351fbbd70",
          "message": "Merge pull request #313 from TeoZosa/dependabot/docker/{{cookiecutter.project_slug}}/python-3.9.7-slim\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@ef21523",
          "timestamp": "2021-09-02T21:28:50Z",
          "tree_id": "b4de2993b56364473d38f538e8dda2fa398265de"
        },
        "date": 1630618683071,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 286.13552193572286,
            "unit": "iter/sec",
            "range": "stddev: 0.00023363172212595497",
            "extra": "mean: 3.4948474528256535 msec\nrounds: 106"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 829.755710317417,
            "unit": "iter/sec",
            "range": "stddev: 0.00022387002676075074",
            "extra": "mean: 1.2051739898451042 msec\nrounds: 788"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1606.9160847711928,
            "unit": "iter/sec",
            "range": "stddev: 0.00020144521938452034",
            "extra": "mean: 622.3100319158165 usec\nrounds: 564"
          }
        ]
      }
    ]
  }
}