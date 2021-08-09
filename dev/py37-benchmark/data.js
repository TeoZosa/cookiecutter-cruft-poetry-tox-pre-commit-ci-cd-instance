window.BENCHMARK_DATA = {
  "lastUpdate": 1628536195860,
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
        "date": 1628536193914,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 356.3222453518069,
            "unit": "iter/sec",
            "range": "stddev: 0.000025249244538462083",
            "extra": "mean: 2.806448413044412 msec\nrounds: 138"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1032.6383848376533,
            "unit": "iter/sec",
            "range": "stddev: 0.000017801963743669593",
            "extra": "mean: 968.3932097461353 usec\nrounds: 944"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2142.2881971384763,
            "unit": "iter/sec",
            "range": "stddev: 0.000010799345212410564",
            "extra": "mean: 466.7906033071238 usec\nrounds: 847"
          }
        ]
      }
    ]
  }
}