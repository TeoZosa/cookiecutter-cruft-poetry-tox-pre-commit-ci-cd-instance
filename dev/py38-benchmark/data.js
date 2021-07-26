window.BENCHMARK_DATA = {
  "lastUpdate": 1627309220275,
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
          "id": "52ca2a9f9966ed5365828d076cf3f305c0cabc4f",
          "message": "Merge pull request #253 from TeoZosa/dependabot/pip/dot-github/workflows/pip-21.2.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@61a7f4f",
          "timestamp": "2021-07-26T13:35:30Z",
          "tree_id": "35534a254f672da3cdc47edefe1a23e336faf97e"
        },
        "date": 1627309204804,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 938.8861011881604,
            "unit": "iter/sec",
            "range": "stddev: 0.00016864524708446873",
            "extra": "mean: 1.065091919812744 msec\nrounds: 424"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1271.1047277014948,
            "unit": "iter/sec",
            "range": "stddev: 0.0009714857555163864",
            "extra": "mean: 786.7172375389348 usec\nrounds: 1284"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8731.799507456311,
            "unit": "iter/sec",
            "range": "stddev: 0.000053423902706098666",
            "extra": "mean: 114.52393050780357 usec\nrounds: 2029"
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
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "b70238def7fe47382ece1f637a4b11a84422d033",
          "message": "Merge pull request #127 from TeoZosa/dependabot/github_actions/codecov/codecov-action-2.0.2",
          "timestamp": "2021-07-26T13:18:18Z",
          "tree_id": "0808d8edd398f1a8dcc1a2987891a2321ee8452b"
        },
        "date": 1627309218219,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1126.7047250277742,
            "unit": "iter/sec",
            "range": "stddev: 0.00004473222510074967",
            "extra": "mean: 887.5439836070175 usec\nrounds: 549"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1668.6081535085725,
            "unit": "iter/sec",
            "range": "stddev: 0.000032106234061375154",
            "extra": "mean: 599.3018779737507 usec\nrounds: 1303"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 12541.135905319605,
            "unit": "iter/sec",
            "range": "stddev: 0.00000671309472690628",
            "extra": "mean: 79.7375937514422 usec\nrounds: 1696"
          }
        ]
      }
    ]
  }
}