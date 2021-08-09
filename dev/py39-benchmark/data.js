window.BENCHMARK_DATA = {
  "lastUpdate": 1628533869446,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "a907a81dc3b60ae015b43efb403abd65be616544",
          "message": ":pushpin: Pin `actions/checkout` version in `auto-merge` job\n\nSigned-off-by: Teo Zosa <teofilo@sonosim.com>\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@6fcea7e",
          "timestamp": "2021-08-09T18:19:28Z",
          "tree_id": "35f6443b1f0923f5a67de433754dc13b67cb37ff"
        },
        "date": 1628533862880,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 321.84569908720306,
            "unit": "iter/sec",
            "range": "stddev: 0.00012211239833045132",
            "extra": "mean: 3.107078959998944 msec\nrounds: 125"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 925.3254467333271,
            "unit": "iter/sec",
            "range": "stddev: 0.00006565678432452842",
            "extra": "mean: 1.0807008534459916 msec\nrounds: 928"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1993.9301170810907,
            "unit": "iter/sec",
            "range": "stddev: 0.00003489453918231614",
            "extra": "mean: 501.5220901843328 usec\nrounds: 754"
          }
        ]
      }
    ]
  }
}