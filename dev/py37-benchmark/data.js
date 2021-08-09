window.BENCHMARK_DATA = {
  "lastUpdate": 1628533703420,
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
        "date": 1628533699009,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 352.73349572139296,
            "unit": "iter/sec",
            "range": "stddev: 0.00006714103044656215",
            "extra": "mean: 2.8350015298514535 msec\nrounds: 134"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1029.3132615051315,
            "unit": "iter/sec",
            "range": "stddev: 0.000015592183236639738",
            "extra": "mean: 971.521535181362 usec\nrounds: 938"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2145.4873303415366,
            "unit": "iter/sec",
            "range": "stddev: 0.000011026222093158379",
            "extra": "mean: 466.09457248149386 usec\nrounds: 814"
          }
        ]
      }
    ]
  }
}