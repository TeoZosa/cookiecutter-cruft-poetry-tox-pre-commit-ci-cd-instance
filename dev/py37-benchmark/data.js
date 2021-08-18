window.BENCHMARK_DATA = {
  "lastUpdate": 1629310983737,
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
        "date": 1629310980714,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 269.6487482987889,
            "unit": "iter/sec",
            "range": "stddev: 0.0004340890911724146",
            "extra": "mean: 3.7085282476146815 msec\nrounds: 105"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 786.1658482775011,
            "unit": "iter/sec",
            "range": "stddev: 0.0003388047398085905",
            "extra": "mean: 1.2719962361517128 msec\nrounds: 686"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1572.427558184927,
            "unit": "iter/sec",
            "range": "stddev: 0.0001253754998403275",
            "extra": "mean: 635.9593450233807 usec\nrounds: 684"
          }
        ]
      }
    ]
  }
}