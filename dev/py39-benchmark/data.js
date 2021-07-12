window.BENCHMARK_DATA = {
  "lastUpdate": 1626119665574,
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
          "id": "41dfd547f3d16b1f7222468901b174db97125612",
          "message": "Merge pull request #91 from TeoZosa/dependabot/github_actions/actions/setup-node-2.2.0",
          "timestamp": "2021-07-12T19:46:44Z",
          "tree_id": "236df4809c03a0b143fd0919be1d09ba1c466389"
        },
        "date": 1626119663835,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1096.9853348794466,
            "unit": "iter/sec",
            "range": "stddev: 0.00030893032761750773",
            "extra": "mean: 911.5892147363076 usec\nrounds: 475"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1569.0915675965841,
            "unit": "iter/sec",
            "range": "stddev: 0.0002188616352330668",
            "extra": "mean: 637.3114358977306 usec\nrounds: 1443"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 11258.107345357002,
            "unit": "iter/sec",
            "range": "stddev: 0.000017427082323440028",
            "extra": "mean: 88.82487698186799 usec\nrounds: 2081"
          }
        ]
      }
    ]
  }
}