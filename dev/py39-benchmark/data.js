window.BENCHMARK_DATA = {
  "lastUpdate": 1622840119726,
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
        "date": 1622840117800,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 973.3726219457768,
            "unit": "iter/sec",
            "range": "stddev: 0.00019239243272702218",
            "extra": "mean: 1.027355791044333 msec\nrounds: 536"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1452.9422846483192,
            "unit": "iter/sec",
            "range": "stddev: 0.00012842456010065482",
            "extra": "mean: 688.2585843676834 usec\nrounds: 1369"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 10071.666475400412,
            "unit": "iter/sec",
            "range": "stddev: 0.000029754435060833974",
            "extra": "mean: 99.2884347831071 usec\nrounds: 2070"
          }
        ]
      }
    ]
  }
}