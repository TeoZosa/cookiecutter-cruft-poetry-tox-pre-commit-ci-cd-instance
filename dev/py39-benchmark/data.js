window.BENCHMARK_DATA = {
  "lastUpdate": 1629265310287,
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
          "id": "ca19c77809b2a7ebc750e283777e6dce1cf39381",
          "message": "Merge pull request #281 from TeoZosa/dependabot/docker/{{cookiecutter.project_slug}}/python-182f0ef\n\n⬆️ Bump python from `74f44a8` to `182f0ef` in /{{cookiecutter.project_slug}}\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@c20998b",
          "timestamp": "2021-08-18T05:32:45Z",
          "tree_id": "f9de06dbc11c95d29d4e028b2eea2fb98f5204f9"
        },
        "date": 1629265308617,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 313.51101232362583,
            "unit": "iter/sec",
            "range": "stddev: 0.00040937978542448616",
            "extra": "mean: 3.1896806194729037 msec\nrounds: 113"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 838.1571296961612,
            "unit": "iter/sec",
            "range": "stddev: 0.0002877130902673575",
            "extra": "mean: 1.1930937106775052 msec\nrounds: 871"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1770.1422254244537,
            "unit": "iter/sec",
            "range": "stddev: 0.00015739650579705316",
            "extra": "mean: 564.9263576886964 usec\nrounds: 260"
          }
        ]
      }
    ]
  }
}