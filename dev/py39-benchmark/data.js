window.BENCHMARK_DATA = {
  "lastUpdate": 1628359893136,
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
        "date": 1628359890254,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1077.2275591429834,
            "unit": "iter/sec",
            "range": "stddev: 0.000040742052948114945",
            "extra": "mean: 928.3089645381671 usec\nrounds: 564"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1648.9529633623858,
            "unit": "iter/sec",
            "range": "stddev: 0.00005085518694510976",
            "extra": "mean: 606.445436721795 usec\nrounds: 1367"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 12996.845543402907,
            "unit": "iter/sec",
            "range": "stddev: 0.0000070172348868814945",
            "extra": "mean: 76.94174687700215 usec\nrounds: 1841"
          }
        ]
      }
    ]
  }
}