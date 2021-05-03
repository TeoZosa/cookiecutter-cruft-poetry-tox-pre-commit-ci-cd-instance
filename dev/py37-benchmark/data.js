window.BENCHMARK_DATA = {
  "lastUpdate": 1620060299796,
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
          "id": "cc43e982dff6c08de912c76a4cfae76f97549e80",
          "message": ":construction_worker: Include minor versions in Dependabot PR auto-merging\n\nFor `cookiecutter` template.\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@0acfe6b",
          "timestamp": "2021-05-03T16:40:06Z",
          "tree_id": "b55aaf15d9944cb569358ad8e036480d287306a3",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/cc43e982dff6c08de912c76a4cfae76f97549e80"
        },
        "date": 1620060298179,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 880.1243967815648,
            "unit": "iter/sec",
            "range": "stddev: 0.00021595429109772803",
            "extra": "mean: 1.1362030227281459 msec\nrounds: 440"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1243.8516334696073,
            "unit": "iter/sec",
            "range": "stddev: 0.0001263109642651835",
            "extra": "mean: 803.9544050849487 usec\nrounds: 1180"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8182.151434814673,
            "unit": "iter/sec",
            "range": "stddev: 0.000037338161098422255",
            "extra": "mean: 122.21724420120685 usec\nrounds: 1552"
          }
        ]
      }
    ]
  }
}