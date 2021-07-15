window.BENCHMARK_DATA = {
  "lastUpdate": 1626357196009,
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
          "id": "56be73c1421447f42616baaa60e9f3c72a1ecc19",
          "message": "Merge pull request #104 from TeoZosa/dependabot/github_actions/actions/setup-node-2.2.0",
          "timestamp": "2021-07-15T13:13:31Z",
          "tree_id": "83bf697425d0d394dd7974a3849e82da59539c6b"
        },
        "date": 1626357193401,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1018.6654634041724,
            "unit": "iter/sec",
            "range": "stddev: 0.00013155712843457846",
            "extra": "mean: 981.6765522394405 usec\nrounds: 469"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1497.4364940430582,
            "unit": "iter/sec",
            "range": "stddev: 0.00014624514425590657",
            "extra": "mean: 667.8079531105947 usec\nrounds: 1109"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 9092.198979465253,
            "unit": "iter/sec",
            "range": "stddev: 0.00003591697280253426",
            "extra": "mean: 109.9843945626907 usec\nrounds: 1508"
          }
        ]
      }
    ]
  }
}