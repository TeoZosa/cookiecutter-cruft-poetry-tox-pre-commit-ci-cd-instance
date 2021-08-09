window.BENCHMARK_DATA = {
  "lastUpdate": 1628536297889,
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
          "id": "80e16a504c9ffabf47d1becf7ddb40182f188d41",
          "message": ":recycle: Tightly couple env var with sole corresponding target (`test`)\n\nSince `TOX_PARALLEL_NO_SPINNER` is only relevant to tox invocations that\n use the `-p`/`--parallel`, removing this environment variable from the\nglobal scope and tightly coupling it to the `test` target (the only\ndependent target) explicitly communicates that this is the only place\nwhere this variable is used. In other words, it removes any confusion\naround if `TOX_PARALLEL_NO_SPINNER` affects the behavior of any other\ntargets.\n\nSigned-off-by: Teo Zosa <teofilo@sonosim.com>\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@3c63c3d",
          "timestamp": "2021-08-09T19:03:17Z",
          "tree_id": "eb7825fff3e6b4101d8368f19c7019daf05acc59"
        },
        "date": 1628536295054,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 328.3952207180803,
            "unit": "iter/sec",
            "range": "stddev: 0.00007346772576207184",
            "extra": "mean: 3.0451113076900618 msec\nrounds: 130"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 914.9261271235271,
            "unit": "iter/sec",
            "range": "stddev: 0.000034310432109410985",
            "extra": "mean: 1.092984417380166 msec\nrounds: 817"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2028.2625255845617,
            "unit": "iter/sec",
            "range": "stddev: 0.000023565882880823543",
            "extra": "mean: 493.0328236044257 usec\nrounds: 788"
          }
        ]
      }
    ]
  }
}