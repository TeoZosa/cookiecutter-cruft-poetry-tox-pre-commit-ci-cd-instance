window.BENCHMARK_DATA = {
  "lastUpdate": 1621709887662,
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
          "id": "025e016fc528333f665aab6a60d4e39396c7fe19",
          "message": ":memo: :cookie: Add new feature documentation\n\nSee Also:\n    - #168\n    - #172\n    - #173\n    - #175\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@608cd89",
          "timestamp": "2021-05-22T18:52:40Z",
          "tree_id": "7732d3ddd317f806b529bfb054dd197afedef9f7",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/025e016fc528333f665aab6a60d4e39396c7fe19"
        },
        "date": 1621709886533,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1248.368378025418,
            "unit": "iter/sec",
            "range": "stddev: 0.00010064176066971586",
            "extra": "mean: 801.0456028866498 usec\nrounds: 554"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1965.2859860365354,
            "unit": "iter/sec",
            "range": "stddev: 0.00007409413175728805",
            "extra": "mean: 508.8317970539935 usec\nrounds: 1833"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 15506.500037278385,
            "unit": "iter/sec",
            "range": "stddev: 0.000011640223393419801",
            "extra": "mean: 64.4890850672912 usec\nrounds: 2163"
          }
        ]
      }
    ]
  }
}