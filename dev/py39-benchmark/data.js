window.BENCHMARK_DATA = {
  "lastUpdate": 1627054776151,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "c355605f84d46bd1ad2a4a598ba2b96dbaf99dec",
          "message": "Merge pull request #124 from TeoZosa/dependabot/pip/nbqa-1.0.0",
          "timestamp": "2021-07-23T15:23:57Z",
          "tree_id": "9294d3700ae1e7a41e49c3004d7219be0cc711ea"
        },
        "date": 1627054774544,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1074.9835024046367,
            "unit": "iter/sec",
            "range": "stddev: 0.0001779523641559884",
            "extra": "mean: 930.2468342659159 usec\nrounds: 537"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1593.0095284630609,
            "unit": "iter/sec",
            "range": "stddev: 0.00003314027280040106",
            "extra": "mean: 627.742635641861 usec\nrounds: 1386"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 12314.691736662824,
            "unit": "iter/sec",
            "range": "stddev: 0.00001900471732198557",
            "extra": "mean: 81.20381909543367 usec\nrounds: 1592"
          }
        ]
      }
    ]
  }
}