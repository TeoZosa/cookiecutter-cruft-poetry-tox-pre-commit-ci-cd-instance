window.BENCHMARK_DATA = {
  "lastUpdate": 1629250549566,
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
          "id": "9a96669f68427469f16061fe3f2e51cfcd3f8d33",
          "message": ":bulb: Remove deprecated comment\n\nSigned-off-by: Teo Zosa <teofilo@sonosim.com>\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@c411085",
          "timestamp": "2021-08-18T01:28:44Z",
          "tree_id": "a5e8875ba57d98a8cf00e55a98f640bf3e3733fa"
        },
        "date": 1629250547970,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 363.0521137770709,
            "unit": "iter/sec",
            "range": "stddev: 0.00003491533304610679",
            "extra": "mean: 2.7544254999546474 msec\nrounds: 140"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1060.8565077539024,
            "unit": "iter/sec",
            "range": "stddev: 0.00001442855583581279",
            "extra": "mean: 942.6345530153264 usec\nrounds: 962"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2192.3860581900794,
            "unit": "iter/sec",
            "range": "stddev: 0.000010350365850458844",
            "extra": "mean: 456.12404633951576 usec\nrounds: 820"
          }
        ]
      }
    ]
  }
}