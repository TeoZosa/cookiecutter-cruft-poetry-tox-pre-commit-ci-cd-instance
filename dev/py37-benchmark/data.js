window.BENCHMARK_DATA = {
  "lastUpdate": 1631337094665,
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
        "date": 1631337092190,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 354.1834392792368,
            "unit": "iter/sec",
            "range": "stddev: 0.00003097595390542695",
            "extra": "mean: 2.8233957014901647 msec\nrounds: 134"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1028.1979338190683,
            "unit": "iter/sec",
            "range": "stddev: 0.000014514890260862815",
            "extra": "mean: 972.5753836964719 usec\nrounds: 920"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2126.3732848113555,
            "unit": "iter/sec",
            "range": "stddev: 0.00001349228624934188",
            "extra": "mean: 470.28431326850335 usec\nrounds: 814"
          }
        ]
      }
    ]
  }
}