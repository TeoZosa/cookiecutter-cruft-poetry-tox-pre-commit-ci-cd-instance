window.BENCHMARK_DATA = {
  "lastUpdate": 1624890188484,
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
          "id": "3079c924eb715e2d19da46d374b8a039af044481",
          "message": "Merge pull request #84 from TeoZosa/dependabot/pip/xdoctest-0.15.5",
          "timestamp": "2021-06-28T13:44:34Z",
          "tree_id": "eab4be3d6b6de37731be665022cda06c0af373fe"
        },
        "date": 1624890136485,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1121.3002942240066,
            "unit": "iter/sec",
            "range": "stddev: 0.0001461747905166854",
            "extra": "mean: 891.8217583203683 usec\nrounds: 571"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1495.9421038312391,
            "unit": "iter/sec",
            "range": "stddev: 0.00013831494945387888",
            "extra": "mean: 668.4750682789876 usec\nrounds: 1406"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 10201.803101054576,
            "unit": "iter/sec",
            "range": "stddev: 0.000022727527562533255",
            "extra": "mean: 98.02188790495559 usec\nrounds: 2034"
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
          "id": "093fa464808343e1572a06f7c25c8e7c201b0adf",
          "message": "Merge pull request #230 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/dot-github/workflows/poetry-1.1.7\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@146b875",
          "timestamp": "2021-06-28T14:02:57Z",
          "tree_id": "2f3b10add4ec78c203782d2d8a33d04ed3196ef0"
        },
        "date": 1624890186921,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 943.1703693843507,
            "unit": "iter/sec",
            "range": "stddev: 0.0008351409302519723",
            "extra": "mean: 1.060253833729684 msec\nrounds: 421"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1456.9408537381262,
            "unit": "iter/sec",
            "range": "stddev: 0.000031826885068893734",
            "extra": "mean: 686.3696610842256 usec\nrounds: 1015"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 10584.371678347428,
            "unit": "iter/sec",
            "range": "stddev: 0.0000411533956849442",
            "extra": "mean: 94.47891952298988 usec\nrounds: 1342"
          }
        ]
      }
    ]
  }
}