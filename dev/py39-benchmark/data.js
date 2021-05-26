window.BENCHMARK_DATA = {
  "lastUpdate": 1622048739341,
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
        "date": 1622048737964,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1388.4076904920053,
            "unit": "iter/sec",
            "range": "stddev: 0.00008797937378814011",
            "extra": "mean: 720.2495397051808 usec\nrounds: 680"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 2055.5596815851522,
            "unit": "iter/sec",
            "range": "stddev: 0.00006521260490664809",
            "extra": "mean: 486.48550998472905 usec\nrounds: 1853"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 16813.328306451458,
            "unit": "iter/sec",
            "range": "stddev: 0.00000957673760703618",
            "extra": "mean: 59.47662365079073 usec\nrounds: 2131"
          }
        ]
      }
    ]
  }
}