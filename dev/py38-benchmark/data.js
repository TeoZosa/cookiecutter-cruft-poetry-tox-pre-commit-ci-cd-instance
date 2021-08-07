window.BENCHMARK_DATA = {
  "lastUpdate": 1628359833240,
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
        "date": 1628359830586,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1244.7539919043234,
            "unit": "iter/sec",
            "range": "stddev: 0.00008749786820866121",
            "extra": "mean: 803.3715951134413 usec\nrounds: 573"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1838.7377166785986,
            "unit": "iter/sec",
            "range": "stddev: 0.00006429407684470371",
            "extra": "mean: 543.8513557041451 usec\nrounds: 1341"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13800.6299954123,
            "unit": "iter/sec",
            "range": "stddev: 0.00001117311686319533",
            "extra": "mean: 72.46046016250176 usec\nrounds: 1732"
          }
        ]
      }
    ]
  }
}