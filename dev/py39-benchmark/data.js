window.BENCHMARK_DATA = {
  "lastUpdate": 1628525184579,
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
          "id": "c5eec3ee066bd5d272c3f8e40cddc627a0d68a67",
          "message": "Merge pull request #279 from TeoZosa/dependabot/pip/xdoctest-0.15.6\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@583bd6d",
          "timestamp": "2021-08-09T14:38:20Z",
          "tree_id": "a279f11385946797c7bcc1a2c68450edb94ff8f0"
        },
        "date": 1628525182104,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 293.14061508541016,
            "unit": "iter/sec",
            "range": "stddev: 0.00030055439223608413",
            "extra": "mean: 3.4113321339270493 msec\nrounds: 112"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 816.9423339438631,
            "unit": "iter/sec",
            "range": "stddev: 0.00023289808196343768",
            "extra": "mean: 1.224076606695615 msec\nrounds: 717"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1789.6146792754294,
            "unit": "iter/sec",
            "range": "stddev: 0.00010902223306862018",
            "extra": "mean: 558.7795024149418 usec\nrounds: 828"
          }
        ]
      }
    ]
  }
}