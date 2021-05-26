window.BENCHMARK_DATA = {
  "lastUpdate": 1622046764472,
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
          "id": "34f95a8173789e00f000f222cf25e77a417a0a11",
          "message": ":construction_worker: Add explicit upper limit for `docs` dependency update PRs\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@328aa9c",
          "timestamp": "2021-05-26T16:25:15Z",
          "tree_id": "4da4f34a2a4f8ad2a611c84526ffc7559fcba7b9",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/34f95a8173789e00f000f222cf25e77a417a0a11"
        },
        "date": 1622046762255,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 920.7998498896478,
            "unit": "iter/sec",
            "range": "stddev: 0.0002008395933298074",
            "extra": "mean: 1.0860123403797728 msec\nrounds: 473"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1275.2957684555263,
            "unit": "iter/sec",
            "range": "stddev: 0.00019121522087635164",
            "extra": "mean: 784.1318263065132 usec\nrounds: 1186"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 7711.397159643874,
            "unit": "iter/sec",
            "range": "stddev: 0.0001760451212892278",
            "extra": "mean: 129.67818662398938 usec\nrounds: 1570"
          }
        ]
      }
    ]
  }
}