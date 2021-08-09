window.BENCHMARK_DATA = {
  "lastUpdate": 1628525748947,
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
          "id": "80a3399a43d0350086869732a631d55edd86ba5a",
          "message": "Merge pull request #277 from TeoZosa/dependabot/pip/types-emoji-1.2.4\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@cd1c029",
          "timestamp": "2021-08-09T14:47:42Z",
          "tree_id": "5057d2690c13afd0460c968fa589b0c3e1efbcfd"
        },
        "date": 1628525745985,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 281.36000142071094,
            "unit": "iter/sec",
            "range": "stddev: 0.0003085999816706346",
            "extra": "mean: 3.554165463998288 msec\nrounds: 125"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 809.7975022440656,
            "unit": "iter/sec",
            "range": "stddev: 0.00030992785235700945",
            "extra": "mean: 1.2348766169676442 msec\nrounds: 778"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1717.9115542889754,
            "unit": "iter/sec",
            "range": "stddev: 0.00008781265520188327",
            "extra": "mean: 582.1021446088877 usec\nrounds: 733"
          }
        ]
      }
    ]
  }
}