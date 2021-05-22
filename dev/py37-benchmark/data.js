window.BENCHMARK_DATA = {
  "lastUpdate": 1621708527040,
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
          "id": "650e9ed0740dbdc7330ab8e14e909bab5c2af4ef",
          "message": ":memo: :cookie: Add new feature documentation\n\nSee Also:\n    - #168\n    - #172\n    - #173\n    - #175\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@a7f05ee",
          "timestamp": "2021-05-22T18:29:07Z",
          "tree_id": "8bd4c3d932afc0af2fbaa9da96192eff0cd1bd48",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/650e9ed0740dbdc7330ab8e14e909bab5c2af4ef"
        },
        "date": 1621708525820,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1039.4841783627253,
            "unit": "iter/sec",
            "range": "stddev: 0.00012272445146152905",
            "extra": "mean: 962.0156042923941 usec\nrounds: 513"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1381.7758194033997,
            "unit": "iter/sec",
            "range": "stddev: 0.00013671531274555385",
            "extra": "mean: 723.7063972010767 usec\nrounds: 1143"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8877.87798775459,
            "unit": "iter/sec",
            "range": "stddev: 0.00003860976914465789",
            "extra": "mean: 112.63952955642299 usec\nrounds: 1911"
          }
        ]
      }
    ]
  }
}