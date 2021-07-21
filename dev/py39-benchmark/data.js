window.BENCHMARK_DATA = {
  "lastUpdate": 1626875902867,
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
        "date": 1626875901512,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1247.540562202889,
            "unit": "iter/sec",
            "range": "stddev: 0.00009015058825719264",
            "extra": "mean: 801.5771432988234 usec\nrounds: 649"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1863.7009643963486,
            "unit": "iter/sec",
            "range": "stddev: 0.00006692994183603387",
            "extra": "mean: 536.5667663985458 usec\nrounds: 1601"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 14794.850183511717,
            "unit": "iter/sec",
            "range": "stddev: 0.000011014294219669773",
            "extra": "mean: 67.59108660082688 usec\nrounds: 1709"
          }
        ]
      }
    ]
  }
}