window.BENCHMARK_DATA = {
  "lastUpdate": 1612149918700,
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
          "id": "71722b9d47505c76b486b8abb39118ab7955601e",
          "message": ":sparkles: Add `icontract` benchmarks\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@99e2e17",
          "timestamp": "2021-02-01T03:20:33Z",
          "tree_id": "46eb1296ff38cf6aa85d12d8dd17a5085e790a6c",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/71722b9d47505c76b486b8abb39118ab7955601e"
        },
        "date": 1612149917958,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 939.4648312142604,
            "unit": "iter/sec",
            "range": "stddev: 0.00017946521417856924",
            "extra": "mean: 1.0644358008670722 msec\nrounds: 462"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1260.1575245222007,
            "unit": "iter/sec",
            "range": "stddev: 0.00036990346722990487",
            "extra": "mean: 793.5515842586095 usec\nrounds: 1080"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8302.640890833196,
            "unit": "iter/sec",
            "range": "stddev: 0.00017568135416137553",
            "extra": "mean: 120.44360501055549 usec\nrounds: 1676"
          }
        ]
      }
    ]
  }
}