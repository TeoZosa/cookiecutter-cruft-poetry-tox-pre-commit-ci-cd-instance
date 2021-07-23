window.BENCHMARK_DATA = {
  "lastUpdate": 1627054789572,
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
        "date": 1627054787463,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1059.734735623969,
            "unit": "iter/sec",
            "range": "stddev: 0.00004004011116537426",
            "extra": "mean: 943.6323698601826 usec\nrounds: 511"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1561.7162804304023,
            "unit": "iter/sec",
            "range": "stddev: 0.000048235967723854394",
            "extra": "mean: 640.3211726296432 usec\nrounds: 1425"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 11827.686168850272,
            "unit": "iter/sec",
            "range": "stddev: 0.000009076427462769843",
            "extra": "mean: 84.54739039607156 usec\nrounds: 1583"
          }
        ]
      }
    ]
  }
}