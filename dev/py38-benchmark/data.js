window.BENCHMARK_DATA = {
  "lastUpdate": 1629311017740,
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
          "id": "5ea17f583e3988f98b02fcefd8354a7e7f89f352",
          "message": ":construction_worker: Rename `make` target `build` to `package`\n\n`package` is a better mnemonic due to being both more accurate and\nspecific; while `build` is more commonly used, it's inter-project\nvariance makes it ambiguous and potentially misleading.\n\nSigned-off-by: Teo Zosa <teofilo@sonosim.com>\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@fedce25",
          "timestamp": "2021-08-18T18:14:21Z",
          "tree_id": "91b2eba60a4db9363e681f93a42734315f6226a3"
        },
        "date": 1629311015098,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 298.212582693589,
            "unit": "iter/sec",
            "range": "stddev: 0.000042793063903934094",
            "extra": "mean: 3.3533125630298835 msec\nrounds: 119"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 867.0134390030212,
            "unit": "iter/sec",
            "range": "stddev: 0.0002669657996306991",
            "extra": "mean: 1.153384659354185 msec\nrounds: 775"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1792.3115237516488,
            "unit": "iter/sec",
            "range": "stddev: 0.000013379002507935798",
            "extra": "mean: 557.9387214488304 usec\nrounds: 718"
          }
        ]
      }
    ]
  }
}