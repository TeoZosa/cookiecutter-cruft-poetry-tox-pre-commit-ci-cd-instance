window.BENCHMARK_DATA = {
  "lastUpdate": 1627565916260,
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
          "id": "90c5491b3b567d75fb4d9b0727d8b7b0c5ecb2cf",
          "message": "Merge pull request #139 from TeoZosa/dependabot/pip/pylint-2.9.6",
          "timestamp": "2021-07-29T13:22:52Z",
          "tree_id": "f21db3ad820a447dee7feb94840ad086c083fc77"
        },
        "date": 1627565914906,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1243.5953774894115,
            "unit": "iter/sec",
            "range": "stddev: 0.000018474507370939465",
            "extra": "mean: 804.1200683929966 usec\nrounds: 541"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1823.5167537079276,
            "unit": "iter/sec",
            "range": "stddev: 0.000019634011912088227",
            "extra": "mean: 548.3909034378797 usec\nrounds: 1367"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 14649.155494565975,
            "unit": "iter/sec",
            "range": "stddev: 0.000004950310526443555",
            "extra": "mean: 68.26332073346784 usec\nrounds: 1746"
          }
        ]
      }
    ]
  }
}