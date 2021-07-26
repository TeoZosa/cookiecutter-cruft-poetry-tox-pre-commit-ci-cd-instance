window.BENCHMARK_DATA = {
  "lastUpdate": 1627309292100,
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
        "date": 1627309224370,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1028.7079721987302,
            "unit": "iter/sec",
            "range": "stddev: 0.00004638136295697348",
            "extra": "mean: 972.0931761252219 usec\nrounds: 511"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1531.1112306224818,
            "unit": "iter/sec",
            "range": "stddev: 0.000021950069923557373",
            "extra": "mean: 653.120413461695 usec\nrounds: 1248"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 12603.17529568375,
            "unit": "iter/sec",
            "range": "stddev: 0.000006469174216513974",
            "extra": "mean: 79.34508380141894 usec\nrounds: 1599"
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
        "date": 1627309290395,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1244.389146980415,
            "unit": "iter/sec",
            "range": "stddev: 0.00001708342304153068",
            "extra": "mean: 803.6071372259715 usec\nrounds: 583"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1833.451931239451,
            "unit": "iter/sec",
            "range": "stddev: 0.000014717880708692483",
            "extra": "mean: 545.4192624095575 usec\nrounds: 1551"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 14812.918432023524,
            "unit": "iter/sec",
            "range": "stddev: 0.000003848652588773233",
            "extra": "mean: 67.50864150025531 usec\nrounds: 1947"
          }
        ]
      }
    ]
  }
}