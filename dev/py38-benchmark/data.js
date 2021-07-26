window.BENCHMARK_DATA = {
  "lastUpdate": 1627309615635,
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
          "id": "856c87cce4c0468667cdb14ac770109d105ed0dc",
          "message": "Merge pull request #256 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/dot-github/workflows/pip-21.2.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@c3b4c8c",
          "timestamp": "2021-07-26T14:02:16Z",
          "tree_id": "1c53879950cde9b812d70905737973b9b8f1f6ce"
        },
        "date": 1627309614090,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1281.2882584680194,
            "unit": "iter/sec",
            "range": "stddev: 0.000017616083392273615",
            "extra": "mean: 780.464499999131 usec\nrounds: 598"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1896.3705184053165,
            "unit": "iter/sec",
            "range": "stddev: 0.000014102485586592118",
            "extra": "mean: 527.323110275366 usec\nrounds: 1596"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13777.03531492641,
            "unit": "iter/sec",
            "range": "stddev: 0.000003975471789887103",
            "extra": "mean: 72.5845566292897 usec\nrounds: 1863"
          }
        ]
      }
    ]
  }
}