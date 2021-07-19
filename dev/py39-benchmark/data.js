window.BENCHMARK_DATA = {
  "lastUpdate": 1626703773303,
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
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "e78ae1ed6f334939cda5789facd2dc526759e7f0",
          "message": "Merge pull request #111 from TeoZosa/dependabot/pip/hypothesis-6.14.3",
          "timestamp": "2021-07-19T13:31:12Z",
          "tree_id": "3d21fbc5e0ff7282e43a40890a214525ad8989ad"
        },
        "date": 1626703528282,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 940.6981804386116,
            "unit": "iter/sec",
            "range": "stddev: 0.0003498633433341682",
            "extra": "mean: 1.063040219269626 msec\nrounds: 602"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1440.6928474245465,
            "unit": "iter/sec",
            "range": "stddev: 0.00021119871997227747",
            "extra": "mean: 694.1104773218311 usec\nrounds: 1389"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 10705.069065774283,
            "unit": "iter/sec",
            "range": "stddev: 0.00002612674462869257",
            "extra": "mean: 93.41368970679044 usec\nrounds: 2011"
          }
        ]
      },
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
          "id": "a65ca5bde544a7954d9f55255216a5d4f96cf223",
          "message": "Merge pull request #249 from TeoZosa/dependabot/pip/emoji-1.4.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@1ba6dd7",
          "timestamp": "2021-07-19T13:49:19Z",
          "tree_id": "de83dfeaa4602dcff4ecfbbcb48b10574e2c6fbe"
        },
        "date": 1626703771540,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1381.888807485854,
            "unit": "iter/sec",
            "range": "stddev: 0.000015609000906799483",
            "extra": "mean: 723.6472244241957 usec\nrounds: 606"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 2048.413335465953,
            "unit": "iter/sec",
            "range": "stddev: 0.000016534331093612004",
            "extra": "mean: 488.18272303061815 usec\nrounds: 1650"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 16510.790591583154,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034436464358074714",
            "extra": "mean: 60.56645164585749 usec\nrounds: 1975"
          }
        ]
      }
    ]
  }
}