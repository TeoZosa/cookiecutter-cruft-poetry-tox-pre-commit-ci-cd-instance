window.BENCHMARK_DATA = {
  "lastUpdate": 1633443899511,
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
          "id": "c0bcf09c28a7d4d24a3f083aa0ba3feeb14a5a30",
          "message": "Merge pull request #367 from TeoZosa/dependabot/pip/docs/poetry-1.1.11\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@2787de0",
          "timestamp": "2021-10-05T13:31:31Z",
          "tree_id": "c2f7bfd1ba0e662e7444cfd4e6d4787e4b18128a"
        },
        "date": 1633443897591,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 370.71614533816626,
            "unit": "iter/sec",
            "range": "stddev: 0.000024710550992483375",
            "extra": "mean: 2.697481651595732 msec\nrounds: 376"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1058.0631328944976,
            "unit": "iter/sec",
            "range": "stddev: 0.000011996156992505552",
            "extra": "mean: 945.1231868029872 usec\nrounds: 1076"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2241.7671855024105,
            "unit": "iter/sec",
            "range": "stddev: 0.000009554393966568416",
            "extra": "mean: 446.07665170006777 usec\nrounds: 2294"
          }
        ]
      }
    ]
  }
}