window.BENCHMARK_DATA = {
  "lastUpdate": 1622155628232,
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
          "id": "437be8200590bab78182694ebef8e5060babc661",
          "message": "Merge pull request #188 from TeoZosa/dependabot/docker/{{cookiecutter.project_slug}}/python-80b238b\n\n⬆️ Bump python from `e4b19f1` to `80b238b` in /{{cookiecutter.project_slug}}\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@471694d",
          "timestamp": "2021-05-27T22:40:17Z",
          "tree_id": "5c4466208ed3ff504c10be049f3591a122d037d9",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/437be8200590bab78182694ebef8e5060babc661"
        },
        "date": 1622155626335,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1066.642290175182,
            "unit": "iter/sec",
            "range": "stddev: 0.000018649412488693637",
            "extra": "mean: 937.5214251403469 usec\nrounds: 541"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1578.6739878940969,
            "unit": "iter/sec",
            "range": "stddev: 0.000018571630191381344",
            "extra": "mean: 633.4430082894884 usec\nrounds: 1327"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 12660.964782028692,
            "unit": "iter/sec",
            "range": "stddev: 0.000006583161832054021",
            "extra": "mean: 78.9829224878207 usec\nrounds: 1432"
          }
        ]
      }
    ]
  }
}