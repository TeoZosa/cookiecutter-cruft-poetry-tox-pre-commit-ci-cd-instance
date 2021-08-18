window.BENCHMARK_DATA = {
  "lastUpdate": 1629250736132,
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
          "id": "9a96669f68427469f16061fe3f2e51cfcd3f8d33",
          "message": ":bulb: Remove deprecated comment\n\nSigned-off-by: Teo Zosa <teofilo@sonosim.com>\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@c411085",
          "timestamp": "2021-08-18T01:28:44Z",
          "tree_id": "a5e8875ba57d98a8cf00e55a98f640bf3e3733fa"
        },
        "date": 1629250733860,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 240.11025330280748,
            "unit": "iter/sec",
            "range": "stddev: 0.0008080632678149902",
            "extra": "mean: 4.164753425747636 msec\nrounds: 101"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 722.4233210663907,
            "unit": "iter/sec",
            "range": "stddev: 0.000531396000853915",
            "extra": "mean: 1.3842299533241398 msec\nrounds: 707"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1379.4576607453748,
            "unit": "iter/sec",
            "range": "stddev: 0.0006446955448188855",
            "extra": "mean: 724.9225753399788 usec\nrounds: 584"
          }
        ]
      }
    ]
  }
}