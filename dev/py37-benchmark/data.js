window.BENCHMARK_DATA = {
  "lastUpdate": 1629383435799,
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
          "id": "63e2f1babb0b1a7ea57c58aa8116add009bb46f9",
          "message": "Merge pull request #290 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/dot-github/workflows/tox-3.24.2\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@a026421",
          "timestamp": "2021-08-19T13:55:27Z",
          "tree_id": "de58abc5af22d16f8da05953ab7f23b3aa99c4d4"
        },
        "date": 1629383433079,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 275.5339946863581,
            "unit": "iter/sec",
            "range": "stddev: 0.00034951920832333846",
            "extra": "mean: 3.6293162342392837 msec\nrounds: 111"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 792.7639290614635,
            "unit": "iter/sec",
            "range": "stddev: 0.000238852739353768",
            "extra": "mean: 1.2614095613354646 msec\nrounds: 750"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1555.1695208970677,
            "unit": "iter/sec",
            "range": "stddev: 0.00018595615865254236",
            "extra": "mean: 643.0167171892429 usec\nrounds: 739"
          }
        ]
      }
    ]
  }
}