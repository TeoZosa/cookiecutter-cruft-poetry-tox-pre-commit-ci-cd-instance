window.BENCHMARK_DATA = {
  "lastUpdate": 1628359795668,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "3a4f3dbd3fd898071427b3ca60f461f3f1659f36",
          "message": "Merge pull request #262 from TeoZosa/dependabot/docker/{{cookiecutter.project_slug}}/python-c5f6086\n\n⬆️ Bump python from `5f8d373` to `c5f6086` in /{{cookiecutter.project_slug}}\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@0ecd354",
          "timestamp": "2021-08-07T18:01:29Z",
          "tree_id": "0a789dbbbb3c70dae7a3b719c373cef1f97b0465"
        },
        "date": 1628359793528,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1232.928050423613,
            "unit": "iter/sec",
            "range": "stddev: 0.00001644231422104698",
            "extra": "mean: 811.0773371215109 usec\nrounds: 528"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1770.8879182493827,
            "unit": "iter/sec",
            "range": "stddev: 0.000017787684356313932",
            "extra": "mean: 564.6884761563869 usec\nrounds: 1426"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13445.757552943389,
            "unit": "iter/sec",
            "range": "stddev: 0.000005449644369047831",
            "extra": "mean: 74.37290134545759 usec\nrounds: 1784"
          }
        ]
      }
    ]
  }
}