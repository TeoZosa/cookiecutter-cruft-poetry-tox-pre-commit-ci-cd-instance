window.BENCHMARK_DATA = {
  "lastUpdate": 1625059929935,
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
          "id": "b16a271432b75e440c02b18891e2af45ba74bc16",
          "message": "Merge pull request #233 from TeoZosa/dependabot/pip/pylint-2.9.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@2cbd8b3",
          "timestamp": "2021-06-30T13:23:52Z",
          "tree_id": "155f62bf3f2570a886a7f27dec53d49fe159c9a5"
        },
        "date": 1625059927568,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 877.7579559602294,
            "unit": "iter/sec",
            "range": "stddev: 0.00023541136967769586",
            "extra": "mean: 1.1392662330312269 msec\nrounds: 442"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1355.978165846052,
            "unit": "iter/sec",
            "range": "stddev: 0.00021065029000081484",
            "extra": "mean: 737.475001580175 usec\nrounds: 1266"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 9208.529517476221,
            "unit": "iter/sec",
            "range": "stddev: 0.000057196832674816284",
            "extra": "mean: 108.5949714449164 usec\nrounds: 1891"
          }
        ]
      }
    ]
  }
}