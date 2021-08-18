window.BENCHMARK_DATA = {
  "lastUpdate": 1629310916421,
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
        "date": 1629310914570,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 335.9110784739453,
            "unit": "iter/sec",
            "range": "stddev: 0.00011482330774480449",
            "extra": "mean: 2.9769783257611864 msec\nrounds: 132"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 945.3595322415825,
            "unit": "iter/sec",
            "range": "stddev: 0.000059169979949168173",
            "extra": "mean: 1.0577986108934208 msec\nrounds: 771"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2052.236172886025,
            "unit": "iter/sec",
            "range": "stddev: 0.00003559673023474881",
            "extra": "mean: 487.27335245909677 usec\nrounds: 732"
          }
        ]
      }
    ]
  }
}