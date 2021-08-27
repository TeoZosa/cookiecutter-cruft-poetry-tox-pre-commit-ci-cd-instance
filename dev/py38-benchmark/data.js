window.BENCHMARK_DATA = {
  "lastUpdate": 1630078944353,
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
      }
    ]
  }
}