window.BENCHMARK_DATA = {
  "lastUpdate": 1630079058060,
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
          "id": "529a6d33207a55a8a3a130f525b71ec450498192",
          "message": "Merge pull request #305 from TeoZosa/dependabot/pip/myst-parser-0.15.2\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@4a6e772",
          "timestamp": "2021-08-27T14:40:18Z",
          "tree_id": "e6bad82ed4f46e82ce9547d5770c6e8f510df574"
        },
        "date": 1630078942472,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 365.71186595400155,
            "unit": "iter/sec",
            "range": "stddev: 0.00003402133033956913",
            "extra": "mean: 2.734393092199469 msec\nrounds: 141"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1071.986983284138,
            "unit": "iter/sec",
            "range": "stddev: 0.000012519373794635344",
            "extra": "mean: 932.8471479536079 usec\nrounds: 953"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2202.0364422291677,
            "unit": "iter/sec",
            "range": "stddev: 0.000010655105685324597",
            "extra": "mean: 454.1250911304987 usec\nrounds: 823"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "6c12dd1f2c51e84d88d69c5b458ba46a6278f761",
          "message": "Merge pull request #188 from TeoZosa/dependabot/github_actions/codecov/codecov-action-2.0.3",
          "timestamp": "2021-08-27T13:21:46Z",
          "tree_id": "dea9d63ca7c8b0f1c0100c07808331e681b4febd"
        },
        "date": 1630079056033,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 332.46402446223794,
            "unit": "iter/sec",
            "range": "stddev: 0.00011986217635542832",
            "extra": "mean: 3.0078442370343814 msec\nrounds: 135"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 951.9870575393101,
            "unit": "iter/sec",
            "range": "stddev: 0.00005522050066240889",
            "extra": "mean: 1.0504344487463868 msec\nrounds: 800"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1992.0730545956048,
            "unit": "iter/sec",
            "range": "stddev: 0.00003917166792987975",
            "extra": "mean: 501.9896221642344 usec\nrounds: 749"
          }
        ]
      }
    ]
  }
}