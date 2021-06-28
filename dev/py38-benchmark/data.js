window.BENCHMARK_DATA = {
  "lastUpdate": 1624890116368,
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
          "id": "093fa464808343e1572a06f7c25c8e7c201b0adf",
          "message": "Merge pull request #230 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/dot-github/workflows/poetry-1.1.7\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@146b875",
          "timestamp": "2021-06-28T14:02:57Z",
          "tree_id": "2f3b10add4ec78c203782d2d8a33d04ed3196ef0"
        },
        "date": 1624890114138,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1011.9339251403641,
            "unit": "iter/sec",
            "range": "stddev: 0.00013812898022364284",
            "extra": "mean: 988.2068138601949 usec\nrounds: 505"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1481.9293836535476,
            "unit": "iter/sec",
            "range": "stddev: 0.0001181826887484118",
            "extra": "mean: 674.7959862531376 usec\nrounds: 1455"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8942.095592291173,
            "unit": "iter/sec",
            "range": "stddev: 0.000028314248640168896",
            "extra": "mean: 111.8306094672129 usec\nrounds: 1859"
          }
        ]
      }
    ]
  }
}