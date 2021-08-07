window.BENCHMARK_DATA = {
  "lastUpdate": 1628359381230,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "6c9773f41e6c34a1431a6ede6fb93c9b9e51731f",
          "message": ":memo: Add emojis to all documentation sections\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@871c8bf",
          "timestamp": "2021-08-07T17:52:36Z",
          "tree_id": "e442514e955ff043fc76f568deb806a6832d3509"
        },
        "date": 1628359379041,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1241.1206181220623,
            "unit": "iter/sec",
            "range": "stddev: 0.000015190046782544488",
            "extra": "mean: 805.7234610388621 usec\nrounds: 616"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1817.4935353733465,
            "unit": "iter/sec",
            "range": "stddev: 0.00001539935619386108",
            "extra": "mean: 550.208284396776 usec\nrounds: 1519"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 14820.606485101815,
            "unit": "iter/sec",
            "range": "stddev: 0.000003831761604005751",
            "extra": "mean: 67.47362201440504 usec\nrounds: 1926"
          }
        ]
      }
    ]
  }
}