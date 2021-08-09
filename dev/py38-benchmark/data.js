window.BENCHMARK_DATA = {
  "lastUpdate": 1628536220640,
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
        "date": 1628536218544,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 366.4954690393481,
            "unit": "iter/sec",
            "range": "stddev: 0.000027688592936412978",
            "extra": "mean: 2.7285466928723117 msec\nrounds: 140"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1071.9329616882442,
            "unit": "iter/sec",
            "range": "stddev: 0.000013339546758429322",
            "extra": "mean: 932.8941601208409 usec\nrounds: 968"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2212.5388515303243,
            "unit": "iter/sec",
            "range": "stddev: 0.000009544194736970665",
            "extra": "mean: 451.9694645399515 usec\nrounds: 818"
          }
        ]
      }
    ]
  }
}