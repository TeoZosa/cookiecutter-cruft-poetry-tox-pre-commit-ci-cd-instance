window.BENCHMARK_DATA = {
  "lastUpdate": 1628455881719,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "f0ada6eb5c02972105c38eefd6057005c84f7302",
          "message": "Merge pull request #274 from TeoZosa/add-rich-text-support-to-console-output\n\n💄🔊Add Rich Text Support to Console Output\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@092bbf3",
          "timestamp": "2021-08-08T20:43:26Z",
          "tree_id": "aa8291ac7674d2af25927006c8431e4c9916e15d"
        },
        "date": 1628455879858,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 374.53791351944875,
            "unit": "iter/sec",
            "range": "stddev: 0.00002302834691210317",
            "extra": "mean: 2.6699566690144243 msec\nrounds: 142"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1068.44427928,
            "unit": "iter/sec",
            "range": "stddev: 0.000012867912052397553",
            "extra": "mean: 935.9402445150222 usec\nrounds: 957"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2285.2623405653303,
            "unit": "iter/sec",
            "range": "stddev: 0.0000098737656398856",
            "extra": "mean: 437.58652223386264 usec\nrounds: 787"
          }
        ]
      }
    ]
  }
}