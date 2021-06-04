window.BENCHMARK_DATA = {
  "lastUpdate": 1622840152110,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action",
            "username": "actions-user"
          },
          "distinct": true,
          "id": "b3762c5dc9734844ae057c8c6f5caf276522698b",
          "message": "Merge pull request #195 from TeoZosa/dependabot/pip/black-21.5b2\n\n⬆️ Bump black from 21.5b1 to 21.5b2\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@b0bd9d1",
          "timestamp": "2021-06-04T20:49:14Z",
          "tree_id": "54bc345224df1c1036d18f219612da5cdb1208e1",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/b3762c5dc9734844ae057c8c6f5caf276522698b"
        },
        "date": 1622840149949,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1117.6197526562887,
            "unit": "iter/sec",
            "range": "stddev: 0.00005639348016343758",
            "extra": "mean: 894.7587027012207 usec\nrounds: 555"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1630.238946871245,
            "unit": "iter/sec",
            "range": "stddev: 0.00004334409316274259",
            "extra": "mean: 613.4070112355004 usec\nrounds: 1513"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 11721.50639087534,
            "unit": "iter/sec",
            "range": "stddev: 0.0000064741883536390595",
            "extra": "mean: 85.31326662744087 usec\nrounds: 1669"
          }
        ]
      }
    ]
  }
}