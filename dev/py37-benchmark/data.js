window.BENCHMARK_DATA = {
  "lastUpdate": 1630698699589,
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
          "id": "445b2d89a66356f95bd6d739b192d62ce7326d49",
          "message": "Merge pull request #198 from TeoZosa/dependabot/github_actions/codecov/codecov-action-2.0.3",
          "timestamp": "2021-09-03T19:41:47Z",
          "tree_id": "eebc56d0b650d101e4210ff516b2d3e30f0d3bdd"
        },
        "date": 1630698697061,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 260.7804960730947,
            "unit": "iter/sec",
            "range": "stddev: 0.00046725140646878416",
            "extra": "mean: 3.8346426019517503 msec\nrounds: 103"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 767.5178695267074,
            "unit": "iter/sec",
            "range": "stddev: 0.0002725437670449886",
            "extra": "mean: 1.3029012609395707 msec\nrounds: 640"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1473.3526493174952,
            "unit": "iter/sec",
            "range": "stddev: 0.0003408804760568921",
            "extra": "mean: 678.7241333317129 usec\nrounds: 615"
          }
        ]
      }
    ]
  }
}