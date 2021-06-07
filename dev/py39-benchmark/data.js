window.BENCHMARK_DATA = {
  "lastUpdate": 1623072184901,
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
          "id": "3ede43598d10ed44b8712890fe6f5872efb57fd5",
          "message": "Merge pull request #203 from TeoZosa/dependabot/github_actions/JamesIves/github-pages-deploy-action-4.1.4\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@3a0ec1a",
          "timestamp": "2021-06-07T13:16:09Z",
          "tree_id": "dea4c9ea3cb9e43da973e0596f245f88dec3cdb7"
        },
        "date": 1623072182515,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 980.3911267509985,
            "unit": "iter/sec",
            "range": "stddev: 0.00025706465627923554",
            "extra": "mean: 1.0200010717293873 msec\nrounds: 474"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1412.6232556230225,
            "unit": "iter/sec",
            "range": "stddev: 0.00012397153135886943",
            "extra": "mean: 707.9028297314563 usec\nrounds: 1157"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 9468.89785357435,
            "unit": "iter/sec",
            "range": "stddev: 0.00003531063434086444",
            "extra": "mean: 105.6089119836177 usec\nrounds: 943"
          }
        ]
      }
    ]
  }
}