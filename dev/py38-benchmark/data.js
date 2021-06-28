window.BENCHMARK_DATA = {
  "lastUpdate": 1624890121325,
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
          "id": "3079c924eb715e2d19da46d374b8a039af044481",
          "message": "Merge pull request #84 from TeoZosa/dependabot/pip/xdoctest-0.15.5",
          "timestamp": "2021-06-28T13:44:34Z",
          "tree_id": "eab4be3d6b6de37731be665022cda06c0af373fe"
        },
        "date": 1624890116532,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1258.8746395655692,
            "unit": "iter/sec",
            "range": "stddev: 0.00001860214480479929",
            "extra": "mean: 794.3602711268333 usec\nrounds: 568"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1863.1377910299043,
            "unit": "iter/sec",
            "range": "stddev: 0.00001575063136137158",
            "extra": "mean: 536.7289552144292 usec\nrounds: 1563"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13684.375883062889,
            "unit": "iter/sec",
            "range": "stddev: 0.000004705995640959949",
            "extra": "mean: 73.07604004342625 usec\nrounds: 1798"
          }
        ]
      }
    ]
  }
}