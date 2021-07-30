window.BENCHMARK_DATA = {
  "lastUpdate": 1627651987479,
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
        "date": 1627651985051,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1236.4302104722974,
            "unit": "iter/sec",
            "range": "stddev: 0.00001869045334339696",
            "extra": "mean: 808.7799792743784 usec\nrounds: 579"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1807.8416305215237,
            "unit": "iter/sec",
            "range": "stddev: 0.00002001595573245064",
            "extra": "mean: 553.1457972408353 usec\nrounds: 1450"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 14519.132638125815,
            "unit": "iter/sec",
            "range": "stddev: 0.00000404803307671455",
            "extra": "mean: 68.87463768834911 usec\nrounds: 1852"
          }
        ]
      }
    ]
  }
}