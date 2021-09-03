window.BENCHMARK_DATA = {
  "lastUpdate": 1630646346220,
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
          "id": "1fd369b182f343015a3eced9e7674877ea42eb5e",
          "message": ":boom: Conditionally exclude ADR management configurations\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@3d5795b",
          "timestamp": "2021-09-03T05:08:10Z",
          "tree_id": "b609f3e1a5eac745696151911299c47232d3fd15"
        },
        "date": 1630646343828,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 280.4331022849849,
            "unit": "iter/sec",
            "range": "stddev: 0.0002015483127151735",
            "extra": "mean: 3.565912839290166 msec\nrounds: 112"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 796.7638161176354,
            "unit": "iter/sec",
            "range": "stddev: 0.00012257478117793071",
            "extra": "mean: 1.255077075252572 msec\nrounds: 691"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1609.7964744050385,
            "unit": "iter/sec",
            "range": "stddev: 0.00008754203726489126",
            "extra": "mean: 621.1965399971373 usec\nrounds: 700"
          }
        ]
      }
    ]
  }
}