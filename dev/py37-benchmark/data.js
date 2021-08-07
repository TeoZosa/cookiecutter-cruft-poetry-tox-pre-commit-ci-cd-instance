window.BENCHMARK_DATA = {
  "lastUpdate": 1628313762036,
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
          "id": "77a2f03ddfdd0cd713c6b3e8cffa4cb5f2e245cc",
          "message": "Merge pull request #273 from TeoZosa/migrate-packaging-from-pure-python-to-mypyc-compiled-platform-specific-packages\n\n📦⚡️Compile Package Modules as C-Extensions via Mypyc\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@1d32e0f",
          "timestamp": "2021-08-07T05:14:34Z",
          "tree_id": "24a8663a507daca269767d6c6c38391aa1494f64"
        },
        "date": 1628313759821,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 964.5389792133707,
            "unit": "iter/sec",
            "range": "stddev: 0.00011676492776654201",
            "extra": "mean: 1.036764735848778 msec\nrounds: 530"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1309.2570209847825,
            "unit": "iter/sec",
            "range": "stddev: 0.000287103672752128",
            "extra": "mean: 763.7919705390093 usec\nrounds: 1222"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8736.56604196843,
            "unit": "iter/sec",
            "range": "stddev: 0.00002355520957927781",
            "extra": "mean: 114.461448033041 usec\nrounds: 1703"
          }
        ]
      }
    ]
  }
}