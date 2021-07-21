window.BENCHMARK_DATA = {
  "lastUpdate": 1626875879017,
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
          "id": "1e7e0779bd4abd212759eb67eca7ed5e47559d1d",
          "message": "Merge pull request #119 from TeoZosa/dependabot/github_actions/crazy-max/ghaction-github-labeler-3.1.1",
          "timestamp": "2021-07-21T13:15:57Z",
          "tree_id": "724d4d5600a08226d479be57b05933538174b6c1"
        },
        "date": 1626875877661,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1260.5568007453674,
            "unit": "iter/sec",
            "range": "stddev: 0.00003290516932928993",
            "extra": "mean: 793.3002300322363 usec\nrounds: 626"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1875.6238943916596,
            "unit": "iter/sec",
            "range": "stddev: 0.000013876370331412455",
            "extra": "mean: 533.1559290698524 usec\nrounds: 1579"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13776.277001308341,
            "unit": "iter/sec",
            "range": "stddev: 0.000005654766733396013",
            "extra": "mean: 72.5885520380455 usec\nrounds: 1864"
          }
        ]
      }
    ]
  }
}