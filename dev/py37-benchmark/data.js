window.BENCHMARK_DATA = {
  "lastUpdate": 1627309230219,
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
        "date": 1627309113923,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1223.3844352729516,
            "unit": "iter/sec",
            "range": "stddev: 0.00001554624171106679",
            "extra": "mean: 817.4045469009814 usec\nrounds: 565"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1759.9609933626723,
            "unit": "iter/sec",
            "range": "stddev: 0.00001680610620762957",
            "extra": "mean: 568.1944109962053 usec\nrounds: 1455"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13547.843328574938,
            "unit": "iter/sec",
            "range": "stddev: 0.000004557859222595443",
            "extra": "mean: 73.81248629372712 usec\nrounds: 1824"
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
        "date": 1627309226153,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1207.603201833441,
            "unit": "iter/sec",
            "range": "stddev: 0.00001740870923802722",
            "extra": "mean: 828.0865755255966 usec\nrounds: 523"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1732.2350818090554,
            "unit": "iter/sec",
            "range": "stddev: 0.00001580329820013032",
            "extra": "mean: 577.2888509772314 usec\nrounds: 1483"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13415.618056237337,
            "unit": "iter/sec",
            "range": "stddev: 0.000006053617440533878",
            "extra": "mean: 74.5399873347668 usec\nrounds: 1816"
          }
        ]
      }
    ]
  }
}