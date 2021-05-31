window.BENCHMARK_DATA = {
  "lastUpdate": 1622467783823,
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
        "date": 1622467782263,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 978.8269767258397,
            "unit": "iter/sec",
            "range": "stddev: 0.00022434850634262793",
            "extra": "mean: 1.0216310173070462 msec\nrounds: 520"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1430.4249479938717,
            "unit": "iter/sec",
            "range": "stddev: 0.00017007649240864244",
            "extra": "mean: 699.0929523443157 usec\nrounds: 1280"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 12198.210199719362,
            "unit": "iter/sec",
            "range": "stddev: 0.000005085286787684762",
            "extra": "mean: 81.97923987430603 usec\nrounds: 1605"
          }
        ]
      }
    ]
  }
}