window.BENCHMARK_DATA = {
  "lastUpdate": 1624581301540,
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
        "date": 1624581300060,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1439.8855600398238,
            "unit": "iter/sec",
            "range": "stddev: 0.000014198328770732334",
            "extra": "mean: 694.4996378547905 usec\nrounds: 671"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 2112.2612741342546,
            "unit": "iter/sec",
            "range": "stddev: 0.000014263853949030453",
            "extra": "mean: 473.42628123022644 usec\nrounds: 1625"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 15364.94447734384,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036626802843418372",
            "extra": "mean: 65.083215983926 usec\nrounds: 2102"
          }
        ]
      }
    ]
  }
}