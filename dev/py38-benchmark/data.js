window.BENCHMARK_DATA = {
  "lastUpdate": 1622467912802,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action",
            "username": "actions-user"
          },
          "distinct": true,
          "id": "14fe94e776bc38d6d51ac77ab27b91f75e3b6802",
          "message": "Merge pull request #191 from TeoZosa/dependabot/pip/icontract-2.5.2\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@2fa53da",
          "timestamp": "2021-05-31T13:22:38Z",
          "tree_id": "5207c514147e7e75419be62ac0a2b40a8d11fff3",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/14fe94e776bc38d6d51ac77ab27b91f75e3b6802"
        },
        "date": 1622467911037,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 819.4418649450264,
            "unit": "iter/sec",
            "range": "stddev: 0.0002971951109567926",
            "extra": "mean: 1.2203428245237222 msec\nrounds: 473"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1103.1657600166443,
            "unit": "iter/sec",
            "range": "stddev: 0.00031542599107257187",
            "extra": "mean: 906.4820865949575 usec\nrounds: 1201"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 6241.528148313916,
            "unit": "iter/sec",
            "range": "stddev: 0.00007329920550603858",
            "extra": "mean: 160.21717378141435 usec\nrounds: 1640"
          }
        ]
      }
    ]
  }
}