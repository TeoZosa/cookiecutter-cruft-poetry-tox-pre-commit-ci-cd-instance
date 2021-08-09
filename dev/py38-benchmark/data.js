window.BENCHMARK_DATA = {
  "lastUpdate": 1628533726192,
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
        "date": 1628533723299,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 311.4807498939443,
            "unit": "iter/sec",
            "range": "stddev: 0.00003313221227313034",
            "extra": "mean: 3.210471274197487 msec\nrounds: 124"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 911.7356542298072,
            "unit": "iter/sec",
            "range": "stddev: 0.00002541288531426092",
            "extra": "mean: 1.0968091412907994 msec\nrounds: 821"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1870.7243735457112,
            "unit": "iter/sec",
            "range": "stddev: 0.000015154230565525413",
            "extra": "mean: 534.5522911558757 usec\nrounds: 735"
          }
        ]
      }
    ]
  }
}