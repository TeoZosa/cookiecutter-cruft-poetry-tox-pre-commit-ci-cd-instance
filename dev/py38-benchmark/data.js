window.BENCHMARK_DATA = {
  "lastUpdate": 1629126536044,
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
        "date": 1629126533926,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 329.1468822361973,
            "unit": "iter/sec",
            "range": "stddev: 0.0005414190078037491",
            "extra": "mean: 3.0381572907696435 msec\nrounds: 141"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1008.0376018495261,
            "unit": "iter/sec",
            "range": "stddev: 0.0001644907839589643",
            "extra": "mean: 992.026486080699 usec\nrounds: 934"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2101.569170174969,
            "unit": "iter/sec",
            "range": "stddev: 0.00010612908971835677",
            "extra": "mean: 475.8349209684799 usec\nrounds: 949"
          }
        ]
      }
    ]
  }
}