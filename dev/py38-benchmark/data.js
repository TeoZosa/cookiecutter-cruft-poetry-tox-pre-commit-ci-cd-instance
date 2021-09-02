window.BENCHMARK_DATA = {
  "lastUpdate": 1630623495600,
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
          "id": "a55d79da4c39957555827124f7b922b7c8f6d23d",
          "message": ":construction_worker: Specify test instance parameter: `adr_documentation_support`\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@ff874fe",
          "timestamp": "2021-09-02T22:48:13Z",
          "tree_id": "d343604245c67d541c72835894ed63df761b5250"
        },
        "date": 1630623493312,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 309.64453736043595,
            "unit": "iter/sec",
            "range": "stddev: 0.00002946241036953143",
            "extra": "mean: 3.22950958064527 msec\nrounds: 124"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 910.0683258049202,
            "unit": "iter/sec",
            "range": "stddev: 0.000018470288801211906",
            "extra": "mean: 1.0988185959724932 msec\nrounds: 745"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1877.360569751176,
            "unit": "iter/sec",
            "range": "stddev: 0.000015967608209237973",
            "extra": "mean: 532.6627266559344 usec\nrounds: 739"
          }
        ]
      }
    ]
  }
}