window.BENCHMARK_DATA = {
  "lastUpdate": 1630618679178,
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
        "date": 1630618676570,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 313.3860431833968,
            "unit": "iter/sec",
            "range": "stddev: 0.0002603121236718253",
            "extra": "mean: 3.1909525703248676 msec\nrounds: 128"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 867.8845410106086,
            "unit": "iter/sec",
            "range": "stddev: 0.0001578253953788642",
            "extra": "mean: 1.1522269988074099 msec\nrounds: 840"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1788.9022958040218,
            "unit": "iter/sec",
            "range": "stddev: 0.00009261180656402761",
            "extra": "mean: 559.0020217121752 usec\nrounds: 829"
          }
        ]
      }
    ]
  }
}