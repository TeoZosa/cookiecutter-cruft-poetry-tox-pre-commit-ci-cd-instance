window.BENCHMARK_DATA = {
  "lastUpdate": 1624639956549,
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
          "id": "00103c1542333355db51e7652c7b48af2cda9c7f",
          "message": "Merge pull request #50 from TeoZosa/dependabot/github_actions/crazy-max/ghaction-github-labeler-3.1.1",
          "timestamp": "2021-06-25T16:44:56Z",
          "tree_id": "fcaca89ea364772e37ab1eb4761a68c342fe4d68"
        },
        "date": 1624639954345,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 970.077249890301,
            "unit": "iter/sec",
            "range": "stddev: 0.00010575329595409634",
            "extra": "mean: 1.0308457394636177 msec\nrounds: 522"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1396.234027835505,
            "unit": "iter/sec",
            "range": "stddev: 0.0000748330666241834",
            "extra": "mean: 716.212311162648 usec\nrounds: 1308"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8506.375024383,
            "unit": "iter/sec",
            "range": "stddev: 0.000054891637573905983",
            "extra": "mean: 117.55888931931187 usec\nrounds: 1807"
          }
        ]
      }
    ]
  }
}