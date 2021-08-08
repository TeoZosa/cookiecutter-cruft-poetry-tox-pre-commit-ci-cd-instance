window.BENCHMARK_DATA = {
  "lastUpdate": 1628455887643,
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
          "id": "f0ada6eb5c02972105c38eefd6057005c84f7302",
          "message": "Merge pull request #274 from TeoZosa/add-rich-text-support-to-console-output\n\n💄🔊Add Rich Text Support to Console Output\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@092bbf3",
          "timestamp": "2021-08-08T20:43:26Z",
          "tree_id": "aa8291ac7674d2af25927006c8431e4c9916e15d"
        },
        "date": 1628455885262,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 302.5118351464988,
            "unit": "iter/sec",
            "range": "stddev: 0.0002012334226307904",
            "extra": "mean: 3.305655791998106 msec\nrounds: 125"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 864.4463636536954,
            "unit": "iter/sec",
            "range": "stddev: 0.00010547375231882914",
            "extra": "mean: 1.1568097710231198 msec\nrounds: 773"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1768.9367669865405,
            "unit": "iter/sec",
            "range": "stddev: 0.00008058359587173159",
            "extra": "mean: 565.3113320175615 usec\nrounds: 759"
          }
        ]
      }
    ]
  }
}