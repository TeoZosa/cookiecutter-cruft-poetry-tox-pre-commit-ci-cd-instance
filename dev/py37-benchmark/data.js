window.BENCHMARK_DATA = {
  "lastUpdate": 1622048777161,
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
          "id": "3b69ae38472bfb21be63adff92daadc7b8547c36",
          "message": "Merge pull request #183 from TeoZosa/dependabot/docker/{{cookiecutter.project_slug}}/python-e4b19f1\n\n⬆️ Bump python from `7783d80` to `e4b19f1` in /{{cookiecutter.project_slug}}\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@6fed3de",
          "timestamp": "2021-05-26T17:00:27Z",
          "tree_id": "fbd4703264a674849d9685bc15160fd09c54c1db",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/3b69ae38472bfb21be63adff92daadc7b8547c36"
        },
        "date": 1622048775682,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1216.9501416578064,
            "unit": "iter/sec",
            "range": "stddev: 0.000014123100865020964",
            "extra": "mean: 821.7263516134989 usec\nrounds: 620"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1720.8887801125604,
            "unit": "iter/sec",
            "range": "stddev: 0.000020384819864766504",
            "extra": "mean: 581.0950780529766 usec\nrounds: 1499"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13364.65182784477,
            "unit": "iter/sec",
            "range": "stddev: 0.0000046775600600458485",
            "extra": "mean: 74.82424629398396 usec\nrounds: 1888"
          }
        ]
      }
    ]
  }
}