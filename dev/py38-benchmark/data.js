window.BENCHMARK_DATA = {
  "lastUpdate": 1621714956341,
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
        "date": 1621714955085,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1086.869323658544,
            "unit": "iter/sec",
            "range": "stddev: 0.000027608221445492637",
            "extra": "mean: 920.0738103766416 usec\nrounds: 559"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1599.3233624606046,
            "unit": "iter/sec",
            "range": "stddev: 0.000025655357518019727",
            "extra": "mean: 625.2644233630599 usec\nrounds: 1344"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 11796.496594503178,
            "unit": "iter/sec",
            "range": "stddev: 0.00000567397855744549",
            "extra": "mean: 84.77093109711664 usec\nrounds: 1698"
          }
        ]
      }
    ]
  }
}