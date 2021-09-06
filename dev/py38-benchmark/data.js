window.BENCHMARK_DATA = {
  "lastUpdate": 1630935870695,
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
          "id": "6833386f9f7f2e7e481f4c65ec973e96901ad0b8",
          "message": "Merge pull request #206 from TeoZosa/dependabot/github_actions/codecov/codecov-action-2.0.3",
          "timestamp": "2021-09-06T13:24:17Z",
          "tree_id": "b86b8181f4e1e92dd195f7a47efb53b7bf3066d0"
        },
        "date": 1630935841795,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 367.6421311831549,
            "unit": "iter/sec",
            "range": "stddev: 0.000026100714015892128",
            "extra": "mean: 2.7200364571431885 msec\nrounds: 140"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1070.742703101276,
            "unit": "iter/sec",
            "range": "stddev: 0.000013761574126026125",
            "extra": "mean: 933.9311835641014 usec\nrounds: 937"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2218.597529234568,
            "unit": "iter/sec",
            "range": "stddev: 0.000009936564390402463",
            "extra": "mean: 450.73519952264945 usec\nrounds: 837"
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
          "id": "dfb6f0d64b654fe3c63863ea27d58f69514da482",
          "message": "Merge pull request #321 from TeoZosa/dependabot/pip/hypothesis-6.18.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@40251b5",
          "timestamp": "2021-09-06T13:27:53Z",
          "tree_id": "da6573d7ce8da2e4a60c91d317583beaeae59894"
        },
        "date": 1630935868376,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 290.80608719707527,
            "unit": "iter/sec",
            "range": "stddev: 0.000205501653817961",
            "extra": "mean: 3.4387175648160135 msec\nrounds: 108"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 845.898851270808,
            "unit": "iter/sec",
            "range": "stddev: 0.00014319330998581063",
            "extra": "mean: 1.1821744390569668 msec\nrounds: 804"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1676.4854350920418,
            "unit": "iter/sec",
            "range": "stddev: 0.00010411564716803267",
            "extra": "mean: 596.4859455788223 usec\nrounds: 735"
          }
        ]
      }
    ]
  }
}