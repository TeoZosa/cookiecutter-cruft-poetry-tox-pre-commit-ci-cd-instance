window.BENCHMARK_DATA = {
  "lastUpdate": 1624581325261,
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
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "804d5e8984c75bfd90aa52f6e0c4b66347f2830f",
          "message": "Merge pull request #45 from TeoZosa/dependabot/github_actions/actions/setup-node-2.1.5\n\n⬆️ Bump actions/setup-node from 1 to 2.1.5",
          "timestamp": "2021-06-25T00:29:36Z",
          "tree_id": "092ec07e63ac98914fc01826083edb92451695a0"
        },
        "date": 1624581324164,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1216.149271966947,
            "unit": "iter/sec",
            "range": "stddev: 0.000015635145345678498",
            "extra": "mean: 822.2674823318715 usec\nrounds: 566"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1747.4073725031265,
            "unit": "iter/sec",
            "range": "stddev: 0.000018020727533746792",
            "extra": "mean: 572.2763997312887 usec\nrounds: 1491"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13348.062800451862,
            "unit": "iter/sec",
            "range": "stddev: 0.0000051501889353028884",
            "extra": "mean: 74.91723817527647 usec\nrounds: 1776"
          }
        ]
      }
    ]
  }
}