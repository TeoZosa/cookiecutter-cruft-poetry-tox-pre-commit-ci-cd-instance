window.BENCHMARK_DATA = {
  "lastUpdate": 1621715008854,
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
          "id": "2ee90c3b91895f34bda7e49da07a7653c3ca9f6f",
          "message": ":memo: :cookie: Update project preamble\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@f047862",
          "timestamp": "2021-05-22T20:16:16Z",
          "tree_id": "091aff1dd75d3855bcaa682ff11b2b884ee605d0",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/2ee90c3b91895f34bda7e49da07a7653c3ca9f6f"
        },
        "date": 1621715007154,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 922.3263155387192,
            "unit": "iter/sec",
            "range": "stddev: 0.0001797596436158399",
            "extra": "mean: 1.0842149715916025 msec\nrounds: 528"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1289.7218609196027,
            "unit": "iter/sec",
            "range": "stddev: 0.00008170256756603665",
            "extra": "mean: 775.3609753400443 usec\nrounds: 1176"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8104.117115460481,
            "unit": "iter/sec",
            "range": "stddev: 0.00003145097666837364",
            "extra": "mean: 123.39407066221543 usec\nrounds: 1585"
          }
        ]
      }
    ]
  }
}