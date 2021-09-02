window.BENCHMARK_DATA = {
  "lastUpdate": 1630623477189,
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
        "date": 1630623474115,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 291.8010875003352,
            "unit": "iter/sec",
            "range": "stddev: 0.00031794652054031137",
            "extra": "mean: 3.4269920258568303 msec\nrounds: 116"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 866.0278367740727,
            "unit": "iter/sec",
            "range": "stddev: 0.0002100958956091298",
            "extra": "mean: 1.1546972944021863 msec\nrounds: 822"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1749.3611302374695,
            "unit": "iter/sec",
            "range": "stddev: 0.00015786894650940913",
            "extra": "mean: 571.6372581482095 usec\nrounds: 798"
          }
        ]
      }
    ]
  }
}