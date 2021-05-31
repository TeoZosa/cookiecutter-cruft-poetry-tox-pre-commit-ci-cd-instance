window.BENCHMARK_DATA = {
  "lastUpdate": 1622467746491,
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
        "date": 1622467744356,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1108.9082195574686,
            "unit": "iter/sec",
            "range": "stddev: 0.00013317386081970338",
            "extra": "mean: 901.7878868271619 usec\nrounds: 539"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1440.9580725440462,
            "unit": "iter/sec",
            "range": "stddev: 0.00013301592843430822",
            "extra": "mean: 693.9827182025332 usec\nrounds: 1313"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 9781.742214491118,
            "unit": "iter/sec",
            "range": "stddev: 0.00003221657832084508",
            "extra": "mean: 102.23127721752414 usec\nrounds: 1984"
          }
        ]
      }
    ]
  }
}