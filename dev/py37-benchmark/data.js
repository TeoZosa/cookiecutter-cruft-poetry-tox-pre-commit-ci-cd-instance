window.BENCHMARK_DATA = {
  "lastUpdate": 1622155665478,
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
        "date": 1622155663338,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 952.8330077394326,
            "unit": "iter/sec",
            "range": "stddev: 0.0002729475912812826",
            "extra": "mean: 1.0495018454203948 msec\nrounds: 524"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1376.4024059420958,
            "unit": "iter/sec",
            "range": "stddev: 0.00021206429159887643",
            "extra": "mean: 726.5317146227578 usec\nrounds: 1272"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 10918.999275940267,
            "unit": "iter/sec",
            "range": "stddev: 0.00003880194619320219",
            "extra": "mean: 91.58348441358305 usec\nrounds: 1604"
          }
        ]
      }
    ]
  }
}