window.BENCHMARK_DATA = {
  "lastUpdate": 1612203664116,
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
          "id": "920d21140c781698580f0d4fa5814386d1792ba1",
          "message": ":memo: Add link to local `icontract` benchmarks\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@f4a97d4",
          "timestamp": "2021-02-01T18:16:28Z",
          "tree_id": "81984a4d20b329926b9090248c08155012eacdf0",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/920d21140c781698580f0d4fa5814386d1792ba1"
        },
        "date": 1612203663073,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 989.1891602690824,
            "unit": "iter/sec",
            "range": "stddev: 0.00015207533529255584",
            "extra": "mean: 1.0109289913043293 msec\nrounds: 460"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1357.0358459017555,
            "unit": "iter/sec",
            "range": "stddev: 0.00017625761379003491",
            "extra": "mean: 736.9002101307768 usec\nrounds: 1066"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 9130.370491387228,
            "unit": "iter/sec",
            "range": "stddev: 0.00004155617909277769",
            "extra": "mean: 109.52458073232737 usec\nrounds: 1858"
          }
        ]
      }
    ]
  }
}