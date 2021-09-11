window.BENCHMARK_DATA = {
  "lastUpdate": 1631337102456,
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
          "id": "871c129f260e7b40a172c8ed6a5e7f21ab09396d",
          "message": ":rotating_light: Silence spurious missing intra-package imports\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@63a8dd7",
          "timestamp": "2021-09-11T05:04:01Z",
          "tree_id": "0cc3f429e25b8c39ba8fcf0be77c9c23fd20b315"
        },
        "date": 1631337099899,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 310.54651377878594,
            "unit": "iter/sec",
            "range": "stddev: 0.0003118572410610223",
            "extra": "mean: 3.220129531746532 msec\nrounds: 126"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 929.0262738394915,
            "unit": "iter/sec",
            "range": "stddev: 0.0001369159455191972",
            "extra": "mean: 1.0763958223346983 msec\nrounds: 788"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1837.081257796863,
            "unit": "iter/sec",
            "range": "stddev: 0.00009215403485415556",
            "extra": "mean: 544.3417354326828 usec\nrounds: 858"
          }
        ]
      }
    ]
  }
}