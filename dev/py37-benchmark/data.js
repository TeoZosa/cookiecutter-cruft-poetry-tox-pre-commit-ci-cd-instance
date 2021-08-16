window.BENCHMARK_DATA = {
  "lastUpdate": 1629126555102,
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
          "id": "d6224ed9d3f3b6e813bf108883975ddcd627759c",
          "message": "Merge pull request #284 from TeoZosa/dependabot/pip/pygments-2.10.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@8dd499e",
          "timestamp": "2021-08-16T14:28:11Z",
          "tree_id": "2d68578a7c684326b3d344aff492e90b1aec7c63"
        },
        "date": 1629126552954,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 343.5161083009766,
            "unit": "iter/sec",
            "range": "stddev: 0.00021703970033466524",
            "extra": "mean: 2.9110716377929955 msec\nrounds: 127"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 971.1813651924296,
            "unit": "iter/sec",
            "range": "stddev: 0.00009317585305056514",
            "extra": "mean: 1.029673793011731 msec\nrounds: 773"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1984.5888616205962,
            "unit": "iter/sec",
            "range": "stddev: 0.00005386518455328534",
            "extra": "mean: 503.88270303170486 usec\nrounds: 660"
          }
        ]
      }
    ]
  }
}