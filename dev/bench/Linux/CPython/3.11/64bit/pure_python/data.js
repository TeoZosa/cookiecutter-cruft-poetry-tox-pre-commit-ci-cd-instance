window.BENCHMARK_DATA = {
  "lastUpdate": 1671079504191,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action",
            "username": "actions-user"
          },
          "distinct": true,
          "id": "6ea74d3c94a45b88eb7702d574d76b5945728e73",
          "message": "Merge pull request #870 from TeoZosa/ci/fix-benchmarks-gh-pages-publishing\n\n💚 Fix benchmarks not being published on pushes to `master`\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@858a704",
          "timestamp": "2022-12-14T11:21:39Z",
          "tree_id": "5c3ad8c622a604eb8700975c5cea442686d6e8b2",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/6ea74d3c94a45b88eb7702d574d76b5945728e73"
        },
        "date": 1671017094800,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 452.71850706500163,
            "unit": "iter/sec",
            "range": "stddev: 0.00017289720233852368",
            "extra": "mean: 2.208878109452723 msec\nrounds: 603"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 893.0568982393444,
            "unit": "iter/sec",
            "range": "stddev: 0.00007592080101791779",
            "extra": "mean: 1.119749482895763 msec\nrounds: 1257"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2418.8123792472625,
            "unit": "iter/sec",
            "range": "stddev: 0.00004207190230213777",
            "extra": "mean: 413.4260303030206 usec\nrounds: 3300"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action",
            "username": "actions-user"
          },
          "distinct": true,
          "id": "b58548787d55216f8f5ed51d067b5fd4c5e7e739",
          "message": ":memo: Fix self-documenting Makefile demo in Sphinx docs\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@0de6924",
          "timestamp": "2022-12-15T04:29:11Z",
          "tree_id": "4505b996c9023b9fd24066ac0b4dc136ab3c795b",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/b58548787d55216f8f5ed51d067b5fd4c5e7e739"
        },
        "date": 1671079497749,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 486.65378495704465,
            "unit": "iter/sec",
            "range": "stddev: 0.00003134395975775989",
            "extra": "mean: 2.05484891089107 msec\nrounds: 505"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1079.2655934906672,
            "unit": "iter/sec",
            "range": "stddev: 0.00001997829227394496",
            "extra": "mean: 926.5559895833437 usec\nrounds: 1152"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2979.1875194281565,
            "unit": "iter/sec",
            "range": "stddev: 0.000004749628295834956",
            "extra": "mean: 335.6619861887533 usec\nrounds: 3041"
          }
        ]
      }
    ]
  }
}