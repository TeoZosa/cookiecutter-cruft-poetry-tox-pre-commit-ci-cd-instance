window.BENCHMARK_DATA = {
  "lastUpdate": 1629265293792,
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
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "ca19c77809b2a7ebc750e283777e6dce1cf39381",
          "message": "Merge pull request #281 from TeoZosa/dependabot/docker/{{cookiecutter.project_slug}}/python-182f0ef\n\n⬆️ Bump python from `74f44a8` to `182f0ef` in /{{cookiecutter.project_slug}}\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@c20998b",
          "timestamp": "2021-08-18T05:32:45Z",
          "tree_id": "f9de06dbc11c95d29d4e028b2eea2fb98f5204f9"
        },
        "date": 1629265291506,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 292.79703323278073,
            "unit": "iter/sec",
            "range": "stddev: 0.0005258053721822663",
            "extra": "mean: 3.415335151995805 msec\nrounds: 125"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 812.7267572954323,
            "unit": "iter/sec",
            "range": "stddev: 0.00032646578476651307",
            "extra": "mean: 1.2304258362647857 msec\nrounds: 739"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1757.997287768311,
            "unit": "iter/sec",
            "range": "stddev: 0.00029759772377261186",
            "extra": "mean: 568.8290914654649 usec\nrounds: 656"
          }
        ]
      }
    ]
  }
}