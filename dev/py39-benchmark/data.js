window.BENCHMARK_DATA = {
  "lastUpdate": 1629383612752,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "63e2f1babb0b1a7ea57c58aa8116add009bb46f9",
          "message": "Merge pull request #290 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/dot-github/workflows/tox-3.24.2\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@a026421",
          "timestamp": "2021-08-19T13:55:27Z",
          "tree_id": "de58abc5af22d16f8da05953ab7f23b3aa99c4d4"
        },
        "date": 1629383609291,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 429.2510764953227,
            "unit": "iter/sec",
            "range": "stddev: 0.0000557089794015626",
            "extra": "mean: 2.3296388867900633 msec\nrounds: 159"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1228.9744875266817,
            "unit": "iter/sec",
            "range": "stddev: 0.00002770559413816683",
            "extra": "mean: 813.68654121739 usec\nrounds: 1116"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2634.5727246417223,
            "unit": "iter/sec",
            "range": "stddev: 0.00001499658830864858",
            "extra": "mean: 379.56818980428443 usec\nrounds: 922"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "009cffcd74815d33cd5c09fde981824535493263",
          "message": "Merge pull request #172 from TeoZosa/dependabot/github_actions/crazy-max/ghaction-github-labeler-3.1.1",
          "timestamp": "2021-08-19T13:25:03Z",
          "tree_id": "ab0e483aff5580b13ea4a2c0e1f50a97d0a0e9e9"
        },
        "date": 1629383610797,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 373.97570929925865,
            "unit": "iter/sec",
            "range": "stddev: 0.000027130187622157356",
            "extra": "mean: 2.673970461540836 msec\nrounds: 143"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1059.2050658254714,
            "unit": "iter/sec",
            "range": "stddev: 0.00001807595711245321",
            "extra": "mean: 944.1042459711698 usec\nrounds: 931"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2292.466409406628,
            "unit": "iter/sec",
            "range": "stddev: 0.000010654128235108897",
            "extra": "mean: 436.21140789532257 usec\nrounds: 836"
          }
        ]
      }
    ]
  }
}