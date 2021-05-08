window.BENCHMARK_DATA = {
  "lastUpdate": 1620455572919,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action",
            "username": "actions-user"
          },
          "distinct": true,
          "id": "46f5287cc5181425467e383290f2f13843806ffb",
          "message": ":arrow_up: Upgrade dependencies; make `xdoctest` `[all]` package install\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@770cc4e",
          "timestamp": "2021-05-08T06:27:39Z",
          "tree_id": "7df07dfc1281a812a3dc52e0739c870c181142d7",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/46f5287cc5181425467e383290f2f13843806ffb"
        },
        "date": 1620455571279,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 950.9218903164091,
            "unit": "iter/sec",
            "range": "stddev: 0.000229422146079459",
            "extra": "mean: 1.051611084131485 msec\nrounds: 523"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1314.5117270110543,
            "unit": "iter/sec",
            "range": "stddev: 0.00017346323364028185",
            "extra": "mean: 760.7387438633255 usec\nrounds: 1222"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 9114.786761291602,
            "unit": "iter/sec",
            "range": "stddev: 0.00005289500816011577",
            "extra": "mean: 109.7118370609359 usec\nrounds: 1252"
          }
        ]
      }
    ]
  }
}