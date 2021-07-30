window.BENCHMARK_DATA = {
  "lastUpdate": 1627651975077,
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
          "id": "b17fc00b46f0091efb746d6d9ac859207bb43dc3",
          "message": "Merge pull request #141 from TeoZosa/dependabot/github_actions/actions/setup-node-2.3.0",
          "timestamp": "2021-07-30T13:13:57Z",
          "tree_id": "23af09956b6814b080ccbef718583333451d854b"
        },
        "date": 1627651973228,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1282.3278311982879,
            "unit": "iter/sec",
            "range": "stddev: 0.000016471765485782463",
            "extra": "mean: 779.8317837846014 usec\nrounds: 592"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1892.3996962838698,
            "unit": "iter/sec",
            "range": "stddev: 0.000015112793121900904",
            "extra": "mean: 528.4295923127198 usec\nrounds: 1587"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13689.68296419629,
            "unit": "iter/sec",
            "range": "stddev: 0.000004379492183487164",
            "extra": "mean: 73.04771064570151 usec\nrounds: 1766"
          }
        ]
      }
    ]
  }
}