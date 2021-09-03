window.BENCHMARK_DATA = {
  "lastUpdate": 1630689807494,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "3ce9fd3c3a28848d42dbbb150c2a60bad11a057d",
          "message": ":art: Auto-format with Black\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@e9c44c1",
          "timestamp": "2021-09-03T17:14:19Z",
          "tree_id": "16e85786bbea140f64bfb20d0d556585189cab62"
        },
        "date": 1630689805053,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 268.1769240303088,
            "unit": "iter/sec",
            "range": "stddev: 0.0003269339211808937",
            "extra": "mean: 3.7288816090939356 msec\nrounds: 110"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 763.5602985837469,
            "unit": "iter/sec",
            "range": "stddev: 0.00040010049576819865",
            "extra": "mean: 1.3096542628719723 msec\nrounds: 738"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1559.9682388139393,
            "unit": "iter/sec",
            "range": "stddev: 0.00014299664818236065",
            "extra": "mean: 641.0386924033215 usec\nrounds: 803"
          }
        ]
      }
    ]
  }
}