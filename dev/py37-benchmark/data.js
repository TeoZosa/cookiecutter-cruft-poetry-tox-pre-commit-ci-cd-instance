window.BENCHMARK_DATA = {
  "lastUpdate": 1628531922869,
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
          "id": "47cb419b3856502fda369af9a19262954e31177c",
          "message": "Merge pull request #144 from TeoZosa/dependabot/github_actions/crazy-max/ghaction-github-labeler-3.1.1",
          "timestamp": "2021-08-09T17:49:24Z",
          "tree_id": "1afc56692ca4b292e77faf963a8f8785ddad1cd8"
        },
        "date": 1628531920481,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 265.1976279247406,
            "unit": "iter/sec",
            "range": "stddev: 0.00029228901619376084",
            "extra": "mean: 3.770772792446644 msec\nrounds: 106"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 757.4574276015641,
            "unit": "iter/sec",
            "range": "stddev: 0.00022968401801861358",
            "extra": "mean: 1.320206210356178 msec\nrounds: 618"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1500.2139502529524,
            "unit": "iter/sec",
            "range": "stddev: 0.0001420057272193418",
            "extra": "mean: 666.5715912262975 usec\nrounds: 570"
          }
        ]
      }
    ]
  }
}