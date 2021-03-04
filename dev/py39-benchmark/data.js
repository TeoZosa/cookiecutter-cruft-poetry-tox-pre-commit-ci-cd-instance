window.BENCHMARK_DATA = {
  "lastUpdate": 1614867658987,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action",
            "username": "actions-user"
          },
          "distinct": true,
          "id": "39939f288e490f132b06f0ee1b63d3f4fa44a73b",
          "message": "Merge pull request #97 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/poetry-1.1.5\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@316fbaa",
          "timestamp": "2021-03-04T14:16:39Z",
          "tree_id": "6ba7cb782aff6e765857b4eae91f6ec37fb62fbf",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/39939f288e490f132b06f0ee1b63d3f4fa44a73b"
        },
        "date": 1614867657909,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 962.7580789044886,
            "unit": "iter/sec",
            "range": "stddev: 0.0001847535110596181",
            "extra": "mean: 1.0386825329348452 msec\nrounds: 501"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1411.4330647444413,
            "unit": "iter/sec",
            "range": "stddev: 0.00009962431713226608",
            "extra": "mean: 708.4997687659126 usec\nrounds: 1159"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 10142.335210231133,
            "unit": "iter/sec",
            "range": "stddev: 0.000017782030967683475",
            "extra": "mean: 98.596622895213 usec\nrounds: 2079"
          }
        ]
      }
    ]
  }
}