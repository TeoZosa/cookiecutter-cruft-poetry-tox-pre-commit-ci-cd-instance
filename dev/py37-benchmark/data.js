window.BENCHMARK_DATA = {
  "lastUpdate": 1622813801404,
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
          "id": "9229c6a28b743764f179d3d65adca76aff72012d",
          "message": "Merge pull request #201 from TeoZosa/dependabot/pip/importlib-metadata-4.5.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@398d111",
          "timestamp": "2021-06-04T13:29:39Z",
          "tree_id": "0fcf175b38fdb87ae1846d1e2099309c3125f4d2",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/9229c6a28b743764f179d3d65adca76aff72012d"
        },
        "date": 1622813799271,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 928.9005801819746,
            "unit": "iter/sec",
            "range": "stddev: 0.00022220038084056674",
            "extra": "mean: 1.076541474227626 msec\nrounds: 485"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1299.5081326576671,
            "unit": "iter/sec",
            "range": "stddev: 0.00017448894599062962",
            "extra": "mean: 769.5219251570721 usec\nrounds: 1109"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8428.342831304653,
            "unit": "iter/sec",
            "range": "stddev: 0.000027131303593548547",
            "extra": "mean: 118.64728571384018 usec\nrounds: 1715"
          }
        ]
      }
    ]
  }
}