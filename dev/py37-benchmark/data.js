window.BENCHMARK_DATA = {
  "lastUpdate": 1626442092868,
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
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "e58a45c3aff709e248dcda73de45964734f39dc0",
          "message": "Merge pull request #108 from TeoZosa/dependabot/github_actions/actions/setup-node-2.2.0",
          "timestamp": "2021-07-16T13:14:25Z",
          "tree_id": "76df9e1d66a5e2bd05da13dfcf3f8ab30fc35fd7"
        },
        "date": 1626442090949,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1187.5415650364118,
            "unit": "iter/sec",
            "range": "stddev: 0.000029580116012772466",
            "extra": "mean: 842.0757887066787 usec\nrounds: 549"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1700.0538872612483,
            "unit": "iter/sec",
            "range": "stddev: 0.000027109341504904448",
            "extra": "mean: 588.2166485975214 usec\nrounds: 1070"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13087.216335173467,
            "unit": "iter/sec",
            "range": "stddev: 0.000007775533796528852",
            "extra": "mean: 76.4104431675344 usec\nrounds: 1654"
          }
        ]
      }
    ]
  }
}